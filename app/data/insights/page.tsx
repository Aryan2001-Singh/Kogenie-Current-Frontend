"use client";

export const dynamic = "force-dynamic";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Head from "next/head";
import dynamicImport from "next/dynamic";

const ExportInsightsButton = dynamicImport(
  () => import("@/components/createAd/ExportInsightsButton"),
  { ssr: false }
);

// ⬇️ Import the new custom chart
import ManualVsScrapedChart from "@/components/charts/ManualVsScrapedChart";
import AvgFeedbackRatingChart from "@/components/charts/AvgFeedbackRatingChart";
import FeedbackDistributionChart from "@/components/charts/FeedbackDistributionChart";
import AdsPerUserChart from "@/components/charts/AdsPerUserChart";
import TopAdsSection from "@/components/charts/TopAdsSection";
import MonthlyAdGrowthChart from "@/components/charts/MonthlyAdGrowthChart";
import MonthlyUserGrowthChart from "@/components/charts/MonthlyUserGrowthChart";

import {
  fetchTopPerforming,
  fetchAvgFeedback,
  fetchAdTypeBreakdown,
  fetchTotalAdsPerUser,
  fetchFeedbackDistribution,
  fetchMonthlyUserGrowth,
  fetchMonthlyAdGrowth,
} from "@/services/api";

interface FeedbackDistItem {
  rating: number;
  manual: number;
  scraped: number;
}

interface UserAdCount {
  _id: string;
  totalAds: number;
}

interface TopAd {
  headline: string;
  adCopy: string;
  feedback?: {
    rating?: number;
  };
}

export default function InsightsPage() {
  const { user, isLoaded } = useUser();
  const [topAds, setTopAds] = useState<TopAd[]>([]);
  const [adBreakdown, setAdBreakdown] = useState({ manual: 0, scraped: 0 });
  const [feedback, setFeedback] = useState({ manual: 0, scraped: 0 });
  const [adsPerUser, setAdsPerUser] = useState<UserAdCount[]>([]);
  const [feedbackDist, setFeedbackDist] = useState<FeedbackDistItem[]>([]);
  const [userGrowth, setUserGrowth] = useState([]);
  const [adGrowth, setAdGrowth] = useState([]);
  const totalAds = adBreakdown.manual + adBreakdown.scraped;

  useEffect(() => {
    const loadExtraGrowth = async () => {
      const [users, ads] = await Promise.all([
        fetchMonthlyUserGrowth(),
        fetchMonthlyAdGrowth(),
      ]);
      setUserGrowth(users);
      setAdGrowth(ads);
    };
    if (isLoaded) loadExtraGrowth();
  }, [isLoaded]);

  useEffect(() => {
    const loadInsights = async () => {
      const [top, avg, breakdown, perUser, distribution] = await Promise.all([
        fetchTopPerforming(),
        fetchAvgFeedback(),
        fetchAdTypeBreakdown(),
        fetchTotalAdsPerUser(),
        fetchFeedbackDistribution(),
      ]);

      setTopAds([...top.manual, ...top.scraped]);
      setFeedback(avg);
      setAdBreakdown(breakdown);
      setAdsPerUser(perUser);
      setFeedbackDist(distribution);
    };

    if (isLoaded) loadInsights();
  }, [isLoaded]);

  const pieData = [
    { name: "Manual", value: adBreakdown.manual },
    { name: "Scraped", value: adBreakdown.scraped },
  ];

  const barRatingData = [
    { name: "Manual", rating: feedback.manual },
    { name: "Scraped", rating: feedback.scraped },
  ];

  const adsPerUserData = adsPerUser.map((u) => ({
    email: u._id,
    totalAds: u.totalAds,
  }));

  if (!isLoaded) return <div className="p-6">Loading...</div>;

  if (user?.publicMetadata?.role !== "admin") {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <div className="p-10 text-center text-gray-600">
          <h2 className="text-2xl font-bold mb-2">🔒 Access Restricted</h2>
          <p>You must be an admin to view this dashboard.</p>
        </div>
      </>
    );
  }

  return (
    <div className="bg-[#f9fafb] min-h-screen px-6 py-8 space-y-6">
      <div className="flex justify-between items-center sticky top-0 z-50 bg-[#f9fafb] py-4 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-700 flex items-center gap-2">
          📊 Admin Insights
        </h1>
        <ExportInsightsButton />
      </div>

      <div id="insights-dashboard" className="space-y-8">
        {/* ✅ Replaced the old pie chart with the new styled component */}
        <ManualVsScrapedChart data={pieData} total={totalAds} />
        <AvgFeedbackRatingChart data={barRatingData} />

        <FeedbackDistributionChart data={feedbackDist} />

        <AdsPerUserChart data={adsPerUserData} />

        <TopAdsSection ads={topAds} />

        <MonthlyUserGrowthChart data={userGrowth} />
        <MonthlyAdGrowthChart data={adGrowth} />
      </div>
    </div>
  );
}
