"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Problem = () => {
  const failReasons = [
    {
      text: "One Message for Everyone",
      sub: "You have multiple ideal customers, but only one ad trying to reach them all.",
      icon: "❌",
    },
    {
      text: "Too Much Time, Too Little Return",
      sub: "Writing, editing, testing... By the time it’s live, the trend’s over.",
      icon: "❌",
    },
    {
      text: "Right People, Wrong Words",
      sub: "Even when the audience is right, the ad doesn’t speak their language.",
      icon: "❌",
    },
  ];

  return (
    <section className="w-full bg-[#fefefe] py-16 px-6 sm:px-10 lg:px-20 font-[Poppins] flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      {/* LEFT TEXT + CARDS */}
      <div className="max-w-xl lg:text-left w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          One Ad-fits-
          <span className="bg-gradient-to-r from-[#3948c4] to-[#546aec] bg-clip-text text-transparent ml-1">
            ALL?
          </span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Making good ad for even one audience is hard.
          <br />
          <strong>Writing for every niche?</strong> That’s overwhelming.
        </p>

        {/* Cards under heading */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {failReasons.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-xl ring-1 ring-gray-200 h-48 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-base font-bold text-red-600 mb-2">
                {item.icon}
              </p>
              <span className="text-base font-bold text-gray-800 mb-2">
               
                {item.text}
              </span>
              <p className="text-sm text-gray-800 leading-snug">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>

        <Link href="#solution" scroll={true}>
          <button className="mt-4 px-8 py-3 rounded-xl text-xl font-semibold text-white bg-gradient-to-r from-[#546aec] to-[#7b8df6] backdrop-blur-md shadow-lg transition duration-300 hover:scale-100 hover:shadow-xl hover:from-[#3f4ed4] hover:to-[#6c7eea]">
            See the solution
          </button>
        </Link>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <Image
          src="/problem.jpeg"
          alt="Frustrated creator"
          width={400}
          height={400}
          className="rounded-2xl object-cover w-full"
        />
      </div>
    </section>
  );
};

export default Problem;