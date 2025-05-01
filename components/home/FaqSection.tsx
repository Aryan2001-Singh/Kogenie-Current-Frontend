"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, SearchIcon } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What is Kogenie?",
    answer: "KOgenie is an AI-powered platform that creates high-converting ads effortlessly. By understanding your audience at a granular level, we generate hyper-personalized ads that resonate, engage, and drive real results—without the usual time and resource drain.",
  },
  {
    question: "Why does it work?",
    answer: "Traditional ads often feel generic and miss the mark. KOgenie changes that by leveraging cutting-edge AI, deep audience insights, and automated A/B testing to craft messages that feel tailor-made for each viewer. The result? Higher engagement, better conversions, and maximized ROI.",
  },
  {
    question: "⁠How does it work?",
    answer: "KOgenie takes your product details and audience data, then instantly generates multiple ad variations optimized for performance. Our system continuously tests and refines these ads in real-time, ensuring your campaigns get smarter and more effective with every run.",
  },
  {
    question: "⁠How do I get started?",
    answer: "It’s simple—sign up, input your brand and campaign details, and let KOgenie do the heavy lifting. You’ll have ready-to-run ads in minutes, optimized for performance across platforms.",
  },
  {
    question: "Can I get a discount?",
    answer: "We believe in delivering real value. Our pricing is designed to ensure you get the best return on investment. However, we do offer special deals for early adopters and long-term users—reach out to us to explore your options!",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // Rotate placeholder
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % faqs.length);
    }, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full bg-[#f8f9fc] py-20 px-6 sm:px-12 font-['Poppins']">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl px-6 py-10 sm:p-12 relative">
        {/* Header & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
          <div className="text-center sm:text-left w-full sm:w-auto">
            <h2 style={{font:"Poppins"}} className="text-3xl font-semibold text-gray-800">Have Questions?</h2>
            <p className="text-gray-500 mt-1 max-w-sm text-lg">
  All your questions are answered here, if you {"can't"} find them here,  
  <Link href="/contact" className="underline text-lg text-[#546aec]">
    email us
  </Link>
</p>

          </div>

          {/* Search Bar with rotating placeholder */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder={faqs[placeholderIndex].question}
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#546aec] shadow-sm"
            />
            <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* FAQ Items */}
        {filteredFaqs.length > 0 ? (
          <ul className="space-y-6">
            {filteredFaqs.map((faq, index) => (
              <li key={index} className="border-b pb-4">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className="text-lg text-gray-900 font-medium group-hover:text-[#546aec] transition">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`transition-transform text-gray-300 duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    } `}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-gray-600 text-justify mt-3 overflow-hidden leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        ) : (
            <div className="text-center text-gray-500 text-sm mt-6">
            Sorry, we couldn&rsquo;t find an answer for that. Try contacting our support team.
          </div>
          
          
        )}
      </div>
    </section>
  );
};

export default Faq;
