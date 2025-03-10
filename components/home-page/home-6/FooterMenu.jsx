"use client";
"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const footerData = [
  {
    title: "Quick Links",
    className: "col-lg-3 col-md-4 col-sm-6 mb-4",
    links: [
      { label: "Home", href: "/" },
      // { label: "Pricing", href: "/pages/pricing-v2" },
      { label: "About us", href: "/pages/about-us" },
      { label: "Features", href: "/pages/OurService" },
      { label: "Blog", href: "/blogs" },
    ],
  },
  {
    title: "Legal",
    className: "col-lg-3 col-md-4 col-sm-6 mb-4",
    links: [
      { label: "Refund Policy", href: "/policy/refund" },
      { label: "Terms & Conditions", href: "/policy/terms" },
      { label: "Privacy Policy", href: "/policy/privacy" },
      { label: "Cookie Policy", href: "/policy/cookie" },
    ],
  },
];

const FooterLinks = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row justify-content-between">
          {/* Logo & Contact Info */}
          <div className="col-lg-4 col-md-6 footer-intro">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/kogenielogo.svg"
                  alt="logo"
                  width={120}
                  height={60}
                />
              </Link>
            </div>
            <a
              href="mailto:kogenie.marketing@kogenie.com"
              className="footer-email"
            >
              kogenie.marketing@kogenie.com
            </a>
            <br />
            <a href="tel:+918826132744" className="footer-phone">
              +91-8826-132-744
            </a>
          </div>

          {/* Footer Links */}
          {footerData.map(({ title, className, links }) => (
            <div className={className} key={title}>
              <h5 className="footer-title">{title}</h5>
              <ul className="footer-nav-link">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="footer-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media Icons */}
          <div className="col-lg-3 col-md-6 footer-social">
            <h5 className="footer-title">Join Our Community</h5>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/kogenie.in/about/"
                className="social-icon facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://x.com/kogenie__26"
                className="social-icon twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/kogenie_official?igsh=MTg4dDEzdnJ0cjE2ag=="
                className="social-icon instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/kogenie/"
                className="social-icon linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        {/* <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Kogenie. All rights reserved.</p>
        </div> */}
      </div>

      {/* Styles */}
      <style jsx>{`
        .footer-container {
          background: whitesmoke;
          color: black;
          padding: 50px 0 20px;
          font-family: "Inter", sans-serif;
          backdrop-filter: blur(10px);
        }

        .footer-title {
          font-size: 18px;
          font-weight: 600;
          color: black;
          margin-bottom: 15px;
        }

        .footer-nav-link {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-nav-link li {
          margin-bottom: 10px;
        }

        .footer-link {
          color: black;
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #546aec;
        }

        .footer-email {
          display: inline-block;
          margin-top: 15px;
          font-size: 16px;
          color: #546aec;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-phone {
          display: inline-block;
          margin-top: 15px;
          font-size: 16px;
          color: black;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-email:hover,
        .footer-phone:hover {
          color: red;
        }

        .footer-social {
          text-align: left;
        }

        .social-icons {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .social-icon i {
          color: black;
          font-size: 18px;
          transition: color 0.3s ease;
        }

        /* Facebook Hover */
        .facebook:hover {
          background: #1877f2;
        }
        .facebook:hover i {
          color: #fff;
        }

        /* Twitter Hover */
        .twitter:hover {
          background: #1da1f2;
        }
        .twitter:hover i {
          color: #fff;
        }

        /* Instagram Hover */
        .instagram:hover {
          background: #e4405f;
        }
        .instagram:hover i {
          color: #fff;
        }

        /* LinkedIn Hover */
        .linkedin:hover {
          background: #0077b5;
        }
        .linkedin:hover i {
          color: #fff;
        }

        /* Hover Scale Effect */
        .social-icon:hover {
          transform: scale(1.1);
        }
        /* Responsive Design */
        @media (max-width: 768px) {
          .footer-intro {
            text-align: center;
            margin-bottom: 30px;
          }

          .footer-social {
            text-align: center;
            margin-top: 20px;
          }

          .social-icons {
            justify-content: center;
          }

          .footer-bottom {
            margin-top: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterLinks;
