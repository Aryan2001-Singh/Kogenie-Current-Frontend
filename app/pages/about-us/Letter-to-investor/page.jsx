"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Balancing the Pillars",
    content:
      "KOgenie stands on three pillars — people, customers, and investors. These aren’t just stakeholders; they are the very foundation. If one falls, the mission falters. We grow by keeping all three aligned.",
  },
  {
    title: "Dreaming Big, Starting Now",
    content:
      "Our vision is bold — to solve meaningful problems that matter. Not someday. Now. KOgenie isn’t just a product. It’s a purpose-driven team solving real problems that impact real people.",
    quote: "“The best time to build was yesterday. The next best time is now.”",
  },
  {
    title: "Earning Trust, Building Scale",
    content:
      "Trust isn’t bought, it’s earned. We earn it through outcomes. And those outcomes only come when solutions scale — not to hundreds, but to millions. That’s the scale we aim for.",
  },
  {
    title: "Creating a KOgenie Advantage",
    content:
      "Our product improves with every user. That’s the flywheel. More users → smarter results → greater impact. We don’t compete on price. We compete on value. Value that compounds.",
    quote: "“Don’t be better. Be different — and better will follow.”",
  },
  {
    title: "Redefining the Norm",
    content:
      "We're not another version of the same thing. We're not better apples. We're the orange in a field of apples. We’re building something new. Something the market didn’t expect — but deeply needed.",
  },
  {
    title: "Building the Team",
    content:
      "Behind every breakthrough is a team that believed. KOgenie is that team — curious, bold, collaborative. Together, we’re creating a culture where builders thrive and ideas flourish.",
    quote: "“Ideas don’t build companies. Teams do.”",
  },
  {
    title: "Focus on the Drivers",
    content:
      "We don’t chase outcomes. We focus on the drivers: Team. Customers. Execution. If those are right, the outcomes will follow. And they will scale.",
  },
  {
    title: "One Dream. One Mission.",
    content:
      "KOgenie isn’t here to chase trends. We’re here to build something timeless. Something meaningful. Something that lasts. This is just the beginning — and the best is ahead.",
    quote: "“We’re not solving for now — we’re solving for always.”",
  },
];

export default function LetterToInvestorPage() {
  return (
    <div className="bg-white min-h-screen pt-12 pb-24 px-6 sm:px-10 lg:px-16 font-sans">
      {/* Go Back Button */}
      <div className="mb-6">
        <Link
          href="/pages/about-us"
          className="text-indigo-600 hover:text-indigo-800 transition text-sm font-semibold ml-2 mt-6"
        >
          ← Back to About
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-100 to-indigo-50 p-10 rounded-3xl shadow-inner mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          A Letter to Our Investors
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A transparent look into our vision, strategy, and the foundation we’re building for the long haul.
        </p>
      </div>

      {/* Timeline-style Section Cards */}
      <div style={{marginBottom:"40px"}}className="space-y-20 max-w-3xl mx-auto">
        {sections.map((sec, index) => (
          <div key={index}>
            <motion.div
              className="  pl-6 pr-4 py-6 bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{padding:"20px"}}
            >
              <h3
                className="text-2xl font-bold text-indigo-700 mb-2"
                style={{ textAlign: "justify" }}
              >
                {sec.title}
              </h3>
              <p
                className="text-gray-700 text-[16px] leading-relaxed mb-4"
                style={{ textAlign: "justify", padding: "6px 0" }}
              >
                {sec.content}
              </p>
              <hr className="border-t border-gray-300" />
            </motion.div>

            {/* Optional Quote */}
            {sec.quote && (
  <motion.div
    className="relative mt-14 mx-auto max-w-3xl px-8 py-8 bg-white shadow-sm  overflow-hidden"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
  >
    {/* Decorative Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-transparent to-indigo-50 blur-2xl opacity-50 pointer-events-none" />

    {/* Quote Badge Icon */}
    <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 font-bold text-xl mb-4 mx-auto shadow-md">
      ❝
    </div>

    {/* Quote Text */}
    <p className="text-center text-indigo-700 font-semibold text-lg leading-relaxed relative z-10 italic">
      {sec.quote}
    </p>

    {/* Footer Line */}
    <div className="mt-6 w-16 h-[2px] bg-indigo-500 mx-auto opacity-60 rounded-full" />
  </motion.div>
)}

          </div>
        ))}
      </div>
    </div>
  );
}
