"use client";

import React, { useState } from "react";
import { useAdStore } from "@/store/useAdStore";

const FeedbackForm = () => {
  const { adData } = useAdStore();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!adData?._id || !adData?.adType) {
      setError("Missing ad ID or ad type. Please try again.");
      return;
    }

    try {
      const response = await fetch("https://api.kogenie.com/api/ads/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adId: adData._id,
          adType: adData.adType,
          rating,
          comment,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Feedback submission failed");
      }

      setSubmitted(true);
      setError("");
    } catch (err) {
      console.error("Feedback error:", err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="mt-10 border-t pt-6">
      <h3 className="text-xl font-semibold mb-2">How useful was this ad for your brand?</h3>

      {/* Star Rating */}
      <div className="flex space-x-2 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`text-2xl ${
              rating >= star ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>

      {/* Text Feedback */}
      <textarea
        className="w-full border border-gray-300 rounded-md p-2 mb-3"
        rows={3}
        placeholder="Tell us what worked, what didn’t..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
      >
        Submit Feedback
      </button>

      {submitted && (
        <p className="text-green-600 mt-2">✅ Thanks! Your feedback has been recorded.</p>
      )}
      {error && (
        <p className="text-red-500 mt-2">⚠️ {error}</p>
      )}
    </div>
  );
};

export default FeedbackForm;