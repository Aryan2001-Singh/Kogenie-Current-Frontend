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
  className="hero-banner-two position-relative pt-170 lg-pt-200 md-pt-150 d-flex justify-content-center align-items-center text-center"
  style={{
    position: "relative",
    backgroundImage: "url('/1733819818920_blog_pic_15.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(84, 106, 236, 0.5)", // Blue overlay with transparency
    }}
  ></div>

  <div className="container position-relative d-flex flex-column align-items-center text-center">
    <div className="row">
      <div
        style={{
          padding: "30px",
          margin: "10px",
          textAlign: "justify",
        }}
        className="col-lg-8 col-md-9 text-center"
      >
        <h1 className="max-w-xs mx-auto hero-heading fw-normal font-recoleta position-relative">
          <span style={{ color: "#FFAA00" }}>Create ads</span>{" "}
          <span
            style={{
              color: "white",
              fontSize: "56px",
              fontWeight: "lighter",
            }}
          >
            that boost sales in just 5 minutes &amp;
          </span>
          <span
            style={{
              color: "#FFAA00",
              fontSize: "56px",
              fontWeight: "lighter",
            }}
          >
            Hassle-free
          </span>
        </h1>

        <p
          style={{
            color: "white",
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

        <div className="d-sm-flex justify-content-center align-items-center gap-3">
          <Link
            href="/sign-up"
            style={{
              backgroundColor: "#FFAA00",
              color: "white",
              padding: "20px 50px",
              textDecoration: "none",
              borderRadius: "20px",
              transition: "all 0.3s ease",
              boxShadow: "0px 5px 15px rgba(255, 170, 0, 0.5)",
              position: "relative",
              overflow: "hidden",
            }}
            className="cta-btn"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#E69A00";
              e.target.style.boxShadow = "0px 8px 20px rgba(255, 170, 0, 0.7)";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#FFAA00";
              e.target.style.boxShadow = "0px 5px 15px rgba(255, 170, 0, 0.5)";
              e.target.style.transform = "scale(1)";
            }}
          >
            Try Free Now
          </Link>

          <div
            role="button"
            className="fancybox video-icon tran3s d-flex align-items-center justify-content-center"
            onClick={() => setOpen(true)}
            style={{
              display: "flex",
              alignItems: "center",
              background: "transparent",
              border: "2px solid #FFAA00",
              borderRadius: "50px",
              padding: "12px 20px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#FFAA00";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#FFAA00";
            }}
          >
            <div style={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: "#FFAA00",
              borderRadius: "50%",
              boxShadow: "0px 5px 15px rgba(255, 170, 0, 0.5)",
              transition: "all 0.3s ease"
            }}>
              <i className="fas fa-play" style={{ color: "white", fontSize: "22px", textAlign: "center" }} />
            </div>
            <div className="ps-3 text-start">
              <span
                style={{
                  color: "#FFAA00",
                  fontWeight: "medium",
                  fontSize: "16px",
                }}
                className="d-block"
              >
                Watch
              </span>
              <strong
                style={{
                  color: "white",
                  fontWeight: "normal",
                  fontSize: "16px",
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
    </>
  );
};

export default Hero;


