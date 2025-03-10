"use client";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Header from "@/components/home-page/home-6/Header";
import React from "react";
import BlogList from "@/components/BlogList";
import Image from "next/image";
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
      <div className="relative w-full flex items-center mt-10px justify-center text-center px-6 sm:px-12 lg:px-20 pb-12">
  {/* ✅ Background Image */}
  <div className="absolute inset-0">
  <Image
    src="/niloy-tesla-H5l6niMTWFE-unsplash.jpg"
    alt="Blog Banner"
    layout="fill"
    objectFit="cover"
    quality={90}
    className="z-0 filter brightness-105 blur-[2px] contrast-110"
  />
  </div>

  {/* ✅ Foreground Content */}
  <div style={{marginTop:"100px",backdropFilter: "blur(4px)"}} className="relative z-20 w-full max-w-4xl mx-auto text-white px-4 sm:px-6 lg:px-8 mt-10 sm:mt-20">
    {/* Blog Title with Responsive Gradient */}
    <h1
      className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-wide mt-3"
      style={{
        background: "linear-gradient(to right, #000000, #4a5abb)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
      }}
    >
      Latest Insights & Trends
    </h1>

    {/* Blog Description - More Readable on Mobile */}
    <p  className="text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto mt-3 text-black opacity-90 leading-relaxed px-2 sm:px-4">
      Stay ahead with expert opinions, AI marketing insights, and the latest trends in advertising.
    </p>

    {/* ✅ Subscription Box - Fully Responsive */}
    <div className="mt-6 flex justify-center w-full px-2 sm:px-0">
      <form className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-md overflow-hidden w-full max-w-lg p-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto"
          required
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 font-semibold text-lg bg-[#4a5abb] hover:bg-[#3d4ca0] text-white transition-all duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</div>


      {/* ✅ Main Blog Content */}
      <div style={{marginTop:"20px"}} className="container mx-auto px-4 sm:px-8 lg:px-16 py-8">
        <BlogList />
      </div>

      {/* ✅ Footer */}
      <div className="footer-style-two theme-basic-footer mt-6 bg-gray-50">
        <div className="top-footer position-relative">
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <FooterMenu />
              </div>
            </div>
          </div>
        </div>
        <CopyrightFooter2 />
      </div>
    </>
  );
};

export default GridWithSidebar;
