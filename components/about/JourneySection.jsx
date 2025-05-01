"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  TargetIcon,
  ClockIcon,
  LightbulbIcon,
  TrophyIcon,
} from "lucide-react";

const journeySteps = [
  {
    icon: <TargetIcon className="w-6 h-6 text-[#546aec]" />,
    title: "You Hypertarget",
    sub: "Your product is great. It just needs the right audience. We help you find them—fast.",
  },
  {
    icon: <ClockIcon className="w-6 h-6 text-[#546aec]" />,
    title: "You make more in less",
    sub: "Your time and budget should go into building, not guessing. We help you create impactful ads—fast and affordably.",
  },
  {
    icon: <LightbulbIcon className="w-6 h-6 text-[#546aec]" />,
    title: "You Lead",
    sub: "With the right audience and the right message, your product leads the way. We’re just here to help it shine.",
  },
  {
    icon: <TrophyIcon className="w-6 h-6 text-[#546aec]" />,
    title: "You Win",
    sub: "You get more clicks, more sales, and more return—because your ads actually work.",
  },
];

const JourneySection = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-16 px-6 font-['Poppins']">
      {/* LEFT SIDE — Text & CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p style={{color:"#546aec"}} className="uppercase text-sm font-semibold tracking-wide text-[#546aec] mb-3">
          We Make Sure Yours Break Through
        </p>
        <h2 className="text-4xl sm:text-4xl font-bold text-gray-800 leading-normal mb-4">
          Great Ideas Deserve Better Ads
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The best products (like yours) often go unnoticed,not because they
          aren’t great, but because they aren’t marketed better.
          <br />
          <p  className="text-grey-500 gap-2 mb-2">
           <strong>Built Something Great? Let’s Market It.</strong> 
          </p>
        </p>

        <Link href="/sign-up">
          <button style={{backgroundColor:"#546aec"}} className="px-8 py-3 rounded-xl text-xl font-semibold text-white 
  bg-gradient-to-r from-[#546aec] to-[#7b8df6] backdrop-blur-md shadow-md 
  transition duration-300 hover:scale-100 hover:shadow-xl hover:from-[#3f4ed4] hover:to-[#6c7eea]">
            Start Creating Ads
          </button>
        </Link>
        {/* LEGAL ATTRIBUTION */}
        <p className="text-sm text-gray-500 mt-3">
          Powered by <span className="font-medium text-gray-500">KOGENIE E-SOLUTIONS PRIVATE LIMITED.</span>
        </p>
      </motion.div>

      {/* RIGHT SIDE — Journey Steps */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="space-y-6">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              {/* Diamond Icon Box */}
              <div className="w-12 h-12 relative flex-shrink-0">
                <div className="w-full h-full bg-[#e6eaff] rotate-45 rounded-lg shadow-sm flex items-center justify-center p-2">
                  <div className="-rotate-45">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                <h4 className="font-semibold text-gray-900">{step.title}</h4>
                <p className="text-sm text-justify text-gray-600">
                  {step.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default JourneySection;
