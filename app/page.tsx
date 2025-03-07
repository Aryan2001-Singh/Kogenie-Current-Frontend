"use client";
import React from "react";
import Header from "@/components/home-page/home-6/Header";
import Hero from "@/components/home-page/home-6/Hero";
import Link from "next/link";
import TagList from "@/components/home-page/home-6/TagList";
import Features from "@/components/home-page/home-6/Features";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";

const SassProduct = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      <div className="fancy-feature-three pt-0 lg-pt-0 md-pt-0 sm-pt-0">
      <div className="container">
          <div className="row align-items-center">
            {/* Right Video Section (Now moved to left side) */}
            <div
              className="col-lg-6 col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px"
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  height: "350px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%" /* Ensure it takes full height */,
                    objectFit: "cover",
                  }}
                >
                  <source
                    src="/Screen Recording 2025-03-05 at 6.41.38 PM.mov"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            {/* Left Content Section (Now moved to right side) */}
            <div className="col-lg-6 col-md-6 flex flex-col text-justify font-inter">
  <div className="title-style-three">
    {/* Section Title */}
    <div style={{color: "#546aec"}} className="sc-title text-uppercase text-[14px] font-semibold text-[#546aec]">
      Integrates your tools
    </div>

    {/* Heading with adjusted spacing */}
    <h2 className="text-[clamp(28px,2vw,36px)] font-light leading-[1.4] text-gray-800 mb-4 max-w-xl">
      Kogenie leads in hyper-targeted influence
    </h2>
  </div>

  {/* Bullet Points instead of paragraph */}
  <ul className="list-disc pl-5 text-[clamp(14px,2vw,16px)] text-gray-600 font-inter space-y-2 leading-[1.5] max-w-[600px] mt-2 mb-4 text-justify animate-fadeInUp">
    <li>Leverages the power of generative AI for highly personalized ads.</li>
    <li>Utilizes granular data to enhance audience targeting.</li>
    <li>Implements automated A/B testing for campaign optimization.</li>
    <li>Creates deep, instinctive connections with your audience.</li>
    <li>Expert strategies for driving both action and emotions.</li>
  </ul>
</div>
</div>
</div></div>

      {/* Feature Section Four */}
      <div className="w-full max-w-[1100px] mx-auto my-6 p-10 flex flex-wrap items-center justify-between gap-5 text-left relative bg-[#DFE1ED] font-inter">
  {/* Floating Elements */}
  <div className="absolute top-[-20px] left-[20px] w-[80px] h-[80px] bg-[rgba(74,90,187,0.2)] rounded-full"></div>
  <div className="absolute bottom-[-20px] right-[20px] w-[60px] h-[60px] bg-[rgba(189,195,234,0.34)] rounded-full"></div>

  {/* Left Side: Text Content & Button */}
  <div className="flex-1 min-w-[320px] flex flex-col items-start z-10">
    <h2 className="text-[clamp(28px,3.5vw,42px)] font-extrabold leading-tight text-gray-900 mb-3">
      <span className="bg-gradient-to-r from-[#4a5abb] to-[#8693e3] text-transparent bg-clip-text">
        Boost Engagement
      </span>{" "}
      with AI-Powered Ads!
    </h2>
    <p className="text-[clamp(14px,1.4vw,17px)] text-gray-700 font-normal leading-[1.5] max-w-[480px] opacity-90 mb-5 text-justify">
      Generate high-converting ads in seconds. Kogenie&apos;s AI-powered platform helps you craft
      <strong className="text-[#4a5abb]"> engaging, personalized</strong> ads that drive real results.
    </p>

    {/* CTA Button */}
    <Link href="/sign-up">
      <button
        className="relative px-8 py-3 text-[17px] font-semibold text-white transition-all duration-300 bg-[#4a5abb] shadow-lg hover:bg-[#3C4E99] hover:shadow-xl hover:translate-y-[-2px] active:scale-95"
      >
        Join Now - It’s Free!
        <span className="absolute right-3 top-3 h-3 w-3 bg-white rounded-full animate-ping opacity-80"></span>
      </button>
    </Link>
  </div>

  {/* Right Side: Enlarged Illustration */}
  <div className="flex-1 min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] flex justify-center relative">
    <img
      src="/12291062_Wavy_Tech-20_Single-08.jpg"
      alt="AI Ads Illustration"
      className="w-full max-w-[350px]"
    />
  </div>
</div>

      {/* /.container */}

      {/* Feature Section Five */}
      <div className="fancy-feature-five pt-30 lg-pt-30">
  <div className="container">
    <div className="row align-items-center">
      {/* Right Side - Content until the button */}
      <div
        style={{marginTop:"-70px"}} className="col-lg-6 order-md-last ms-auto flex flex-col gap-y-6 lg:text-left sm:text-center"
      >
        <div className="block-style-two pe-xxl-5 sm-mb-50" data-aos="fade-left">
          {/* Section Title */}
          <div className="title-style-three px-6 sm:px-4">
            <div
              className="sc-title text-uppercase text-sm font-semibold tracking-wide text-[#546AEC] mb-2 font-inter"
            style={{color:"#546aec"}}>
              Personalization of Granular Data
            </div>
            <h2
              className="text-3xl md:text-4xl font-light leading-snug text-gray-900 mb-4 font-inter"
            >
              The power of Generative AI
            </h2>
          </div>

          {/* Bullet Points */}
          <ul className="list-disc text-base text-gray-600 leading-relaxed px-8 sm:px-6 mb-4 font-inter space-y-2">
            <li>AI-driven ad personalization for targeted impact</li>
            <li>Automated A/B testing to optimize performance</li>
            <li>Granular data analysis for smarter decision-making</li>
            <li>Seamless integration with existing ad platforms</li>
          </ul>

          {/* Button */}
          <div className="px-6 sm:px-4">
            <button
              className="relative px-8 py-3 text-base font-medium text-white transition-all duration-300 
              bg-gradient-to-r from-[#4a5abb] to-[#8693e3] shadow-lg hover:from-[#3d4e9f] hover:to-[#6b79d1] 
              hover:shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 
              focus:ring-[#4a5abb]/50 font-inter"
              style={{
                letterSpacing: "0.5px",
                boxShadow: "0 6px 12px rgba(74, 90, 187, 0.3)",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Left Side - Content after the button */}
            <div
              style={{ marginTop: "-20px" }}
              className="col-lg-6 order-md-first"
            >
              <div
                style={{ marginBottom: "60px",
                borderRadius:"0px"
                 }}
                className="tags-wrapper position-relative stylish-container"
              >
                <div className="circle-decor"></div>
                <div style={{color:"black"}}className="h3 number-highlight fw-bold">13+</div>
                <p  style={{color:"gray",fontFamily:"inter, sans-serif"}}className="reason-title">
                  Reasons to <span className="highlight-text" style={{color:"#546aec"}}>Choose Us</span>
                </p>
                <TagList />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
    .fancy-feature-five {
      padding: 50px 20px;  
    }

    .stylish-container {
    
      padding: 20px 25px;
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background-color:white;
    }

    .stylish-container:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }

    .circle-decor {
      position: absolute;
      top: -50px;
      left: -50px;
      width: 150px;
      height: 150px;
      background:rgba(216, 219, 230, 0.39);
      border-radius: 50%;
      z-index: 1;
    }

    .number-highlight {
      font-size: 3rem;
      z-index: 2;
      position: relative;
      color: #fff;
      margin-bottom: 10px;
    }

    .reason-title {
      font-size: 1.2rem;
      font-weight: 400;
      opacity: 0.85;
      margin-bottom: 20px;
      z-index: 2;
      position: relative;
    }

    .highlight-text {
      font-weight: bold;
      color: #d94a2b;
    }

    .tags-wrapper {
      z-index: 2;
      position: relative;
    }

    .btn-four {
      display: inline-block;
      padding: 14px 24px;
      background-color: rgb(84, 106, 236);
      color: #fff;
      font-weight: 500;
      text-decoration: none;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(84, 107, 236, 0.57);
      transition: all 0.3s ease;
      text-align: center;
      max-width: 200px;
    }

    .btn-four:hover {
      background-color: rgb(65, 84, 199);
      box-shadow: 0 6px 25px rgba(65, 84, 199, 0.7);
      transform: translateY(-2px);
    }

    .btn-four:active {
      transform: translateY(0);
      box-shadow: 0 3px 15px rgba(65, 84, 199, 0.5);
    }

    @media (max-width: 768px) {
      .fancy-feature-five {
        padding: 50px 10px;
      }

      .circle-decor {
        top: -30px;
        left: -30px;
      }

      .number-highlight {
        font-size: 2.5rem;
      }

      .reason-title {
        font-size: 1rem;
      }

      /* Button and content for smaller screens */
      .btn-four {
        width: 100%;
        max-width: unset;
        text-align: center;
      }
    }
  `}</style>
      </div>

      {/* 
        =============================================
        Feature Section Six
        ============================================== 
        */}
     <div className="fancy-feature-six position-relative mt-[50px] md:mt-[40px] sm:mt-[30px]">
  <div className="container">
    <div className="row gx-xxl-5 align-items-center">
      {/* Left Section: Title and Call-to-Action */}
      <div className="col-lg-5 col-md-6" data-aos="fade-up">
        <div style={{ marginTop: "-100px" }} className="title-section mb-16 lg:mb-12">
          <h2 className="main-title font-inter">
            <span className="gradient-text">Explore</span> <br />
            Our <span className="underline-text">Exclusive Features</span>
          </h2>
          <p className="description font-inter">
            Unlock the full potential of your business with our innovative
            and tailored features designed to drive growth and success.
          </p>
        </div>
      </div>
    </div>

    {/* Features Row */}
    <div className="features-horizontal-row">
      <Features />
    </div>
  </div>

  <style jsx>{`
    .fancy-feature-six {
      padding: 10px 20px;
      border-radius: 20px;
    }

    .title-section {
      max-width: 500px;
    }

    .main-title {
      font-size: clamp(28px, 3vw, 40px);
      font-weight: 700;
      line-height: 1.3;
      color: #333;
      margin-bottom: 20px;
    }

    .gradient-text {
      background: linear-gradient(to right, #4a5abb, #8693e3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .underline-text {
      position: relative;
      display: inline-block;
    }

    .underline-text::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 8px;
      background-color: #b5c0ff;
      opacity: 0.5;
      z-index: -1;
    }

    .description {
      font-size: clamp(14px, 1vw, 18px);
      color: #666;
      margin-bottom: 30px;
      line-height: 1.7;
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      background-color: #4a5abb;
      color: white;
      font-weight: 600;
      font-size: clamp(14px, 1vw, 16px);
      padding: 12px 20px;
      border-radius: 5px;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .cta-btn i {
      margin-left: 10px;
      font-size: 1.2rem;
    }

    .cta-btn:hover {
      background: #3c4e99;
      box-shadow: 0 8px 15px rgba(58, 70, 157, 0.2);
    }

    @media (max-width: 768px) {
      .main-title {
        font-size: clamp(24px, 5vw, 32px);
      }

      .description {
        font-size: clamp(12px, 4vw, 16px);
        text-align: justify;
      }

      .cta-btn {
        font-size: clamp(12px, 4vw, 14px);
      }
    }
  `}</style>
</div>

<div className="faq-wrapper mt-50 lg:mt-30" data-aos="fade-up">
  <div className="container">
    <div className="faq-container">
      {/* Top Right Contact Button (Kept Original Style) */}
      <div className="text-end mb-3">
        <Link href="/contact" className="btn-six fw-500">
          Contact Us
        </Link>
      </div>

      {/* FAQ Header */}
      <div className="faq-header">
        <h3 className="faq-title">
          Have Questions? <br />
          <span className="faq-highlight">Find Answers</span> in our{" "}
          <span className="faq-gradient">FAQs</span> or{" "}
          <Link href="/contact">Contact Us</Link>
        </h3>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h5 className="faq-heading">Frequently Asked Questions</h5>
        <ul className="faq-list">
          <li>
            <span className="faq-question">What services do you provide?</span>
            <p className="faq-answer">
              We offer branding, AI-driven solutions, and high-performance marketing strategies tailored for businesses.
            </p>
          </li>
          <li>
            <span className="faq-question">Do you offer custom pricing?</span>
            <p className="faq-answer">
              Yes! We provide flexible pricing plans to suit startups, enterprises, and agencies.
            </p>
          </li>
          <li>
            <span className="faq-question">How do I get started?</span>
            <p className="faq-answer">
              Simply sign up, and our AI-powered system will guide you through the process in minutes.
            </p>
          </li>
          <li>
            <span className="faq-question">What makes your AI different?</span>
            <p className="faq-answer">
              Our AI is built for precision marketing—real-time insights, hyper-targeting, and automated A/B testing.
            </p>
          </li>
          <li>
            <span className="faq-question">Is customer support available?</span>
            <p className="faq-answer">
              Yes! Our support team is available 24/7 via email, live chat, and phone support.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <style jsx>{`
    .faq-wrapper {
      padding: 30px 0; /* Reduced padding from top */
      background: #f8f9fc;
      font-family: "Inter", sans-serif;
      margin-top: 2px;
    }

    .faq-container {
      background: #ffffff;
      padding: 30px 35px; /* Reduced height */
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
      max-width: 1000px; /* Increased width */
      margin: 0 auto;
    }

    .faq-header {
      text-align: center;
      margin-bottom: 15px; /* Reduced margin above heading */
    }

    .faq-title {
      font-size: 1.6rem;
      font-weight: 600;
      color: #333;
      line-height: 1.3;
    }

    .faq-highlight {
      color: #546aec;
      font-size: 1rem;
      font-weight: 600;
    }

    .faq-gradient {
      background: linear-gradient(90deg, #4a5abb, #8693e3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .faq-heading {
      font-size: 1.3rem;
      font-weight: 600;
      color: #4a5abb;
      text-align: left;
      margin-bottom: 10px; /* Reduced margin */
    }

    .faq-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .faq-list li {
      margin-bottom: 12px; /* Reduced space between questions */
      padding: 6px 0;
      border-bottom: 1px solid #e1e5f2;
    }

    .faq-question {
      font-size: 1rem;
      font-weight: 700;
      color: #333;
      display: block;
      margin-bottom: 4px;
    }

    .faq-answer {
      font-size: 0.9rem;
      color: #555;
      line-height: 1.5;
    }

    .faq-list li:last-child {
      border-bottom: none;
    }

    @media (max-width: 768px) {
      .faq-container {
        padding: 20px 20px;
      }

      .faq-title {
        font-size: 1.4rem;
      }

      .faq-heading {
        font-size: 1.2rem;
        text-align: center;
      }

      .faq-question {
        font-size: 0.9rem;
      }

      .faq-answer {
        font-size: 0.85rem;
      }
    }
  `}</style>
</div>

        {/*
        =====================================================
        Fancy Short Banner Three
        =====================================================
        */}

        {/* Footer */}
        <div style={{backgroundColor:"linear-gradient(135deg, rgba(0, 1, 7, 0.9), rgba(146, 135, 230, 0.9))", marginTop:"10px"}}className="footer-style-two theme-basic-footer">
            <div className="container">
              <div className="inner-wrapper m-auto">
                <div className="row">
                  <FooterMenu />
                </div>
              
              {/* /.inner-wrapper */}
            </div>
            <div className="" />
            <div className="" />
            {/* <Image
              src="/images/shape/shape_42.svg"
              alt="shape"
              className="lazy-img shapes shape-three"
              width={100}
              height={100}
            />
            <Image
              src="/images/shape/shape_43.svg"
              alt="shape"
              className="lazy-img shapes shape-four"
              width={100}
              height={100}
            /> */}
          </div>
          {/* /.top-footer */}
          <CopyrightFooter2 />
        </div>
        {/* /.footer-style-two */}
    </>
  );
};

export default SassProduct;
