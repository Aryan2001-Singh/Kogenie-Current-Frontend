"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { CHART_COLORS } from "@/constants/chartColors"; // ✅ Correct import

interface ManualVsScrapedChartProps {
  data: { name: string; value: number }[];
  total: number;
}

const ManualVsScrapedChart: React.FC<ManualVsScrapedChartProps> = ({ data, total }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-lg font-semibold mb-1 flex items-center gap-2">
        🧮 Manual vs Scraped Ads
      </h2>
      <p className="text-sm text-gray-600 mb-2">
        Total Ads Generated: <span className="font-semibold text-indigo-600">{total}</span>
      </p>
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              isAnimationActive={isInView}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="top" />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
};

export default ManualVsScrapedChart;
