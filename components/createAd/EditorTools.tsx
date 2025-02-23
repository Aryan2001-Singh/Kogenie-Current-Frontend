"use client";

import React from "react";

interface EditorToolsProps {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  aspectRatio: "square" | "story";
  setAspectRatio: (ratio: "square" | "story") => void;
}

const EditorTools: React.FC<EditorToolsProps> = ({
  selectedFilter,
  setSelectedFilter,
  aspectRatio,
  setAspectRatio,
}) => {
  return (
    <div className="mt-3 p-4 bg-white rounded-lg shadow-lg transition-transform duration-200 hover:scale-105">
      {/* Filter Selection Dropdown */}
      <div className="flex items-center space-x-2 mb-3">
        <label className="text-gray-700 font-semibold">Apply Filter:</label>
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:scale-105"
        >
          <option value="none">None</option>
          <option value="grayscale(100%)">Grayscale</option>
          <option value="sepia(100%)">Sepia</option>
          <option value="invert(100%)">Invert</option>
          <option value="blur(5px)">Blur</option>
          <option value="brightness(150%)">Brightness</option>
          <option value="contrast(200%)">Contrast</option>
          <option value="saturate(200%)">Saturate</option>
        </select>
      </div>

      {/* Aspect Ratio Selection */}
      <div className="flex items-center space-x-2 mt-3">
        <label className="text-gray-700 font-semibold">Select Format:</label>
        <button
          onClick={() => setAspectRatio("square")}
          className={`px-3 py-2 border rounded-md transition-all duration-200 ${
            aspectRatio === "square"
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
              : "bg-[#C4CDE4] text-gray-700 hover:shadow-md"
          }`}
        >
          Instagram Post (1:1)
        </button>
        <button
          onClick={() => setAspectRatio("story")}
          className={`px-3 py-2 border rounded-md transition-all duration-200 ${
            aspectRatio === "story"
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
              : "bg-[#C4CDE4] text-gray-700 hover:shadow-md"
          }`}
        >
          Instagram Story/Reel (9:16)
        </button>
      </div>
    </div>
  );
};

export default EditorTools;
