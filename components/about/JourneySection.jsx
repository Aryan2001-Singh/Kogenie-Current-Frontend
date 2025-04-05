"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const JourneySection = () => {
  const journeySteps = [
    {
      icon: <i className="fas fa-bullseye" />,
      title: "You Hypertarget",
      sub: "Your product is great. It just needs the right audience. We help you find them—fast.",
    },
    {
      icon: <i className="fas fa-clock" />,
      title: "You make more in less",
      sub: "Your time and budget should go into building, not guessing. We help you create impactful ads—fast and affordably.",
    },
    {
      icon: <i className="fas fa-lightbulb" />,
      title: "You Lead",
      sub: "With the right audience and the right message, your product leads the way. We’re just here to help it shine.",
    },
    {
      icon: <i className="fas fa-trophy" />,
      title: "You Win",
      sub: "You get more clicks, more sales, and more return—because your ads actually work.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-16 px-6">
      {/* LEFT SIDE — Text & CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="uppercase text-sm font-semibold tracking-wide text-[#546aec] mb-3">
          Great Ideas Deserve Better Ads
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
          We Make Sure Yours Break Through
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The best products (like yours) often go unnoticed—not because they
          aren’t great, but because they aren’t marketed better.
          <br />
          <strong className="text-black gap-2 mb-2">
            Built Something Great? Let’s Market It.
          </strong>
        </p>

        <Link href="/sign-up">
          <button className="inline-block bg-[#546aec] hover:bg-[#4253c1] text-white font-semibold py-3 px-6 rounded-xl transition duration-200 shadow-md">
            Start Creating Ads
          </button>
        </Link>
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
                  <div className="-rotate-45 text-[#546aec] text-xl">
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
