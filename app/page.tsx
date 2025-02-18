'use client';
import React from "react";
import Header from "@/components/home-page/home-6/Header";
import Hero from "@/components/home-page/home-6/Hero";
import ScreenHolder from "@/components/home-page/home-6/ScreenHolder";
import Link from "next/link";
import ProductTabs from "@/components/home-page/home-6/ProductTabs";
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
      

      {/* Feature Section Three */}

      <div style={{marginTop:"-100px"}}className="fancy-feature-three pt-300 lg-pt-200 md-pt-170 sm-pt-120">
        <div className="container">
          <div className="row align-items-center">
            </div>
            {/* Left Content Section */}
            <div
              className="col-lg-6 col-md-6"
              style={{ display: "flex", flexDirection: "column", justifyContent: "center" ,textAlign:"justify"}}
            >
              {/* <div className="title-style-three">
                <div
                  className="sc-title text-uppercase"
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "rgb(84, 106, 236)",
                    letterSpacing: "1px",
                    marginBottom: "10px",
                  }}
                >
                  Integrates your tools
                </div>
                <h2
                  style={{
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "1.5",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                  className="max-w-md main-title fw-200"
                >
                  Kogenie leads in hyper-targeted influence
                </h2>
              </div>
              <p
                className="text-lg mt-15 mb-60 lg-mb-40"
                style={{
                  fontSize: "16px",
                  color: "gray",
                  lineHeight: "1.7",
                  marginBottom: "30px",
                }}
              >
                At Kogenie, we leverage the power of generative AI, granular data, and
                Automated A/B testing to deliver advertisements that connect on a deep,
                instinctive level with your audience. Whether you aim to drive action or
                influence emotions, we have the expertise and tools to make it happen.
              </p> */}
              </div>
              </div>
              {/* <Link
                href="/pages/about-us"
                className="btn-four fw-500"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  backgroundColor: "rgb(84, 106, 236)",
                  color: "#fff",
                  fontWeight: "500",
                  textDecoration: "none",
                  borderRadius: "5px",
                  boxShadow: "0 4px 20px rgba(84, 107, 236, 0.57)",
                  transition: "all 0.3s ease",
                  fontSize: "20px",
                  textAlign: "center"
                }}
              >
                Learn More
              </Link> */}
            </div>

            {/* Right Image Section */}
            <div
              className="col-lg-6 col-md-6"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              {/* <div
                style={{
                  width: "400px",
                  height: "300px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  overflow: "hidden",
                  marginTop: "20px"
                }}
              > */}
                {/* <Image
                  src="/kogenie-preview.jpg"
                  alt="Professional Illustration"
                  width={400}
                  height={300}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                /> */}
              </div>
            {/* </div> */}

      <div className="fancy-feature-three pt-70 lg-pt-50 md-pt-30 sm-pt-20">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Content Section */}
      <div className="col-lg-6 col-md-6"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "justify"
        }}
      >
        <div style={{ textAlign: "justify" }} className="title-style-three">
          <div
            className="sc-title text-uppercase"
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "rgb(84, 106, 236)",
              letterSpacing: "1px",
              marginBottom: "10px",
            }}
          >
            Integrates your tools
          </div>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "400",
              lineHeight: "1.5",
              color: "#333",
              marginBottom: "20px",
            }}
            className="max-w-md main-title fw-200"
          >
            Kogenie leads in hyper-targeted influence
          </h2>
        </div>
        <p
          className="text-lg mt-15 mb-60 lg-mb-40"
          style={{
            fontSize: "16px",
            color: "gray",
            lineHeight: "1.7",
            marginBottom: "30px",
            marginTop: "-30px",
          }}
        >
          At Kogenie, we leverage the power of generative AI, granular data, and
          Automated A/B testing to deliver advertisements that connect on a deep,
          instinctive level with your audience. Whether you aim to drive action or
          influence emotions, we have the expertise and tools to make it happen.
        </p>
        <Link
          href="/pages-menu/about-us-v1"
          className="btn-four fw-500"
          style={{
            display: "inline-block",
            padding: "8px 12px",
            backgroundColor: "rgb(84, 106, 236)",
            color: "#fff",
            fontWeight: "500",
            textDecoration: "none",
            borderRadius: "5px",
            boxShadow: "0 4px 15px rgba(84, 107, 236, 0.4)",
            transition: "all 0.3s ease-in-out",
            fontSize: "16px",
            textAlign: "center",
            width: "200px",
            minWidth: "100px",
            transform: "scale(1)",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1.1)";
            (e.target as HTMLElement).style.boxShadow = "0 6px 25px rgba(84, 107, 236, 0.7)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1)";
            (e.target as HTMLElement).style.boxShadow = "0 4px 15px rgba(84, 107, 236, 0.4)";
          }}
        >
          Learn More
        </Link>
      </div>

      {/* Right Video Section (FIXED) */}
    {/* Right Video Section (Updated Height) */}
<div className="col-lg-6 col-md-6"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "500px", /* Keeps the video container from overflowing */
      height: "350px", /* Increased height */
      borderRadius: "8px",
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
        height: "100%", /* Ensure it takes full height */
        objectFit: "cover",
        borderRadius: "8px",
      }}
    >
      <source src="/vecteezy_animation-of-clicking-ai-generate-button_47375600.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

      </div>
    </div>
  </div>




      <div
        className="col-xl-6 col-lg-7 col-md-6 ms-auto"
        data-aos="fade-left"
      >
        <ScreenHolder />
      </div>
     {/** Feature Section Four */}
      <div className="fancy-feature-four pt-50 lg-pt-30">
        <div style={{ marginTop: "-20px" }} className="container">
        </div>
      </div>

      <ProductTabs />

      {/* CTA Section */}
      <div
        className="row justify-content-center align-items-center"
        style={{
          marginTop: "40px",
          padding: "30px 40px",
          backgroundColor: "#F5F7FF",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          maxWidth: "750px",
          margin: "40px auto",
        }}
      >
        {/* Left Side: Text */}
        <div
          className="col-auto"
          style={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#333",
            textAlign: "center",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
              fontSize: "22px",
              color: "#2C3E50",
              fontWeight: "600",
            }}
          >
            Ready to generate Ads?
          </p>
          <p style={{ color: "#7F8C8D" }}>
            Start now by following these simple steps to create impactful ads!
          </p>
        </div>

        {/* Right Side: Button */}
        <div className="col-auto">
          <button
            style={{
              padding: "18px 60px",
              fontSize: "18px",
              fontWeight: "600",
              backgroundColor: "#546AEC",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(84, 106, 236, 0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              marginLeft: "15px", 
              marginTop: "10px"
            }}
            onMouseEnter={(e) => {
              const button = e.target as HTMLButtonElement; // Cast e.target to HTMLButtonElement
              button.style.backgroundColor = "#3C4E99"; // Darker shade on hover
              button.style.boxShadow = "0 6px 12px rgba(60, 78, 153, 0.5)";
              button.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const button = e.target as HTMLButtonElement; // Cast e.target to HTMLButtonElement
              button.style.backgroundColor = "#546AEC"; // Original color
              button.style.boxShadow = "0 4px 8px rgba(84, 106, 236, 0.4)";
              button.style.transform = "translateY(0)";
            }}
          >
            Generate Now
          </button>
        </div>
      </div>

      <style>{`
        .fancy-feature-four {
          background-color: #ffffff;
        }

        .title-style-three {
          text-align: center;
          margin-bottom: 50px;
        }

        .main-title {
          font-size: 36px;
          font-weight: 600;
          color: #2c3e50;
          line-height: 1.5;
          margin-bottom: 30px;
        }

        .main-title span {
          color: #546aec;
        }
          

        /* Responsive for small devices */
        @media (max-width: 768px) {
          .main-title {
            font-size: 30px;
            line-height: 1.4;
          }

          .cta-container {
            padding: 20px;
          }

          .cta-text {
            font-size: 16px;
          }

          .cta-button {
            padding: 15px 50px;
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 26px;
            line-height: 1.3;
          }

          .cta-container {
            padding: 20px;
          }

          .cta-button {
            padding: 12px 40px;
            font-size: 14px;
          }
        }
      `}</style>

      {/* /.container */}

      {/* Feature Section Five */}
      <div className="fancy-feature-five pt-30 lg-pt-30">
  <div className="container">
    <div className="row align-items-center">
      {/* Right Side - Content until the button */}
      <div  style={{ marginTop: "-10px",textAlign:"justify" }} className="col-lg-6 order-md-last ms-auto">
        <div style={{ marginTop: "-10px",textAlign:"justify" }} className="block-style-two pe-xxl-5 sm-mb-50" data-aos="fade-left">
          <div
            style={{
              marginLeft: "30px",
              marginRight: "30px",
            }}
            className="title-style-three"
          >
            <div
              className="sc-title text-uppercase"
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "rgb(84, 106, 236)",
                letterSpacing: "1px",
                marginBottom: "10px",
                textAlign:"justify"
              }}
            >
              Personalization of granular data
            </div>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "400",
                lineHeight: "1.5",
                color: "#333",
                marginBottom: "20px",
                textAlign:"justify"
              }}
              className="max-w-md main-title fw-200"
            >
              The power of Generative AI
            </h2>
          </div>
          <p
            className="text-lg mt-15 mb-60 lg-mb-40"
            style={{
              fontSize: "16px",
              color: "gray",
              lineHeight: "1.7",
              marginBottom: "30px",
              textAlign: "justify",
              marginLeft: "30px",
              marginRight: "30px",
            }}
          >
            Our Generative AI and Granular Data works hand in hand to create personalized, high impact advertisement that drives research.
          </p>
          {/* Move the button to the left side */}
          
  <button
    className="relative px-10 py-4 text-lg font-semibold text-white rounded-full transition-all duration-300
               bg-gradient-to-r from-[#4a5abb] to-[#8693e3] shadow-lg hover:from-[#3d4e9f] hover:to-[#6b79d1] 
               hover:shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 
               focus:ring-[#4a5abb]/50"
    style={{
      letterSpacing: "0.5px",
      boxShadow: "0 8px 15px rgba(74, 90, 187, 0.3)",
      textAlign:"center",
      marginLeft:"30px",
      borderRadius:"10px",
    }}
  >
    🚀 Join Now - It’s Free!
    <span 
      className="absolute right-3 top-3 h-3 w-3 bg-white rounded-full animate-ping"
      style={{ opacity: 0.8 }}
    ></span>
  </button>


        </div>
      </div>

      {/* Left Side - Content after the button */}
      <div style={{ marginTop: "-20px" }} className="col-lg-6 order-md-first">
        <div style={{ marginBottom: "60px" }} className="tags-wrapper position-relative stylish-container">
          <div className="circle-decor"></div>
          <div className="h3 number-highlight fw-bold">13+</div>
          <p className="reason-title">
            Reason to <span className="highlight-text">choose us</span>
          </p>
          <TagList />
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    .fancy-feature-five {
      padding: 50px 20px;  /* Reduced padding from the top */
    }

    .stylish-container {
      background: linear-gradient(135deg, rgb(137, 151, 247), rgb(237, 237, 245));
      border-radius: 15px;
      padding: 30px 25px;
      position: relative;
      color: white;
      overflow: hidden;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
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
      background: rgba(255, 255, 255, 0.2);
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
  <div style={{marginTop:"-180px"}} className="fancy-feature-six position-relative mt-225 lg-mt-100 xs-mt-80">
  <div className="container">
    <div className="row gx-xxl-5 align-items-center">
      {/* Left Section: Title and Call-to-Action */}
      <div className="col-lg-5 col-md-6 mt-40" data-aos="fade-up">
        <div style={{marginTop:"-100px"}}className="title-section mb-65 lg-mb-40">
          <h2 className="main-title">
            <span className="highlight-text">Explore</span> <br />
            Our <span className="underline-text">Exclusive Features</span>
          </h2>
          <p className="description">
            Unlock the full potential of your business with our innovative and
            tailored features designed to drive growth and success.
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
      // background: linear-gradient(135deg, #ffffff 0%, #f3f5fd 100%);
      padding: 60px 20px;
      border-radius: 20px;
      // box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .title-section {
      max-width: 500px;
    }

    .main-title {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.4;
      color: #333;
      margin-bottom: 20px;
    }

    .highlight-text {
      color: #4a5abb;
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
      background-color:#B5C0FF;
      opacity: 0.5;
      z-index: -1;
    }

    .description {
      font-size: 1rem;
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
      font-size: 1rem;
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
        font-size: 2rem;
      }

      .description {
        font-size: 0.9rem;
      }

      .cta-btn {
        font-size: 0.9rem;
      }

      
    }
  `}</style>
</div>
      {/*
        =====================================================
        Feedback Section Two
        =====================================================
        */}
   {/* <div
        style={{ marginTop: "-30px", minHeight: "1000px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} 
        className="feedback-section-two position-relative mt-170 pt-250 pb-250 lg-mt-120 lg-pt-200 lg-pb-200 sm-pt-80 sm-pb-80"
        data-aos="fade-up"
      > */}
        {/* <ClientReviews /> */}

        {/*
        =====================================================
        Fancy Short Banner Two
        =====================================================
        */}
      <div
  className="fancy-short-banner-two mt-100 lg-mt-50"
  data-aos="fade-up"
>
  <div style={{marginTop:"-100px",marginBottom:"40px"}}
   
    className="container"
  >
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderRadius: "15px",
        padding: "50px 40px",
        position: "relative",
        overflow: "hidden",
        // boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
      }}
      className="bg-wrapper ms-xxl-4 me-xxl-4"
    >
      {/* Background Patterns */}
      <div className="shapes shape-one"></div>
      <div className="shapes shape-two"></div>
      <div className="shapes shape-three"></div>

      {/* Inner Wrapper */}
      <div className="inner-wrapper m-auto">
        {/* Button at the top right */}
        <div className="text-end mb-4">
        <Link href="/contact" className="btn-six fw-500">
  Contact Us
</Link>

        </div>

        <div className="row align-items-center">
          {/* Left Section */}
          <div
            className="sc-title text-uppercase"
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "rgb(84, 106, 236)",
              letterSpacing: "1px",
              marginBottom: "10px",
            }}
          >
            Have Questions?

            <h3
              style={{
                fontSize: "2.2rem",
                fontWeight: "500",
                lineHeight: "1.4",
                color: "#333",
                margin: "0 0 20px 0",
              }}
            >
              Let us help you explore <br />
              <span
                style={{
                  color: "#546aec",
                  background: "linear-gradient(90deg, #4a5abb, #8693e3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                FAQs
              </span>{" "}
              or Contact Us!
            </h3>
          </div>

        {/* FAQ Section */}
        <div className="faq-section mt-4">
          <div className="faq-title text-center">
            <h5
              style={{
                fontSize: "1.4rem",
                fontWeight: "400",
                color: "#4a5abb",
                marginBottom: "25px",
              }}
            >
              Frequently Asked Questions
            </h5>
          </div>
          <ul style={{textAlign:"justify"}}className="faq-list">
            <li>
              <span className="faq-question">What services do you provide?</span>
              <p className="faq-answer">
                We specialize in branding, design, AI-powered solutions, and
                tailored plans to meet your business needs.
              </p>
            </li>
            <li>
              <span className="faq-question">Do you offer custom plans?</span>
              <p className="faq-answer">
                Yes, our team can create personalized plans based on your
                requirements.
              </p>
            </li>
            <li>
              <span className="faq-question">How can I get support?</span>
              <p className="faq-answer">
                You can reach out via our Contact page or email us directly.
                We&apos;re here to help!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    .bg-wrapper {
      position: relative;
      border-radius: 15px;
      overflow: hidden;
       box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .shapes {
      position: absolute;
      z-index: 0;
      opacity: 0.4;
    }

    .shape-one {
      top: -50px;
      left: -50px;
      width: 150px;
      height: 150px;
      background: rgba(84, 106, 236, 0.3);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
    }

    .shape-two {
      bottom: -50px;
      right: -50px;
      width: 100px;
      height: 100px;
      background: rgba(134, 147, 227, 0.3);
      border-radius: 50%;
      animation: float 8s ease-in-out infinite;
    }

    .shape-three {
      top: 50%;
      left: 50%;
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    @keyframes float {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(20px);
      }
    }

    .btn-six {
      display: inline-block;
      padding: 14px 35px;
      background: linear-gradient(135deg, #546aec, #8693e3);
      color: #fff;
      font-weight: 600;
      font-size: 1.1rem;
      border-radius: 25px;
      box-shadow: 0 8px 20px rgba(84, 106, 236, 0.3);
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .btn-six:hover {
      background: linear-gradient(135deg, #3c4e99, #4a5abb);
      box-shadow: 0 10px 30px rgba(74, 90, 187, 0.5);
      transform: translateY(-3px);
    }

    .faq-section {
      margin-top: 40px;
      padding: 20px;
      background: rgba(247, 248, 254, 1);
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .faq-title {
      font-weight: bold;
      color: #333;
    }

    .faq-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .faq-list li {
      margin-bottom: 20px;
    }

    .faq-question {
      font-size: 1.1rem;
      font-weight: 600;
      color:rgb(154, 161, 214);
      margin-bottom: 5px;
    }

    .faq-answer {
      font-size: 0.95rem;
      color: #555;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .bg-wrapper {
        padding: 30px 20px;
      }

      h3 {
        font-size: 1.8rem;
      }

      .btn-six {
        padding: 12px 25px;
        font-size: 0.95rem;
      }

      .faq-question {
        font-size: 1rem;
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
        <div className="footer-style-two theme-basic-footer">
          <div style={{backgroundColor:"rgba(181, 192, 255, 0.1)"}} className="top-footer position-relative">
            <div className="container">
              <div className="inner-wrapper m-auto">
                <div className="row">
                  <FooterMenu />
                </div>
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
      </div>
      
</>
)}




export default SassProduct;
