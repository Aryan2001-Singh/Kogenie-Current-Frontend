import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import components to load only on the client-side
const Header = dynamic(() => import("@/components/home-page/home-6/Header"), { ssr: false });
const Block2 = dynamic(() => import("@/components/services/Block2"), { ssr: false });
const Faq4 = dynamic(() => import("@/components/faqs/Faq4"), { ssr: false });
const CallToActions = dynamic(() => import("@/components/services/CallToActions"), { ssr: false });
const FooterMenu = dynamic(() => import("@/components/home-page/home-6/FooterMenu"), { ssr: false });
const CopyrightFooter2 = dynamic(() => import("@/components/footer/CopyrightFooter2"), { ssr: false });

const ServiceV4 = () => {
  return (
    <>
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

              <div className="col-lg-7 ms-auto" data-aos="fade-left">
                <div className="bg-white pe-3 ps-3 pe-lg-5 ps-lg-5 pt-15 pb-15 ms-xxl-4 rounded-3 md-mt-40">
                  <Faq4 />
                </div>
              </div>
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
