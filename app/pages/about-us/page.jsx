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
import GlobalSection from "../../(platform)/(dashboard)/_components/common/GlobalSection";
import ContactUsSection from "./ContactUs/page.jsx";

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
                    <p className="text-sm text-justify text-gray-600">
                      {step.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div
        style={{ marginTop: "2px" }}
        className="row align-items-center py-5 px-3"
      >
        {/* Left Section - Floating Card with Hero Presence */}
        <motion.div
          className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-5 mb-lg-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "340px",
              height: "480px",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              background: "linear-gradient(to bottom, #f5f7ff, #ffffff)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              border: "1.5px solid #e0e0e0",
            }}
          >
            <Image
              src="/images/team/ceo.jpg"
              alt="CEO"
              width={340}
              height={480}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
                filter: "brightness(0.95)",
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                backgroundColor: "rgba(255,255,255,0.85)",
                padding: "16px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#111" }}>
                Saikat Sengupta
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#555",
                  marginBottom: "6px",
                }}
              >
                Founder & CEO, KOgenie
              </p>
              <p
                style={{
                  fontSize: "12px",
                  fontStyle: "italic",
                  color: "#546aec",
                }}
              >
                &ldquo;We build to solve. We solve to empower.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          className="col-lg-7 col-md-6 col-sm-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "1.4",
              color: "#0f1113",
              marginBottom: "24px",
            }}
          >
            Building a Business That Builds a Better World
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.9",
              textAlign: "justify",
            }}
          >
            Starting a business—running a business—is about something much
            bigger. It’s about solving real problems. Making people’s lives
            better.
            <br />
            <br />
            At <strong style={{ color: "#4A5ABB" }}>KOgenie</strong>, our
            journey is rooted in real-world impact. We don’t stop at one
            solution—we use trust and momentum to go deeper, reach further, and
            empower more.
            <br />
            <br />
            That’s who we are. That’s what we stand for. We’re not just building
            a company. We’re building a mission to make life better—for
            everyone.
          </p>

          <Link
            href="/pages/about-us/Letter-to-investor"
            className="btn btn-primary mt-4"
            style={{
              background: "#546aec",
              color: "#fff",
              padding: "12px 30px",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 600,
              boxShadow: "0 6px 16px rgba(84, 106, 236, 0.25)",
              textDecoration: "none",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#3948c4";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#546aec";
            }}
          >
            Letter to Investors
          </Link>
        </motion.div>
      </div>

      <div className="fancy-feature-three pt-6 lg:pt-4 md:pt-3 sm:pt-2 mt-30">
        <div className="container">
          <motion.div
            className="row align-items-center"
            style={{ textAlign: "center", marginBottom: "50px" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="col-lg-12 col-md-12">
              <div className="title-style-three">
                <h2
                  style={{
                    fontSize: "36px",
                    fontWeight: "500",
                    lineHeight: "1.5",
                    color: "#333",
                    marginTop: "10px",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                  className="main-title fw-200"
                >
                  We’re not trying to fix marketing.{" "}
                  <span style={{ color: "black", fontWeight: "600" }}>
                    We’re here to free it.
                  </span>
                </h2>
              </div>
              <p
                className="text-lg mt-15 mb-60 lg-mb-40"
                style={{
                  fontSize: "16px",
                  color: "rgba(0, 0, 0, 0.74)",
                  lineHeight: "1.7",
                  marginBottom: "30px",
                  maxWidth: "700px",
                  margin: "0 auto",
                  marginTop: "40px",
                }}
              >
                Our job, literally! KOgenie{" "}
                <span
                  style={{
                    color: "#546aec",
                    fontWeight: "600",
                    background: "linear-gradient(to right, #eaefff, #f4f7ff)",
                    padding: "2px 6px",
                    borderRadius: "6px",
                  }}
                >
                  creates ads so personal, they feel like stories—not
                  promotions.
                </span>{" "}
                So you can stop worrying about the failed campaigns and focus
                entirely on what you do best—building something incredible.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
              marginTop: "50px",
              textAlign: "justify",
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
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
          </motion.div>
        </div>
      </div>
      <motion.div
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
          marginTop: "80px",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Section with Blurred Image */}
        <motion.div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "500px",
            minWidth: "280px",
            height: "280px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
        </motion.div>

        {/* Right Section with Text Containers */}
        <motion.div
          style={{
            width: "100%",
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            position: "relative",
          }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            {
              icon: "fa-bullseye",
              title: (
                <span
                  style={{ fontSize: "16px", fontWeight: "600", color: "#333" }}
                >
                  Our Aim?
                </span>
              ),
              text: (
                <>
                  Most companies focus on themselves.{" "}
                  <strong style={{ color: "black", fontWeight: "500" }}>
                    We care about one thing: you.
                  </strong>
                </>
              ),
              bgColor: "rgba(255, 255, 255, 0.6)",
              iconColor: "#546aec",
            },
            {
              icon: "fa-cogs",
              title: (
                <span style={{ color: "#000", fontWeight: "bold" }}>
                  Our job?
                </span>
              ),
              text: (
                <>
                  To give you the{" "}
                  <strong style={{ color: "black", fontWeight: "500" }}>
                    tools to make your product better and sharper.
                  </strong>
                </>
              ),
              bgColor: "rgba(255, 255, 255, 0.6)",
              iconColor: "#546aec",
            },
            {
              icon: "fa-star",
              title: (
                <span
                  style={{ fontSize: "16px", fontWeight: "600", color: "#333" }}
                >
                  It’s not about us.
                </span>
              ),
              text: (
                <>
                  It’s about{" "}
                  <strong style={{ color: "black", fontWeight: "500" }}>
                    what you can achieve.
                  </strong>
                </>
              ),
              bgColor: "rgba(255, 255, 255, 0.6)",
              iconColor: "#546aec",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              style={{
                backgroundColor: item.bgColor,
                padding: "20px",
                boxShadow: "0 6px 20px rgba(145, 145, 147, 0.44)",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
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
                {item.title}
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    color: "gray",
                    lineHeight: "1.7",
                    marginTop: "8px",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text & Link */}
        <motion.div
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: "20px",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
            onMouseLeave={(e) => (e.target.style.color = "rgba(0, 0, 0, 0.7)")}
          >
            With KOgenie, the world will see you.
            <span style={{ color: "#546aec", fontWeight: "600" }}>
              {" "}
              And they’ll click.
            </span>
          </a>
        </motion.div>
      </motion.div>
      {/* Team Section */}
      <div className="w-full bg-gray-50 py-16 flex flex-col items-center">
        <div
          style={{ margin: "30px" }}
          className="max-w-full w-full px-4 sm:px-6 lg:px-8"
        >
          <TeamCards />
        </div>
      </div>
      <ContactUsSection />
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

export default AboutUsV1;
