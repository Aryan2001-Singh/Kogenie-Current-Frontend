"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { fetchUserAdHistory } from "@/services/api";

// ✅ Type definition for an ad
interface AdEntry {
  headline: string;
  adCopy: string;
  feedback?: {
    rating?: number;
    comment?: string;
  };
  createdAt?: string;
}

// ✅ Type for combined manual + scraped ad history
interface AdHistory {
  manual: AdEntry[];
  scraped: AdEntry[];
}

const UserAdHistory = () => {
  const { user, isLoaded } = useUser();
  const [ads, setAds] = useState<AdHistory>({ manual: [], scraped: [] });

  useEffect(() => {
    if (isLoaded && user?.emailAddresses?.[0]?.emailAddress) {
      fetchUserAdHistory(user.emailAddresses[0].emailAddress).then(setAds);
    }
  }, [isLoaded, user]);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
        📁 Your Ad History
      </h2>

      {/* ✅ Manual Ads */}
      {ads.manual.length > 0 && (
        <>
          <h3 className="text-lg font-semibold text-gray-800">📝 Manual Ads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ads.manual.map((ad, idx) => (
              <div key={idx} className="p-4 border rounded-lg bg-gray-50 hover:shadow-md transition">
                <p className="font-bold text-indigo-800">{ad.headline}</p>
                <p className="text-gray-600 text-sm mt-1 line-clamp-3">{ad.adCopy}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ✅ Scraped Ads */}
      {ads.scraped.length > 0 && (
        <>
          <h3 className="text-lg font-semibold text-gray-800">🔍 Scraped Ads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ads.scraped.map((ad, idx) => (
              <div key={idx} className="p-4 border rounded-lg bg-gray-50 hover:shadow-md transition">
                <p className="font-bold text-indigo-800">{ad.headline}</p>
                <p className="text-gray-600 text-sm mt-1 line-clamp-3">{ad.adCopy}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ✅ Fallback if no ads */}
      {ads.manual.length === 0 && ads.scraped.length === 0 && (
        <p className="text-gray-500 italic">You haven’t created any ads yet.</p>
      )}
    </div>
  );
};

export default UserAdHistory;