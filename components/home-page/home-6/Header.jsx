"use client";

import { useEffect, useState } from "react";
import MainMenu from "../../header/MainMenu";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-two ${navbar ? "fixed" : ""}`}
    >
      <div
        className="inner-content position-relative"
        style={{ width: "100vw", maxWidth: "100%" }}
      >
        <div
          style={{
            backgroundColor: "rgba(247, 248, 254, 1)",
            padding: "20px 40px",
            borderRadius: "0px",
            width: "100vw", // Ensuring full width inside inner-content
            maxWidth: "100%"
          }}
          className="d-flex align-items-center justify-content-between"
        >
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                src="/kogenielogo.svg"
                alt="logo"
                width={95}
                height={30}
                style={{ backgroundColor: "#E8EAF9" }}
              />
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link
              href="/sign-in"
              className="login-btn-one fs-17 fw-500 tran3s me-3 d-flex align-items-center justify-content-center"
              style={{
                border: "2px solid #4A5ABB",
                color: "black",
                padding: "1px 20px",
                borderRadius: "20px",
              }}
              onMouseEnter={(e) => (e.target.style.color = "white")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              Login
            </Link>

            <Link
              href="/sign-up"
              className="contact-btn-two fs-17 fw-500 tran3s d-none d-lg-block d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#4A5ABB",
                color: "#FFF",
                border: "none",
                padding: "1px 20px",
                borderRadius: "20px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#3b4a91";
                e.target.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#4A5ABB";
                e.target.style.color = "#FFF";
              }}
            >
              Signup
            </Link>
          </div>
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;