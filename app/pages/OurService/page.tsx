'use client';
import dynamic from "next/dynamic";
import Image from "next/image";
import Head from "next/head";

// Dynamically import components to load only on the client-side
const Header = dynamic(() => import("@/components/home-page/home-6/Header"), {
  ssr: false,
});
const Block2 = dynamic(() => import("@/components/services/Block2"), {
  ssr: false,
});
const CallToActions = dynamic(
  () => import("@/components/services/CallToActions"),
  { ssr: false }
);
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
      <section className="relative py-20 px-6 lg:px-20 bg-gradient-to-b from-white to-indigo-50 text-gray-900">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* ✅ Left Content Section */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left" data-aos="fade-right">
          <h3 style={{color:"#4A59BA"}} className="text-3xl font-semibold  tracking-wide uppercase">
            What Sets Us Apart?
          </h3>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            The <span style={{color:"#546aec"}}className="text-indigo-600">Smartest Choice</span> for AI-Powered Growth.
          </h2>
          <p className="text-lg text-gray-700">
            We help businesses **achieve exponential growth** with AI-powered tools,
            automated workflows, and data-driven marketing strategies.
          </p>
          
          {/* ✅ CTA Button */}
          <a 
            href="/contact" 
            className="inline-block mt-6 px-8 py-4 text-lg font-semibold text-white bg-[#4a5abb]  shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Get Started with KOgenie →
          </a>

          {/* ✅ Decorative Shape */}
          <Image
            src="/images/shape/shape_179.svg"
            alt="shape"
            width={90}
            height={30}
            className="hidden lg:block mt-6 opacity-80 transition-transform transform hover:scale-110"
          />
        </div>

        {/* ✅ Right Decorative & Shape Section */}
        <div className="lg:w-1/2 relative flex justify-center mt-12 lg:mt-0" data-aos="fade-left">
          <div className="relative w-80 h-80">
            
            {/* ✅ Floating Background Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 opacity-20 blur-2xl animate-pulse"></div>

            {/* ✅ Floating Shapes */}
            <Image
              width={40}
              height={40}
              src="/images/shape/shape_11.svg"
              alt="shape"
              className="absolute top-0 left-10 animate-float"
            />
            <Image
              width={50}
              height={45}
              src="/images/shape/shape_13.svg"
              alt="shape"
              className="absolute bottom-0 right-10 animate-float-reverse"
            />
            <Image
              width={35}
              height={35}
              src="/images/shape/shape_10.svg"
              alt="shape"
              className="absolute top-10 right-16 animate-float"
            />
            <Image
              width={45}
              height={45}
              src="/images/shape/shape_12.svg"
              alt="shape"
              className="absolute bottom-8 left-14 animate-float-reverse"
            />
          </div>
        </div>
      </div>
    </section>

      {/* Call To Actions */}
      <CallToActions />

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
