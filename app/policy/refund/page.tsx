
"use client"; 

import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";

const RefundPolicy = () => {
  return (
    <>
      <Header />
      <div className="policy-content mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <h1 className="fw-500 tx-dark">Refund Policy</h1>
              <p><strong>Last updated: October 31, 2024</strong></p>

              <p>
                This Refund Policy outlines the conditions under which KOGENIE E-SOLUTIONS PRIVATE LIMITED (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, and &quot;our&quot;) offers refunds for products and services purchased on our website at <a href="http://www.kogenie.com">www.kogenie.com</a> (the &quot;Website&quot;).
              </p>

              <h3>Eligibility for Refunds</h3>
              <p>
                Refunds are available only for purchases made directly through our Website. To qualify for a refund, requests must be submitted within 14 days of purchase. The product or service must not have been used beyond initial access or activation.
              </p>

              <h3>Non-refundable Items</h3>
              <p>
                Certain products and services are non-refundable, including but not limited to digital downloads, completed services, and any custom work. These items are marked as non-refundable during the purchase process.
              </p>

              <h3>Process for Requesting a Refund</h3>
              <p>
                To request a refund, contact our support team at <a href="mailto:contact@kogenie.com">contact@kogenie.com</a> with your purchase details. Refunds will be processed within 7-10 business days of approval.
              </p>

              <h3>Changes to this Refund Policy</h3>
              <p>
                We reserve the right to update or modify this Refund Policy at any time. Changes will be posted on this page, and the &quot;Last updated&quot; date will reflect the most recent revision.
              </p>

              <h3>Contact Us</h3>
              <p>
                For any questions or concerns regarding our Refund Policy, please contact us at:
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

export default RefundPolicy;
