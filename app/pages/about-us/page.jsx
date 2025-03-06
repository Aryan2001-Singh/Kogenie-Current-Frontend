"use client";
import TeamCards from "./team/page.jsx";
import Header from "@/components/home-page/home-6/Header";
import Image from "next/image";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Head from "next/head.js";
const AboutUsV1 = () => {
  return (
    <>
      {/* Header */}
      {/* ✅ Add SEO Meta Tags & Structured Data */}
      <Head>
        <title>About Us - Kogenie AI</title>
        <meta
          name="description"
          content="Learn more about Kogenie AI, our mission, vision, and how we are transforming AI-powered advertising for businesses worldwide."
        />
        <meta
          name="keywords"
          content="About Kogenie, AI advertising, AI-powered marketing, Kogenie mission, digital marketing AI"
        />
        <meta name="author" content="Kogenie AI" />

        {/* ✅ Open Graph Meta Tags (Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:title" content="About Us - Kogenie AI" />
        <meta
          property="og:description"
          content="Discover how Kogenie AI is revolutionizing AI-powered marketing and digital advertising."
        />
        <meta
          property="og:image"
          content="https://www.kogenie.com/images/about-us.jpg"
        />
        <meta property="og:url" content="https://www.kogenie.com/about-us" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Kogenie AI" />
        <meta
          name="twitter:description"
          content="We at Kogenie AI are committed to redefining advertising through artificial intelligence and innovative digital solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.kogenie.com/images/about-us.jpg"
        />

        {/* ✅ Structured Data (Schema Markup) for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kogenie AI",
              url: "https://www.kogenie.com",
              logo: "https://www.kogenie.com/images/logo.png",
              description:
                "Kogenie AI specializes in AI-powered advertising and marketing solutions.",
              foundingDate: "2024",
              founders: [
                {
                  "@type": "Person",
                  name: "Founder Name",
                },
              ],
              sameAs: [
                "https://www.facebook.com/kogenie",
                "https://twitter.com/kogenie",
                "https://www.linkedin.com/company/kogenie",
              ],
            }),
          }}
        />
      </Head>

      <Header />

      {/* Feature Section Fifty One */}
      <div className="fancy-feature-fiftyOne position-relative">
        <div
          className="hero-banner-two position-relative d-flex justify-content-center align-items-center text-center"
          style={{
            position: "relative",
            backgroundImage: "url('/blog_pic_9.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh", // Making the container full height like the header section
          }}
        >
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(84, 106, 236, 0.5)", // Blue overlay with transparency
            }}
          ></div>

          <div
            className="container position-relative d-flex flex-column align-items-center text-center"
            style={{ maxWidth: "1200px", paddingTop: "0" }}
          >
            <div className="title-style-five mb-65 md-mb-40">
              <h2
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  color: "white", // Ensuring text color is white
                  fontWeight: "600",
                  fontSize: "48px",
                  letterSpacing: "1px",
                  marginTop: "100px",
                }}
                className="main-title fw-600 tx-dark font-recoleta"
              >
                About Us
              </h2>
            </div>
            <div
              className="d-flex flex-wrap justify-content-center gap-5 mt-4"
              style={{ maxWidth: "900px" }}
            >
              <div
                className="stat-box text-center p-3 rounded shadow-lg"
                style={{
                  backgroundColor: "rgba(241, 101, 88, 0.2)",
                  borderRadius: "15px",
                  padding: "20px",
                  minWidth: "180px",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <h3
                  style={{
                    color: "white",
                    fontSize: "36px",
                    fontWeight: "700",
                  }}
                >
                  5K+
                </h3>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                >
                  Successful Campaigns
                </p>
              </div>
              <div
                className="stat-box text-center p-3 rounded shadow-lg"
                style={{
                  backgroundColor: "rgba(241, 221, 88, 0.2)",
                  borderRadius: "15px",
                  padding: "20px",
                  minWidth: "180px",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <h3
                  style={{
                    color: "white",
                    fontSize: "36px",
                    fontWeight: "700",
                  }}
                >
                  5K+
                </h3>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                >
                  Ads Generated
                </p>
              </div>
              <div
                className="stat-box text-center p-3 rounded shadow-lg"
                style={{
                  backgroundColor: "rgba(76, 185, 243, 0.2)",
                  borderRadius: "15px",
                  padding: "20px",
                  minWidth: "180px",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <h3
                  style={{
                    color: "white",
                    fontSize: "36px",
                    fontWeight: "700",
                  }}
                >
                  99%
                </h3>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                >
                  Customer Satisfaction
                </p>
              </div>
            </div>

            <p
              style={{
                color: "white",
                fontSize: "18px",
                maxWidth: "900px",
                textAlign: "center",
                lineHeight: "1.6",
                fontWeight: "300",
                textAlign: "justify",
                marginTop: "50px",
              }}
              className="about-text"
            >
              At KOgenie, we believe in the power of innovation and simplicity.
              Our mission is to empower businesses with cutting-edge tools that
              streamline advertising, boost engagement, and drive
              conversions—effortlessly. With our intuitive platform, you can
              create high-converting ads in just minutes, helping you reach your
              audience faster and more effectively. Join us on this journey
              towards smarter, more efficient marketing!
            </p>
          </div>
        </div>

        {/* <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto"> */}
        <div className="fancy-feature-three pt-120 lg-pt-80 md-pt-80 sm-pt-80">
          <div
            style={{
              borderRadius: "10px",
              padding: "30px",
              marginTop: "-100px",
            }}
            className="container"
          >
            <div className="row align-items-center">
              {/* Left Content Section */}
              <div
                className="col-lg-6 col-md-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "justify",
                }}
              >
                <div className="title-style-three mb-4">
                  <div
                    className="sc-title text-uppercase"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#546aec",
                      letterSpacing: "1.2px",
                      marginTop: "20px",
                    }}
                  >
                    Our Journey
                  </div>
                  <h2
                    style={{
                      fontSize: "38px",
                      fontWeight: "600",
                      lineHeight: "1.5",
                      color: "#333",
                      marginBottom: "20px",
                      letterSpacing: "0.5px",
                    }}
                    className="max-w-xs main-title fw-600"
                  >
                    Democratizing the Power of Marketing
                  </h2>
                </div>
                <div
                  className="text-lg mt-15 mb-60 lg-mb-40"
                  style={{
                    fontSize: "18px",
                    color: "rgba(0, 0, 0, 0.8)",
                    lineHeight: "1.8",
                    marginBottom: "30px",
                  }}
                >
                  <p>
                    In this crowded, noisy world, it&apos;s not about having the
                    loudest voice—it&apos;s about having the most meaningful
                    one. Today, the greatest products and solutions, those that
                    truly solve real problems, often go unheard because they
                    lack the budget to compete with superficial noise. But at
                    KOgenie, we&apos;re changing that. We&apos;re democratizing
                    the power of marketing and branding, making it accessible to
                    every dreamer and innovator. We&apos;re the microphone that
                    amplifies the voices of those who dare to create something
                    truly valuable.
                  </p>
                </div>

                {/* Timeline Section */}
                <div className="timeline d-flex flex-wrap gap-4">
                  <div
                    className="timeline-item text-center p-4"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(90, 103, 191, 0.33) 0%, rgba(105, 117, 195, 0.1) 100%)",

                      borderRadius: "15px",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      flex: "1",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <h4
                      style={{
                        color: "#546aec",
                        fontSize: "26px",
                        fontWeight: "700",
                      }}
                    >
                      2024
                    </h4>
                    <p
                      style={{
                        color: "#333",
                        fontSize: "16px",
                        marginTop: "10px",
                      }}
                    >
                      KOgenie was founded.
                    </p>
                  </div>
                  <div
                    className="timeline-item text-center p-4"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(90, 103, 191, 0.33) 0%, rgba(105, 117, 195, 0.1) 100%)",
                      borderRadius: "15px",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      flex: "1",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <h4
                      style={{
                        color: "#546aec",
                        fontSize: "26px",
                        fontWeight: "700",
                      }}
                    >
                      2025
                    </h4>
                    <p
                      style={{
                        color: "#333",
                        fontSize: "16px",
                        marginTop: "10px",
                      }}
                    >
                      Innovative ad platform launched.
                    </p>
                  </div>
                  <div
                    className="timeline-item text-center p-4"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(90, 103, 191, 0.33) 0%, rgba(105, 117, 195, 0.1) 100%)",
                      borderRadius: "15px",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      flex: "1",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <h4
                      style={{
                        color: "#546aec",
                        fontSize: "26px",
                        fontWeight: "700",
                      }}
                    >
                      Target
                    </h4>
                    <p
                      style={{
                        color: "#333",
                        fontSize: "16px",
                        marginTop: "10px",
                      }}
                    >
                      Reaching 5M+ ads created globally.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Section */}
              <div
                className="col-lg-6 col-md-6"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxHeight: "500px",
                    borderRadius: "12px",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                    overflow: "hidden",
                    marginTop: "20px",
                    marginLeft: "30px",
                    marginRight: "30px",
                    backgroundColor: "whitesmoke",
                  }}
                >
                  <Image
                    src="/blog_pic_9.png"
                    alt="Professional Illustration"
                    width={400}
                    height={300}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fancy-feature-three pt-6 lg:pt-4 md:pt-3 sm:pt-2">
          <div
            style={{
              borderRadius: "20px",
              padding: "50px 30px",
              position: "relative",
              overflow: "hidden",
            }}
            className="container"
          >
            {/* Decorative Background */}
            <div
              style={{
                position: "absolute",
                top: "-50px",
                right: "-80px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                zIndex: 0,
                filter: "blur(100px)",
              }}
            ></div>

            <div className="row align-items-center">
              {/* Left Image Section */}
              <div
                className="col-lg-5 col-md-6"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#fff",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  <Image
                    src="/blog_pic_9.png"
                    alt="CEO Image"
                    width={350}
                    height={350}
                    style={{
                      objectFit: "cover",
                      borderRadius: "15px",
                      marginBottom: "15px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#333",
                      margin: "10px 0",
                    }}
                  >
                    CEO Name
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.6)",
                      marginBottom: "10px",
                    }}
                  >
                    {
                      "Empowering innovation and creativity for a better tomorrow."
                    }
                  </p>
                </div>
              </div>

              {/* Right Text Section */}
              <div
                className="col-lg-6 col-md-5"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  zIndex: 1,
                  textAlign: "justify",
                }}
              >
                <div className="title-style-three">
                  <div
                    className="sc-title text-uppercase"
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "rgb(84, 106, 236)",
                      letterSpacing: "1.2px",
                      marginBottom: "10px",
                    }}
                  >
                    Our CEO
                  </div>
                  <h2
                    style={{
                      fontSize: "38px",
                      fontWeight: "600",
                      lineHeight: "1.4",
                      color: "#333",
                      marginBottom: "20px",
                    }}
                    className="main-title fw-600"
                  >
                    Leadership with Vision and Purpose
                  </h2>
                </div>
                <p
                  className="text-lg"
                  style={{
                    fontSize: "18px",
                    color: "rgba(0, 0, 0, 0.8)",
                    lineHeight: "1.8",
                    marginBottom: "30px",
                  }}
                >
                  At KOgenie, our journey is driven by solving real-world
                  problems and creating value that matters. With a clear vision
                  and commitment to innovation, we strive to empower individuals
                  and businesses to make meaningful progress and achieve their
                  goals.
                </p>
                <div>
                  <a
                    href="/letter-to-investor"
                    className="btn btn-primary"
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      color: "#546aec",
                      border: "2px solid #546aec",
                      borderRadius: "15px",
                      padding: "15px 40px",
                      textDecoration: "none",
                      fontSize: "18px",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#546aec";
                      e.target.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(255, 255, 255, 0.2)";
                      e.target.style.color = "#546aec";
                    }}
                  >
                    Letter to Investors
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fancy-feature-three pt-6 lg:pt-4 md:pt-3 sm:pt-2">
          <div className="container">
            <div
              className="row align-items-center"
              style={{ textAlign: "center", marginBottom: "50px" }}
            >
              <div className="col-lg-12 col-md-12">
                <div className="title-style-three">
                  <div
                    className="sc-title text-uppercase"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "rgb(84, 106, 236)",
                      letterSpacing: "1px",
                      marginBottom: "10px",
                    }}
                  >
                    What we do? What are we trying to solve?
                  </div>
                  <h2
                    style={{
                      fontSize: "36px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                      color: "#333",
                      marginTop: "10px",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                    className="main-title fw-200"
                  >
                    Solving Real Problems with Real Solutions
                  </h2>
                </div>
                <p
                  className="text-lg mt-15 mb-60 lg-mb-40"
                  style={{
                    fontSize: "16px",
                    color: "rgba(0, 0, 0, 0.74)",
                    lineHeight: "1.7",
                    marginBottom: "30px",
                    maxWidth: "600px",
                    margin: "0 auto",
                    marginTop: "40px",
                  }}
                >
                  Here’s to the end of marketing as we know it. Marketing—that
                  clumsy, bloated, and outdated word—is on its way out. And it
                  should be. Why? Because it’s time for something better.
                  Something seamless. Something inevitable.
                </p>
              </div>
            </div>

            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                flexWrap: "wrap",
                marginTop: "50px",
                textAlign: "justify",
              }}
            >
              {/* Feature 1 */}
              <a
                href="/personalized-messaging"
                className="feature-card text-center"
                style={{
                  textDecoration: "none",
                  padding: "20px",
                  borderRadius: "15px",
                  backgroundColor: "#f9faff",
                  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  width: "280px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 15px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div
                  style={{
                    fontSize: "36px",
                    color: "#546aec",
                    marginBottom: "15px",
                  }}
                >
                  <i className="fas fa-envelope"></i>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#4a5abb",
                    marginBottom: "10px",
                  }}
                >
                  Personalized Messaging
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.7)" }}>
                  Deliver ads tailored to the individual, creating deeper
                  connections with your audience.
                </p>
              </a>

              {/* Feature 2 */}
              <a
                href="/seamless-integration"
                className="feature-card text-center"
                style={{
                  textDecoration: "none",
                  padding: "20px",
                  borderRadius: "15px",
                  backgroundColor: "#f9faff",
                  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  width: "280px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 15px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div
                  style={{
                    fontSize: "36px",
                    color: "#546aec",
                    marginBottom: "15px",
                  }}
                >
                  <i className="fas fa-link"></i>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#4a5abb",
                    marginBottom: "10px",
                  }}
                >
                  Seamless Integration
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.7)" }}>
                  Our tools integrate effortlessly with your business, enabling
                  streamlined solutions.
                </p>
              </a>

              {/* Feature 3 */}
              <a
                href="/measurable-results"
                className="feature-card text-center"
                style={{
                  textDecoration: "none",
                  padding: "20px",
                  borderRadius: "15px",
                  backgroundColor: "#f9faff",
                  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  width: "280px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 15px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div
                  style={{
                    fontSize: "36px",
                    color: "#546aec",
                    marginBottom: "15px",
                  }}
                >
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#4a5abb",
                    marginBottom: "10px",
                  }}
                >
                  Measurable Results
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.7)" }}>
                  See the impact of your campaigns with real-time analytics and
                  insights.
                </p>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ marginBottom: "60px" }}
          className="fancy-feature-three pt-6 lg:pt-4 md:pt-3 sm:pt-2"
        >
          <div className="container">
            <div className="row align-items-center">
              {/* Text and Decorative Section */}
              <div
                className="col-lg-6 col-md-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "20px",
                  position: "relative",
                }}
              >
                {/* Decorative Circle */}
                <div
                  style={{
                    position: "absolute",
                    top: "-50px",
                    left: "-50px",
                    width: "150px",
                    height: "150px",
                    backgroundColor: "rgba(84, 106, 236, 0.1)",
                    borderRadius: "50%",
                    zIndex: 0,
                    filter: "blur(50px)",
                  }}
                ></div>

                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "40px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <h2
                    style={{
                      fontSize: "32px",
                      fontWeight: "700",
                      color: "#333",
                      marginBottom: "20px",
                    }}
                  >
                    Obstacles We Overcame
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "rgba(0, 0, 0, 0.8)",
                      lineHeight: "1.8",
                      marginBottom: "15px",
                    }}
                  >
                    Revolutionizing marketing was no easy feat. The challenge of
                    finding visionary minds who dared to think differently was
                    immense. Many people were hesitant to embrace new ideas.
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "rgba(0, 0, 0, 0.8)",
                      lineHeight: "1.8",
                    }}
                  >
                    At KOgenie, we brought together a tribe of bold innovators
                    committed to creating something unique. Our mission to make
                    marketing personal and impactful continues to drive us
                    forward.
                  </p>
                </div>
              </div>

              {/* Image and Icon Section */}
              <div
                className="col-lg-6 col-md-6"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "400px",
                    height: "400px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
                    marginTop: "30px",
                    marginLeft: "30px",
                    marginRight: "30px",
                  }}
                >
                  <Image
                    src="/challenges.jpg"
                    alt="Challenges"
                    width={400}
                    height={300}
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      backgroundColor: "rgba(84, 106, 236, 0.9)",
                      padding: "10px 20px",
                      borderRadius: "30px",
                      color: "white",
                      fontWeight: "600",
                      fontSize: "14px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Key Challenges
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-30px",
                      right: "-30px",
                      width: "150px",
                      height: "150px",
                      backgroundColor: "rgba(255, 184, 84, 0.2)",
                      borderRadius: "50%",
                      zIndex: -1,
                      filter: "blur(70px)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          gap: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1200px",
        }}
      >
        {/* Left Section with Blurred Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "400px",
            minWidth: "280px",
            height: "280px",
            overflow: "hidden",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Image
            src="/innovation.jpg"
            alt="Innovation"
            width={400}
            height={300}
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "500",
              textAlign: "center",
              backgroundColor: "rgba(84, 89, 236, 0.7)",
              padding: "10px 10px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Innovation Starts Here
          </div>
        </div>

        {/* Right Section with Text Containers and Connections */}
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            position: "relative",
          }}
        >
          {[
            {
              icon: "fa-map-marker-alt",
              title: "Where are we going?",
              text: "Most companies focus on themselves. We care about one thing: you.",
              bgColor: "rgb(255, 255, 255)",
              iconColor: "rgb(0, 0, 0)",
            },
            {
              icon: "fa-cogs",
              text: "Our job? To give you the tools to make your product better and sharper.",
              bgColor: "rgb(255, 255, 255)",
              iconColor: "rgb(0, 0, 0)",
            },
            {
              icon: "fa-star",
              text: "It's not about us. It's about what you can achieve.",
              bgColor: "rgb(255, 255, 255)",
              iconColor: "rgb(0, 0, 0)",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: item.bgColor,
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 6px 20px rgba(67, 86, 231, 0.13)",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  backgroundColor: item.iconColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "18px",
                }}
              >
                <i className={`fas ${item.icon}`}></i>
              </div>
              <div>
                {item.title && (
                  <h6
                    style={{
                      margin: "0 0 10px 0",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    {item.title}
                  </h6>
                )}
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    color: "gray",
                    lineHeight: "1.7",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "50px",
            gap: "40px",
            margin: "40px auto",
            maxWidth: "1200px",
            background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",

            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Text Section */}
          <div
            style={{
              flex: "1",
              maxWidth: "500px",
            }}
          >
            <div
              className="sc-title text-uppercase"
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#546aec",
                letterSpacing: "1px",
                marginBottom: "10px",
              }}
            >
              Personal Story
            </div>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "600",
                lineHeight: "1.5",
                color: "#333",
                marginBottom: "20px",
              }}
              className="main-title fw-600"
            >
              Dreams, Detours, and Destinations
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#555",
                marginBottom: "20px",
                textAlign: "justify",
              }}
            >
              Podcasting operational change management inside of workflows to
              establish a framework. Taking seamless key performance indicators
              offline to maximise the long tail.
            </p>
          </div>

          {/* Image Section */}
          <div
            style={{
              flex: "0.8",
              position: "relative",
              width: "350px",
              height: "300px",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(135deg, rgba(84, 106, 236, 0.6), rgba(236, 84, 92, 0.6))",
                zIndex: "-1",
              }}
            ></div>
            <Image
              src="/dream.jpg"
              alt="Person"
              width={350}
              height={300}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </div>

          {/* Bottom Text & Link */}
          <div
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <a
              href="#"
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "rgba(0, 0, 0, 0.7)",
                textDecoration: "none",
                fontStyle: "italic",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(0, 0, 0, 0.7)")
              }
            >
              With KOgenie, the world will see you.
              <span style={{ color: "#546aec", fontWeight: "600" }}>
                {" "}
                And they’ll click.
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Team Section */}
      {/* Team Section */}
      <div className="w-full bg-gray-50 py-16 flex flex-col items-start">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <TeamCards />
        </div>
      </div>

      {/* Footer */}
      <div className="footer-style-two theme-basic-footer w-full mt-16">
        {/* <div className="top-footer position-relative"> */}
        <div className="container">
          <div className="inner-wrapper m-auto">
            <div className="row">
              <FooterMenu />
            </div>
          </div>
        </div>
      </div>
      <CopyrightFooter2 />
    </>
  );
};

export default AboutUsV1;
