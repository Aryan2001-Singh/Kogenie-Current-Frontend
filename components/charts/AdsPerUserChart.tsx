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
    >
      <h2 className="text-lg font-semibold mb-2">👥 Total Ads per User</h2>
      <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="email" tick={{ fontSize: 10 }} />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="totalAds"
              fill="#60a5fa"
              isAnimationActive={isInView}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
};

export default AdsPerUserChart;
