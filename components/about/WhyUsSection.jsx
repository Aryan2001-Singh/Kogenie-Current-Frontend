"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WhyUsSection = () => {
  const textBlocks = [
    {
      icon: "fa-bullseye",
      title: (
        <span style={{ fontSize: "16px", fontWeight: "600", color: "#333" }}>
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
        <span style={{ fontSize: "16px", fontWeight: "600", color: "#333" }}>
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
  ];

  return (
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
        fontFamily: "Poppins",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left: Image */}
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

      {/* Right: Text Blocks */}
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
        {textBlocks.map((item, index) => (
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

      {/* Bottom Link */}
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
      </motion.div>
    </motion.div>
  );
};

export default WhyUsSection;
