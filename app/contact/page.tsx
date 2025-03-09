"use client";
import React from "react";
import ContactForm4 from "@/components/contact/ContactForm";
import Map2 from "@/components/contact/Map";
import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Head from "next/head";

const ContactV4 = () => {
  return (
    <>
      {/* ✅ SEO Optimization */}
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

      {/* ✅ Header */}
      <Header />

      {/* ✅ Contact Page UI */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 mt-16">
        {/* Page Title */}
        <div style={{ marginTop: "150px" }} className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            Get in <span className="text-[#4a5abb]">Touch</span>
          </h2>
          <p className="text-gray-700 mt-3 text-lg max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-gray-900">
              AI can be overwhelming!
            </span>
            Whether you&apos;re looking for answers, exploring AI-driven ad
            personalization, or just want to say{" "}
            <span className="text-indigo-600 font-medium">hello</span>,
            we&apos;re here to help.
          </p>
        </div>
        {/* ✅ Contact Info & Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: Contact Details & Map */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col h-full transition-all hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              📍 Contact Information
            </h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
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
                <p className="text-gray-800 font-medium">+91-XXXXXXXXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-[#4a5abb] text-xl"></i>
                <p className="text-gray-800 font-medium">Delhi, India</p>
              </div>
            </div>

            {/* ✅ Embedded Google Map Section */}
            <div className="w-full h-[280px] mt-5 rounded-lg overflow-hidden shadow-md">
              <Map2 />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-all hover:shadow-xl flex flex-col justify-between h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              💬 Send Us a Message
            </h3>
            <ContactForm4 />
          </div>
        </div>
      </div>

      {/* ✅ Footer */}
      <div className="footer-style-two theme-basic-footer mt-12">
        <div className="container mx-auto px-6">
          <FooterMenu />
        </div>
        <CopyrightFooter2 />
      </div>
    </>
  );
};

export default ContactV4;
