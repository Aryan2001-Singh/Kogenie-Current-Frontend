"use client";
import React from "react";
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
    icon: <RocketIcon className="w-10 h-10 text-indigo-500" />,
    title: "Create Faster",
    description: "We said 2 minutes, but we lied. It actually takes 5—just like Maggi. But, good things take time.",
  },
  {
    icon: <SearchIcon className="w-10 h-10 text-indigo-500" />,
    title: "Spend Smarter",
    description: "A/B testing is expensive. Stop gambling with your ad budget—test smarter, not harder.",
  },
  {
    icon: <TargetIcon className="w-10 h-10 text-indigo-500" />,
    title: "Valued Insights",
    description: "Know what’s working and what’s not—so you stop boosting ads that don’t convert.",
  },
  {
    icon: <TrophyIcon className="w-10 h-10 text-indigo-500" />,
    title: "Less Effort",
    description: "Creating multiple ads manually? No thanks. KOgenie is made just for this— to save time and effort.",
  },
  {
    icon: <BrainIcon className="w-10 h-10 text-indigo-500" />,
    title: "AI-Powered",
    description: "AI isn’t the future—it’s the now. Use it or stay confused why ads are not converting.",
  },
  {
    icon: <LayoutDashboardIcon className="w-10 h-10 text-indigo-500" />,
    title: "One Dashboard",
    description: "Posting ads shouldn’t mean opening a million tabs. Deploy everywhere from one place.",
  },
];

const FeatureInfographics = () => {
  return (
    <section className="w-full py-20 px-6 sm:px-12 lg:px-20 bg-[#f9fafb] font-['Poppins']">
      <div className="text-center mb-16 max-w-3xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-snug mb-4">
          Built With All the Features You Actually Need
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {features.map((feature, idx) => (
        <div
        key={idx}
        className="flex flex-col items-center justify-between bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex flex-col items-center space-y-3 mb-4">
          {feature.icon}
          <h4 className="text-md font-bold text-gray-700 uppercase tracking-wide">
            {feature.title}
          </h4>
        </div>
      
        <p className="text-sm  text-gray-700 leading-relaxed">
          {feature.description}
        </p>
      
        <div className="w-full border-t border-gray-200 mt-6 pt-4" />
      </div>
      
        ))}
      </div>
    </section>
  );
};

export default FeatureInfographics;
