"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileTextIcon,
  SparklesIcon,
  RocketIcon,
  BarChartIcon,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Add Your Product",
    description:
      "Manually enter details or let KOgenie auto-fetch descriptions, images, and prices from your website by entering the URL.",
    icon: <FileTextIcon className="w-6 h-6 text-indigo-600" />,
  },
  {
    id: "02",
    title: "Generate AI Ads",
    description:
      "KOgenie’s AI creates HyperTargeted ads instantly. Feel free to edit and tweak them to add your flavour.",
    icon: <SparklesIcon className="w-6 h-6 text-indigo-600" />,
  },
  {
    id: "03",
    title: "Launch in One Click",
    description:
      "Directly upload on all social media platforms without manual uploads or complex settings.",
    icon: <RocketIcon className="w-6 h-6 text-indigo-600" />,
  },
  {
    id: "04",
    title: "Track & Optimize",
    description:
      "Get real-time valuable insights and AI-powered suggestions to maximize ROI on your campaigns.",
    icon: <BarChartIcon className="w-6 h-6 text-indigo-600" />,
  },
];

const Step = () => {
  return (
    <section className="w-full bg-[#f97316]/10 py-20 px-6 sm:px-12 lg:px-20 relative font-['Inter']">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-gray-200">
                  {step.icon}
                </div>
              </div>
              <div className="text-gray-500 font-bold text-lg mb-1">
                {step.id}
              </div>
              <div className="text-xl font-semibold mb-2">{step.title}</div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          
          <p className="italic text-xl text-gray-700 mb-4">
          From scroll-stopping headlines to hyper-targeted messaging—your custom ad journey starts here.
          </p>

          <Link href="/create">
            <button
              className="px-10 py-3 rounded-xl text-xl font-bold text-white bg-gradient-to-r 
                from-[#546aec] to-[#7b8df6] shadow-md transition duration-300 
                hover:scale-105 hover:shadow-xl hover:from-[#3f4ed4] hover:to-[#6c7eea]"
            >
              Customise yours now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Step;