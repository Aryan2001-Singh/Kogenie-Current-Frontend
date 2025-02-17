"use client";

import { useState } from "react";
import Image from "next/image";

const tabData = [
  { id: 1, title: "Plan", subtitle: "Set your goals", icon: "/task.png" },
  { id: 2, title: "Design", subtitle: "Create visuals", icon: "/design-thinking.png" },
  { id: 3, title: "Develop", subtitle: "Build your product", icon: "/growth.png" },
  { id: 4, title: "Launch", subtitle: "Go live", icon: "/startup.png" },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(1); // Ensure activeTab is used

  return (
    <div className="product-tabs">
      <ul className="tab-list">
        {tabData.map((tab) => (
          <li
            key={tab.id}
            className={`tab-item ${tab.id === activeTab ? "active" : ""}`} // Apply active class
            onClick={() => setActiveTab(tab.id)}
          >
            <Image src={tab.icon} alt={`${tab.title} icon`} width={50} height={50} />
            <h3 className="tab-title">{tab.title}</h3>
            <p className="tab-subtitle">{tab.subtitle}</p>
          </li>
        ))}
      </ul>
    
  

      <style jsx>{`
        .product-tabs {
          text-align: center;
          padding: 40px 20px;
          background:rgb(249, 249, 249);
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .tab-list {
          display: flex;
          justify-content: center;
          gap: 40px;
          list-style: none;
          padding: 0;
          margin: 40px 0;
        }

        .tab-item {
          background:rgb(255, 255, 255);
          border: 2px solid #ececec;
          border-radius: 10px;
          padding: 20px;
          width: 220px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .tab-item:hover {
          background-color: #f0f5ff;
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }

        .tab-item.animated::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(100, 46, 248, 0.2);
          opacity: 0;
          animation: fadeEffect 0.5s ease-in-out forwards;
        }

        @keyframes fadeEffect {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .tab-item.active {
          background: #546aec;
          color: #fff;
          transform: translateY(-6px);
        }

        .tab-icon {
          width: 50px;
          height: 50px;
          margin-bottom: 15px;
        }

        .tab-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 5px;
        }

        .tab-subtitle {
          font-size: 14px;
          color: #777;
        }

        @media (max-width: 768px) {
          .tab-item {
            width: 180px;
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
          .tab-list {
            flex-direction: column;
            gap: 30px;
          }

          .tab-item {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductTabs;
