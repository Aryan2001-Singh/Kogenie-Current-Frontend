"use client";
import React from "react";
import styles from "./GlobalSection.module.css";

export default function GlobalSection() {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        {/* Left */}
        <div className="w-full  py-12 px-6 sm:px-12 lg:px-20 relative overflow-hidden font-['Poppins']">
          <p className="text-sm font-semibold mb-2 text-gray-500 uppercase tracking-wide">
          Make it personal.
          </p>
          <h2 className={styles.heading}>
          Ads come in all shapes and sizes.
          </h2>
          <p className="text-2xl text-gray-700 mb-4">
          We help you make the one that fits your audience.
          </p>
          <a href="/sign-up" className="px-10 py-3 rounded-xl text-xl font-bold text-white bg-gradient-to-r 
                from-[#546aec] to-[#7b8df6] shadow-md transition duration-300 
                hover:scale-100 hover:shadow-xl hover:from-[#3f4ed4] hover:to-[#6c7eea]">
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
                background: "radial-gradient(circle,rgb(249, 115, 22),rgb(229, 188, 110))",
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
