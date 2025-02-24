"use client";

import React from "react";
import { FaBold, FaItalic } from "react-icons/fa";
import { MdFormatColorFill, MdFormatColorText, MdFontDownload } from "react-icons/md";

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
    <div className="mt-4 p-4 border rounded-lg bg-white shadow-md">
      <div className="flex flex-row items-center space-x-4">
        {/* Font Size Controls */}
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setHeadlineFontSize((prev) => Math.max(prev - 2, 10))}
            title="Decrease Font Size"
            className="w-5 h-5 flex items-center justify-center text-xs bg-gray-500 text-white rounded active:scale-95 transition-transform"
          >
            -
          </button>
          <span
            title="Current Font Size"
            className="w-8 h-5 flex items-center justify-center text-xs text-gray-800 bg-gray-200 rounded"
          >
            {headlineFontSize}px
          </span>
          <button
            onClick={() => setHeadlineFontSize((prev) => Math.min(prev + 2, 50))}
            title="Increase Font Size"
            className="w-5 h-5 flex items-center justify-center text-xs bg-gray-500 text-white rounded active:scale-95 transition-transform"
          >
            +
          </button>
        </div>

        {/* Headline Background Color Picker */}
        <div className="flex items-center space-x-2">
          <MdFormatColorFill
            size={16}
            className="text-gray-700"
            title="Headline Background Color"
          />
          <input
            type="color"
            value={headlineBgColor}
            onChange={(e) => setHeadlineBgColor(e.target.value)}
            title="Choose Headline Background Color"
            className="w-5 h-5 border rounded cursor-pointer"
          />
        </div>

        {/* Font Color Selection */}
        <div className="flex items-center space-x-2">
          <MdFormatColorText
            size={16}
            className="text-gray-700"
            title="Font Color"
          />
          <input
            type="color"
            value={headlineFontColor}
            onChange={(e) => setHeadlineFontColor(e.target.value)}
            title="Choose Font Color"
            className="w-5 h-5 border rounded cursor-pointer"
          />
        </div>

        {/* Bold & Italic Buttons */}
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setIsBold((prev) => !prev)}
            title="Toggle Bold"
            className={`w-5 h-5 flex items-center justify-center border rounded active:scale-95 transition-transform ${
              isBold ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
          >
            <FaBold size={16} />
          </button>
          <button
            onClick={() => setIsItalic((prev) => !prev)}
            title="Toggle Italic"
            className={`w-5 h-5 flex items-center justify-center border rounded active:scale-95 transition-transform ${
              isItalic ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
          >
            <FaItalic size={16} />
          </button>
        </div>

        {/* Font Selection */}
        <div className="flex items-center space-x-1">
          <MdFontDownload
            size={16}
            className="text-gray-700"
            title="Select Font"
          />
          <select
            value={headlineFont}
            onChange={(e) => setHeadlineFont(e.target.value)}
            title="Choose Font"
            className="border rounded px-2 py-1 text-xs"
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
    </div>
  );
};

export default FontSettings;
