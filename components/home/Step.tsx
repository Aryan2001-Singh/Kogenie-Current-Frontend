"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileTextIcon,
  SparklesIcon,
  RocketIcon,
  BarChartIcon,
} from "lucide-react";
import { X } from "lucide-react";

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
  const [showVideo, setShowVideo] = useState(false);

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
              <div className="text-gray-500 font-bold text-lg mb-1 font-['Poppins']">
                {step.id}
              </div>
              <div className="text-xl font-semibold mb-2 font-['Poppins']">
                {step.title}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-['Poppins']">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="italic text-xl text-gray-500 mb-6 font-['Inter']">
            From scroll-stopping headlines to hyper-targeted messaging—your
            custom ad journey starts here.
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/sign-up">
              <button
                className="w-52 px-6 py-3 rounded-xl text-xl font-semibold text-white bg-gradient-to-r 
                from-[#546aec] to-[#7b8df6] shadow-md transition duration-300 
                hover:scale-105 hover:shadow-xl hover:from-[#3f4ed4] hover:to-[#6c7eea] font-['Poppins']"
              >
                Try now
              </button>
            </Link>

            <button
              onClick={() => setShowVideo(true)}
              className="w-52 px-6 py-3 rounded-xl text-xl font-semibold text-[#546aec] bg-white shadow-md transition duration-300 
                hover:scale-105 hover:shadow-xl hover:border hover:border-[#546aec] font-['Poppins']"
              style={{ border: "1px solid #546aec" }}
            >
              Watch demo
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl">
            <button
              onClick={() => {
                console.log("Close clicked");
                setShowVideo(false);
              }}
              className="absolute top-4 right-4 text-gray-600 hover:text-black z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <video
              controls
              autoPlay
              className="w-full h-[500px] object-cover rounded-2xl"
            >
              <source
                src="/Screen Recording 2025-03-05 at 6.41.38 PM.mov"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Step;
