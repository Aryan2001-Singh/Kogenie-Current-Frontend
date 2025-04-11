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
    <meta
          name="facebook-domain-verification"
          content="icrbz3p7s2icc8r79ygu0177whyuyo"
        />
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
     <TargetAudienceCarousel/>
    

<Faq/>
<GlobalSection/>

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
