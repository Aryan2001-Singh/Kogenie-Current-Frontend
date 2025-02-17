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
    <div className="mt-4 p-4 border rounded-lg bg-gray-100">
      <h3 className="text-lg font-semibold mb-2">Font Settings</h3>

      {/* Font Size Controls */}
      <div className="flex items-center space-x-2">
        <label className="text-gray-700 font-semibold">Font Size:</label>
        <button
          onClick={() => setHeadlineFontSize((prev) => Math.max(prev - 2, 10))}
          className="px-3 py-1 bg-gray-500 text-white rounded-md"
        >
          -
        </button>
        <span className="px-3 py-1 text-gray-800 bg-gray-200 rounded-md">
          {headlineFontSize}px
        </span>
        <button
          onClick={() => setHeadlineFontSize((prev) => Math.min(prev + 2, 50))}
          className="px-3 py-1 bg-gray-500 text-white rounded-md"
        >
          +
        </button>
      </div>

      {/* Headline Background Color Picker */}
      <div className="flex items-center space-x-2 mt-3">
        <label className="text-gray-700 font-semibold">
          Headline Background:
        </label>
        <input
          type="color"
          value={headlineBgColor}
          onChange={(e) => setHeadlineBgColor(e.target.value)}
          className="w-10 h-10 p-1 border rounded-md cursor-pointer"
        />
      </div>

      {/* Font Color Selection */}
      <div className="flex items-center space-x-2 mt-3">
        <label className="text-gray-700 font-semibold">Font Color:</label>
        <input
          type="color"
          value={headlineFontColor}
          onChange={(e) => setHeadlineFontColor(e.target.value)}
          className="w-10 h-10 p-1 border rounded-md cursor-pointer"
        />
      </div>

      {/* Bold & Italic Buttons */}
      <div className="flex items-center space-x-2 mt-3">
        <label className="text-gray-700 font-semibold">Font Style:</label>
        <button
          onClick={() => setIsBold((prev) => !prev)}
          className={`px-3 py-1 border rounded-md ${
            isBold ? "bg-gray-800 text-white" : "bg-gray-200"
          }`}
        >
          B
        </button>
        <button
          onClick={() => setIsItalic((prev) => !prev)}
          className={`px-3 py-1 border rounded-md ${
            isItalic ? "bg-gray-800 text-white" : "bg-gray-200"
          }`}
        >
          I
        </button>
      </div>

      {/* Font Selection */}
      <div className="flex items-center space-x-2 mt-3">
        <label className="text-gray-700 font-semibold">Font:</label>
        <select
          value={headlineFont}
          onChange={(e) => setHeadlineFont(e.target.value)}
          className="border rounded-md px-2 py-1"
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