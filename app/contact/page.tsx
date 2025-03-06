import BlockContact5 from "@/components/contact/BlockContact";
import ContactForm4 from "@/components/contact/ContactForm";
import Map2 from "@/components/contact/Map";
// import DefaultFooter from "@/components/footer/DefaultFooter";
import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Head from "next/head";

const ContactV4 = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}

      {/* ✅ Add SEO Meta Tags & Structured Data */}
      <Head>
        <title>Contact Us - Kogenie AI</title>
        <meta
          name="description"
          content="Have questions about AI advertising? Get in touch with Kogenie AI for expert insights, support, and inquiries about personalized ad solutions."
        />
        <meta
          name="keywords"
          content="contact Kogenie, AI ads, AI marketing, digital advertising, AI support"
        />
        <meta name="author" content="Kogenie AI" />

        {/* ✅ Open Graph Meta Tags (Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:title" content="Contact Us - Kogenie AI" />
        <meta
          property="og:description"
          content="Have questions? Contact Kogenie AI for AI-driven advertising solutions and expert support."
        />
        <meta
          property="og:image"
          content="https://www.kogenie.com/images/contact-preview.jpg"
        />
        <meta property="og:url" content="https://www.kogenie.com/contact" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Kogenie AI" />
        <meta
          name="twitter:description"
          content="Need help? Reach out to Kogenie AI for AI-powered ad solutions and expert guidance."
        />
        <meta
          name="twitter:image"
          content="https://www.kogenie.com/images/contact-preview.jpg"
        />

        {/* ✅ Structured Data (Schema Markup) for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Us - Kogenie AI",
              url: "https://www.kogenie.com/contact",
              description:
                "Have questions about AI advertising? Contact Kogenie AI for expert support and AI-driven ad solutions.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-XXXXXXXXXX",
                contactType: "Customer Support",
                email: "support@kogenie.com",
                areaServed: "Worldwide",
                availableLanguage: ["English"],
              },
              publisher: {
                "@type": "Organization",
                name: "Kogenie",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.kogenie.com/logo.png",
                },
              },
            }),
          }}
        />
      </Head>
      <Header />
      {/* 
			=============================================
				Contact Section Four
			============================================== 
			*/}
      <div className="contact-section-four pt-180 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6 col-md-7 m-auto">
              <div
                className="title-style-fourteen text-center mb-100 lg-mb-50"
                data-aos="fade-up"
              >
                {/* <div
                  style={{
                    color: "#DB4A2B",
                  }}
                  className="sc-title"
                >
                  CONTACT US
                </div> */}
                <h2
                  style={{ top: "20px" }}
                  className="main-title font-recoleta fw-normal tx-dark"
                >
                  Looking for something ?
                </h2>

                <h2
                  style={{
                    fontSize: "30px",
                    color: "coral",
                  }}
                  className="main-title font-recoleta fw-normal tx-dark "
                >
                  Or AI Has You Feeling a Bit Confused ?
                </h2>
                <br />
                <br />

                <h2
                  style={{
                    fontSize: "18px",
                    fontStyle: "italic",
                  }}
                  className="main-title font-recoleta fw-normal tx-dark"
                >
                  We get it—AI can be a lot to take in! Whether you’re here for
                  answers, curious about our technology of creating AI-powered
                  ad personalization, or just want to say hello, you’re in the
                  right place. Drop us a line, and we’ll help you make sense of
                  it all.
                </h2>
              </div>
              {/* /.title-style-fourteen */}
              <div></div>
            </div>
          </div>

          <div className="row">
            <BlockContact5 />
          </div>
        </div>
        {/* End .container */}

        <div className="contact-meta mt-110 lg-mt-40">
          <div className="row gx-0">
            <div className="col-lg-6 order-lg-last d-flex">
              <div className="form-wrapper pt-60 lg-pt-40 pb-85 lg-pb-50 w-100">
                <div className="form-style-five">
                  <h3 className="form-title font-recoleta fw-normal pb-30 lg-pb-20">
                    Send Message.
                  </h3>
                  <ContactForm4 />
                </div>
                {/* /.form-style-five */}
              </div>
              {/* /.form-wrapper */}
            </div>
            {/* End col-lg-6 */}

            <div className="col-lg-6 order-lg-first d-flex">
              <Map2 />
            </div>
          </div>
        </div>
        {/* /.contact-meta */}
      </div>
      {/* /.contact-section-four */}
      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
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

export default ContactV4;
