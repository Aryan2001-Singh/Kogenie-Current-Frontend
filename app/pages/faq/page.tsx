'use client';
import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";

import Link from "next/link";
const Faq = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
     <div
  className="fancy-short-banner-two mt-150 lg-mt-100"
  data-aos="fade-up"
>
  <div
    style={{
      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)",
      backgroundColor:"rgb(233, 235, 246)"
    }}
    className="container"
  >
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderRadius: "15px",
        padding: "50px 40px",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
      }}
      className="bg-wrapper ms-xxl-4 me-xxl-4"
    >
      {/* Background Patterns */}
      <div className="shapes shape-one"></div>
      <div className="shapes shape-two"></div>
      <div className="shapes shape-three"></div>

      {/* Inner Wrapper */}
      <div className="inner-wrapper m-auto">
        {/* Button at the top right */}
        <div className="text-end mb-4">
          <Link href="/contact" className="btn-six fw-500">
            Contact Us
          </Link>
        </div>

        <div className="row align-items-center">
          {/* Left Section */}
          <div
            className="sc-title text-uppercase"
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "rgb(84, 106, 236)",
              letterSpacing: "1px",
              marginBottom: "10px",
            }}
          >
            Have Questions?

            <h3
              style={{
                fontSize: "2.2rem",
                fontWeight: "500",
                lineHeight: "1.4",
                color: "#333",
                margin: "0 0 20px 0",
              }}
            >
              Let us help you explore <br />
              <span
                style={{
                  color: "#546aec",
                  background: "linear-gradient(90deg, #4a5abb, #8693e3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                FAQs
              </span>{" "}
              or Contact Us!
            </h3>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section mt-4">
          <div className="faq-title text-center">
            <h5
              style={{
                fontSize: "1.4rem",
                fontWeight: "400",
                color: "#4a5abb",
                marginBottom: "25px",
              }}
            >
              Frequently Asked Questions
            </h5>
          </div>
          <ul className="faq-list">
            <li>
              <span className="faq-question">What services do you provide?</span>
              <p className="faq-answer">
                We specialize in branding, design, AI-powered solutions, and
                tailored plans to meet your business needs.
              </p>
            </li>
            <li>
              <span className="faq-question">Do you offer custom plans?</span>
              <p className="faq-answer">
                Yes, our team can create personalized plans based on your
                requirements.
              </p>
            </li>
            <li>
              <span className="faq-question">How can I get support?</span>
              <p className="faq-answer">
                You can reach out via our Contact page or email us directly.
                We&apos;re here to help!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    .bg-wrapper {
      position: relative;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .shapes {
      position: absolute;
      z-index: 0;
      opacity: 0.4;
    }

    .shape-one {
      top: -50px;
      left: -50px;
      width: 150px;
      height: 150px;
      background: rgba(84, 106, 236, 0.3);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
    }

    .shape-two {
      bottom: -50px;
      right: -50px;
      width: 100px;
      height: 100px;
      background: rgba(134, 147, 227, 0.3);
      border-radius: 50%;
      animation: float 8s ease-in-out infinite;
    }

    .shape-three {
      top: 50%;
      left: 50%;
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    @keyframes float {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(20px);
      }
    }

    .btn-six {
      display: inline-block;
      padding: 14px 35px;
      background: linear-gradient(135deg, #546aec, #8693e3);
      color: #fff;
      font-weight: 600;
      font-size: 1.1rem;
      border-radius: 25px;
      box-shadow: 0 8px 20px rgba(84, 106, 236, 0.3);
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .btn-six:hover {
      background: linear-gradient(135deg, #3c4e99, #4a5abb);
      box-shadow: 0 10px 30px rgba(74, 90, 187, 0.5);
      transform: translateY(-3px);
    }

    .faq-section {
      margin-top: 40px;
      padding: 20px;
      background: rgba(247, 248, 254, 1);
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .faq-title {
      font-weight: bold;
      color: #333;
    }

    .faq-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .faq-list li {
      margin-bottom: 20px;
    }

    .faq-question {
      font-size: 1.1rem;
      font-weight: 600;
      color: #4a5abb;
      margin-bottom: 5px;
    }

    .faq-answer {
      font-size: 0.95rem;
      color: #555;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .bg-wrapper {
        padding: 30px 20px;
      }

      h3 {
        font-size: 1.8rem;
      }

      .btn-six {
        padding: 12px 25px;
        font-size: 0.95rem;
      }

      .faq-question {
        font-size: 1rem;
      }

      .faq-answer {
        font-size: 0.85rem;
      }
    }
  `}</style>
</div>

      <DefaultFooter />
    </>
  );
};

export default Faq;
