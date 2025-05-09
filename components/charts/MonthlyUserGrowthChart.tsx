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
  CartesianGrid,
} from "recharts";

interface MonthlyUserGrowthData {
  _id: string;
  count: number;
}

const MonthlyUserGrowthChart = ({ data }: { data: MonthlyUserGrowthData[] }) => {
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
      <div className="bg-white rounded-xl mt-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 px-8 py-6 w-full max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-1">📈 Monthly User Growth</h2>
            <p className="text-lg mt-2 text-gray-500">
              Number of new users joining each month
            </p>
          </div>
        </div>

        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id" />
              <YAxis allowDecimals={false} />
              <Tooltip
                contentStyle={{
                  fontSize: "14px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#fff",
                  color: "#3b82f6",
                }}
              />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 5, fill: "#f97316", stroke: "white", strokeWidth: 2 }}
                activeDot={{ r: 7, fill: "#f97316", stroke: "#fff", strokeWidth: 2 }}
                isAnimationActive={isInView}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.section>
  );
};

export default MonthlyUserGrowthChart;