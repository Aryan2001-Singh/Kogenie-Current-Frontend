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
            <div className="flex items-center gap-3 pr-4">
  <Link
    href="/sign-in"
     className="px-4 py-1 bg-indigo-600 text-indigo-600 rounded-md font-semibold text-[#546aec] border-2 border-indigo-600 hover:bg-indigo-700 transition"
  >
    Login
  </Link>

  <Link
    href="/sign-up"
  className="px-4 py-1 rounded-md font-semibold text-white bg-gradient-to-r from-[#546aec] to-[#7b8df6] backdrop-blur-md shadow-md transition duration-300 hover:scale-100 hover:shadow-xl hover:from-[#3f4ed4] hover:to-[#6c7eea]"
  >
    Signup
  </Link>
</div>
          </div>
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
