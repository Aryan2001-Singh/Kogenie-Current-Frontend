// "use client";

// import { useEffect, useState } from "react";
// import MainMenu from "../../header/MainMenu";
// import Link from "next/link";
// import Image from "next/image";

// const Header = () => {
//   const [navbar, setNavbar] = useState(false);

//   const changeBackground = () => {
//     if (window.scrollY >= 10) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeBackground);
//     return () => {
//       window.removeEventListener("scroll", changeBackground);
//     };
//   }, []);

//   return (
//     <header
//       className={`theme-main-menu sticky-menu theme-menu-two ${
//         navbar ? "fixed" : ""
//       }`}
//     >
//       <div className="inner-content position-relative">
//         <div className="d-flex align-items-center justify-content-between">
//           <div className="logo order-lg-0">
//             <Link href="/" className="d-block">
//               <Image
//                 src="/images/logo/logo_012.svg"
//                 alt="logo"
//                 width={95}
//                 height={30}
//               />
//             </Link>
//           </div>
//           <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
//             <Link
//               href="/sign-in"
//               className="login-btn-one fs-17 fw-500 tran3s me-3"
//             >
//               Login
//             </Link>
//             <Link
//               href="/sign-up"
//               className="contact-btn-two fs-17 fw-500 tran3s d-none d-lg-block"
//             >
//               Sign Up
//             </Link>
//           </div>
//           {/* /.right-widget */}
//           <MainMenu />
//         </div>
//       </div>
//       {/* /.inner-content */}
//     </header>
//   );
// };

// export default Header;
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
      <div className="inner-content position-relative">
        <div
          style={{
            backgroundColor: "rgba(247, 248, 254, 1)",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.25)",
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
                style={{ backgroundColor: "E8EAF9" }}
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
                padding: "1px 20px", // Adjust padding for better button size
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
                padding: "1px 20px", // Adjust padding for better button size
                borderRadius: "20px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#3b4a91"; // Darker shade for hover
                e.target.style.color = "#FFFFFF"; // Keep the text white
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#4A5ABB"; // Original color
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

