"use client";
import { useEffect } from "react";

import TeamCards from "./team/page.jsx";
import Header from "@/components/home-page/home-6/Header";
import Image from "next/image";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import Head from "next/head.js";
import Link from "next/link.js";
import { motion } from "framer-motion";
import { FaBullseye, FaChartLine, FaRocket, FaMedal } from "react-icons/fa";

const AboutUsV1 = () => {
  useEffect(() => {
    // Floating particles effect (adds movement)
    const particles = document.querySelectorAll(".floating-particle");
    particles.forEach((particle) => {
      const speed = Math.random() * 1.5 + 0.5;
      particle.style.animationDuration = `${speed}s`;
    });
  }, []);
  const journeySteps = [
    {
      title: "You Hypertarget",
      sub: "Your product is great. It just needs the right audience. We help you find them—fast.",
      icon: <FaBullseye size={28} className="text-[#546aec]" />,
    },
    {
      title: "You make more in less",
      sub: "Your time and budget should go into building, not guessing. We help you create impactful ads—fast and affordably.",
      icon: <FaChartLine size={28} className="text-[#546aec]" />,
    },
    {
      title: "You Lead",
      sub: "With the right audience and the right message, your product leads the way. We’re just here to help it shine.",
      icon: <FaRocket size={28} className="text-[#546aec]" />,
    },
    {
      title: "You Win",
      sub: "You get more clicks, more sales, and more return—because your ads actually work.",
      icon: <FaMedal size={28} className="text-[#546aec]" />,
    },
  ];
  return (
    <>
      {/* Header */}
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
      <section
        className="about-us-section"
        style={{
          minHeight: "500px",
          height: "auto",
          background: "#DCE1FA", // Light SaaS background
          position: "relative",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          overflow: "hidden",
          marginTop: "0px",
          padding: "80px 20px",
        }}
      >
        {/* Floating Blurry Overlays for Modern SaaS UI */}
        <div
          className="blur-overlay"
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "220px",
            height: "220px",
            background: "rgba(84, 107, 236, 0.37)",
            filter: "blur(100px)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>
        <div
          className="blur-overlay"
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "200px",
            height: "200px",
            background: "rgba(76, 185, 243, 0.2)",
            filter: "blur(100px)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>

        {/* Numerous Floating Stars for SaaS Effect */}
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="floating-star"
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: "3px",
              height: "3px",
              background: "white",
              opacity: "0.4",
              borderRadius: "50%",
              animation: `floatStars ${
                Math.random() * 5 + 2
              }s infinite alternate ease-in-out`,
            }}
          ></div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div
            className="container"
            style={{ maxWidth: "1100px", position: "relative", zIndex: 2 }}
          >
            {/* Title & Content */}
            <h2
              className="fw-700"
              style={{
                fontSize: "38px",
                color: "#08090A",
                fontWeight: "700",
                letterSpacing: "0.5px",
                marginBottom: "8px",
                marginTop: "80px",
              }}
            >
              We’re KOgenie—
            </h2>

            <p
              className="about-text"
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                fontWeight: "400",
                color: "#1E2333",
                maxWidth: "800px",
                margin: "0 auto 40px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <strong style={{ color: "#4A5ABB" }}>
                Built to Change the Way Marketing Works
              </strong>
              , Make Ads that hit right to the right audience at right time.
              Powered by AI. Perfected for HyperTargeting.
            </p>
          </div>
        </motion.div>
        {/* Floating Animation for Particles */}
        <style>{`
        @keyframes floatStars {
          0% { transform: translateY(0px); opacity: 0.6; }
          100% { transform: translateY(-10px); opacity: 1; }
        }
      `}</style>
      </section>

      {/* <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto"> */}
      <div className="relative w-full py-20 px-4 sm:px-8 bg-gradient-to-r from-[#f9fafc] to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE — Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="uppercase text-sm font-semibold tracking-wide text-[#546aec] mb-3">
              Great Ideas Deserve Better Ads
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              We Make Sure Yours Break Through
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The best products (like yours) often go unnoticed—not because they
              aren’t great, but because they aren’t marketed better.
              <br />
              <strong className="text-black gap-2 mb-2 ">
                Built Something Great? Let’s Market It.
              </strong>
            </p>

            <Link href="/sign-up">
              <button className="inline-block bg-[#546aec] hover:bg-[#4253c1] text-white font-semibold py-3 px-6 rounded-xl transition duration-200 shadow-md">
                Start Creating Ads
              </button>
            </Link>
          </motion.div>

          {/* RIGHT SIDE — 2 Column Grid of Steps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  {/* Diamond Icon Box */}
                  <div className="w-10 h-10 relative flex-shrink-0">
                    <div className="w-full h-full bg-[#e6eaff] rotate-45 rounded-md shadow-sm flex items-center justify-center">
                      <div className="-rotate-45 text-[#546aec] text-lg">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="text-sm text-justify text-gray-600">{step.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="row align-items-center">
        {/* Left Image Section */}
        <div
          className="col-lg-5 col-md-6 col-sm-12 d-flex justify-content-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column", // ✅ Ensures text doesn't overlap with image
            position: "relative",
            zIndex: 1,
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "400px",

              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              textAlign: "center",
              padding: "20px",
              marginTop: "30px",
            }}
          >
            <Image
              src="/blog_pic_9.png"
              alt="CEO Image"
              width={350}
              height={250}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",

                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#333",
                margin: "10px 0",
                whiteSpace: "nowrap", // ✅ Prevents text from breaking oddly
              }}
            >
              Saikat Sengupta
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.6)",
                maxWidth: "90%", // ✅ Ensures text doesn't overflow
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              Empowering innovation and creativity for a better tomorrow.
            </p>
          </div>
        </div>

        {/* Right Text Section */}
        <div
          className="col-lg-6 col-md-5 col-sm-12"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "justify",
            paddingLeft: "20px", // ✅ Ensures spacing between image and text
          }}
        >
          <div className="title-style-three">
            <div
              className="sc-title text-uppercase"
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: "#546aec",
                letterSpacing: "1.2px",
                marginBottom: "10px",
              }}
            >
              Our CEO
            </div>
            <h2
              style={{
                fontSize: "34px",
                fontWeight: "600",
                lineHeight: "1.4",
                color: "#08090A",
                marginBottom: "20px",
                letterSpacing: "0.3px",
              }}
              className="main-title fw-600"
            >
              Leadership with Vision and Purpose
            </h2>
          </div>
          <p
            className="text-lg"
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "30px",
            }}
          >
            At <strong style={{ color: "#4A5ABB" }}>KOgenie</strong>, our
            journey is driven by solving real-world problems and creating value
            that matters. With a clear vision and commitment to innovation, we
            strive to empower individuals and businesses to make meaningful
            progress and achieve their goals.
          </p>
          <div>
            <Link
              href="/pages/about-us/Letter-to-investor"
              className="btn btn-primary"
              style={{
                background: "transparent",
                color: "#546aec",
                border: "2px solid #546aec",
                padding: "12px 32px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
                transition: "all 0.3s ease",
                display: "inline-block",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#546aec";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#546aec";
              }}
            >
              Letter to Investors
            </Link>
          </div>
        </div>
      </div>

      <div className="fancy-feature-three pt-6 lg:pt-4 md:pt-3 sm:pt-2 mt-30">
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
              href="/sign-up"
              className="feature-card text-center"
              style={{
                textDecoration: "none",
                padding: "20px",

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
              href="/sign-up"
              className="feature-card text-center"
              style={{
                textDecoration: "none",
                padding: "20px",

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
              href="/sign-up"
              className="feature-card text-center"
              style={{
                textDecoration: "none",
                padding: "20px",

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
                marginTop: "30px",
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
                  className="title-style-three"
                >
                  Obstacles We Overcame
                </h2>

                {/* Bullet Points with Visible Dots */}
                <ul
                  style={{
                    fontSize: "16px",
                    color: "rgba(0, 0, 0, 0.8)",
                    lineHeight: "1.8",
                    textAlign: "justify",
                    paddingLeft: "25px",
                    listStyleType: "disc",
                    font: "inter",
                  }}
                >
                  <li>
                    {" "}
                    Finding visionary minds willing to challenge traditional
                    marketing approaches.
                  </li>
                  <li>
                    {" "}
                    Breaking through industry norms with innovative, scalable ad
                    solutions.
                  </li>
                  <li>
                    Ensuring marketing becomes personal, impactful, and
                    accessible.
                  </li>
                  <li>
                    {" "}
                    Overcoming resistance to AI-powered advertising solutions.
                  </li>
                  <li>Building a strong team of innovators and risk-takers.</li>
                </ul>
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
                  width: "500px",
                  height: "300px",
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
                  marginTop: "60px",
                  marginLeft: "30px",
                  marginRight: "30px",
                  borderRadius: "8px", // Smooth edges
                }}
              >
                <Image
                  src="/challenges.jpg"
                  alt="Challenges"
                  width={500}
                  height={300}
                  style={{ objectFit: "cover" }}
                />

                {/* Main Challenge Label */}
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    backgroundColor: "rgba(84, 106, 236, 0.9)",
                    padding: "10px 20px",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "14px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    borderRadius: "5px",
                  }}
                >
                  Key Challenges
                </div>

                {/* Bottom Challenges Section - Transparent White Background */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    left: "0",
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.7)", // Transparent White Background
                    padding: "12px 15px",
                    textAlign: "center",
                    color: "rgba(43, 41, 41, 0.7)", // Darker text for better visibility
                    fontSize: "14px",
                    fontWeight: "600",
                    backdropFilter: "blur(5px)", // Ensures smooth blending
                  }}
                >
                  - Finding visionary minds & overcoming resistance to AI
                  adoption <br />- Breaking through industry norms with scalable
                  ad solutions <br />- Building a strong, risk-taking team &
                  making marketing impactful
                </div>

                {/* Decorative Blurry Circle */}
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
            maxWidth: "500px",
            minWidth: "280px",
            height: "280px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Image
            src="/innovation.jpg"
            alt="Innovation"
            width={500}
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
              bgColor: "rgba(255, 255, 255, 0.6)", // Transparent Off-White
              iconColor: "#546aec",
            },
            {
              icon: "fa-cogs",
              title: (
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Our job?
                </span>
              ), // ✅ "Our job?" in black
              text: "To give you the tools to make your product better and sharper.",
              bgColor: "rgba(255, 255, 255, 0.6)", // Transparent Off-White
              iconColor: "#546aec",
            },
            {
              icon: "fa-star",
              title: "It's not about us.",
              text: "It's about what you can achieve.",
              bgColor: "rgba(255, 255, 255, 0.6)", // Transparent Off-White
              iconColor: "#546aec",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: item.bgColor,
                padding: "20px",

                boxShadow: "0 6px 20px rgba(145, 145, 147, 0.44)",
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
            background: "linear-gradient(135deg, #f8f9fc, #e3e9f2)", // Softer gradient
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
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
                fontSize: "34px",
                fontWeight: "700",
                lineHeight: "1.5",
                color: "#333",
                marginBottom: "20px",
              }}
              className="main-title fw-700"
            >
              Dreams, Detours, and Destinations
            </h2>

            {/* Bullet Points Section */}
            <ul
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#555",
                marginBottom: "20px",
                textAlign: "justify",
                paddingLeft: "20px",
                listStyleType: "disc",
              }}
            >
              <li>Seamless integration of operational change management.</li>
              <li>Building a framework for sustainable business growth.</li>
              <li>Transforming ideas into impactful marketing solutions.</li>
              <li>Bringing visibility to businesses and startups worldwide.</li>
            </ul>
          </div>

          {/* Image Section */}
          <div
            style={{
              flex: "0.8",
              position: "relative",
              width: "350px",
              height: "300px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
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
                  "linear-gradient(135deg, rgba(84, 106, 236, 0.5), rgba(236, 84, 92, 0.5))",
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
              href="/sign-up"
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
      <div className="w-full bg-gray-50 py-16 flex flex-col items-center">
        <div
          style={{ margin: "30px" }}
          className="max-w-full w-full px-4 sm:px-6 lg:px-8"
        >
          <TeamCards />
        </div>
      </div>

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

export default AboutUsV1;
