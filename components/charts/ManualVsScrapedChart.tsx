"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

const COLORS = ["#f97316", "#6366F1"];

interface ManualVsScrapedChartProps {
  data: { name: string; value: number }[];
  total: number;
}

const ManualVsScrapedChart: React.FC<ManualVsScrapedChartProps> = ({
  data,
  total,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-6 flex justify-center"
    >
      <div className="bg-white rounded-xl shadow-md border border-gray-100 px-6 py-4 w-full max-w-6xl">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Chart */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[450px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <defs>
                    <radialGradient id="glassIndigo" cx="50%" cy="50%" r="70%">
                      <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.8" />
                      <stop
                        offset="60%"
                        stopColor="#6366f1"
                        stopOpacity="0.7"
                      />
                      <stop
                        offset="100%"
                        stopColor="#4338ca"
                        stopOpacity="0.5"
                      />
                    </radialGradient>

                    <radialGradient id="glassOrange" cx="50%" cy="50%" r="70%">
                      <stop offset="0%" stopColor="#fde68a" stopOpacity="0.8" />
                      <stop
                        offset="60%"
                        stopColor="#f97316"
                        stopOpacity="0.7"
                      />
                      <stop
                        offset="100%"
                        stopColor="#c2410c"
                        stopOpacity="0.5"
                      />
                    </radialGradient>
                  </defs>

                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    innerRadius={70}
                    isAnimationActive={isInView}
                    paddingAngle={1}
                  >
                    {/* Apply Glass Gradients */}
                    <Cell key="manual" fill="url(#glassOrange)" />
                    <Cell key="scraped" fill="url(#glassIndigo)" />

                    <Label
                      value={`${data[0].value} / ${data[1].value}`}
                      position="center"
                      className="text-xl font-semibold text-gray-700"
                    />
                  </Pie>

                  <Tooltip
                    contentStyle={{
                      fontSize: "14px",
                      borderRadius: "8px",
                      border: "1px solid #e5e7eb",
                      backgroundColor: "#fff",
                    }}
                    formatter={(value: number, name: string) => [
                      `${value}`,
                      name,
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right: Text Summary */}
          <div className="text-left flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Manual vs Scraped Ads
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              Total Ads Generated:{" "}
              <span className="font-semibold text-indigo-600">{total}</span>
            </p>
            <div className="space-y-3">
              {data.map((entry, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: COLORS[i % COLORS.length],
                    }}
                  />
                  <p className="text-base font-medium text-gray-700">
                    {entry.name}:{" "}
                    <span className="font-semibold text-gray-900">
                      {entry.value}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ManualVsScrapedChart;
