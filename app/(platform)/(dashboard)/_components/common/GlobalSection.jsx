"use client";
import React from "react";
import styles from "./GlobalSection.module.css";

export default function GlobalSection() {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        {/* Left */}
        <div className="w-full  py-12 px-6 sm:px-12 lg:px-20 relative overflow-hidden font-['Poppins']">
          <p className="text-sm font-semibold mb-2 text-indigo-500 uppercase tracking-wide">
            KOGENIE CAN HELP YOU
          </p>
          <h2 className={styles.heading}>
            Make <span className={styles.highlight}>your Ads</span> work as hard as you do.
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Let KOgenie create ads that attract the right audience and drive better sales.
            Say goodbye to guessing and hello to performance.
          </p>
          <a href="/sign-up" className="px-10 py-3 rounded-xl text-xl font-bold text-white bg-gradient-to-r 
                from-[#546aec] to-[#7b8df6] shadow-md transition duration-300 
                hover:scale-105 hover:shadow-xl hover:from-[#3f4ed4] hover:to-[#6c7eea]">
            Get Started with KOgenie →
          </a>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <div className={styles.floatingContainer}>
            <div
              className={styles.blob}
              style={{
                background: "radial-gradient(circle, #6366f1, #60a5fa)",
                top: 0,
                left: "2.5rem",
                width: "90px",
                height: "90px",
              }}
            ></div>
            <div
              className={styles.blob}
              style={{
                background: "radial-gradient(circle, #34d399, #10b981)",
                bottom: 0,
                right: "2.5rem",
                width: "80px",
                height: "80px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
