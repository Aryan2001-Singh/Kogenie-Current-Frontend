"use client";

import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import { Mail, MapPin} from "lucide-react";

const RefundPolicy = () => {
  return (
    <>
      <Header />

      <main className="bg-[#f9fafb] text-gray-700 py-24 px-4 sm:px-6 lg:px-8 font-[Poppins]">
        <div className="max-w-4xl mx-auto border border-gray-200 bg-white rounded-3xl shadow-2xl p-10 sm:p-12">
          <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6 leading-tight">
            Refund Policy
          </h1>
          <p className="text-sm text-gray-500 text-center font-medium mb-12">
            <strong>Last updated: December 31, 2024</strong>
          </p>

          <section className="mb-10">
            <p className="text-base text-gray-600 text-justify leading-relaxed">
              At KOgenie, we are committed to delivering high-performing, AI-powered ads that drive real results. We stand by the quality of our product and strive to ensure our customers have the best experience.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 border-l-4 border-indigo-600 pl-3">
              Eligibility for Refunds
            </h3>
            <ul className="list-disc list-outside pl-6 text-gray-600 leading-relaxed">

              <li><strong>Technical Issues</strong> – If KOgenie fails to generate or deliver ads due to a system malfunction on our end.</li>
              <li><strong>Billing Errors</strong> – If you were charged incorrectly or for a service you didn’t purchase.</li>
              <li><strong>Service Dissatisfaction</strong> – If you are unsatisfied with the results and have actively used KOgenie for at least 14 days while following our optimization recommendations, we will review refund requests on a case-by-case basis.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 border-l-4 border-indigo-600 pl-3">
              Non-Refundable Cases
            </h3>
            <ul className="list-disc list-outside pl-6 text-gray-600 leading-relaxed">

              <li>If the ad performance doesn’t meet expectations due to external factors like audience targeting, platform policies, or budget allocation outside KOgenie’s control.</li>
              <li>If a refund request is made after 30 days of purchase.</li>
              <li>If the subscription was fully utilized within the billing period.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 border-l-4 border-indigo-600 pl-3">
              How to Request a Refund
            </h3>
            <p className="text-base text-gray-600 text-justify leading-relaxed">
              To request a refund, please contact our support team at <a href="mailto:support@kogenie.com"
               className="text-indigo-600 hover:underline font-medium">support@kogenie.com</a> with your order details and a brief explanation. We aim to process all valid refund requests within 5-7 business days.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 border-l-4 border-indigo-600 pl-3">
              We’re Here to Help
            </h3>
            <p className="text-base text-gray-600 text-justify leading-relaxed">
              If you have concerns about your experience, reach out, and we’ll work towards a solution that helps you get the most out of KOgenie.
            </p>
          </section>

          <section className="mt-12 bg-indigo-50 border border-indigo-100 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600" />
                <a href="mailto:support@kogenie.com" className="text-gray-700 hover:underline font-medium">
                  support@kogenie.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <a
                  href="https://www.google.com/maps/place/KOGENIE+E-SOLUTIONS+PRIVATE+LIMITED,+CR+PARK+K1-34,+New+Delhi+110024,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:underline"
                >
                  KOGENIE E-SOLUTIONS PRIVATE LIMITED, CR PARK K1-34, New Delhi 110024, India
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

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
            width: 100vw;
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
