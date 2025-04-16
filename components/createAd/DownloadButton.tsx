"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { useUser } from "@clerk/nextjs";
import { useAdStore } from "@/store/useAdStore"; // ✅ adjust path if needed

interface DownloadButtonProps {
  selectedFilter: string;
  aspectRatio: "square" | "story";
}

const DownloadButton: React.FC<DownloadButtonProps> = () => {
  const [showOptions, setShowOptions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();
  const adData = useAdStore((state) => state.adData); // ✅ Zustand store

  // ✅ Main function to publish ad to Instagram
  const handlePublishInstagram = async () => {
    if (!user?.id || !adData) {
      alert("Missing user or ad data. Please generate an ad first.");
      return;
    }

    try {
      const res = await fetch("https://api.kogenie.com/api/publish/instagram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clerkUserId: user.id,
          imageUrl: adData.productImages?.[0], // First Cloudinary image
          caption: `${adData.headline}\n\n${adData.adCopy}`,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        alert("✅ Ad successfully published to Instagram!");
      } else {
        alert("❌ Failed to publish: " + result.message);
      }
    } catch (err) {
      console.error("Instagram publish error:", err);
      alert("Something went wrong while publishing.");
    }

    setShowOptions(false); // Close dropdown
  };

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={containerRef}>
      {/* 📤 Publish Button */}
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="min-w-[100px] px-3 py-2 bg-[#6e44ff] text-white rounded-lg shadow-lg hover:shadow-2xl
        hover:brightness-110 hover:scale-105 transition-transform duration-200 active:scale-95 flex items-center justify-center"
      >
        Publish ⬆️
      </button>

      {/* 📥 Dropdown Menu */}
      {showOptions && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-50">
          <button
            onClick={handlePublishInstagram}
            className="block w-full text-left p-2 hover:bg-gray-200 flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
          >
            <FaInstagram size={16} className="text-pink-500" />
            <span>Instagram</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;