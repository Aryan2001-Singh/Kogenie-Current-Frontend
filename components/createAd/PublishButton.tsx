"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { useUser } from "@clerk/nextjs";
import { useAdStore } from "@/store/useAdStore";

interface DownloadButtonProps {
  selectedFilter: string;
  aspectRatio: "square" | "story";
}

const DownloadButton: React.FC<DownloadButtonProps> = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();
  const adData = useAdStore((state) => state.adData);

  // ✅ Publish Function
  const handleConfirmPublish = async () => {
    if (!user?.id || !adData || !adData.productImages?.[0] || !adData.headline || !adData.adCopy) {
      alert("Missing user or ad data. Please generate and select an ad first.");
      setShowConfirm(false);
      return;
    }

    setIsPublishing(true);

    try {
      const res = await fetch("https://api.kogenie.com/api/publish/instagram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clerkUserId: user.id,
          imageUrl: adData.productImages[0],
          caption: `${adData.headline}\n\n${adData.adCopy}`,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        alert("✅ Ad successfully published to Instagram!");
      } else {
        alert("❌ Failed to publish: " + result.message);
      }
    } catch (error) {
      console.error("Publish error:", error);
      alert("Something went wrong while publishing.");
    }

    setIsPublishing(false);
    setShowConfirm(false);
    setShowOptions(false);
  };

  // ✅ Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowOptions(false);
        setShowConfirm(false);
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

      {/* 📥 Dropdown Options */}
      {showOptions && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-50">
          <button
            onClick={() => {
              setShowConfirm(true);
              setShowOptions(false);
            }}
            className="block w-full text-left p-2 hover:bg-gray-200 flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
          >
            <FaInstagram size={16} className="text-pink-500" />
            <span>Instagram</span>
          </button>
        </div>
      )}

      {/* 🛡️ Confirm Modal */}
      {showConfirm && (
        <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-300 rounded shadow-xl p-4 z-50">
          <p className="text-gray-700 text-sm mb-4">Are you sure you want to publish this ad to Instagram?</p>

          {/* Preview */}
          {adData?.productImages?.[0] && (
            <img src={adData.productImages[0]} alt="Ad Preview" className="rounded w-full h-auto mb-4" />
          )}
          <div className="text-xs text-gray-500 mb-4 whitespace-pre-wrap">
            {adData?.headline}
            {"\n\n"}
            {adData?.adCopy}
          </div>

          {/* Confirm Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handleConfirmPublish}
              disabled={isPublishing}
              className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            >
              {isPublishing ? "Publishing..." : "Confirm Publish"}
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              disabled={isPublishing}
              className="px-3 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;
