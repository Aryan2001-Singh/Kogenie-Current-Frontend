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
import { CHART_COLORS } from "@/constants/chartColors";

const AvgFeedbackRatingChart = ({
  data,
}: {
  data: { name: string; rating: number }[];
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
      <h2 className="text-lg font-semibold mb-2">⭐ Average Feedback Ratings</h2>
      <div className="bg-white rounded-xl shadow-md p-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            {data.map((entry, index) => (
              <Bar
                key={index}
                dataKey="rating"
                fill={CHART_COLORS[index % CHART_COLORS.length]}
                isAnimationActive={isInView}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
};

export default AvgFeedbackRatingChart;
