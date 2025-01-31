"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";
import "./globals.css";
import { Inter } from "next/font/google";
import Aos from "aos";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";
import Hotjar from "@/components/Hotjar"; // ✅ Import Hotjar Component

const inter = Inter({ subsets: ["latin"] });
const GA_TRACKING_ID = "G-4GSP62LCVY"; // 🔹 Replace with your GA4 ID

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      Aos.init({ duration: 1200 });

      // ✅ Initialize Google Analytics
      ReactGA.initialize(GA_TRACKING_ID);
      ReactGA.send({ hitType: "pageview", page: pathname });
    }
  }, [pathname]); // Tracks route changes

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      ReactGA.event({
        category: "User Interaction",
        action: "Click",
        label: target.tagName, // Logs what was clicked (Button, Link, etc.)
      });
    };

    // ✅ Add click event listener
    document.addEventListener("click", handleClick);

    return () => {
      // ✅ Cleanup to prevent memory leaks
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Hotjar /> {/* ✅ Add Hotjar for heatmaps & session tracking */}
        <div className="main-page-wrapper">
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}