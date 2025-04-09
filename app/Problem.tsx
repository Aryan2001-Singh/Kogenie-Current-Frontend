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
      icon: "😟",
      position: "top-4 left-[-40px]",
    },
    {
      text: "Too Much Time, Too Little Return",
      sub: "Writing, editing, testing... By the time it’s live, the trend’s over.",
      icon: "📉",
      position: "top-[150px] right-[-30px]",
    },
    {
      text: "Right People, Wrong Words",
      sub: "Even when the audience is right, the ad doesn’t speak their language.",
      icon: "💬",
      position: "bottom-[30px] left-[0px]",
    },
  ];

  return (
    <section className="w-full bg-[#fefefe] py-20 px-12 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
   {/* LEFT COLUMN */}
<div className="max-w-xl ml-8">
<h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
  One Ad-fits-
  <span className="bg-gradient-to-r from-[#3948c4] to-[#546aec] bg-clip-text text-transparent">
    ALL?
  </span>
</h1>

  <p className="text-lg text-gray-700 mb-4">
    Making good ad for even one audience is hard.
    <br />
    <strong>Writing for every niche?</strong> That’s overwhelming.
  </p>
  <Link href="#solution" scroll={true}>
  <button
    className="mt-4 px-8 py-3 rounded-xl text-xl font-semibold text-white bg-gradient-to-r 
    from-[#546aec] to-[#7b8df6] backdrop-blur-md shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl 
    hover:from-[#3f4ed4] hover:to-[#6c7eea]"
  >
    See the solution
  </button>
</Link>

</div>


      {/* RIGHT COLUMN: Image + Failing messages */}
      <div className="relative w-full max-w-lg mr-20">
        {/* Background image (person using tab) */}
        <Image
          src="/momo-studio-RJxO8MVebfo-unsplash.jpg"
          alt="Person with tablet"
          width={500}
          height={500}
          className="rounded-2xl z-0 relative"
        />

        {/* Floating message boxes with zoom-out scroll pop-in effect */}
        {failReasons.map((item, i) => (
  <motion.div
    key={i}
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay: i * 0.3 }}
    viewport={{ once: true, amount: 0.5 }}
    className={`absolute rounded-xl p-3 border border-[#e0e0e0] w-60 text-left shadow-xl backdrop-blur-sm ${
      i === 0
        ? "top-4 left-[-50px]"
        : i === 1
        ? "top-[150px] right-[-40px]"
        : "bottom-[0px] left-[-10px]"
    } bg-white/40`} 
  >
    <p className="text-sm font-semibold text-red-600 text-justify">
      {item.icon} {item.text}
    </p>
    <p className="text-xs text-gray-700 mt-1">{item.sub}</p>
  </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Problem;
