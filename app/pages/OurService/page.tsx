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
const CopyrightFooter2 = dynamic(
  () => import("@/components/footer/CopyrightFooter2"),
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
      <div className="fancy-feature-one pt-120 lg-pt-90">
        <div className="container">
          <h2
            style={{
              fontSize: "5rem",
              justifyContent: "center",
              textAlign: "center",
              marginBottom: "2rem",
            }}
            className="main-title font-recoleta fw-normal tx-dark"
          >
            Our Services
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-6 aos fadeInLeft">
              <div className="title-style-one text-center text-lg-start">
                <h2 className="main-title fw-bold tx-dark m0">
                  Delivering <span>Innovative</span> Solutions.
                </h2>
              </div>
            </div>
            <div className="col-lg-5 ms-auto aos fadeInRight">
              <p className="text-lg text-center text-lg-start md-pt-30 m0">
                At KOgenie, we help businesses grow by providing cutting-edge
                solutions in product catalog management, digital marketing, and
                data analytics.
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-120 lg-pt-80 md-pt-60">
          <div className="row gx-xxl-5">
            <Block2 />
          </div>
        </div>
      </div>

      {/* Feature Section Fifty Four */}
      <div className="fancy-feature-fiftyFour p-30 mt-50 lg-mt-40">
        <div className="bg-wrapper position-relative zn2 pt-110 lg-pt-80 pb-110 lg-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <div className="title-style-one">
                  <div
                    style={{
                      fontSize: "50px",
                      fontWeight: "bolder",
                      color: "black",
                    }}
                    className="sc-title text-uppercase"
                  >
                    Why KOgenie?
                  </div>
                  <h2 className="main-title fw-bold tx-dark">
                    Why <span>Choose</span> KOgenie.
                  </h2>
                </div>
                <p className="text-lg mt-40 lg-mt-20">
                  We empower businesses by offering tailored e-commerce and
                  digital marketing solutions to meet their unique needs.
                </p>
                <Image
                  src="/images/shape/shape_179.svg"
                  alt="shape"
                  width={90}
                  height={30}
                  className="lazy-img d-none d-lg-block mt-40"
                />
              </div>

              <div className="col-lg-7 ms-auto" data-aos="fade-left"></div>
            </div>
          </div>

          <Image
            width={8}
            height={8}
            src="/images/shape/shape_11.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <Image
            width={18}
            height={16}
            src="/images/shape/shape_13.svg"
            alt="shape"
            className="lazy-img shapes shape-two"
          />
          <Image
            width={8}
            height={8}
            src="/images/shape/shape_10.svg"
            alt="shape"
            className="lazy-img shapes shape-three"
          />
          <Image
            width={10}
            height={10}
            src="/images/shape/shape_12.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
          />
        </div>
      </div>

      {/* Call To Actions */}
      <CallToActions />

      {/* Footer */}
      <div className="footer-style-two theme-basic-footer">
        <div className="top-footer position-relative">
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <FooterMenu />
              </div>
            </div>
          </div>
        </div>

        <CopyrightFooter2 />
      </div>
    </>
  );
};

export default ServiceV4;
