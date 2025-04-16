"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ExportInsightsButton from "@/components/createAd/ExportInsightsButton";
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

import {
  fetchTopPerforming,
  fetchAvgFeedback,
  fetchAdTypeBreakdown,
  fetchTotalAdsPerUser,
  fetchFeedbackDistribution,
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
  const totalAds = adBreakdown.manual + adBreakdown.scraped;

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

  const COLORS = ["#8884d8", "#82ca9d"];

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
    <div className="bg-gray-50 min-h-screen px-6 py-8 space-y-6">
      <ExportInsightsButton />
      <div id="insights-dashboard" className="space-y-8">
      
        <h1 className="text-3xl font-bold text-indigo-700">📊 Admin Insights</h1>

        {/* 1. Pie Chart */}
        <section>
          <h2 className="text-xl font-semibold mb-2">🧮 Manual vs Scraped Ads</h2>
          <p className="text-sm text-gray-600 mb-2">
            Total Ads Generated:{" "}
            <span className="font-bold text-indigo-600">{totalAds}</span>
          </p>
          <div className="bg-white rounded shadow p-4">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {pieData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend verticalAlign="top" />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* 2. Avg Feedback */}
        <section>
          <h2 className="text-xl font-semibold mb-2">⭐ Average Feedback Ratings</h2>
          <div className="bg-white rounded shadow p-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barRatingData}>
                <XAxis dataKey="name" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Bar dataKey="rating" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* 3. Feedback Distribution */}
        <section>
          <h2 className="text-xl font-semibold mb-2">📊 Feedback Rating Distribution</h2>
          <div className="bg-white rounded shadow p-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={feedbackDist}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rating" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="manual" fill="#6366f1" name="Manual Ads" />
                <Bar dataKey="scraped" fill="#facc15" name="Scraped Ads" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* 4. Total Ads per User */}
        <section>
          <h2 className="text-xl font-semibold mb-2">👥 Total Ads per User</h2>
          <div className="bg-white rounded shadow p-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={adsPerUserData}>
                <XAxis dataKey="email" tick={{ fontSize: 10 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalAds" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* 5. Top Performing Ads */}
        <section>
          <h2 className="text-xl font-semibold mb-2">🔥 Top Performing Ads</h2>
          <div className="bg-white rounded shadow p-4 space-y-2">
            {topAds.map((ad, i) => (
              <div key={i} className="border p-3 rounded">
                <p className="font-semibold">{ad.headline}</p>
                <p className="text-sm text-gray-600">{ad.adCopy}</p>
                <p className="text-xs text-gray-500">
                  Rating: {ad.feedback?.rating || "N/A"}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}