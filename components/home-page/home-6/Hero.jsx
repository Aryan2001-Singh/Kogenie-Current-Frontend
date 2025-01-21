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
        className="mt-8 hero-banner-two position-relative pt-170 lg-pt-200 md-pt-150"
        style={{ position: "relative" }}
      >
        {/* video */}
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
    border: "1px solid rgba(255, 255, 255, 0.2)",
    pointerEvents: "none",
    marginTop: "20px",
  }}
>
  <source src="" type="video/mp4" />
  Your browser does not support the video tag.
</video>

        {/* Right Image */}
        {/* <div
          style={{
            position: "absolute",
            top: "50%",
            right: "20px",
            width: "250px",
            height: "300px",
            boxShadow: "0 4px 15px rgba(51, 51, 54, 0.7)",
            borderRadius: "15px",
            backdropFilter: "blur(10px)", // Glass blur effect
            WebkitBackdropFilter: "blur(10px)", // Safari support
            backgroundColor: "rgb(5, 5, 5)",
            zIndex: "-1",
            transform: "translateY(-50%)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            
          }}
        >
          <Image
            src="/home.jpeg"
            alt="shape-right"
            className="lazy-img shapes shape-right"
            width={150}
            height={150}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              objectFit: "cover",
              
            }}
          />
        </div> */}


        <div className="container">
          <div className="row">
            <div
               style={{
              //  background: "linear-gradient(to bottom, rgb(243, 235, 235), rgba(181, 192, 255, 1),rgba(84, 106, 236, 1))",
               borderRadius: "15px",
               boxShadow: "0 4px 15px rgb(100, 110, 254)",
               backgroundColor:"black"
               }}
              
              className="col-lg-8 col-md-9 m-auto text-center"
            >
              <h1 className=" max-w-xs mx-3 hero-heading fw-normal font-recoleta position-relative">
                <span style={{ color: "#546aec",
                 }}>Create ads</span>{" "}
                <span style={{color:"white",
                  fontSize:"56px",
                  fontWeight:"light"
                }}>that boost sales in just</span>
                <span style={{ color: "rgba(181, 192, 255, 1)",}}> 5 minutes</span>{" "}<span 
                 style={{color:"white",
                  fontSize:"56px",
                  fontWeight:"light"
                }}>&amp; Hassle-free</span>
              </h1>

              <p
                style={{ color: "gray" ,
                  fontSize:"16px",
                  margin:"2px",
                  fontWeight:"normal"
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
                    backgroundColor: "#546aec",
                    color: "white",
                  }}
                  className="tran3s fs-17 fw-500 btn-three mt-1 mb-25 ms-2 me-3"
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
                    <span style={{ color: "#4a5abb",fontWeight:"normal" }} className="d-block">
                      Watch
                    </span>
                    <strong style={{color:"white",fontWeight:"lighter"}}className="fs-18 fw-500 tx-dark d-block">
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

