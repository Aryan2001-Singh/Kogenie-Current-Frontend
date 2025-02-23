"use client";

import React from "react";

interface FontSettingsProps {
  headlineFontSize: number;
  setHeadlineFontSize: React.Dispatch<React.SetStateAction<number>>;
  headlineBgColor: string;
  setHeadlineBgColor: (color: string) => void;
  headlineFontColor: string;
  setHeadlineFontColor: (color: string) => void;
  isBold: boolean;
  setIsBold: React.Dispatch<React.SetStateAction<boolean>>;
  isItalic: boolean;
  setIsItalic: React.Dispatch<React.SetStateAction<boolean>>;
  headlineFont: string;
  setHeadlineFont: (font: string) => void;
}

const FontSettings: React.FC<FontSettingsProps> = ({
  headlineFontSize,
  setHeadlineFontSize,
  headlineBgColor,
  setHeadlineBgColor,
  headlineFontColor,
  setHeadlineFontColor,
  isBold,
  setIsBold,
  isItalic,
  setIsItalic,
  headlineFont,
  setHeadlineFont,
}) => {
  return (
    <div className="mt-4 p-6 border rounded-lg bg-white shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-indigo-700">* Font Settings *</h3>

      {/* Font Size Controls */}
      <div className="flex items-center space-x-2 mb-3">
        <label className="text-gray-700 font-semibold">Font Size:</label>
        <button
          onClick={() => setHeadlineFontSize((prev) => Math.max(prev - 2, 10))}
          className="w-8 h-8 flex items-center justify-center text-sm bg-gray-500 text-white rounded-md active:scale-95 transition-transform"
        >
          -
        </button>
        <span className="w-12 h-8 flex items-center justify-center text-sm text-gray-800 bg-gray-200 rounded-md">
          {headlineFontSize}px
        </span>
        <button
          onClick={() => setHeadlineFontSize((prev) => Math.min(prev + 2, 50))}
          className="w-8 h-8 flex items-center justify-center text-sm bg-gray-500 text-white rounded-md active:scale-95 transition-transform"
        >
          +
        </button>
      </div>

      {/* Headline Background Color Picker */}
      <div className="flex items-center space-x-3 mb-3">
        <label className="text-gray-700 font-semibold">
          Headline Background:
        </label>
        <input
          type="color"
          value={headlineBgColor}
          onChange={(e) => setHeadlineBgColor(e.target.value)}
          className="w-8 h-8 border rounded-md cursor-pointer"
        />
      </div>

      {/* Font Color Selection */}
      <div className="flex items-center space-x-3 mb-3">
        <label className="text-gray-700 font-semibold">Font Color:</label>
        <input
          type="color"
          value={headlineFontColor}
          onChange={(e) => setHeadlineFontColor(e.target.value)}
          className="w-8 h-8 border rounded-md cursor-pointer"
        />
      </div>

      {/* Bold & Italic Buttons */}
      <div className="flex items-center space-x-2 mb-3">
        <label className="text-gray-700 font-semibold">Font Style:</label>
        <button
          onClick={() => setIsBold((prev) => !prev)}
          className={`w-8 h-8 flex items-center justify-center text-sm border rounded-md active:scale-95 transition-transform ${
            isBold ? "bg-gray-800 text-white" : "bg-gray-200"
          }`}
        >
          B
        </button>
        <button
          onClick={() => setIsItalic((prev) => !prev)}
          className={`w-8 h-8 flex items-center justify-center text-sm border rounded-md active:scale-95 transition-transform ${
            isItalic ? "bg-gray-800 text-white" : "bg-gray-200"
          }`}
        >
          I
        </button>
      </div>

      {/* Font Selection */}
      <div className="flex items-center space-x-2">
        <label className="text-gray-700 font-semibold">Font:</label>
        <select
          value={headlineFont}
          onChange={(e) => setHeadlineFont(e.target.value)}
          className="border rounded-md px-2 py-1 text-sm"
        >
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="'Poppins', sans-serif">Poppins</option>
          <option value="'Lobster', cursive">Lobster</option>
          <option value="'Roboto', sans-serif">Roboto</option>
          <option value="'Montserrat', sans-serif">Montserrat</option>
        </select>
      </div>
    </div>
  );
};

export default FontSettings;
