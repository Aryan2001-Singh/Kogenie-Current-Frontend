"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const MainMenu = () => {
  const pathname = usePathname();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };

  // Define menu items directly
  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/pages/about-us" },
    { title: "Service", link: "/pages/OurService" },
    { title: "Blog", link: "/blogs" },
    { title: "Contact Us", link: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  src="/kogenie logo.jpeg"
                  alt="logo"
                  width={95}
                  height={30}
                />
              </Link>
            </div>
          </li>

          {/* Map menu items */}
          {menuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link
                href={item.link}
                className={`nav-link ${isActive(item.link) ? "active-menu" : ""}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link
              href="/contact/contact-v1"
              className="btn-twentyOne fw-500 tran3s"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
