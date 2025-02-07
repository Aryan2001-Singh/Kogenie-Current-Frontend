import Link from "next/link";
import React from "react";
import Image from 'next/image';

const footerData = [
  {
    title: "Links",
    className: "col-lg-3 col-sm-4 ms-auto mb-30",
    links: [
      { label: "Home", href: "/" },
      { label: "Pricing", href: "/pages/pricing-v2" },
      { label: "About us", href: "/pages/about-us" },
      { label: "Features", href: "/pages/OurService" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    className: "col-lg-3 col-sm-4 mb-30",
    links: [
      { label: "Refund Policy", href: "/policy/refund" },
      { label: "Terms & conditions", href: "/policy/terms" },
      { label: "Privacy policy", href: "/policy/privacy" },
      { label: "Cookie policy", href: "/policy/cookie" },
    ],
  },
];

const FooterLinks = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 footer-intro mb-40">
            <div className="logo">
              <Link href="/">
                <Image src="/kogenielogo.svg" alt="logo" width={95} height={50} />
              </Link>
            </div>
            <a href="#" className="email tran3s fs-18 mt-35 mb-15 md-mt-10">
              kogenie.marketing@kogenie.com
            </a>
            <br />
            <a href="#" className="mobile tran3s fs-20 fw-500">
            +91 88261 32744
            </a>
          </div>
          {footerData.map(({ title, className, links }) => (
            <div className={className} key={title}>
              <h5 className="footer-title tx-dark fw-500">{title}</h5>
              <ul className="footer-nav-link style-none">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;
