"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Hero.module.css";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    document.documentElement.style.setProperty("--text-color", "black"); // Ensure default text color
  }, []);

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
        className={styles["hero-banner"]}
        style={{
          backgroundColor: "#E6E8F7",
          color: "black",
        }}
      >
        <div className="container-fluid position-relative">

          <div className="row align-items-center">
            {/* Left Side: Text Content */}
            <div
              className={`col-lg-6 col-md-6 text-left ${styles["hero-text"]}`}
              data-aos="fade-right"
            >
              <h1 className={styles["hero-heading"]}>
                <span
                  className={styles["highlight-text"]}
                  style={{
                    background: "linear-gradient(90deg, #4a5abb, #8693e3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Create ads
                </span>{" "}
                <span style={{color:"rgba(0, 0, 0, 0.78)"}}>that boost sales in just 5 minutes &amp;</span>{" "}
                <span
                  className={styles["highlight-text"]}
                  style={{
                    background: "linear-gradient(90deg, #4a5abb, #8693e3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Hassle-free
                </span>
              </h1>

              <p className={styles["hero-description"]}>
                KOgenie makes your ad in just 5 minutes so you can launch ad
                campaigns swiftly, helping you get more people to buy your
                product/service faster.
              </p>

              <div className={styles["cta-container"]}>
                <Link
                  href="/sign-up"
                  className={styles["cta-btn"]}
                  style={{ borderRadius: "0", boxShadow: "2px 2px 5px grey" }}
                >
                  Create Your Ad
                </Link>
                <div
                  role="button"
                  className={styles["video-btn"]}
                  onClick={() => setOpen(true)}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  style={{ borderRadius: "0", boxShadow: "2px 2px 5px grey" }}
                >
                  <div className={styles["play-icon"]}>
                    <i className="fas fa-play" />
                  </div>
                  <div className={styles["text-container"]}>
                    <p style={{ fontSize: "clamp(16px, 2vw, 20px)",}}>Watch Intro video</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="col-lg-6 col-md-5 text-center" data-aos="fade-left"
            style={{margin:"auto",
              marginTop: "6rem",
            }}>
              <img
                src="/ai.jpg"
                alt="Hero Image"
                className="img-fluid"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>

          {/* <div className="text-center mt-20">
            <p className="text-lg font-semibold">Join Our Community</p>
            <p className="text-gray-600">Get exclusive startup marketing tips & AI insights</p>
            <div className="d-flex justify-content-center gap-4 mt-4">
              <Link href="https://www.instagram.com/kogenie_official?igsh=MTg4dDEzdnJ0cjE2ag%3D%3D&utm_source=qr" className="social-link d-flex align-items-center gap-2">
                <Image src="/icons8-instagram-48.png" alt="Instagram" width={24} height={24} /> Follow on Instagram
              </Link>
              <Link href="https://facebook.com/kogenie" className="social-link d-flex align-items-center gap-2">
                <Image src="/icons8-facebook-48.png" alt="Facebook" width={24} height={24} /> Like on Facebook
              </Link>
              <Link href="https://www.linkedin.com/company/kogenie/" className="social-link d-flex align-items-center gap-2">
                <Image src="/icons8-linkedin-48.png" alt="LinkedIn" width={24} height={24} /> Connect on LinkedIn
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
