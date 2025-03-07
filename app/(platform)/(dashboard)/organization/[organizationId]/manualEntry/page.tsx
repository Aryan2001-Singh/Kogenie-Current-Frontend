"use client";

import React, { useState, CSSProperties, FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAdStore } from "@/store/useAdStore";
// import { storeAd } from "@/services/api";
import { useUser } from "@clerk/nextjs";

const ManualEntryPage: React.FC = () => {
  const [brandName, setBrandName] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [uniqueSellingPoints, setUniqueSellingPoints] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress || "";

  const router = useRouter();
  const setAdData = useAdStore((state) => state.setAdData);
  const params = useParams();
  const organizationId = params.organizationId;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    if (!userEmail) {
      setError("User is not authenticated. Please log in.");
      setLoading(false);
      return;
    }
  
    const adInputData = {
      brandName,
      productName,
      productDescription,
      targetAudience,
      uniqueSellingPoints,
    };
  
    try {
      const response = await fetch("https://kogenie-current-backend-0204db8f94f9.herokuapp.com/generateAdPrompt", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adInputData),
      });
  
      const data = await response.json();
  
      console.log("✅ Backend API Response:", data); // Debugging
  
      if (response.ok) {
        if (!data.adCopy || !data.headline) {
          console.error("❌ Missing adCopy or headline from API response:", data);
          setError("Invalid API response: Missing adCopy or headline.");
          setLoading(false);
          return;
        }
  
        console.log("✅ Setting Zustand State", {
          ...adInputData,
          adCopy: data.adCopy || "Ad Copy Not Generated",
          headline: data.headline || "Default Headline",
          productImages: data.productImages || [], // ✅ Ensure productImages is included
          selectedImage: data.productImages?.[0] || null, // ✅ Default to first image
        });
  
        // ✅ Update Zustand store
        setAdData({
          ...adInputData,
          adCopy: data.adCopy || "Ad Copy Not Generated",
          headline: data.headline?.trim() || "Headline Not Generated", // ✅ Ensure headline is trimmed
          productImages: data.productImages || [],
          selectedImage: data.productImages?.[0] || null,
        });
  
        setTimeout(() => {
          router.push(`/organization/${organizationId}/createAd`);
        }, 200);
      } else {
        throw new Error(data.message || "Failed to create ad.");
      }
    } catch (err) {
      console.error("❌ Error occurred:", err);
      setError("An error occurred while generating the ad.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Full-page container with background
  const mainContainerStyle: CSSProperties = {
    background: "linear-gradient(to right, #4B0082, #8A2BE2, #ffffff)",
    minHeight: "120vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  // ✅ Form container (No background, just shadow for elevation)
  const formContainerStyle: CSSProperties = {
    padding: "30px",
    borderRadius: "5px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "600px",
    fontFamily: "'Roboto', Arial, sans-serif",
    background: "white", // ✅ Adding background back to the form for readability
  }; 

  const labelStyle: CSSProperties = {
    fontWeight: "600",
    color: "#333",
    marginBottom: "8px",
    display: "block",
    fontFamily: "serif",
  };

  const inputStyle: CSSProperties = {
    padding: "12px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #CBD5E1",
    marginBottom: "15px",
    fontSize: "16px",
    transition: "box-shadow 0.3s ease-in-out",
    fontFamily: "serif",
  };

  const inputFocusStyle = "0 0 10px rgba(161, 102, 255, 0.8)";

  const textareaStyle: CSSProperties = {
    ...inputStyle,
    minHeight: "100px",
    resize: "vertical",
  };

  const buttonStyle: CSSProperties = {
    padding: "12px 20px",
    background: "rgb(255, 233, 89)",
    color: "black",
    borderRadius: "8px",
    fontWeight: "600",
    marginTop: "10px",
    width: "100%",
    border: "none",
    cursor: "pointer",
    fontFamily: "serif",
    transition: "transform 0.2s ease-in-out",
    boxShadow: "grey 0px 4px 10px",
  };

  const buttonHoverStyle = "scale(0.95)";

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center relative overflow-hidden" style={mainContainerStyle}>
        {/* Floating Background Elements */}
  <div className="absolute w-80 h-80 bg-white/10 backdrop-blur-lg rounded-full top-10 left-20 animate-pulse"></div>
  <div className="absolute w-60 h-60 bg-white/20 backdrop-blur-lg rounded-full bottom-20 right-20 animate-pulse"></div>
  <div className="absolute w-44 h-44 bg-indigo-500/10 backdrop-blur-lg rounded-full top-1/3 left-1/4 animate-pulse"></div>

  {/* Subtle Gradient Overlay for Depth */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

  {/* Small Floating Dots */}
  <div className="absolute w-3 h-3 bg-white/20 rounded-full top-1/4 left-1/3 animate-bounce"></div>
  <div className="absolute w-2 h-2 bg-white/30 rounded-full top-2/3 right-1/4 animate-bounce"></div>
      <div className="relative z-10"style={formContainerStyle}>
        <h1
          style={{
            fontSize: "24px",
            marginBottom: "20px",
            textAlign: "center",
            color: "#333",
            fontFamily: "serif",
          }}
        >
          Enter Product Information
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label style={labelStyle}>Brand Name</label>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="Enter brand name"
              style={inputStyle}
              onFocus={(e) => (e.target.style.boxShadow = inputFocusStyle)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
              required
            />
          </div>

          <div>
            <label style={labelStyle}>Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product name"
              style={inputStyle}
              onFocus={(e) => (e.target.style.boxShadow = inputFocusStyle)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
              required
            />
          </div>

          <div>
            <label style={labelStyle}>Product Description</label>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Describe the product in detail"
              style={textareaStyle}
              onFocus={(e) => (e.target.style.boxShadow = inputFocusStyle)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
              required
            />
          </div>

          <div>
            <label style={labelStyle}>Target Audience</label>
            <input
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              placeholder="E.g., Teenagers, Fitness Enthusiasts"
              style={inputStyle}
              onFocus={(e) => (e.target.style.boxShadow = inputFocusStyle)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
              required
            />
          </div>

          <div>
            <label style={labelStyle}>Unique Selling Points</label>
            <textarea
              value={uniqueSellingPoints}
              onChange={(e) => setUniqueSellingPoints(e.target.value)}
              placeholder="What makes this product stand out?"
              style={textareaStyle}
              onFocus={(e) => (e.target.style.boxShadow = inputFocusStyle)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = buttonHoverStyle)
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {loading ? "Fetching Ad..." : "Generate Ad"}
          </button>
        </form>

        {error && (
          <p style={{ color: "red", marginTop: "20px", textAlign: "center" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default ManualEntryPage;
