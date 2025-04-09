"use client";
import React from "react";
import Link from "next/link";
import {
  RocketIcon,
  SearchIcon,
  TargetIcon,
  TrophyIcon,
  BrainIcon,
  LayoutDashboardIcon,
} from "lucide-react";

const features = [
  {
    icon: <RocketIcon className="w-14 h-14 text-indigo-400" />,
    title: "Create Faster",
    description: "We said 2 minutes, but we lied. It actually takes 5—just like Maggi. But, good things take time.",
  },
  {
    icon: <SearchIcon className="w-14 h-14 text-indigo-400" />,
    title: "Spend Smarter",
    description: "A/B testing is expensive. Stop gambling with your ad budget—test smarter, not harder.",
  },
  {
    icon: <TargetIcon className="w-14 h-14 text-indigo-400" />,
    title: "Valued Insights ",
    description: "Know what’s working and what’s not—so you stop boosting ads that don’t convert.",
  },
  {
    icon: <TrophyIcon className="w-14 h-14 text-indigo-400" />,
    title: "Less Effort",
    description: "Creating multiple ads manually? No thanks. KOgenie is made just for this— to save time and effort.",
  },
  {
    icon: <BrainIcon className="w-14 h-14 text-indigo-400" />,
    title: "AI-Powered",
    description: "AI isn’t the future—it’s the now. Use it or stay confused why ads are not converting.",
  },
  {
    icon: <LayoutDashboardIcon className="w-14 h-14 text-indigo-400" />,
    title: "One Dashboard",
    description: "Posting ads shouldn’t mean opening a million tabs. Deploy everywhere from one place.",
  },
];

const FeatureInfographics = () => {
  return (
    <section className="w-full mt-2 py-20 px-6 sm:px-12 lg:px-20 bg-[#f9fafb] font-['Poppins']">
      {/* Top Heading & Subtext */}
      <div className="text-center mb-16 max-w-6xl mx-auto px-4">
  <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-snug mb-4">
    Built With All the Features You Actually Need
  </h2>
  <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600">
    Everything inside KOgenie is purpose-built to help you create, launch, and optimize high-converting ads at lightning speed.
  </p>
</div>


      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center space-y-6">
            <h4
              className="text-lg font-semibold uppercase tracking-wide text-gray-600"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {feature.title}
            </h4>

            <div className="w-40 h-40 p-4 rounded-[2rem] bg-gray-100 shadow-[10px_10px_20px_rgba(0,0,0,0.08),-8px_-8px_15px_rgba(255,255,255,0.8)] flex items-center justify-center">
              {feature.icon}
            </div>

            <p style={{ fontFamily: "Geist, sans-serif" }} className="text-sm text-gray-400 max-w-[200px]">
              {feature.description}
            </p>
          </div>
        ))}

        {/* CTA Block */}
        <div className="flex flex-col items-center bg-gray-100 rounded-2xl justify-center text-center space-y-4 col-span-2 p-6 h-full">
        <h4 className="text-xl font-semibold text-gray-700 font-['Poppins'] mt-2">
  KOgenie&rsquo;s Popular Features
</h4>

          <p className="text-gray-600 text-sm max-w-xs font-['Poppins'] mt-2">
            From creation to conversion, KOgenie is your one-stop AI powerhouse.
          </p>

          <ul className="space-y-3 text-left text-gray-600 font-['Poppins'] text-lg">
            {["Create Faster", "Valued Insights", "AI-Powered"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#f97316]/10 text-gray-600 text-sm font-bold shadow-sm">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link href="/sign-up">
            <button
              style={{ fontSize: "18px", fontFamily: "Poppins" }}
              className="mt-4 px-40 py-3 rounded-xl bg-gradient-to-r from-[#546aec] to-[#7b8df6] text-white text-sm font-semibold hover:scale-105 transition duration-300 shadow-md"
            >
              Try features
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureInfographics;
