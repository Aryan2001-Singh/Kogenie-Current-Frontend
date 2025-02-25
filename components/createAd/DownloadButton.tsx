"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

interface DownloadButtonProps {
  selectedFilter: string;
  aspectRatio: "square" | "story";
}

const DownloadButton: React.FC<DownloadButtonProps> = ({}) => {
  const [showOptions, setShowOptions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Functions to redirect to respective social media apps
  const handleRedirectInstagram = () => {
    window.open("https://www.instagram.com/", "_blank");
    setShowOptions(false);
  };

  const handleRedirectFacebook = () => {
    window.open("https://www.facebook.com/", "_blank");
    setShowOptions(false);
  };

  const handleRedirectTwitter = () => {
    window.open("https://twitter.com/", "_blank");
    setShowOptions(false);
  };

  // Hide dropdown when clicking outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [containerRef]);

  return (
    <div className="relative inline-block" ref={containerRef}>
      {/* Publish Button */}
      <button
        onClick={() => setShowOptions(!showOptions)}
       className="min-w-[100px] px-2 py-2 bg-[#6e44ff] text-white rounded-lg shadow-lg hover:shadow-2xl
        hover:brightness-110 hover:scale-105 transition-transform duration-200 active:scale-95 flex items-center justify-center"
      >
        Publish ⬆️
      </button>

      {/* Dropdown Menu */}
      {showOptions && (
        <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-md z-50">
          <button
            onClick={handleRedirectInstagram}
            className="block w-full text-left p-2 hover:bg-gray-200 flex items-center space-x-2 transition-transform
             duration-200 hover:scale-105"
          >
            <FaInstagram size={16} className="text-pink-500" />
            <span>Instagram</span>
          </button>
          <button
            onClick={handleRedirectFacebook}
            className="block w-full text-left p-2 hover:bg-gray-200 flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
          >
            <FaFacebook size={16} className="text-blue-600" />
            <span>Facebook</span>
          </button>
          <button
            onClick={handleRedirectTwitter}
            className="block w-full text-left p-2 hover:bg-gray-200 flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
          >
            <FaTwitter size={16} className="text-blue-400" />
            <span>Twitter</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;
