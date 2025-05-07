"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
interface MonthlyAdGrowthData {
    month: string;
    totalAds: number;
  }
  
  const MonthlyAdGrowthChart = ({ data }: { data: MonthlyAdGrowthData[] }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-xl font-semibold mb-2">📊 Monthly Ad Creation Trends</h2>
      <div className="bg-white rounded shadow p-4">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="totalAds"
              stroke="#10b981"
              isAnimationActive={isInView}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
};

export default MonthlyAdGrowthChart;
