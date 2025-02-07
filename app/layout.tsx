"use client"; // ✅ Ensure this is at the top

import { useEffect } from "react";
import dynamic from "next/dynamic";
import "aos/dist/aos.css";
import Aos from "aos"; // ✅ Import normally
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";

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
      Aos.init({ duration: 1200 }); // ✅ Initialize AOS correctly
      ReactGA.initialize(GA_TRACKING_ID);
      ReactGA.send({ hitType: "pageview", page: pathname });
    }
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      ReactGA.event({
        category: "User Interaction",
        action: "Click",
        label: target.tagName,
      });
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
        <meta name="description" content="Create hyper-targeted AI ads with Kogenie." />
        <title>Kogenie - AI-Powered Ads</title>
      </head>
      <body className={inter.className}>
        <Hotjar /> {/* Lazy loaded */}
        <div className="main-page-wrapper">
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}