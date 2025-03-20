"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (link) => pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/pages/about-us" },
    { title: "Service", link: "/pages/OurService" },
    { title: "Blog", link: "/blogs" },
    { title: "Contact Us", link: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      {/* Toggle Button */}
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span />
      </button>

      {/* Collapsible Menu */}
      <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image src="/kogenie logo.jpeg" alt="logo" width={95} height={30} />
              </Link>
            </div>
          </li>

          {menuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link href={item.link} className={`nav-link ${isActive(item.link) ? "active-menu" : ""}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
