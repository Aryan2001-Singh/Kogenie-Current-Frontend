"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { useUser } from "@clerk/nextjs";
import { useAdStore } from "@/store/useAdStore";
import { FiUpload } from "react-icons/fi";

interface DownloadButtonProps {
  selectedFilter: string;
  aspectRatio: "square" | "story";
}

const DownloadButton: React.FC<DownloadButtonProps> = ({}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();

  const adData = useAdStore((state) => state.adData);
  const setAdData = useAdStore((state) => state.setAdData);
  const [highlightConfirmButton] = useState(false);

  // ✅ Zustand hydration fallback (only if _id is missing)
  useEffect(() => {
    const stored = localStorage.getItem("adData");
    if ((!adData || !adData._id) && stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed && parsed._id) {
          setAdData(parsed);
          console.log("💾 Hydrated adData from localStorage:", parsed);
        }
      } catch (err) {
        console.warn("⚠️ Failed to parse adData from localStorage:", err);
      }
    } else {
      console.log("✅ Zustand already hydrated with:", adData);
    }
    setHydrated(true);
  }, [adData, setAdData]);

  // ✅ Publish handler
  const handleConfirmPublish = async () => {
    if (!hydrated) return alert("⚠️ Please wait, ad is still loading.");
    if (!user?.id) return alert("⚠️ You are not logged in. Please sign in.");
    if (!adData) return alert("⚠️ Ad data not loaded yet. Please wait.");
    if (!adData._id) return alert("⚠️ Ad ID missing — please regenerate the ad.");
    if (!adData.productImages?.[0]) return alert("⚠️ Missing product image.");
    if (!adData.headline || !adData.adCopy) return alert("⚠️ Headline or ad copy missing.");

    console.log("🚀 Zustand before publish:", adData);
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
        localStorage.removeItem("adData");
        localStorage.removeItem("uploadedImage");
      } else {
        alert("❌ Failed: " + (result.metaError?.error?.message || result.message));
      }
    } catch (error) {
      console.error("❌ Publish error:", error);
      alert("Something went wrong while publishing.");
    }

    setIsPublishing(false);
    setShowConfirm(false);
    setShowOptions(false);
  };

  // ✅ Close dropdown if clicked outside
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
      {/* 🔘 Publish Button */}
      <button
        onClick={() => {
          if (!hydrated) return alert("Please wait, loading ad...");
          setShowOptions(!showOptions);
        }}
        className="min-w-[120px] px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-lg shadow-md hover:shadow-xl hover:brightness-110 transition-transform duration-200 active:scale-95 flex items-center justify-center gap-2"
      >
        <FiUpload className="text-white text-lg" />
        Publish
      </button>

      {/* 📥 Dropdown */}
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

      {/* ✅ Confirmation Modal */}
      {showConfirm && (
        <div className="absolute right-0 mt-2 mr-4 w-80 bg-white border border-gray-200 rounded-xl shadow-2xl p-5 z-50">
          <p className="text-gray-800 text-base font-medium mb-4">
            Are you sure you want to publish this ad to Instagram?
          </p>

          {adData?.productImages?.[0] && (
            <img
              src={adData.productImages[0]}
              alt="Ad Preview"
              className="rounded-lg w-full h-auto object-cover mb-4 border border-gray-100"
            />
          )}

          <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap mb-4">
            <p className="font-semibold mb-1">{adData?.headline}</p>
            <p>{adData?.adCopy}</p>
          </div>

          <div className="flex flex-wrap justify-end gap-3 mt-4 w-full">
            <button
              onClick={handleConfirmPublish}
              disabled={isPublishing}
              className={`flex-1 min-w-[120px] px-4 py-2 text-white rounded-lg font-medium bg-gradient-to-r from-pink-500 to-purple-500 transition duration-200 hover:brightness-110 disabled:opacity-50 ${
                highlightConfirmButton ? "ring-2 ring-pink-300 ring-offset-2" : ""
              }`}
            >
              {isPublishing ? "Publishing..." : "Confirm Publish"}
            </button>

            <button
              onClick={() => setShowConfirm(false)}
              disabled={isPublishing}
              className="flex-1 min-w-[100px] px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 disabled:opacity-50 transition duration-200"
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