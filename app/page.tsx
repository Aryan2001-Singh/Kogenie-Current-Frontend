"use client";
import React from "react";
import Header from "@/components/home-page/home-6/Header";
import Hero from "@/components/home-page/home-6/Hero";
import Link from "next/link";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import Head from "next/head";
import Problem from "./Problem";
import SolutionSection from "@/components/home/Solution";
import Step from "@/components/home/Step";

import FeatureInfographic from "@/components/home/FeatureInfo";

const SassProduct = () => {
  return (

    <>
    <Head>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Kogenie",
        "url": "https://www.kogenie.com",
        "publisher": {
          "@type": "Organization",
          "name": "Kogenie",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.kogenie.com/images/kogenie-logo.png"
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does Kogenie improve ad performance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kogenie uses AI-driven insights to optimize your ad campaigns, improving ROI and engagement."
            }
          },
          {
            "@type": "Question",
            "name": "What services does Kogenie provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kogenie provides AI-powered ad solutions, helping businesses create high-converting ads effortlessly."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.kogenie.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.kogenie.com/services"
          }
        ]
      }
    ])
  }}
/>
    </Head>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />
      <Problem/>
      <SolutionSection/>
      <Step/>

    
     <FeatureInfographic/>
    

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

        {/* Footer */}
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

export default SassProduct;
