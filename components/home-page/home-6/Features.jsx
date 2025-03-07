import Link from "next/link";
import { useRef, useEffect } from "react";
import {
  Package,
  Lightbulb,
  Megaphone,
  ShoppingCart,
  BarChart3,
} from "lucide-react"; // Modern Icons

const FeatureData = [
  {
    id: 1,
    icon: <Package size={45} strokeWidth={1.5} className="icon-black" />,
    title: "Product Catalog Management",
    description:
      "Efficiently manage and organize product data, ensuring seamless integration across multiple platforms for KOgenie clients.",
  },
  {
    id: 2,
    icon: <Lightbulb size={45} strokeWidth={1.5} className="icon-black" />,
    title: "Brand Strategy",
    description:
      "Develop strong brand identities that resonate with target audiences, helping businesses grow their online presence.",
  },
  {
    id: 3,
    icon: <Megaphone size={45} strokeWidth={1.5} className="icon-black" />,
    title: "Digital Advertising",
    description:
      "Utilize advanced AI tools to optimize digital advertising campaigns, ensuring better ROI and audience targeting.",
  },
  {
    id: 4,
    icon: <ShoppingCart size={45} strokeWidth={1.5} className="icon-black" />,
    title: "E-commerce Integration",
    description:
      "Simplify the process of integrating your e-commerce platform with KOgenie’s tools to streamline operations and sales.",
  },
  {
    id: 5,
    icon: <BarChart3 size={45} strokeWidth={1.5} className="icon-black" />,
    title: "Data Analytics",
    description:
      "Leverage data analytics to gain insights into customer behavior and market trends, enabling data-driven decision-making.",
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const firstCard = container.children[0];
      const cardWidth = firstCard.getBoundingClientRect().width;

      let scrollInterval = setInterval(() => {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }, 3000);

      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <div className="features-wrapper">
      {/* Features Row */}
      <div className="features-container" ref={containerRef}>
        {[...FeatureData, ...FeatureData].map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-inner">
              {/* Front Side - Feature Name & Icon */}
              <div className="feature-front">
                {feature.icon}
                <h4 className="title">{feature.title}</h4>
              </div>

              {/* Back Side - Description & Button */}
              <div className="feature-back">
                <p className="description">{feature.description}</p>
                <Link href="/sign-up">
                  <button className="signup-btn">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .features-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
        }

        .features-container {
          display: flex;
          flex-wrap: nowrap;
          gap: 15px;
          overflow-x: auto;
          scroll-behavior: smooth;
          width: max-content;
          padding: 10px 20px;
          max-width: 100vw;
          white-space: nowrap;
          scrollbar-width: none;
        }

        .features-container::-webkit-scrollbar {
          display: none;
        }

        .feature-card {
          width: 260px;
          height: 280px;
          flex-shrink: 0;
          perspective: 1000px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          white-space: normal;
        }

        .feature-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s ease;
        }

        .feature-card:hover .feature-inner {
          transform: rotateY(180deg);
        }

        .feature-front,
        .feature-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 10px;
          border: 1px solid #f0f0f0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 15px;
          text-align: center;
          font-family: "Inter", sans-serif;
        }

        .feature-front {
          background: #f9f9f9;
          color: #333;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .icon-black {
          color: black;
        }

        .title {
          font-size: 1rem;
          font-weight: 700;
          font-family: "Inter", sans-serif;
          background: linear-gradient(90deg, #4a5abb, #4a5abb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: normal;
        }

        .feature-back {
          transform: rotateY(180deg);
          background: linear-gradient(90deg, #4a5abb, #4a5abb);
          color: #fff;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .description {
          font-size: 0.85rem;
          line-height: 1.3;
          margin-bottom: 10px;
          white-space: normal;
        }

        .signup-btn {
          background: #fff;
          color: #4a5abb;
          padding: 8px 16px;
          font-size: 0.85rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .signup-btn:hover {
          background: #e1e5f2;
        }

        @media (max-width: 768px) {
          .feature-card {
            width: 85vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Features;
