"use client";

import React from "react";
// @ts-expect-error: no types available
import html2pdf from "html2pdf.js";

const ExportInsightsButton = () => {
  const handleExport = () => {
    const content = document.getElementById("insights-dashboard");
    if (!content) return;

    const options = {
      margin: 0.5,
      filename: "kogenie-admin-insights.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(options).from(content).save();
  };

  return (
    <button
      onClick={handleExport}
      className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-green-700 transition"
    >
      📄 Export Insights as PDF
    </button>
  );
};

export default ExportInsightsButton;