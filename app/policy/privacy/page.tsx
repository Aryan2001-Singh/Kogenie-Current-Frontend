"use client";

import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import { Mail, MapPin } from "lucide-react";

const Policy = () => {
  return (
    <>
      <Header />

      <main className="bg-[#f9fafb] text-gray-700 py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-4xl mx-auto border border-gray-200 bg-white rounded-3xl shadow-2xl p-10 sm:p-12">
          <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 text-center font-medium mb-12">
            <strong>Last updated: December 31, 2024</strong>
          </p>

          {[{
            title: "1. Information We Collect",
            content: "We collect different types of information to provide and improve our services:",
            bullets: [
              {
                subtitle: "1.1 Personal Information",
                items: [
                  "Name, email address, and phone number",
                  "Payment details (processed securely via third-party payment providers)",
                  "Business or advertising-related details you provide"
                ]
              },
              {
                subtitle: "1.2 Usage Data & Analytics",
                items: [
                  "Log data (IP address, browser type, operating system, and timestamps)",
                  "Clickstream data (pages visited, time spent, and actions taken)",
                  "AI-generated ad performance data for optimization"
                ]
              },
              {
                subtitle: "1.3 Cookies & Tracking Technologies",
                items: [
                  "We use cookies and similar technologies to enhance user experience and analyze trends. You can manage cookie settings through your browser."
                ]
              }
            ]
          },
          {
            title: "2. How We Use Your Information",
            bullets: [
              { items: [
                "Provide and improve KOgenie’s ad creation services",
                "Personalize your experience and recommend ad strategies",
                "Process payments and manage subscriptions",
                "Ensure security and prevent fraudulent activity",
                "Comply with legal obligations"
              ] }
            ],
            note: "We do not sell or rent your personal information to third parties."
          },
          {
            title: "3. Data Sharing & Third-Party Services",
            bullets: [
              { items: [
                "Service providers (e.g., payment processors, analytics platforms) to operate KOgenie",
                "Legal authorities if required by law or to protect our rights",
                "Marketing & advertising platforms (only anonymized, aggregated data) for service improvements"
              ] }
            ],
            note: "Third-party platforms like Google, Meta, and LinkedIn may collect data when you interact with KOgenie ads. We are not responsible for their privacy practices."
          },
          {
            title: "4. Data Security & Retention",
            bullets: [
              { items: [
                "We implement industry-standard security measures to protect your data. However, no system is 100% secure, and we encourage you to use strong passwords.",
                "We retain your data only as long as necessary for legal, business, or analytical purposes. You may request deletion of your data at any time."
              ] }
            ]
          },
          {
            title: "5. Your Rights & Choices",
            bullets: [
              { items: [
                "Access, update, or delete your personal data",
                "Opt-out of marketing communications",
                "Request a copy of your stored data",
                "Disable cookies through your browser"
              ] }
            ],
            note: "To exercise your rights, contact us at <a href=\"mailto:privacy@kogenie.com\" className=\"text-indigo-600 hover:underline font-medium\">privacy@kogenie.com</a>."
          },
          {
            title: "6. Children's Privacy",
            content: "KOgenie is not intended for individuals under 18. We do not knowingly collect data from minors."
          },
          {
            title: "7. Changes to This Policy",
            content: "We may update this policy periodically. Significant changes will be communicated via email or website updates. Continued use of KOgenie after changes means you accept the revised policy."
          }].map((section, index) => (
            <section className="mb-10" key={index}>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 border-l-4 border-indigo-600 pl-3">
                {section.title}
              </h3>
              {section.content && (
                <p className="text-base text-gray-600 text-justify leading-relaxed mb-2">
                  {section.content}
                </p>
              )}
              {section.bullets && section.bullets.map((b, i) => (
                <div key={i} className="mb-3">
                  {"subtitle" in b && (
                    <p className="font-semibold text-gray-700 mb-1">{b.subtitle}</p>
                  )}
                  <ul className="list-disc list-outside pl-6 text-gray-600 leading-relaxed">
                    {b.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {section.note && (
                section.note.includes("privacy@kogenie.com") ? (
                  <p className="text-base text-gray-600 text-justify leading-relaxed mt-4">
                    To exercise your rights, contact us at {" "}
                    <a
                      href="mailto:privacy@kogenie.com"
                      className="text-indigo-600 hover:underline font-medium"
                    >
                      privacy@kogenie.com
                    </a>.
                  </p>
                ) : (
                  <p className="text-sm text-gray-600 italic mt-2">{section.note}</p>
                )
              )}
            </section>
          ))}

          {/* Contact Section */}
          <section className="mt-12 bg-indigo-50 border border-indigo-100 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              8. Contact Us
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600" />
                <a href="mailto:privacy@kogenie.com" className="text-gray-700 hover:underline font-medium">
                  privacy@kogenie.com
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

export default Policy;