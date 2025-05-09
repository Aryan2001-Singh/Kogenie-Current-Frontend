"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TopAd {
  headline: string;
  adCopy: string;
  feedback?: {
    rating?: number;
  };
}

const TopAdsSection = ({ ads }: { ads: TopAd[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const getBadge = (index: number) => {
    const badges = ["🥇 #1", "🥈 #2", "🥉 #3"];
    return badges[index] || null;
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center"
    >
      <div className="bg-white rounded-xl mt-8 shadow-md border border-gray-100 px-8 py-6 w-full max-w-6xl">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            🔥 Top Performing Ads
          </h2>
          <p className="text-lg mt-2 text-gray-500">
            These ads received the highest feedback scores from users
          </p>
        </div>

        <div className="space-y-6">
        {ads.map((ad, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: i * 0.1 }}
    className="border border-gray-200 rounded-xl p-6 bg-gradient-to-br from-indigo-50 to-orange-50"
  >
    <div className="flex justify-between items-start mb-2">
      <div className="text-indigo-800 font-semibold text-lg flex items-center gap-2">
        {getBadge(i) && (
          <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-300">
            {getBadge(i)}
          </span>
        )}
        {ad.headline}
      </div>

      {i < 3 && (
        <span className="text-xs bg-gradient-to-r from-indigo-500 to-orange-400 text-white px-2 py-1 rounded-full">
          High Engagement
        </span>
      )}
    </div>
    <p className="text-sm text-gray-600 mb-2 line-clamp-4">{ad.adCopy}</p>
  </motion.div>
))}

        </div>
      </div>
    </motion.section>
  );
};

export default TopAdsSection;