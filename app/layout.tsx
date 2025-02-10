"use client"

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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      ReactGA.initialize(GA_TRACKING_ID);
      ReactGA.send({ hitType: "pageview", page: pathname, title: document.title });
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
        <meta name="description" content="Create hyper-targeted AI ads with Kogenie and optimize your marketing campaigns using AI-powered insights." />
        <meta name="keywords" content="AI ads, ad targeting, digital marketing, ad optimization, Kogenie" />
        <meta name="author" content="Kogenie" />

        {/* Open Graph Meta Tags (for Facebook & LinkedIn) */}
        <meta property="og:title" content="Kogenie - AI-Powered Ads" />
        <meta property="og:description" content="Boost your ad performance with AI-driven insights. Try Kogenie today!" />
        <meta property="og:image" content="/images/kogenie-preview.jpg" />
        <meta property="og:url" content={`https://www.kogenie.com${pathname}`} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kogenie - AI-Powered Ads" />
        <meta name="twitter:description" content="Boost your ad performance with AI-driven insights. Try Kogenie today!" />
        <meta name="twitter:image" content="/images/kogenie-preview.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.kogenie.com${pathname}`} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <title>Kogenie - AI-Powered Ads</title>
      </head>
      <body className={inter.className}>
        <AOSInit /> {/* ✅ This initializes AOS animations */}
        <Hotjar /> {/* ✅ Lazy-loaded Hotjar for performance */}
        <div className="main-page-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}