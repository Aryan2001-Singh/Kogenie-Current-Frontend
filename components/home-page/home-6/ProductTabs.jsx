"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const tabData = [
  {
    id: "sp1",
    title: "Input Audience Data",
    subtitle: "Select your target audience",
    image: "/images/media/img_06.jpg",
    width: 1214,
    height: 729,
  },
  {
    id: "sp2",
    title: "Review and Refine",
    subtitle: "A/B Testing optimizes for best possible outcomes",
    image: "/images/media/img_05.jpg",
    width: 1214,
    height: 729,
  },
  {
    id: "sp3",
    title: "Deploy and Monitor",
    subtitle: "Get analysis of insight in realtime",
    image: "/images/media/img_06.1.jpg",
    width: 1214,
    height: 730,
  },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("sp1");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabData.findIndex((tab) => tab.id === prevTab);
        const nextIndex = (currentIndex + 1) % tabData.length; // Cycle to the next tab
        return tabData[nextIndex].id;
      });
    }, 3000); // Change tab every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <ul
        className="mx-5 nav nav-tabs d-block d-md-flex justify-content-between"
        role="tablist"
        style={{ marginBottom: "10px", gap: "2px" }}
      >
        {tabData.map((tab) => (
          <motion.li
            className="nav-item"
            role="presentation"
            key={tab.id}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            style={{ marginBottom: "5px" }}
          >
            <button
              className={`nav-link ${tab.id === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
              role="tab"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 18px",
                fontSize: "18px",
                color: tab.id === activeTab ? "#fff" : "#333",
                backgroundColor: tab.id === activeTab ? "#546aec" : "rgb(255, 255, 255)",
                border: tab.id === activeTab ? "4px solid #546aec" : "4px solid #546aec",
                borderRadius: "30px",
                transition: "all 0.2s ease",
                width: "30vw",
                height: "30vh",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.35)",
                
              }}
            >
              {tab.title}
              <span style={{ fontSize: "16px", color: tab.id === activeTab ? "#fff" : "#555" }}>
                {tab.subtitle}
              </span>
            </button>
          </motion.li>
        ))}
      </ul>
      <div className="tab-content position-relative" style={{ marginTop: "10px" }}>
        {tabData.map((tab) => (
          <motion.div
            className={`tab-pane ${tab.id === activeTab ? "active show" : ""}`}
            id={tab.id}
            key={tab.id}
            initial="hidden"
            animate={tab.id === activeTab ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <Image
              src={tab.image}
              alt="media"
              className="lazy-img main-screen w-100"
              width={tab.width}
              height={tab.height}
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
            />
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        @media (max-width: 1200px) {
          ul.nav-tabs button {
            width: 40vw;
            height: 25vh;
          }
        }

        @media (max-width: 768px) {
          ul.nav-tabs {
            flex-direction: column;
            align-items: center;
          }

          ul.nav-tabs button {
            width: 70vw;
            height: 20vh;
            margin-bottom: 15px;
          }

          .tab-content {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          ul.nav-tabs button {
            width: 90vw;
            height: auto;
            padding: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default ProductTabs;
