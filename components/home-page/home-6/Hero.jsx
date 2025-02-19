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
    document.documentElement.style.setProperty("--text-color", "white"); // Ensure default text color
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
          backgroundImage:
            "url('/codioful-formerly-gradienta-t-Rt42Wl1RQ-unsplash.jpg')",
        }}
      >
        <div className={styles.overlay}></div>

        <div className="container position-relative">
          <div className="row">
            <div
              className={`col-lg-8 col-md-10 mx-auto text-center ${styles["hero-text"]}`}
              data-aos="fade-up"
            >
              <h1 className={styles["hero-heading"]}>
                <span className={styles["highlight-text"]}>Create ads</span>{" "}
                that boost sales in just 5 minutes &amp;{" "}
                <span className={styles["highlight-text"]}>Hassle-free</span>
              </h1>

              <p className={styles["hero-description"]}>
                KOgenie makes your ad in just 5 minutes so you can launch ad
                campaigns swiftly, helping you get more people to buy your
                product/service faster.
              </p>

              <div className={styles["cta-container"]}>
                <Link href="/sign-up" className={styles["cta-btn"]}>
                  Try Free Now
                </Link>

                <div
                  role="button"
                  className={styles["video-btn"]}
                  onClick={() => setOpen(true)}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className={styles["play-icon"]}>
                    <i className="fas fa-play" />
                  </div>
                  <div className={styles["text-container"]}>
                    <span>Watch </span>
                    <strong>Intro video</strong>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-lg font-semibold">What Our Users Say</p>
                  <div className="flex justify-center mt-4">
                    <span
                      className="text-2xl"
                      style={{ color: "rgb(242, 189, 82)" }}
                    >
                      ★★★★★
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    “This platform has completely transformed our marketing
                    efforts!” - <b>John Doe, CEO of XYZ</b>
                  </p>
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
