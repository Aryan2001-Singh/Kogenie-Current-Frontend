"use client";
import { useEffect } from "react";
import TeamCards from "./team/page.jsx";
import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import Head from "next/head.js";
import GlobalSection from "../../(platform)/(dashboard)/_components/common/GlobalSection";
import ContactUsSection from "./ContactUs/page.jsx";
import AboutCeo from "@/components/about/AboutCeo";
import HeroAbout from "@/components/about/HeroAbout";
import JourneySection from "@/components/about/JourneySection";
import MarketingFeatures from "@/components/about/MarketingFeatures";
import WhyUsSection from "@/components/about/WhyUsSection";


const AboutUsV1 = () => {
  useEffect(() => {
    // Floating particles effect (adds movement)
    const particles = document.querySelectorAll(".floating-particle");
    particles.forEach((particle) => {
      const speed = Math.random() * 1.5 + 0.5;
      particle.style.animationDuration = `${speed}s`;
    });
  }, []);
  return (
    <>
      {/* Header */}
      <Head>
        <title>About Us - Kogenie AI</title>
        <meta
          name="description"
          content="Learn more about Kogenie AI, our mission, vision, and how we are transforming AI-powered advertising for businesses worldwide."
        />
        <meta
          name="keywords"
          content="About Kogenie, AI advertising, AI-powered marketing, Kogenie mission, digital marketing AI"
        />
        <meta name="author" content="Kogenie AI" />

        {/* ✅ Open Graph Meta Tags (Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:title" content="About Us - Kogenie AI" />
        <meta
          property="og:description"
          content="Discover how Kogenie AI is revolutionizing AI-powered marketing and digital advertising."
        />
        <meta
          property="og:image"
          content="https://www.kogenie.com/images/about-us.jpg"
        />
        <meta property="og:url" content="https://www.kogenie.com/about-us" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Kogenie AI" />
        <meta
          name="twitter:description"
          content="We at Kogenie AI are committed to redefining advertising through artificial intelligence and innovative digital solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.kogenie.com/images/about-us.jpg"
        />

        {/* ✅ Structured Data (Schema Markup) for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kogenie AI",
              url: "https://www.kogenie.com",
              logo: "https://www.kogenie.com/images/logo.png",
              description:
                "Kogenie AI specializes in AI-powered advertising and marketing solutions.",
              foundingDate: "2024",
              founders: [
                {
                  "@type": "Person",
                  name: "Founder Name",
                },
              ],
              sameAs: [
                "https://www.facebook.com/kogenie",
                "https://twitter.com/kogenie",
                "https://www.linkedin.com/company/kogenie",
              ],
            }),
          }}
        />
      </Head>

      <Header />
      <></>

      <HeroAbout/>
      <div className="relative w-full py-20 px-4 sm:px-8 bg-gradient-to-r from-[#f9fafc] to-white">
       <JourneySection/>
      </div>

      
      
        <AboutCeo/>
      
      <div className="fancy-feature-three pt-6 lg:pt-4 md:pt-3 sm:pt-2 mt-30">
       <MarketingFeatures/>
      </div>
     <WhyUsSection/>
      {/* Team Section */}
      <div className="w-full bg-gray-50 py-16 flex flex-col items-center">
        <div
          style={{ margin: "30px" }}
          className="max-w-full w-full px-4 sm:px-6 lg:px-8"
        >
          <TeamCards />
        </div>
      </div>
      <ContactUsSection />
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

export default AboutUsV1;
