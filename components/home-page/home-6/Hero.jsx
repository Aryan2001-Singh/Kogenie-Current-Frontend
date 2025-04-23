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
    document.documentElement.style.setProperty("--text-color", "black");
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "4vh 5%",
    textAlign: "center",
    minHeight: "65vh", 
  }}
>

        
<div
  className={styles["hero-text"]}
  style={{
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    padding: "0 1rem",
    width: "100%",
  }}
  data-aos="fade-up"
>
   
         <h1 className={styles["hero-heading"]}>
  <span
    className={styles["highlight-text"]}
    style={{
      background: "rgba(0, 0, 0, 0.9)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
      fontSize: "clamp(40px, 5vw, 50px)",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: "clamp(34px, 4.5vw, 44px)",
      fontFamily: "'Poppins'",
      fontWeight: 700,
      
    }}
  >
    Personalized ads.
  </span>{" "}
  <span
  style={{
    color: "rgba(0, 0, 0, 0.96)",
    fontSize: "clamp(28px, 4vw, 40px)",
    fontFamily: "'Poppins'",
    fontWeight: 700,
    display: "inline-block",
    maxWidth: "100%", // allows responsive scaling
    wordBreak: "break-word", // optional: ensures no overflow
  }}
>
  For every kind of customer.
</span>

</h1>

          <p
            className={styles["highlight-text"]}
            style={{
              color: "rgba(0, 0, 0, 0.88)",
              WebkitBackgroundClip: "text",
              fontSize: "clamp(16px, 1.5vw, 18px)",
              fontWeight: 400,
              fontFamily: "'Poppins'",
            }}
          >
            Ads Work- Like skincare, ads should be made for your audience type.
            Because one ad never fits all, we help you create personalized ads for every customer type.
          </p>
          <div
  className={styles["cta-container"]}
  style={{
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1rem",
    marginTop: "2rem",
    fontFamily: "'Poppins'",
  }}
>

          <Link
  href="/sign-up"
  className="px-8 py-3 rounded-xl text-xl font-semibold text-white bg-gradient-to-r from-[#546aec] to-[#7b8df6] backdrop-blur-md shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl hover:from-[#3f4ed4] hover:to-[#6c7eea]"
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
                <p style={{ fontSize: "clamp(16px, 2vw, 18px)" }}>
                  Watch Intro video
                </p>
              </div>
            </div>
          </div>
          <p style={{
    fontFamily: "'Poppins'",
    fontSize: "14px",
    color: "#6b7280",
    marginTop: "1.5rem"
  }}>
    No credit card required · Start generating ads in under 60 seconds
  </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
