
"use client";  // Ensures compatibility with styled-jsx

import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";

const TPolicy = () => {
  return (
    <>
      <Header />


      <div className="policy-content mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <h1 className="fw-500 tx-dark text-center mb-4">Terms and Conditions</h1>
              <p className="text-muted text-center mb-5"><strong>Last updated: October 31, 2024</strong></p>

              <p className="lead">
                These Terms and Conditions (&quot;Terms&quot;) govern your use of the KOGENIE E-SOLUTIONS PRIVATE LIMITED website, located at <a href="http://www.kogenie.com" target="_blank" rel="noopener noreferrer">www.kogenie.com</a> (the &quot;Website&quot;). By accessing and using this Website, you agree to comply with these Terms.
              </p>

              <section className="mb-5">
                <h3 className="fw-bold">Use of the Website</h3>
                <p>
                  You agree to use the Website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the Website.
                </p>
              </section>

              <section className="mb-5">
                <h3 className="fw-bold">Intellectual Property Rights</h3>
                <p>
                  All content on this Website, including text, images, and code, is owned by KOGENIE E-SOLUTIONS PRIVATE LIMITED. Unauthorized use or reproduction of this content is prohibited.
                </p>
              </section>

              <section className="mb-5">
                <h3 className="fw-bold">User Accounts</h3>
                <p>
                  When you create an account on our Website, you are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.
                </p>
              </section>

              <section className="mb-5">
                <h3 className="fw-bold">Limitation of Liability</h3>
                <p>
                  We are not liable for any direct, indirect, or consequential damages arising from your use of this Website or any linked external sites.
                </p>
              </section>

              <section className="mb-5">
                <h3 className="fw-bold">Governing Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of the Website will be subject to the exclusive jurisdiction of the courts in New Delhi, India.
                </p>
              </section>

              <section className="mb-5">
                <h3 className="fw-bold">Modifications to Terms</h3>
                <p>
                  We reserve the right to modify these Terms at any time. Please review this page periodically for updates.
                </p>
              </section>

              <section className="mb-5">
                <h3 className="fw-bold">Contact Us</h3>
                <p>
                  If you have any questions about these Terms, please contact us at:
                  <br /> Email: <a href="mailto:contact@kogenie.com">contact@kogenie.com</a>
                  <br /> Address: KOGENIE E-SOLUTIONS PRIVATE LIMITED, CR PARK K1-34, New Delhi 110024, India
                  <br /> Phone: +91 9606045031
                </p>
              </section>
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

export default TPolicy;
