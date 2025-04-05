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
            className="fw-700"
            style={{
              fontSize: "38px",
              color: "#08090A",
              fontWeight: "700",
              letterSpacing: "0.5px",
              marginBottom: "8px",
              marginTop: "80px",
            }}
          >
            We’re KOgenie—
          </h2>

          <p
            className="about-text"
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              fontWeight: "400",
              color: "#1E2333",
              maxWidth: "800px",
              margin: "0 auto 40px",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            <strong style={{ color: "#4A5ABB" }}>
              Built to Change the Way Marketing Works
            </strong>
            , Make Ads that hit right to the right audience at right time.
            Powered by AI. Perfected for HyperTargeting.
          </p>
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
