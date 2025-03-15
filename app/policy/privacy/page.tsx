
"use client"; 

import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";

const Policy = () => {
  return (
    <>
      <Header />


      <div className="policy-content mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <h1 className="fw-500 tx-dark">Privacy Policy</h1>
              <p><strong>Last updated: October 31, 2024</strong></p>

              <p>
                This Privacy Policy explains how KOGENIE E-SOLUTIONS PRIVATE LIMITED (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, and &quot;our&quot;) collects, uses, and shares your personal information when you visit our website at <a href="http://www.kogenie.com">www.kogenie.com</a> (the &quot;Website&quot;).
              </p>

              <h3>Information Collection</h3>
              <p>
                We collect personal information you provide to us, such as your name, contact information, and any other details you voluntarily share with us.
              </p>

              <h3>Information Usage</h3>
              <p>
                Your information is used to provide, improve, and personalize our services, communicate with you, and for security and compliance purposes.
              </p>

              <h3>Information Sharing</h3>
              <p>
                We may share your information with third-party service providers for business purposes, in compliance with applicable laws, and only as outlined in this policy.
              </p>

              <h3>Your Rights</h3>
              <p>
                You have rights regarding your personal data, including accessing, updating, or deleting your information. Contact us to exercise these rights.
              </p>

              <h3>Data Security</h3>
              <p>
                We implement security measures to protect your information. However, no online data transmission can be guaranteed secure.
              </p>

              <h3>Changes to this Policy</h3>
              <p>
                We may update this Privacy Policy periodically. Please review this page regularly for any changes.
              </p>

              <h3>Contact Us</h3>
              <p>
                For more information, please contact us at:
                <br /> Email: <a href="mailto:contact@kogenie.com">contact@kogenie.com</a>
                <br /> Address: KOGENIE E-SOLUTIONS PRIVATE LIMITED, CR PARK K1-34, New Delhi 110024, India
                <br /> Phone: +91 9606045031
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-container">
  <div className="footer-wrapper w-full">
    <div className="inner-wrapper m-auto">
      <div className="row">
        <FooterMenu />
      </div>
    </div>
  </div>

  <style jsx>{`
    .footer-container {
      width: 100vw; /* Ensures full viewport width */
      margin: 0;
      padding: 0;
      background: linear-gradient(to right, #f3f6fc, #e8ecf6);
    }

    .footer-wrapper {
      width: 100%;
      max-width: none;
      padding: 0;
    }
  `}</style>
</footer>

    </>
  );
};

export default Policy;
