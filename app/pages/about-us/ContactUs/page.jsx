import React from "react";
import ContactForm4 from "@/components/contact/ContactForm";
import Map2 from "@/components/contact/Map";
import { motion } from "framer-motion";

const AboutContactSection = () => {
  return (
    <section className="relative bg-white py-20 px-6 lg:px-20">
      {/* Popped Heading */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 drop-shadow-md ">
          Let’s <span className="text-indigo-500">Connect</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto text-md leading-relaxed">
          Got questions about how we solve real marketing problems with AI? Or just want to say{" "}
          <span className="text-indigo-500 font-medium">hello</span>? We’d love to hear from you.
        </p>
      </motion.div>

      {/* Content Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Contact Info + Map */}
        <div className="bg-white p-6 h-full flex flex-col justify-between">
          <ul className="space-y-4 text-gray-700 text-md">
            <li className="flex items-center space-x-3">
              <i className="fas fa-envelope text-indigo-600"></i>
              <a
                href="mailto:support@kogenie.com"
                className="hover:text-indigo-700 transition font-medium"
              >
                support@kogenie.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fas fa-phone text-indigo-600"></i>
              <span>+91-8826-132-744</span>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fas fa-map-marker-alt text-indigo-600"></i>
              <span>Delhi, India</span>
            </li>
          </ul>

          {/* Map */}
          <div
            style={{ height: "280px" }}
            className="bg-white border border-indigo-100 shadow-lg hover:shadow-xl transition-all rounded-xl p-6 mt-10"
          >
            <div className="rounded-xl overflow-hidden shadow-md h-full">
              <Map2 />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="transition-all p-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <ContactForm4 />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutContactSection;
