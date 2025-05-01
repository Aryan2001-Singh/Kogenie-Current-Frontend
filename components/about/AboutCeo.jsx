"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CEOSection = () => {
  return (
    <div className="row align-items-center pt-1 pb-5 px-3 font-['Poppins']">

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
            maxWidth: "320px",
            height: "400px",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(to bottom, #f5f7ff, #ffffff)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            border: "1.5px solid #e0e0e0",
            marginLeft:"30px",
          }}
        >
          <Image
            src="/images/team/ceo.jpg"
            alt="CEO"
            width={320}
            height={400}
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
            marginLeft: "30px",
          }}
        >
          Building a Business That Builds a Better World
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#333",
            lineHeight: "1.9",
            textAlign: "justify",
            marginLeft: "30px",
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
  className="mt-4 ml-8 px-8 py-3 rounded-xl text-xl font-semibold text-white 
             bg-gradient-to-r from-[#546aec] to-[#7b8df6] backdrop-blur-md shadow-md 
             transition duration-300 hover:scale-100 hover:shadow-xl 
             hover:from-[#3f4ed4] hover:to-[#6c7eea]"
>
  Letter to Investors
</Link>

      </motion.div>
    </div>
  );
};

export default CEOSection;
