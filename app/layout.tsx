"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import "../styles/index.scss";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";
import AOSInit from "@/components/AOSInit"; // ✅ Import AOSInit component

const Hotjar = dynamic(() => import("@/components/Hotjar"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });
const GA_TRACKING_ID = "G-4GSP62LCVY";
const SITE_URL = "https://www.kogenie.com"; // ✅ Defined global site URL

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      ReactGA.initialize(GA_TRACKING_ID);
      ReactGA.send({
        hitType: "pageview",
        page: pathname,
        title: document.title,
      });
    }
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON") {
        ReactGA.event({
          category: "User Interaction",
          action: "Click",
          label: target.innerText || "Unnamed Button",
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Improved Meta Description (100+ Characters) */}
        <meta
          name="description"
          content="Boost your ad performance with AI-driven insights. Optimize campaigns effortlessly with Kogenie's intelligent ad solutions to maximize ROI and engagement."
        />

        {/* ✅ Improved SEO with More Keywords */}
        <meta
          name="keywords"
          content="AI ads, ad targeting, digital marketing, ad optimization, Kogenie, advertising, campaign optimization, AI marketing"
        />
        <meta name="author" content="Kogenie" />

        {/* ✅ Open Graph Meta Tags (Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:title" content="Kogenie - AI-Powered Ads" />
        <meta
          property="og:description"
          content="Boost your ad performance with AI-driven insights. Optimize campaigns effortlessly with Kogenie's advanced ad solutions. Get started today!"
        />
        <meta
          property="og:image"
          content={`${SITE_URL}/images/kogenie-preview.jpg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={`${SITE_URL}${pathname}`} />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kogenie - AI-Powered Ads" />
        <meta
          name="twitter:description"
          content="Boost your ad performance with AI-driven insights. Try Kogenie today and maximize your campaign performance with AI technology."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/images/kogenie-preview.jpg`}
        />



        {/* ✅ Dynamic Canonical URL for Each Page */}
        <link rel="canonical" href={`${SITE_URL}${pathname}`} />

        <title>Kogenie - AI-Powered Ads</title>
      </head>
      <body className={inter.className}>
        <AOSInit /> {/* ✅ This initializes AOS animations */}
        <Hotjar /> {/* ✅ Lazy-loaded Hotjar for performance */}
        <div className="main-page-wrapper">{children}</div>
      </body>
    </html>
  );
}