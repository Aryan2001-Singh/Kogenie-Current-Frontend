"use client";

import React from "react";
import { Filter, LayoutGrid } from "lucide-react"; // Import icons

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
    <div className="mt-2 p-2 bg-white rounded-lg shadow-md transition-transform duration-200 hover:scale-100">
      <div className="flex items-center gap-6">
        {/* Filter Selection Section */}
        <div className="flex items-center space-x-2">
          <Filter size={22} className="text-gray-500" />
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="border rounded-md px-2 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm"
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

        {/* Aspect Ratio Section */}
        <div className="flex items-center space-x-2">
          <LayoutGrid size={22} className="text-gray-500" />
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setAspectRatio("square")}
              className={`px-2 py-1 text-xs border rounded-lg transition-all duration-200 ${
                aspectRatio === "square"
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Post (1:1)
            </button>
            <button
              onClick={() => setAspectRatio("story")}
              className={`px-2 py-1 text-xs border rounded-lg transition-all duration-200 ${
                aspectRatio === "story"
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Story (9:16)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorTools;
