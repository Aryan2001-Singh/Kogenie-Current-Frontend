'use client';
import dynamic from "next/dynamic";
import Head from "next/head";
import GlobalSection from "@/app/(platform)/(dashboard)/_components/common/GlobalSection";

// Dynamically import components to load only on the client-side
const Header = dynamic(() => import("@/components/home-page/home-6/Header"), {
  ssr: false,
});
const Block2 = dynamic(() => import("@/components/services/Block2"), {
  ssr: false,
});
const FooterMenu = dynamic(
  () => import("@/components/home-page/home-6/FooterMenu"),
  { ssr: false }
);
const ServiceV4 = () => {
  return (
    <>
      {/* ✅ Add SEO Meta Tags & Structured Data */}
      <Head>
        <title>Our Services - Kogenie AI</title>
        <meta
          name="description"
          content="Discover Kogenie AI's innovative services, including AI-powered ad creation, digital marketing, and e-commerce solutions."
        />
        <meta
          name="keywords"
          content="AI services, digital marketing, AI-powered ads, Kogenie solutions"
        />
        <meta name="author" content="Kogenie AI" />

        {/* ✅ Open Graph Meta Tags (Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:title" content="Our Services - Kogenie AI" />
        <meta
          property="og:description"
          content="Explore our AI-driven services to optimize your business with cutting-edge ad creation, marketing, and analytics."
        />
        <meta
          property="og:image"
          content="https://www.kogenie.com/images/services-preview.jpg"
        />
        <meta property="og:url" content="https://www.kogenie.com/services" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - Kogenie AI" />
        <meta
          name="twitter:description"
          content="Learn about Kogenie AI's services, including digital marketing, AI ad creation, and business analytics."
        />
        <meta
          name="twitter:image"
          content="https://www.kogenie.com/images/services-preview.jpg"
        />

        {/* ✅ Structured Data (Schema Markup) for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Kogenie AI Services",
              description:
                "AI-powered digital marketing, ad creation, and business analytics.",
              provider: {
                "@type": "Organization",
                name: "Kogenie AI",
                url: "https://www.kogenie.com",
              },
              serviceType: "AI-powered ad creation and digital marketing",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "Custom",
                availability: "https://schema.org/InStock",
                url: "https://www.kogenie.com/services",
              },
            }),
          }}
        />
      </Head>

      {/* Header */}
      <Header />

      {/* Feature Section One */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-100 text-gray-900">
  <div style={{marginTop:"80px"}}className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
    
    {/* ✅ Section Heading */}
    <h2
  className="text-5xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text"
  style={{
    backgroundImage:
      "linear-gradient(to right, rgb(77, 95, 255) 20%, rgba(74, 89, 187, 0.85) 80%)",
  }}
>
  Our Services
</h2>

    
    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
      At KOgenie, we provide cutting-edge solutions in product catalog management, digital marketing, and data analytics.
    </p>

    {/* ✅ Layout Fix: Centered Flex Grid */}
    <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
      {/* Left - Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-3/5">
        <Block2 />
      </div>
    </div>
  </div>
</section>


      {/* Feature Section Fifty Four */}
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

export default ServiceV4;
