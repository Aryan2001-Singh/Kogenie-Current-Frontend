"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroAbout = () => {
  return (
    <section
      className="about-us-section"
      style={{
        minHeight: "500px",
        height: "auto",
        background: "#DCE1FA",
        position: "relative",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
        marginTop: "0px",
        padding: "80px 20px",
        fontFamily: "Poppins",
      }}
    >
      {/* Floating Blurry Overlays */}
      <div
        className="blur-overlay"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "220px",
          height: "220px",
          background: "rgba(84, 107, 236, 0.37)",
          filter: "blur(100px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      ></div>
      <div
        className="blur-overlay"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "200px",
          height: "200px",
          background: "rgba(76, 185, 243, 0.2)",
          filter: "blur(100px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      ></div>

      {/* Floating Stars */}
      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          className="floating-star"
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "3px",
            height: "3px",
            background: "white",
            opacity: "0.4",
            borderRadius: "50%",
            animation: `floatStars ${
              Math.random() * 5 + 2
            }s infinite alternate ease-in-out`,
          }}
        ></div>
      ))}

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div
          className="container"
          style={{ maxWidth: "1100px", position: "relative", zIndex: 2 }}
        >
     <h2
  className="font-bold leading-[1.2] text-gray-900"
  style={{
    fontSize: "clamp(42px, 5vw, 64px)",
    marginBottom: "12px",
    marginTop: "60px",
    textShadow: "0 3px 6px rgba(0, 0, 0, 0.15)", // subtle shadow
  }}
>
  We’re{" "}
  <span className="bg-gradient-to-r from-[#3f54c6] to-[#7b8df6] bg-clip-text text-transparent">
    KOgenie
  </span>
</h2>

<p
  className="text-[#4A5ABB] tracking-wide"
  style={{
    fontSize: "clamp(20px, 2.5vw, 28px)",
    fontWeight: "600",
    marginBottom: "24px",
    textShadow: "0 3px 6px rgba(0, 0, 0, 0.15)", // light shadow
  }}
>
  Built to Change the Way Marketing Works.
</p>

<div
  style={{
    fontSize: "clamp(16px, 1.5vw, 20px)",
    fontWeight: "350",
    lineHeight: "1.8",
    color: "#1E2333",
    maxWidth: "950px",
    margin: "0 auto",
  }}
>
  <p style={{ marginBottom: "10px" }}>
    Make ads that hit the right audience at the right time.Perfected for HyperTargeting.Powered by AI.
  </p>
  
</div>


        </div>
      </motion.div>

      {/* Floating Animation for Particles */}
      <style>{`
        @keyframes floatStars {
          0% { transform: translateY(0px); opacity: 0.6; }
          100% { transform: translateY(-10px); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroAbout;
