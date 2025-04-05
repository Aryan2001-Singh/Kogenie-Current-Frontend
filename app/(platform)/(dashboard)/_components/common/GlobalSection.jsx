"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GlobalSection() {
  return (
    <>
      <section className="relative py-20 px-6 lg:px-20 bg-gradient-to-b from-white to-indigo-50 text-gray-900">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* ✅ Left Content Section with Animation */}
          <motion.div
            className="lg:w-1/2 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Make{" "}
              <span style={{ color: "#546aec" }} className="text-indigo-600">
                your Ads
              </span>{" "}
              work as hard as you do.
            </h2>
            <p className="text-lg text-gray-700">
              Let KOgenie make your ads that bring right audience and better
              sales. Let’s go get them start free-
            </p>

            {/* ✅ CTA Button */}
            <a
              href="/sign-up"
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
          </motion.div>

          {/* ✅ Right Decorative & Shape Section with Animation */}
          <motion.div
            className="lg:w-1/2 relative flex justify-center mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
