"use client"; // ✅ Ensures this component runs only on the client-side

import React, { useState, useEffect, ChangeEvent, CSSProperties } from "react";
import { useAdStore } from "@/store/useAdStore";

const CreateAdPage: React.FC = () => {
  const adDataFromStore = useAdStore((state) => state.adData);

  // ✅ Load saved ad data from localStorage on initial render
  const [adData, setAdData] = useState(() => {
    if (typeof window !== "undefined") {
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
  const [filter, setFilter] = useState<string>("none"); // ✅ Default filter is "none"
  const [imageSize, setImageSize] = useState<number>(100); // ✅ Default size percentage
  const [headlineBgColor, setHeadlineBgColor] = useState<string>("#000000"); // Default: Black

  // ✅ Function to Increase Image Size
  const increaseSize = () => {
    if (imageSize < 200) setImageSize(imageSize + 10); // ✅ Prevents size from exceeding 200%
  };

  // ✅ Function to Decrease Image Size
  const decreaseSize = () => {
    if (imageSize > 50) setImageSize(imageSize - 10); // ✅ Prevents size from being too small
  };

  useEffect(() => {
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

  // ✅ Image Upload Function (Ensures Image is Displayed)
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
  // ✅ Function to Change Image Filter
  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
    setIsFilterOpen(false); // ✅ Automatically close the dropdown after selection
  };
  // ✅ Styling
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
  const imageStyle: CSSProperties = {
    maxWidth: `${imageSize}%`, // ✅ Dynamically changes based on `imageSize` state
    borderRadius: "10px",
    filter: filter, // ✅ Applies selected filter dynamically
    transition: "all 0.3s ease-in-out", // ✅ Smooth transition effect
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

  const headlineTextAreaStyle: CSSProperties = {
    ...textAreaStyle,
    minHeight: "200px",
  };

  // ✅ New State for Export Dropdown
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // ✅ State for filter dropdown

  // ✅ Function to Handle Image Download
  const handleImageDownload = (format: string) => {
    if (image) {
      const link = document.createElement("a");
      link.href = image;
      link.download = `ad_image.${format}`;
      link.click();
      setIsExportOpen(false); // Close dropdown after clicking
    }
  };

  return (
    <div style={parentContainerStyle}>
      {/* Main Container for Ad Content */}
      <div style={containerStyle}>
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Create Ad</h1>

        {/* Brand Name */}
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

        {/* Product Name */}
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

        {/* Product Description */}
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

        {/* Headline */}
        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Your Headline</label>
          <textarea
            name="headline"
            placeholder="Headline"
            value={adData.headline}
            onChange={handleInputChange}
            style={headlineTextAreaStyle}
          />
        </div>

        {/* Image Upload */}
        <label className="block font-semibold mt-4">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mt-2"
        />

        {/* Export Button with Dropdown Menu */}
        {/* Button Section: Export, Filter, Resize - Aligned VERTICALLY */}
        {image && (
          <div className="flex flex-col space-y-3 items-start w-full">
            {/* Export Button */}
            <button
              onClick={() => setIsExportOpen(!isExportOpen)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md w-full"
            >
              Export
            </button>

            {isExportOpen && (
              <div className="w-full bg-white border border-gray-300 rounded-md shadow-lg">
                <button
                  onClick={() => handleImageDownload("png")}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  Download PNG
                </button>
                <button
                  onClick={() => handleImageDownload("jpg")}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  Download JPG
                </button>
                <button
                  onClick={() => handleImageDownload("svg")}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  Download SVG
                </button>
              </div>
            )}
            {/* Filter Button */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-4 py-2 bg-gray-600 text-white rounded-md w-full"
            >
              Filter
            </button>

            {isFilterOpen && (
              <div className="w-full bg-white border border-gray-300 rounded-md shadow-lg">
                <button
                  onClick={() => handleFilterChange("none")}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  None
                </button>
                <button
                  onClick={() => handleFilterChange("grayscale(100%)")}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  Grayscale
                </button>
                <button
                  onClick={() => handleFilterChange("sepia(100%)")}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  Sepia
                </button>
                <button
                  onClick={() => handleFilterChange("invert(100%)")}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  Invert
                </button>
                <button
                  onClick={() => handleFilterChange("brightness(150%)")}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  Brightness
                </button>
              </div>
            )}

            {/* Resize Buttons */}
            <div className="flex items-center space-x-2 w-full">
              <button
                onClick={decreaseSize}
                className="px-4 py-2 bg-gray-500 text-white rounded-md w-full"
              >
                -
              </button>
              <span className="px-3 py-2 text-gray-800 bg-gray-200 rounded-md w-full text-center">
                {imageSize}%
              </span>
              <button
                onClick={increaseSize}
                className="px-4 py-2 bg-gray-500 text-white rounded-md w-full"
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

            {/* Image Preview BELOW the buttons */}
            {/* Image Preview with Headline Overlay */}
            <div className="w-full flex flex-col items-center mt-4 relative">
              <h2 className="text-lg font-semibold mb-2">Image Preview</h2>

              <div className="relative inline-block">
                {/* Image with Filter Applied */}
                <img
                  src={image}
                  alt="Uploaded Preview"
                  className="shadow-md rounded-lg"
                  style={{
                    ...imageStyle,
                    position: "relative",
                  }}
                />

                {/* Headline Text Overlay */}
                {/* Headline Text Overlay */}
                {adData.headline && (
                  <p
                    className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 text-lg font-semibold rounded-lg opacity-80"
                    style={{
                      backgroundColor: headlineBgColor, // ✅ Dynamically update background color
                      maxWidth: "90%",
                      textAlign: "center",
                      zIndex: 10, // Ensures the text stays above the image
                    }}
                  >
                    {adData.headline}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {isFilterOpen && (
          <div className="absolute left-0 mt-2 w-36 bg-white border border-gray-300 rounded-md shadow-lg">
            <button
              onClick={() => handleFilterChange("none")}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
            >
              None
            </button>
            <button
              onClick={() => handleFilterChange("grayscale(100%)")}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
            >
              Grayscale
            </button>
            <button
              onClick={() => handleFilterChange("sepia(100%)")}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
            >
              Sepia
            </button>
            <button
              onClick={() => handleFilterChange("invert(100%)")}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
            >
              Invert
            </button>
            <button
              onClick={() => handleFilterChange("brightness(150%)")}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
            >
              Brightness
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateAdPage;
