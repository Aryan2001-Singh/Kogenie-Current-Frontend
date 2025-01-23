"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="20QUNgFIrK0"
        onClose={() => setOpen(false)}
      />

      <div
        className="hero-banner-two position-relative pt-170 lg-pt-200 md-pt-150"
        style={{ position: "relative" }}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
            zIndex: "-1",
            backgroundColor: "rgba(255, 255, 255, 0)",
            backdropFilter: "blur(50px)",
            // border: "1px solid rgba(255, 255, 255, 0.2)",
            pointerEvents: "none",

          }}
        >
          <source src="/vecteezy_4k-light-grey-abstract-moving-geometri-with-white-dots_55005964.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container">
          <div className="row">
            <div
              style={{
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(100, 110, 254, 0.2)",
                backgroundColor: "rgba(134, 147, 227, 0.2)",
                backdropFilter: "blur(20px)",
                padding: "30px",
                margin: "20px",
              }}
              className="col-lg-8 col-md-9 m-auto text-center"
            >
              <h1 className="max-w-xs mx-3 hero-heading fw-normal font-recoleta position-relative">
                <span style={{ color: "#546aec" }}>Create ads</span>{" "}
                <span
                  style={{
                    color: "black",
                    fontSize: "56px",
                    fontWeight: "lighter",
                  }}
                >
                  that boost sales in just 5 minutes &amp;
                </span>
               
                <span
                  style={{
                    color: "black",
                    fontSize: "56px",
                    fontWeight: "lighter",

                  }}
                >
                   Hassle-free
                </span>
              </h1>

              <p
                style={{
                  color: "black",
                  fontSize: "16px",
                  margin: "10px 0",
                  fontWeight: "normal",
                }}
                className="text-center text-lg mb-50 lg-mb-30 lg-pt-8"
              >
                KOgenie makes your ad in just 5 minutes so you can launch ad
                campaigns swiftly, helping you get more people to buy your
                product/service faster.
              </p>

              <div className="d-sm-flex justify-content-center align-items-center">
                <Link
                  href="/sign-up"
                  style={{
                    backgroundColor: "#4a5abb",
                    color: "white",
                    padding: "20px 50px",
                    textDecoration: "none",
                    borderRadius: "20px",
                    transition: "all 0.3s ease", // Smooth hover transition
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#3e54c2"; // Darker background on hover
                    e.target.style.color = "#f0f0f0"; // Slightly lighter text color
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#546aec"; // Original background
                    e.target.style.color = "white"; // Original text color
                  }}
                >
                  Try Free Now
                </Link>

                <div
                  role="button"
                  className="fancybox video-icon tran3s mb-25 ms-2 me-3 d-flex align-items-center justify-content-center"
                  onClick={() => setOpen(true)}
                >
                  <i className="fas fa-play" />
                  <div className="ps-3 text-start">
                    <span
                      style={{
                        color: "#4a5abb",
                        fontWeight: "normal",
                      }}
                      className="d-block"
                    >
                      Watch
                    </span>
                    <strong
                      style={{
                        color: "black",
                        fontWeight: "lighter",
                      }}
                      className="fs-18 fw-500 tx-dark d-block"
                    >
                      Intro video
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Styles */}
      <style jsx>{`
        // .hero-button {
        //   transition: all 0.3s ease;
        //   border-radius: 10px;
        //   padding: 12px 30px;
        // }

        // .hero-button:hover {
        //   background-color: #4056b3;
        //   transform: translateY(-2px);
        // }

        .fancybox {
          display: inline-flex;
          cursor: pointer;
          padding: 20px 30px;
          margin-top: 30px;
          border-radius: 10px;
          
          transition: all 0.3s ease;
        }

      

        .hero-heading {
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .hero-heading {
            font-size: 38px;
          }

          .container {
            padding: 0 20px;
          }

          .col-lg-8 {
            width: 100%;
          }
            
        }

        @media (max-width: 576px) {
          .hero-heading {
            font-size: 32px;
          }

          .container {
            padding: 0 15px;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;


