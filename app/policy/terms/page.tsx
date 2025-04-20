"use client";

import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import { Mail, MapPin} from "lucide-react";

const TPolicy = () => {
  return (
    <>
      <Header />

      <main className="bg-[#f9fafb] text-gray-700 py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-4xl mx-auto border border-gray-200 bg-white rounded-3xl shadow-2xl p-10 sm:p-12">
          <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6 leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 text-center font-medium mb-12">
            <strong>Last updated: December 31, 2024</strong>
          </p>

          {[{
            title: "1. Introduction",
            content:
              "Welcome to KOgenie! By accessing or using our platform, you agree to these Terms and Conditions. If you do not agree, please refrain from using our services. KOgenie is an AI-powered ad creation and optimization platform designed to help businesses create high-converting advertisements efficiently.",
          },
          {
            title: "2. User Eligibility",
            content:
              "You must be at least 18 years old to use KOgenie. By signing up, you confirm that you have the legal capacity to enter into an agreement with us.",
          },
          {
            title: "3. Services Provided",
            content:
              "KOgenie generates AI-driven ads based on your input and optimizes them through automated A/B testing. While we strive for high performance, we do not guarantee specific ad results as external factors such as audience targeting, budget allocation, and market conditions affect ad performance.",
          },
          {
            title: "4. Account and Security",
            content:
              "\u2022 You are responsible for maintaining the confidentiality of your account credentials.\n\u2022 Any activity under your account is your responsibility. If you suspect unauthorized access, notify us immediately.",
          },
          {
            title: "5. Payment and Billing",
            content:
              "\u2022 KOgenie operates on a subscription and pay-per-use model. Pricing details are available on our website.\n\u2022 Payments are non-refundable unless covered under our Refund Policy.\n\u2022 We reserve the right to update pricing and billing terms with prior notice.",
          },
          {
            title: "6. Content and Intellectual Property",
            content:
              "\u2022 KOgenie retains all rights to its AI algorithms, platform, and technology.\n\u2022 You own the rights to the ad content generated using your input. However, KOgenie reserves the right to analyze anonymized usage data to improve its AI models.",
          },
          {
            title: "7. Prohibited Activities",
            content:
              "You agree not to:\n\u2022 Use KOgenie for illegal, misleading, or harmful advertisements.\n\u2022 Reverse-engineer, copy, or exploit our platform for unauthorized purposes.\n\u2022 Engage in any activity that may disrupt or harm the KOgenie platform or users.",
          },
          {
            title: "8. Limitation of Liability",
            content:
              "KOgenie is provided on an 'as-is' and 'as-available' basis. While we strive for accuracy and effectiveness, we are not responsible for:\n\u2022 Ad performance on third-party platforms.\n\u2022 Any direct or indirect damages resulting from the use of our platform.\n\u2022 Unauthorized access or data breaches beyond our reasonable control.",
          },
          {
            title: "9. Termination",
            content:
              "KOgenie reserves the right to suspend or terminate accounts that violate these terms without prior notice.",
          },
          {
            title: "10. Privacy Policy",
            content:
              "Your data is handled in accordance with our Privacy Policy, which outlines how we collect, store, and protect your information.",
          },
          {
            title: "11. Changes to Terms",
            content:
              "We may update these Terms from time to time. Continued use of KOgenie after changes means you accept the updated terms.",
          }].map((section, index) => (
            <section className="mb-10" key={index}>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 border-l-4 border-indigo-600 pl-3">
                {section.title}
              </h3>
              {section.content.includes("\u2022") || section.content.includes("•") ? (
                <ul className="list-disc list-outside pl-6 text-gray-600 leading-relaxed">
                  {section.content.split("\n").map((item, i) => (
                    <li key={i}>{item.replace(/^\u2022\s*/, "").replace(/^•\s*/, "")}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-base text-gray-600 text-justify leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              )}
            </section>
          ))}

          {/* Styled Contact Section */}
          <section className="mt-12 bg-indigo-50 border border-indigo-100 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              12. Contact Us
            </h3>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              For any questions, reach out to us:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600" />
                <a
                  href="mailto:support@kogenie.com"
                  className="text-gray-700 hover:underline font-medium"
                >
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

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-wrapper w-full">
          <div className="inner-wrapper mx-auto">
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

export default TPolicy;