"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import Link from "next/link";

const conversionData = [
  { label: "Generic AI", Normal: 2.5, HyperTarget: 5.6 },
  { label: "Behavioral", Normal: 3.2, HyperTarget: 6.1 },
  { label: "Retargeting", Normal: 4.1, HyperTarget: 7.2 },
  { label: "Event-Driven", Normal: 4.8, HyperTarget: 8.5 },
  { label: "HyperPersona", Normal: 5.1, HyperTarget: 9.6 },
];

const ctrData = [
  { label: "Generic AI", Normal: 1.1, HyperTarget: 2.2 },
  { label: "Behavioral", Normal: 1.5, HyperTarget: 3.0 },
  { label: "Retargeting", Normal: 1.8, HyperTarget: 3.5 },
  { label: "Event-Driven", Normal: 2.0, HyperTarget: 4.2 },
  { label: "HyperPersona", Normal: 2.3, HyperTarget: 5.1 },
];

const SolutionSection = () => {
  const [view, setView] = useState("conversion");
  const data = view === "conversion" ? conversionData : ctrData;
  const yAxisLabel = view === "conversion" ? "Conversion Rate" : "Click-Through Rate";

  return (
    <section id='solution' className="w-full bg-[#fefefe] py-12 px-6 sm:px-12 lg:px-20 relative overflow-hidden font-['Geist']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column */}
        <div className="col-span-full lg:col-span-2 space-y-8">
          {/* Heading */}
          <h1 className="text-7xl font-bold leading-tight">
            With the right target,
            <br />
            big brands grow,
            <br />
            <span className="bg-gradient-to-r from-[#3f54c6] to-[#5a6fd1] bg-clip-text text-transparent">
              so can you.
            </span>
          </h1>

          {/* Paragraph + CTA */}
          <div className="space-y-4 text-left lg:text-left">
          <p className="text-base font-semibold uppercase tracking-wide text-grey-800">
              How?
            </p>
            <p className="text-2xl lg:text-3xl font-extrabold text-[#1e1e1e] leading-snug mt-1 font-['Geist']">
              <span className="bg-grey-600 ">
                HyperTargeting
              </span>{" "}
              is our secret sauce.
            </p>
            <p className="text-base lg:text-xl font-medium text-gray-600">
              We believe in the right people,at the right time,<br /> with the right message.
            </p>
            <Link href="/sign-up" >
              <button className="px-10 py-3 rounded-xl text-xl font-bold text-white bg-gradient-to-r 
                from-[#546aec] to-[#7b8df6] shadow-md transition duration-300 
                hover:scale-105 hover:shadow-xl hover:from-[#3f4ed4] hover:to-[#6c7eea]">
                Open an account
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column */}
     
<div className="col-span-full lg:col-span-1 flex flex-col h-full justify-between gap-6">

         

          {/* Toggle Buttons */}
          <div className="flex justify-end gap-2 px-6">
            <button
              onClick={() => setView("conversion")}
              className={`px-3 py-1 text-sm rounded-md font-medium ${
                view === "conversion"
                  ? "bg-[#3f54c6] text-white"
                  : "bg-white text-gray-800 border"
              }`}
            >
              Conversion
            </button>
            <button
              onClick={() => setView("ctr")}
              className={`px-3 py-1 text-sm rounded-md font-medium ${
                view === "ctr"
                  ? "bg-[#3f54c6] text-white"
                  : "bg-white text-gray-800 border"
              }`}
            >
              CTR
            </button>
          </div>

          {/* Chart */}
          <div className="flex-grow p-4 h-full">
  <ResponsiveContainer width="100%" height={360}>

              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                <YAxis
  domain={[0, 10]}
  tickFormatter={(tick) => `${tick}%`}
  tick={{ fontSize: 12 }}
  label={{
    value: yAxisLabel,
    angle: -90,
    position: "insideLeft",
    style: { textAnchor: "middle", fontSize: 12 },
  }}
/>

                <Tooltip formatter={(value) => `${value}%`} />
                <Legend verticalAlign="top" height={36} />
                <Line
                  type="monotone"
                  dataKey="Normal"
                  stroke="#f97316"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="HyperTarget"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{ r: 4, stroke: "#2563eb", strokeWidth: 2, fill: "white" }}
                  activeDot={{
                    r: 8,
                    fill: "#2563eb",
                    stroke: "white",
                    strokeWidth: 2,
                    className: "animate-ping",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-center text-sm font-medium text-gray-700 mt-4">
              HyperTargeting consistently outperforms traditional AI ad strategies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
