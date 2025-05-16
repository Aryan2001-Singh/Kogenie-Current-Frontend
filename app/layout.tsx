"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import "../styles/index.scss";
import "./globals.css";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";
import AOSInit from "@/components/AOSInit"; // ✅ Import AOSInit component
import { ClerkProvider } from "@clerk/nextjs";
import HeadFallback from "@/components/HeadFallback";

const Hotjar = dynamic(() => import("@/components/Hotjar"), { ssr: false });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adjust as needed
  display: "swap",
});
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
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="facebook-domain-verification"
            content="icrbz3p7s2icc8r79ygu0177whyuyo"
          />
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

          {/* ✅ JSON-LD Structured Data (Fix for Google Rich Results) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Kogenie",
                url: "https://www.kogenie.com",
                description:
                  "Boost your ad performance with AI-driven insights. Optimize campaigns effortlessly with Kogenie's intelligent ad solutions to maximize ROI and engagement.",
                publisher: {
                  "@type": "Organization",
                  name: "Kogenie",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.kogenie.com/images/kogenie-logo.png",
                  },
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://www.kogenie.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
          />

          {/* ✅ Canonical URL for Each Page to Avoid Duplicates */}
          <link rel="canonical" href={`${SITE_URL}${pathname}`} />

        

          {/* ✅ Facebook Pixel Script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '668542146141471'); 
      fbq('track', 'PageView');
    `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=668542146141471&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
        </head>
       <body className={poppins.className}>
  <AOSInit />
  <Hotjar />
  <HeadFallback /> {/* ✅ Ensures one <title> is always present */}
  <div className="main-page-wrapper">{children}</div>
</body>

      </html>
    </ClerkProvider>
  );
}
