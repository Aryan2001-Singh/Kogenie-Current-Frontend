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
      { label: "About us", href: "/pages/about-us" },
      { label: "Services", href: "/pages/OurService" },
      { label: "Blog", href: "/blogs" },
      { label: "Contact us", href: "/contact" },
      
     
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
    <footer className="footer-container w-full">
      <div className="footer-wrapper">
        <div className="container">
          <div className="row justify-content-between">
            {/* Logo & Contact Info */}
            <div className="col-lg-4 col-md-6 footer-intro">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/kogenie logo.jpeg"
                    alt="logo"
                    width={140}
                    height={70}
                  />
                </Link>
              </div>
              <div className="footer-contact">
                <p className="contact-text">
                  Connecting businesses with{" "}
                  <span className="highlight">AI-powered marketing.</span>
                </p>
                <div className="contact-info">
                  <a
                    href="mailto:kogenie.marketing@kogenie.com"
                    className="footer-email"
                  >
                    <i className="fas fa-envelope"></i>{" "}
                    kogenie.marketing@kogenie.com
                  </a>
                  <br />
                  <a href="tel:+918826132744" className="footer-phone">
                    <i className="fas fa-phone"></i> +91-8826-132-744
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerData.map(({ title, className, links }) => (
              <div className={className} key={title}>
                <h5 className="footer-title">{title}</h5>
                <ul className="footer-nav-link">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} legacyBehavior>
                        <a className="footer-link">{label}</a>
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
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} KOGENIE E-SOLUTIONS PRIVATE LIMITED. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .footer-container {
          width: 100%;
          background: #5663b8;
          color: #ffffff;
          padding: 50px 0 20px;
          font-family: "Inter", sans-serif;
          border-top: 3px solid rgba(56, 56, 56, 0.11);
          backdrop-filter: blur(15px);
        }

        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 15px;
          justify-content: flex-start;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease-in-out;
        }

        .social-icon.facebook:hover {
          background-color: #1877f2;
        }
        .social-icon.twitter:hover {
          background-color: #1da1f2;
        }
        .social-icon.instagram:hover {
          background-color: #e4405f;
        }
        .social-icon.linkedin:hover {
          background-color: #0077b5;
        }

        .footer-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
          color: #ffffff;
        }

        .footer-nav-link {
          list-style: none;
          padding: 0;
        }

        .footer-link,
        .footer-email,
        .footer-phone {
          color: #ffffff;
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s ease-in-out;
        }

        .footer-link:hover,
        .footer-email:hover,
        .footer-phone:hover {
          color: yellow;
          text-decoration: underline;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 30px;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          .footer-intro,
          .footer-social {
            text-align: center;
            margin-bottom: 30px;
          }
          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterLinks;
