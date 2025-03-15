"use client";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import Header from "@/components/home-page/home-6/Header";
import React from "react";
import BlogList from "@/components/BlogList";
import Head from "next/head";

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

      {/* ✅ Blog Hero Section */}
      <div 
  className="relative w-full flex items-center justify-center text-center px-6 sm:px-12 lg:px-20 pb-12"
  style={{
    backgroundColor: "#ffffff", // White background
    backgroundImage: "radial-gradient(rgba(74, 90, 187, 0.4) 1px, transparent 1px)", // Indigo small dots
    backgroundSize: "10px 10px", // Small dot spacing for better density
    position: "relative",
    overflow: "hidden",
    height: "400px", // Increased height slightly
  }}
>
  {/* ✅ Smooth Opacity Fade for Dots at Bottom */}
  <div
    className="absolute bottom-0 left-0 w-full"
    style={{
      height: "300px", // Increased height for a better fade effect
      background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 15%, rgba(255,255,255,0.85) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0.1) 90%, rgba(255,255,255,0) 100%)",
    }}
  ></div>

  {/* ✅ Foreground Content without Blur */}
  <div 
    className="relative z-20 w-full max-w-4xl mx-auto text-black px-4 sm:px-6 lg:px-8"
    style={{
      marginTop: "120px", // More spacing from top
    }}
  >
    {/* Blog Title with Larger Font Size */}
    <h1
      className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-tight tracking-wide"
      style={{
        background: "linear-gradient(to right,rgb(77, 95, 255),rgba(74, 89, 187, 0.85))",
        WebkitBackgroundClip: "text",
        color: "transparent",
        textShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)", // Softer shadow for better readability
        marginTop: "40px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      Read our most popular articles
    </h1>
  </div>
</div>


      {/* ✅ Main Blog Content */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-8">
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
      width: 100vw; /* Ensures full viewport width */
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
