'use client';

import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import { Mail, MapPin } from "lucide-react";

const Policy = () => {
  return (
    <>
      <Header />

      <main style={{fontFamily:"Poppins"}} className="bg-[#f9fafb] text-gray-700 py-24 px-4 sm:px-6 lg:px-8 font-[Poppins]">
        <div className="max-w-4xl mx-auto border border-gray-200 bg-white rounded-3xl shadow-2xl p-10 sm:p-12">
          <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6 leading-tight">
            Cookie Policy
          </h1>
          <p className="text-sm text-gray-500 text-center font-medium mb-12">
            <strong>Last updated: December 31, 2024</strong>
          </p>

          {[{
            title: "What are cookies?",
            content: "Cookies are small data files placed on your device when you visit a website. They help websites function efficiently and provide reporting data."
          },
          {
            title: "Why do we use cookies?",
            content: "We use both first-party and third-party cookies for essential services, analytics, and advertising purposes. Cookies help us track interactions on our website and improve your experience."
          },
          {
            title: "How can I control cookies?",
            content: "You can manage your cookie preferences using the Cookie Consent Manager, accessible at the bottom of the page. Essential cookies are required to provide our services and cannot be disabled."
          },
          {
            title: "Other tracking technologies",
            content: "We may also use web beacons or similar tracking technologies to analyze site traffic or the effectiveness of our email campaigns."
          },
          {
            title: "Targeted advertising",
            content: "Third-party cookies may track your activity across different websites to serve relevant ads. You can opt out using your browser's privacy settings or third-party opt-out tools."
          },
          {
            title: "Policy updates",
            content: "We may update this Cookie Policy periodically. Revisit this page for any changes."
          }].map((section, index) => (
            <section className="mb-10" key={index}>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 border-l-4 border-indigo-600 pl-3">
                {section.title}
              </h3>
              <p className="text-base text-gray-600 text-justify leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}

          {/* Contact Section */}
          <section className="mt-12 bg-indigo-50 border border-indigo-100 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600" />
                <a href="mailto:contact@kogenie.com" className="text-gray-700 hover:underline font-medium">
                  contact@kogenie.com
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