"use client";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import Header from "@/components/home-page/home-6/Header";
import React from "react";
import ContactForm4 from "@/components/contact/ContactForm";
import Map2 from "@/components/contact/Map";
import Head from "next/head";
import { motion } from "framer-motion";

const ContactV4 = () => {
  return (
    <>
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
      </Head>

      <Header />

      {/* ✅ Unified Hero Section */}
      <section
        className="relative flex items-center justify-center text-center px-6 sm:px-12 lg:px-20"
        style={{
          minHeight: "500px",
          height: "auto",
          background: "#DCE1FA",
          overflow: "hidden",
          fontFamily: "Poppins",
          padding: "80px 20px",
        }}
      >
        {/* Blurry Floating Backgrounds */}
        <div className="absolute top-[10%] left-[5%] w-[220px] h-[220px] bg-[#546aec]/40 blur-[100px] rounded-full z-0" />
        <div className="absolute bottom-[10%] right-[5%] w-[200px] h-[200px] bg-[#4ab9f3]/30 blur-[100px] rounded-full z-0" />

        {/* Floating Stars */}
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-[3px] h-[3px] bg-white opacity-40 rounded-full animate-[floatStars_4s_infinite_alternate_ease-in-out]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1
            className="font-bold leading-tight"
            style={{
              fontSize: "clamp(42px, 5vw, 64px)",
              color: "#111827",
              textShadow: "0 3px 6px rgba(0, 0, 0, 0.15)",
            }}
          >
           Get <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #3f54c6, #7b8df6)",
                WebkitBackgroundClip: "text",
              }}
            >
             in Touch
            </span>
          </h1>
          <p
  style={{
    fontSize: "clamp(18px, 2vw, 22px)",
    fontWeight: 400,
    color: "#1E2333",
    marginTop: "24px",
    fontFamily: "Poppins",
  }}
>
  <span style={{ fontWeight: 600 }}>AI can be overwhelming!</span> Whether you&apos;re looking for answers, exploring AI-driven ad personalization, or just want to say hello, we&apos;re here to help.
</p>


        </motion.div>

        <style>{`
          @keyframes floatStars {
            0% { transform: translateY(0px); opacity: 0.6; }
            100% { transform: translateY(-10px); opacity: 1; }
          }
        `}</style>
      </section>

      {/* ✅ Main Contact Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 mt-12 mb-20 font-['Poppins']">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Left: Contact Info & Map */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col h-full hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Contact Information</h3>
            <p className="text-sm text-gray-500 mb-4">
              KOGENIE E-SOLUTIONS PRIVATE LIMITED.
            </p>
            <p className="text-gray-600 mb-5">
              <span className="font-medium text-gray-800">Reach out to us</span>{" "}
              via email, phone, or visit our office.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-[#4a5abb] text-xl"></i>
                <a
                  href="mailto:support@kogenie.com"
                  className="text-gray-800 font-medium hover:text-[#4a5abb] transition"
                >
                  support@kogenie.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-[#4a5abb] text-xl"></i>
                <p className="text-gray-800 font-medium">+91-8826-132-744</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-[#4a5abb] text-xl"></i>
                <p className="text-gray-800 font-medium">Delhi, India</p>
              </div>
            </div>

            <div className="w-full h-[280px] mt-5 rounded-lg overflow-hidden shadow-md">
              <Map2 />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition flex flex-col justify-between h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Send Us a Message</h3>
            <ContactForm4 />
          </div>
        </div>
      </div>

      {/* ✅ Footer */}
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
            width: 100vw;
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

export default ContactV4;
