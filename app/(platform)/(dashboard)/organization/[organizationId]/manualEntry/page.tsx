"use client";

import React, { useState, CSSProperties, FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAdStore } from "@/store/useAdStore";
import { storeAd } from "@/services/api";
import { useUser } from "@clerk/nextjs"; // ✅ Import useUser

const ManualEntryPage: React.FC = () => {
  const [brandName, setBrandName] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [uniqueSellingPoints, setUniqueSellingPoints] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useUser(); // ✅ Get user details inside component
  const userEmail = user?.primaryEmailAddress?.emailAddress || ""; // ✅ Get user's email safely

  const router = useRouter();
  const setAdData = useAdStore((state) => state.setAdData); // Save data for CreateAdPage
  const params = useParams();
  const organizationId = params.organizationId;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    if (!userEmail) { // ✅ Check if userEmail is available before proceeding
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
      const response = await fetch("https://kogenie-current-backend.onrender.com/generateAdPrompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adInputData),
      });
  
      const data = await response.json();
      console.log("🟢 Backend API Response:", data); 
      if (response.ok) {
        setAdData({ ...adInputData, adCopy: data.adCopy, headline: data.headline ||"Default Headline"}); // Store all data including generated ad copy
  
        await storeAd({ ...adInputData, adCopy: data.adCopy, headline: data.headline ||"Default Headline" }, userEmail); // ✅ Now userEmail is guaranteed to be present
  
        router.push(`/organization/${organizationId}/createAd`); // Navigate to CreateAdPage
      } else {
        throw new Error(data.message || "Failed to create ad based on input.");
      }
    } catch (err) {
      console.error("Error occurred:", err);
      setError("An error occurred while generating the ad.");
    } finally {
      setLoading(false);
    }
  };
  

  const containerStyle: CSSProperties = {
    padding: "30px",
    background: "#FFFFFF",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "'Inter', sans-serif",
  };

  const labelStyle: CSSProperties = {
    fontWeight: "600",
    color: "#333",
    marginBottom: "8px",
    display: "block",
  };

  const inputStyle: CSSProperties = {
    padding: "12px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #CBD5E1",
    marginBottom: "15px",
    fontSize: "16px",
  };

  const textareaStyle: CSSProperties = {
    ...inputStyle,
    minHeight: "100px",
    resize: "vertical",
  };

  const buttonStyle: CSSProperties = {
    padding: "12px 20px",
    background: "#DB4A2B",
    color: "white",
    borderRadius: "8px",
    fontWeight: "600",
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Enter Product Information</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>Brand Name</label>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="Enter brand name"
            style={inputStyle}
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
            required
          />
        </div>

        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? "Submitting..." : "Create Ad"}
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}
    </div>
  );
};

export default ManualEntryPage;
