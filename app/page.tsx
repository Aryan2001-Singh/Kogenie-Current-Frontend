"use client";
import React from "react";
import Header from "@/components/home-page/home-6/Header";
import Hero from "@/components/home-page/home-6/Hero";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import Head from "next/head";
import Problem from "./Problem";
import SolutionSection from "@/components/home/Solution";
import Step from "@/components/home/Step";
import FeatureInfographic from "@/components/home/FeatureInfo";
import TargetAudienceCarousel from "@/components/home/TargetAudience";
import GlobalSection from "./(platform)/(dashboard)/_components/common/GlobalSection";
import Faq from "@/components/home/FaqSection";

const SassProduct = () => {
  return (
    <>
      <Head>
        <meta name="msvalidate.01" content="57F8792775CFC7C37CFF571D7696E2E9" />
        {/* Facebook domain verification */}
        <meta
          name="facebook-domain-verification"
          content="icrbz3p7s2icc8r79ygu0177whyuyo"
        />

        {/* Basic SEO */}
        <title>AI-Powered Ad Solutions | Kogenie</title>
        <meta
          name="description"
          content="Boost ad performance with Kogenie's AI-powered solutions. Create high-converting ads effortlessly."
        />
        <meta name="author" content="KOgenie E-Solutions" />
        <link rel="canonical" href="https://www.kogenie.com/" />

        {/* Open Graph (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="AI-Powered Ad Solutions | Kogenie" />
        <meta
          property="og:description"
          content="Boost ad performance with Kogenie's AI-powered solutions."
        />
        <meta property="og:image" content="https://www.kogenie.com/images/kogenie-logo.png" />
        <meta property="og:url" content="https://www.kogenie.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Ad Solutions | Kogenie" />
        <meta
          name="twitter:description"
          content="Effortlessly create high-converting ads with AI"
        />
        <meta name="twitter:image" content="https://www.kogenie.com/images/kogenie-logo.png" />

        {/* Structured Data for Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Kogenie",
                url: "https://www.kogenie.com",
                publisher: {
                  "@type": "Organization",
                  name: "Kogenie",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.kogenie.com/images/kogenie-logo.png",
                  },
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How does Kogenie improve ad performance?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Kogenie uses AI-driven insights to optimize your ad campaigns, improving ROI and engagement.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What services does Kogenie provide?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Kogenie provides AI-powered ad solutions, helping businesses create high-converting ads effortlessly.",
                    },
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.kogenie.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://www.kogenie.com/services",
                  },
                ],
              },
            ]),
          }}
        />
      </Head>

      {/* Page Content */}
      <Header />
      <Hero />
      <Problem />
      <SolutionSection />
      <Step />
      <FeatureInfographic />
      <TargetAudienceCarousel />
      <Faq />
      <GlobalSection />

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

export default SassProduct;
