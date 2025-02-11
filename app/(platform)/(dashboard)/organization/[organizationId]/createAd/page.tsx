"use client";

import React, { useState, useEffect, ChangeEvent, CSSProperties } from "react";
import { useAdStore } from "@/store/useAdStore";



const CreateAdPage: React.FC = () => {
  const adDataFromStore = useAdStore((state) => state.adData);

  // ✅ Load saved ad data from localStorage on initial render
  const [adData, setAdData] = useState(() => {
    if (typeof window !== "undefined") {
      // ✅ Only access localStorage on the client side
      const savedAdData = localStorage.getItem("adData");
      return savedAdData
        ? JSON.parse(savedAdData)
        : {
            brandName: "",
            productName: "",
            productDescription: "",
            adCopy: "",
            headline: "",
          };
    }
    return {
      brandName: "",
      productName: "",
      productDescription: "",
      adCopy: "",
      headline: "",
    };
  });

  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    // Populate ad data from store
    if (adDataFromStore) {
      setAdData(adDataFromStore);
    }
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, [adDataFromStore]);

  // ✅ Save form data to localStorage on every input change
  useEffect(() => {
    localStorage.setItem("adData", JSON.stringify(adData));
  }, [adData]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAdData((prevState: typeof adData) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
          localStorage.setItem("uploadedImage", reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageDownload = (format: string) => {
    if (!image) return;
    const link = document.createElement("a");
    link.href = image;
    link.download = `downloaded-image.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const parentContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px 0",
  };

  const containerStyle: CSSProperties = {
    padding: "30px",
    background: "#FFFFFF",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "600px",
    fontFamily: "'Inter', sans-serif",
  };

  const labelStyle: CSSProperties = {
    fontWeight: "600",
    color: "#333",
    marginTop: "20px",
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

  const textAreaStyle: CSSProperties = {
    ...inputStyle,
    minHeight: "150px",
    resize: "vertical",
  };

  const adCopyTextAreaStyle: CSSProperties = {
    ...textAreaStyle,
    minHeight: "200px",
  };
  
  const headlineTextAreaStyle: CSSProperties = {
    ...textAreaStyle,
    minHeight: "200px",
  }

  return (
    <div style={parentContainerStyle}>
      {/* Main Container for Ad Content */}
      <div style={containerStyle}>
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Create Ad</h1>

        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Brand Name</label>
          <input
            type="text"
            name="brandName"
            placeholder="Enter your brand name"
            value={adData.brandName}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Product Name</label>
          <input
            type="text"
            name="productName"
            placeholder="Enter your product name"
            value={adData.productName}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Product Description</label>
          <textarea
            name="productDescription"
            placeholder="Describe your product..."
            value={adData.productDescription}
            onChange={handleInputChange}
            style={textAreaStyle}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Your Ad Copy</label>
          <textarea
            name="adCopy"
            placeholder="Edit your ad copy..."
            value={adData.adCopy}
            onChange={handleInputChange}
            style={adCopyTextAreaStyle}
          />
          {/* Here the headline should be generated of the product */}
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Your headline</label>
            <textarea
              name="headline"
              placeholder="Headline"
              value={adData.headline}
              onChange={handleInputChange}
              style={headlineTextAreaStyle}
            />
          </div>
          <label className="block font-semibold mt-4">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-2"
          />
        </div>
        {image && (
          <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-md text-center">
            <h2 className="text-xl font-bold mb-4">Image Preview</h2>
            <img
              src={image}
              alt="Uploaded Preview"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <div className="flex justify-center gap-3">
              <button
                onClick={() => handleImageDownload("png")}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Download PNG
              </button>
              <button
                onClick={() => handleImageDownload("jpg")}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Download JPG
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen p-4"></div>
    </div>
  );
};

export default CreateAdPage;
