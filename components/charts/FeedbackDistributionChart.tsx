"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
interface FeedbackDistributionItem {
    rating: number;
    manual: number;
    scraped: number;
  }
  
  const FeedbackDistributionChart = ({ data }: { data: FeedbackDistributionItem[] }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-lg font-semibold mb-2">📈 Feedback Rating Distribution</h2>
      <div className="bg-white rounded-xl shadow-md p-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="rating" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="manual"
              fill="#6366f1"
              name="Manual Ads"
              isAnimationActive={isInView}
            />
            <Bar
              dataKey="scraped"
              fill="#facc15"
              name="Scraped Ads"
              isAnimationActive={isInView}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
};

export default FeedbackDistributionChart;
