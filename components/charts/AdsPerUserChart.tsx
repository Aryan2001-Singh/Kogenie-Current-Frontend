"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

const AdsPerUserChart = ({
  data,
}: {
  data: { email: string; totalAds: number }[];
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center"
    >
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg mt-8 transition-shadow border border-gray-100 px-8 py-6 w-full max-w-6xl overflow-x-auto">
        {/* Heading */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              👥 Total Ads per User
            </h2>
            <p className="text-lg mt-2 text-gray-500">
              Unique gradient bars showing how many ads each user generated
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="w-full h-[300px] min-w-[600px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              {/* Define multiple gradients */}
              <defs>
                {data.map((_, index) => (
                  <linearGradient
                    key={`grad-${index}`}
                    id={`grad-${index}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9} />
                    <stop
                      offset="100%"
                      stopColor="#f97316"
                      stopOpacity={0.85 - index * 0.05}
                    />
                  </linearGradient>
                ))}
              </defs>

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="email" tick={{ fontSize: 10 }} />
              <YAxis allowDecimals={false} />
              <Tooltip
                contentStyle={{
                  fontSize: "14px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#fff",
                }}
              />
              <Bar
                dataKey="totalAds"
                radius={[8, 8, 0, 0]}
                isAnimationActive={isInView}
                barSize={40}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={`url(#grad-${index})`} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.section>
  );
};

export default AdsPerUserChart;
