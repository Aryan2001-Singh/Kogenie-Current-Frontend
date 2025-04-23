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
  style={{
    position: navbar ? "fixed" : "relative",
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1000,
    width: "100%",
    backgroundColor: "rgba(247, 248, 254, 1)", // move background here
  }}
>
      <div
        className="inner-content position-relative"
        style={{ width: "100vw", maxWidth: "100%" }}
      >
        <div
          className="d-flex align-items-center justify-content-between font-['Poppins']"
        >
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                src="/kogenie logo.jpeg"
                alt="logo"
                width={95}
                height={30}
                style={{ backgroundColor: "white" }}
              />
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3 gap-3">
            {/* Login Button */}
            <Link
              href="/sign-in"
              className="fs-17 fw-500 tran3s d-flex align-items-center justify-center"
              style={{
                width: "120px", // ✅ Ensures both buttons have the same width
                height: "40px", // ✅ Ensures equal height
                border: "2px solid #4A5ABB",
                color: "#4A5ABB",
                padding: "8px 0px", // ✅ Even padding
                borderRadius: "5px",
                textAlign: "center",
                transition: "all 0.3s ease",
                fontWeight: "600",
              }}
              onMouseEnter={(e) => (
                (e.target.style.backgroundColor = "#4A5ABB"),
                (e.target.style.color = "white")
              )}
              onMouseLeave={(e) => (
                (e.target.style.backgroundColor = "transparent"),
                (e.target.style.color = "#4A5ABB")
              )}
            >
              Login
            </Link>

            {/* Signup Button */}
            <Link
              href="/sign-up"
              className="fs-17 fw-500 tran3s d-flex align-items-center justify-center"
              style={{
                width: "120px", // ✅ Same width as Login
                height: "40px", // ✅ Same height as Login
                backgroundColor: "#4A5ABB",
                color: "#FFF",
                border: "2px solid #4A5ABB", // ✅ Keeps size equal
                padding: "8px 0px", // ✅ Even padding
                borderRadius: "5px",
                textAlign: "center",
                transition: "all 0.3s ease",
                fontWeight: "600",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#3b4a91")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#4A5ABB")}
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
