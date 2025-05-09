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
      className="w-full flex justify-center"
    >
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 px-8 py-6 w-full max-w-6xl">
        {/* Heading */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              ⭐ Average Feedback Ratings
            </h2>
            <p className="text-lg mt- text-gray-500">
              Ratings collected from users on a scale of 1 to 5
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <defs>
                <radialGradient id="glassOrange" cx="50%" cy="50%" r="75%">
                  <stop offset="0%" stopColor="#fde68a" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#f97316" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#c2410c" stopOpacity="0.5" />
                </radialGradient>

                <radialGradient id="glassIndigo" cx="50%" cy="50%" r="75%">
                  <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#6366f1" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#4338ca" stopOpacity="0.5" />
                </radialGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 5]} allowDecimals={false} />
              <Tooltip
                contentStyle={{
                  fontSize: "14px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#fff",
                }}
              />
              <Bar
                dataKey="rating"
                radius={[8, 8, 0, 0]}
                barSize={64}
                isAnimationActive={isInView}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.name.toLowerCase() === "manual"
                        ? "url(#glassOrange)"
                        : "url(#glassIndigo)"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.section>
  );
};

export default AvgFeedbackRatingChart;
