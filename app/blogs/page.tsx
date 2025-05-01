"use client";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import Header from "@/components/home-page/home-6/Header";
import React from "react";
import BlogList from "@/components/BlogList";
import Head from "next/head";
import { motion } from "framer-motion";

const GridWithSidebar = () => {
  return (
    <>
      {/* ✅ SEO Optimization */}
      <Head>
        <title>Latest Insights & Trends - Kogenie Blog</title>
        <meta
          name="description"
          content="Stay informed with expert opinions, industry trends, and insightful content to help you navigate the latest updates in AI advertising and marketing."
        />
        <meta name="author" content="Kogenie" />
      </Head>

      {/* ✅ Header */}
      <Header />

      {/* ✅ Blog Hero Section with KOgenie styling */}
      <section
        className="relative flex items-center justify-center text-center px-6 sm:px-12 lg:px-20"
        style={{
          minHeight: "500px",
          height: "auto",
          background: "#DCE1FA",
          overflow: "hidden",
          fontFamily: "Poppins",
          padding: "80px 20px",
        }}
      >
        {/* Floating Blur Overlays */}
        <div
          className="absolute top-[10%] left-[5%] w-[220px] h-[220px] rounded-full bg-[#546aec]/40 blur-[100px]"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute bottom-[10%] right-[5%] w-[200px] h-[200px] rounded-full bg-[#4ab9f3]/30 blur-[100px]"
          style={{ zIndex: 0 }}
        />

        {/* Floating Stars */}
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-[3px] h-[3px] bg-white opacity-40 rounded-full animate-[floatStars_4s_infinite_alternate_ease-in-out]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1
            className="font-bold leading-tight"
            style={{
              fontSize: "clamp(42px, 5vw, 64px)",
              color: "#111827",
              textShadow: "0 3px 6px rgba(0, 0, 0, 0.15)",
              fontFamily: "Poppins",
            }}
          >
            Read Our{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #3f54c6, #7b8df6)",
                WebkitBackgroundClip: "text",
              }}
            >
              Most Popular Articles
            </span>
          </h1>
          <p
  style={{
    fontSize: "clamp(18px, 2vw, 22px)",
    fontWeight: 400,
    color: "#1E2333",
    marginTop: "24px",
    fontFamily: "Poppins",
  }}
>
  Discover expert takes, AI marketing insights, and what&apos;s trending right now.
</p>

        </motion.div>

        {/* Floating Stars Animation */}
        <style>{`
          @keyframes floatStars {
            0% { transform: translateY(0px); opacity: 0.6; }
            100% { transform: translateY(-10px); opacity: 1; }
          }
        `}</style>
      </section>

      {/* ✅ Blog List */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-8 font-[Poppins]">
        <BlogList />
      </div>

      {/* ✅ Footer */}
      <footer className="footer-container">
        <div className="footer-wrapper w-full">
          <div className="inner-wrapper m-auto">
            <div className="row">
              <FooterMenu />
            </div>
          </div>
        </div>

        <style jsx>{`
          .footer-container {
            width: 100vw;
            margin: 0;
            padding: 0;
            background: linear-gradient(to right, #f3f6fc, #e8ecf6);
          }

          .footer-wrapper {
            width: 100%;
            max-width: none;
            padding: 0;
          }
        `}</style>
      </footer>
    </>
  );
};

export default GridWithSidebar;
