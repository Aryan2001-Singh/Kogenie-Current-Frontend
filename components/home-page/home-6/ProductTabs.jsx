"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const tabData = [
  { id: 1, title: "Plan", subtitle: "Set your goals", icon: "/step1.png" },
  { id: 2, title: "Design", subtitle: "Create visuals", icon: "/step2.png" },
  { id: 3, title: "Develop", subtitle: "Build your product", icon: "/step3.png" },
  { id: 4, title: "Launch", subtitle: "Go live", icon: "/step4.png" },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab % tabData.length) + 1); // Cycle through tabs
    }, 4000); // Change tab every 4 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="product-tabs">
      <div className="tab-content">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${tab.id === activeTab ? "active" : ""}`}
          >
            <h2 style={{ fontSize: "40px" }}>{tab.title}</h2>
            <p>{tab.subtitle}</p>
          </div>
        ))}
        <ul className="tab-list">
          {tabData.map((tab) => (
            <motion.li
              className={`tab-item ${tab.id === activeTab ? "active" : ""}`}
              key={tab.id}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              onClick={() => setActiveTab(tab.id)}
            >
              <Image
                src={tab.icon}
                alt={`${tab.title} icon`}
                width={50}
                height={50}
                className="tab-icon"
              />
              <h3 className="tab-title">{tab.title}</h3>
              <p className="tab-subtitle">{tab.subtitle}</p>
            </motion.li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .product-tabs {
          text-align: center;
          padding: 20px;
          margin-bottom: 30px;
        }

        .tab-list {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 100px;
          list-style: none;
          margin: 40px;
          padding: 10px 20px;
        }

        .tab-item {
          background: #f9f9f9;
          border: 2px solid #ececec;
          border-radius: 10px;
          padding: 20px;
          width: 200px;
          text-align: center;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .tab-item.active {
          background: #546aec;
          color: #fff;
          transform: translateY(-10px);
          box-shadow: 0 8px 15px rgba(84, 106, 236, 0.3);
        }

        .tab-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .tab-icon {
          width: 50px;
          height: 50px;
          margin-bottom: 10px;
        }

        .tab-title {
          font-size: 18px;
          font-weight: medium;
          margin-bottom: 5px;
          color: #546aec;
        }

        .tab-subtitle {
          font-size: 14px;
          color: #666;
        }

        .tab-content {
          margin-top: 20px;
        }

        .tab-pane {
          display: none;
          margin-bottom: 20px;
          margin-top: 20px;
        }

        .tab-pane.active {
          display: block;
        }

        @media (max-width: 768px) {
          .tab-item {
            width: 150px;
            padding: 15px;
          }

          .tab-title {
            font-size: 16px;
          }

          .tab-subtitle {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .tab-item {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductTabs;
