"use client";

export const dynamic = "force-dynamic";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dynamicImport from "next/dynamic";

const ExportInsightsButton = dynamicImport(
  () => import("@/components/createAd/ExportInsightsButton"),
  { ssr: false }
);

// ✅ Modular chart components
import ManualVsScrapedChart from "@/components/charts/ManualVsScrapedChart";
import AvgFeedbackRatingChart from "@/components/charts/AvgFeedbackRatingChart";
import FeedbackDistributionChart from "@/components/charts/FeedbackDistributionChart";
import AdsPerUserChart from "@/components/charts/AdsPerUserChart";
import MonthlyUserGrowthChart from "@/components/charts/MonthlyUserGrowthChart";
import MonthlyAdGrowthChart from "@/components/charts/MonthlyAdGrowthChart";

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
  const router = useRouter();

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
    if (isLoaded && user?.publicMetadata?.role !== "admin") {
      router.push("/404");
    }
  }, [user, isLoaded, router]);

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

  return (
    <div className="bg-[#f9fafb] min-h-screen px-6 py-8 space-y-6">
      <div className="flex justify-between items-center sticky top-0 z-50 bg-[#f9fafb] py-4 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-700 flex items-center gap-2">
          📊 Admin Insights
        </h1>
        <ExportInsightsButton />
      </div>

      <div id="insights-dashboard" className="space-y-8">
        <ManualVsScrapedChart data={pieData} total={totalAds} />
        <AvgFeedbackRatingChart data={barRatingData} />
        <FeedbackDistributionChart data={feedbackDist} />
        <AdsPerUserChart data={adsPerUserData} />

        <section>
          <h2 className="text-lg font-semibold mb-2">🔥 Top Performing Ads</h2>
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
            {topAds.map((ad, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
              >
                <p className="font-semibold text-indigo-800">{ad.headline}</p>
                <p className="text-sm text-gray-600 line-clamp-4">{ad.adCopy}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Rating: {ad.feedback?.rating || "N/A"}
                </p>
              </div>
            ))}
          </div>
        </section>

        <MonthlyUserGrowthChart data={userGrowth} />
        <MonthlyAdGrowthChart data={adGrowth} />
      </div>
    </div>
  );
}