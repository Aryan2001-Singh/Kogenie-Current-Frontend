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
//                 src="/kogenielogo.svg"
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
// // "use client";

// // import { useEffect, useState } from "react";
// // import MainMenu from "../../header/MainMenu";
// // import Link from "next/link";
// // import Image from "next/image";

// // const Header = () => {
// //   const [navbar, setNavbar] = useState(false);

// //   const changeBackground = () => {
// //     if (window.scrollY >= 10) {
// //       setNavbar(true);
// //     } else {
// //       setNavbar(false);
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener("scroll", changeBackground);
// //     return () => {
// //       window.removeEventListener("scroll", changeBackground);
// //     };
// //   }, []);

// //   return (
// //     <header
// //       className={`theme-main-menu sticky-menu theme-menu-two ${
// //         navbar ? "fixed bg-white/30 backdrop-blur-lg shadow-md border-b border-gray-200" : ""
// //       }`}
// //     >
// //       <div className="inner-content position-relative">
// //         <div className="d-flex align-items-center justify-content-between">
// //           {/* Logo */}
// //           <div className="logo order-lg-0">
// //             <Link href="/" className="d-block">
// //               <Image
// //                 src="/images/logo/logo_012.svg"
// //                 alt="logo"
// //                 width={95}
// //                 height={30}
// //               />
// //             </Link>
// //           </div>

// //           {/* Right Widget */}
// //           <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
// //             <Link
// //               href="/sign-in"
// //               className="login-btn-one fs-17 fw-500 tran3s me-3 hover:text-red-500 transition duration-300"
// //             >
// //               Login
// //             </Link>
// //             <Link
// //               href="/sign-up"
// //               className="contact-btn-two fs-17 fw-500 tran3s d-none d-lg-block bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
// //             >
// //               Sign Up
// //             </Link>
// //           </div>
// //           {/* /.right-widget */}

// //           {/* Main Menu */}
// //           <MainMenu />
// //         </div>
// //       </div>
// //       {/* /.inner-content */}
// //     </header>
// //   );
// // };

// // export default Header;

