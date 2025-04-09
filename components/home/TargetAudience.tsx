"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const personas = [
  "Performance Marketers", "Digital Agencies", "Freelancers", "Small Businesses", "Ecommerce Brands",
];

const TargetAudienceCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % personas.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#fefefe] py-24 px-6 sm:px-12 lg:px-20 font-['Poppins'] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 leading-snug text-center"
        >
          Built for Those Who Value Every Second, Penny, and Opportunity.
        </motion.h2>

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-4xl mt-6 sm:text-4xl font-extrabold bg-gradient-to-r from-[#3f54c6] to-[#7b8df6] bg-clip-text text-transparent text-center">
            {personas[index]}
          </h3>
        </motion.div>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto text-center">
          For the hustlers, the builders, the doers—those who know time is money, and money is time.
        </p>
     <Link href="/sign-up">
        <button className="mt-6 px-8 py-3 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-[#546aec] to-[#7b8df6] shadow-md hover:scale-105 hover:shadow-xl hover:from-[#3f4ed4] hover:to-[#6c7eea] transition duration-300">
          Customise Your First Ad
        </button> </Link>
      </div>
    </section>
  );
};

export default TargetAudienceCarousel;
