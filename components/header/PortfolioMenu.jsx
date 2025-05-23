"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { title: "About me", href: "#s1" },
  { title: "Portfolio", href: "#s3" },
  { title: "Skill", href: "#s4" },
  { title: "Contact", href: "#s5" },
];

const PortfolioMenu = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span />
      </button>

      <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="one-page-nav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image src="/images/logo/logo_04.png" alt="logo" width={90} height={25} />
              </Link>
            </div>
          </li>
          {navItems.map((navItem, i) => (
            <li key={i} className="nav-item">
              <a
                className={`nav-link ${activeLink === i ? "active" : ""}`}
                href={navItem.href}
                onClick={() => handleLinkClick(i)}
              >
                {navItem.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default PortfolioMenu;
