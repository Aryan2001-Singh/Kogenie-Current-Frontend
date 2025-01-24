import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const FeatureData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_13.svg",
    title: "Product Catalog Management",
    description:
      "Efficiently manage and organize product data, ensuring seamless integration across multiple platforms for KOgenie clients.",
    iconWidth: 50,
    iconHeight: 50,
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_14.svg",
    title: "Brand Strategy",
    description:
      "Develop strong brand identities that resonate with target audiences, helping businesses grow their online presence.",
    iconWidth: 50,
    iconHeight: 50,
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_15.svg",
    title: "Digital Advertising",
    description:
      "Utilize advanced AI tools to optimize digital advertising campaigns, ensuring better ROI and audience targeting.",
    iconWidth: 50,
    iconHeight: 50,
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_16.svg",
    title: "E-commerce Integration",
    description:
      "Simplify the process of integrating your e-commerce platform with KOgenie’s tools to streamline operations and sales.",
    iconWidth: 50,
    iconHeight: 50,
  },
  {
    id: 5,
    iconSrc: "/images/icon/icon_17.svg",
    title: "Data Analytics",
    description:
      "Leverage data analytics to gain insights into customer behavior and market trends, enabling data-driven decision-making.",
    iconWidth: 50,
    iconHeight: 50,
  },
];

const Features = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="features-wrapper">
      {/* Left Vertical Line */}
      <div className="vertical-line left">
        <button className="scroll-button left" onClick={scrollLeft}>
          <i className="bi bi-chevron-left"></i>
        </button>
      </div>

      {/* Features Row */}
      <div className="features-container" ref={containerRef}>
        {FeatureData.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-inner">
              {/* Front Side */}
              <div className="feature-front">
                <div className="icon-container">
                  <Image
                    src={feature.iconSrc}
                    alt={feature.title}
                    width={feature.iconWidth}
                    height={feature.iconHeight}
                  />
                </div>
                <h4 className="title">{feature.title}</h4>
              </div>
              {/* Back Side */}
              <div className="feature-back">
                <p className="description">{feature.description}</p>
                <Link href="/pages-menu/service-details" className="cta-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Vertical Line */}
      <div className="vertical-line right">
        <button className="scroll-button right" onClick={scrollRight}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      <style jsx>{`
        .features-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .features-container {
          display: flex;
          flex-wrap: nowrap;
          gap: 15px;
          overflow-x: hidden; /* Hide horizontal scrollbar */
          overflow-y: hidden; /* Hide vertical scrollbar */
          scroll-behavior: smooth;
          width: 100%;
        }

        .feature-card {
          width: 220px;
          height: 220px;
          perspective: 1000px;
          flex-shrink: 0;
        }

        .scroll-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(134, 129, 237, 0.24);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: background 0.3s ease;
        }

        .scroll-button.left {
          left: 50%; /* Stick to the vertical line */
        }

        .scroll-button.right {
          right: -30px;
        }

        .vertical-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 5px;
          background:rgba(13, 13, 14, 0.25);
          z-index: 15;
        }

        .vertical-line.left {
          left: 0;
        }

        .vertical-line.right {
          right: 0;
        }

        @media (max-width: 768px) {
          .scroll-button {
            width: 30px;
            height: 30px;
            font-size: 1.2rem;
          }

          .feature-card {
            width: 200px;
            height: 200px;
          }

          .title {
            font-size: 0.9rem;
          }

          .description {
            font-size: 0.8rem;
          }
        }
        .features-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .features-container {
          display: flex;
          flex-wrap: nowrap;
          gap: 15px;
          overflow-x: hidden; /* Hide horizontal scrollbar */
          overflow-y: hidden; /* Hide vertical scrollbar */
          scroll-behavior: smooth;
          width: 100%;
        }

        .feature-card {
          width: 220px;
          height: 220px;
          perspective: 1000px;
          flex-shrink: 0;
        }

        .feature-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.8s ease;
          border-radius: 12px;
        }

        .feature-card:hover .feature-inner {
          transform: rotateY(180deg); /* Rotate on hover */
        }

        .feature-front,
        .feature-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 15px;
          text-align: center;
        }

        .feature-front {
          background: linear-gradient(135deg, rgba(172, 173, 240, 0.7), rgb(246, 221, 221));
          color: #fff;
          box-shadow: 0 8px 15px rgba(74, 106, 236, 0.4);
          position: relative; 
        }

        .feature-front::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent);
          z-index: 0;
        }

        .icon-container {
          margin-bottom: 10px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          padding: 10px;
          position: relative;
          z-index: 1;
        }

        .title {
          font-size: 1rem;
          font-weight: 600;
          z-index: 1;
          position: relative;
        }

        .feature-back {
          transform: rotateY(180deg);
          background: #ffffff;
          color: #4a5abb;
          border: 1px solid #ddd;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .description {
          font-size: 0.85rem;
          color: #555;
          line-height: 1.5;
          margin-bottom: 15px;
        }

        .cta-link {
          font-size: 0.85rem;
          color: #4a5abb;
          font-weight: 500;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }

        .cta-link:hover {
          color: #3c4e99;
        }

        .scroll-button {
          position: absolute;
          top: 20%;
          background:rgba(118, 118, 211, 0.74);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: background 0.3s ease;
          z-index: 10;
        }
        .feature-front {
    position: relative;
  
    color: #fff;
    border-radius: 12px;
    overflow: hidden;
    z-index: 1;
  }

  .background-blur-mirror {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    background: inherit; /* Inherit the gradient from the parent */
    transform: scaleY(-1); /* Mirror the background */
    filter: blur(15px); /* Add blur effect */
    opacity: 0.5; /* Reduce opacity for a subtle effect */
    z-index: 0;
  }

  .icon-container {
    position: relative;
    z-index: 1; /* Place above the blur effect */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    padding: 10px;
  }

  .title {
    position: relative;
    z-index: 1; /* Place above the blur effect */
    font-size: 1rem;
    font-weight: 600;
  }

  .feature-front::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
    z-index: 0;
  }
        .scroll-button.left {
          left: -20px;
        }

        .scroll-button.right {
          right: -20px;
        }

        .scroll-button:hover {
          background: #3c4e99;
        }

        @media (max-width: 768px) {
          .scroll-button {
            width: 30px;
            height: 30px;
            font-size: 1.2rem;
          }

          .feature-card {
            width: 200px;
            height: 200px;
          }

          .title {
            font-size: 0.9rem;
          }

          .description {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Features;
