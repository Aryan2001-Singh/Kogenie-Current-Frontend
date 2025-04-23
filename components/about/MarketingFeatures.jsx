"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "fas fa-envelope",
    title: "Personalized Messaging",
    description:
      "Deliver ads tailored to the individual, creating deeper connections with your audience.",
  },
  {
    icon: "fas fa-link",
    title: "Seamless Integration",
    description:
      "Our tools integrate effortlessly with your business, enabling streamlined solutions.",
  },
  {
    icon: "fas fa-chart-bar",
    title: "Measurable Results",
    description:
      "See the impact of your campaigns with real-time analytics and insights.",
  },
];

const MarketingFeatures = () => {
  return (
    <div className="container font-['Poppins']">
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
              creates ads so personal, they feel like stories—not promotions.
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
        {features.map((feature, index) => (
          <a
            key={index}
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
              <i className={feature.icon}></i>
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#4a5abb",
                marginBottom: "10px",
              }}
            >
              {feature.title}
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.7)" }}>
              {feature.description}
            </p>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default MarketingFeatures;
