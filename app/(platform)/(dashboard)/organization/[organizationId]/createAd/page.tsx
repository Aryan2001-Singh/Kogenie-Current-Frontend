"use client";
import { DraggableEvent, DraggableData } from "react-draggable";
import Draggable from "react-draggable"; // Import Draggable
import React, { useState, useEffect, ChangeEvent, CSSProperties } from "react";
import { useAdStore } from "@/store/useAdStore";
import html2canvas from "html2canvas";
import Head from "next/head";
import SocialMediaPost from "@/components/createAd/SocialMedia";
import EditorTools from "@/components/createAd/EditorTools";
import InstagramPostPreview from "@/components/createAd/InstagramPostPreview";
import AdForm from "@/components/createAd/AdForm";
import ImageUploader from "@/components/createAd/ImageUploader";

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

  // New State to Store Text Position
  const [position, setPosition] = useState({ x: 0, y: -100 });

  // Function to Handle Drag Stop
  const handleDragStop = (e: DraggableEvent, data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
  };

  const [image, setImage] = useState<string | null>(null);

  // const [imageSize] = useState<number>(100); // ✅ Default size percentage
  const [headlineBgColor, setHeadlineBgColor] = useState<string>("#000000"); // Default: Black
  const [headlineFontSize, setHeadlineFontSize] = useState<number>(20); // Default: 20px
  const [headlineFontColor, setHeadlineFontColor] = useState<string>("#FFFFFF"); // Default: White
  // const [customFont, setCustomFont] = useState<string | null>(null); // Custom fonts
  const [isBold, setIsBold] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false); // ✅ Fix for hydration error
  const [headlineFont, setHeadlineFont] = useState<string>("Arial"); // Default font

  // For adding filter to the images
  const [aspectRatio, setAspectRatio] = useState<"square" | "story">("square");
  const [selectedFilter, setSelectedFilter] = useState<string>("none");

  const [clientCaption, setClientCaption] = useState("");
  const [clientHeadline, setClientHeadline] = useState("");

  // ✅ Function to Increase Image Size
  // const increaseSize = () => {
  //   if (imageSize < 200) setImageSize(imageSize + 10); // ✅ Prevents size from exceeding 200%
  // };

  // ✅ Function to Decrease Image Size
  // const decreaseSize = () => {
  //   if (imageSize > 50) setImageSize(imageSize - 10); // ✅ Prevents size from being too small
  // };

  // ✅ Ensure Draggable loads only on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setClientCaption(adData.adCopy); // Ensure caption updates only after mounting
    setClientHeadline(adData.headline); // Ensure headline updates only after mounting
  }, [adData.adCopy, adData.headline]);

  useEffect(() => {
    if (adDataFromStore) {
      setAdData(adDataFromStore);
    }
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, [adDataFromStore]);

  // useEffect(() => {
  //   console.log("Applying Font:", headlineFont);
  //   setPosition((prev) => ({ ...prev })); // ✅ Forces React to re-render
  // }, [headlineFont]);

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
      reader.onloadend = async () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
          localStorage.setItem("uploadedImage", reader.result);

          // Ensure the image fully loads before continuing
          const img = new Image();
          img.src = reader.result;
          await new Promise((resolve) => (img.onload = resolve));
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDownload = async () => {
    const adPreview = document.getElementById("ad-preview");

    if (adPreview) {
      const imgElement = adPreview.querySelector("img");

      // Ensure imgElement exists before proceeding
      if (imgElement) {
        if (!imgElement.complete) {
          await new Promise((resolve) => (imgElement.onload = resolve));
        }

        // ✅ Apply filter only if imgElement exists
        imgElement.style.filter = selectedFilter;
      }

      setTimeout(async () => {
        const canvas = await html2canvas(adPreview, {
          useCORS: true,
          scale: 2,
          backgroundColor: "#ffffff",
          logging: true,
          width: aspectRatio === "square" ? 500 : 360,
          height: aspectRatio === "square" ? 500 : 640,
        });

        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = image;
        link.download =
          aspectRatio === "square"
            ? "instagram_post.png"
            : "instagram_story.png";
        link.click();
      }, 500);
    }
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
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Lobster&family=Roboto:wght@300;500;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <div style={parentContainerStyle}>
        {/* Main Container for Ad Content */}
        <div style={containerStyle}>
          <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Create Ad</h1>
          <AdForm adData={adData} handleInputChange={handleInputChange} />

          {/* Image Upload */}
          <ImageUploader handleImageUpload={handleImageUpload} />
          <br />
          <br />

          {/* Resize Buttons */}
          {/* Font Size Controls */}
          <div className="flex items-center space-x-2 mt-3">
            <label className="text-gray-700 font-semibold">Font Size:</label>
            <button
              onClick={() =>
                setHeadlineFontSize((prev) => Math.max(prev - 2, 10))
              }
              className="px-3 py-1 bg-gray-500 text-white rounded-md"
            >
              -
            </button>
            <span className="px-3 py-1 text-gray-800 bg-gray-200 rounded-md">
              {headlineFontSize}px
            </span>
            <button
              onClick={() =>
                setHeadlineFontSize((prev) => Math.min(prev + 2, 50))
              }
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

          {/* Font Color Selection for Headline */}
          <div className="flex items-center space-x-2 mt-3">
            <label className="text-gray-700 font-semibold">Font Color:</label>
            <input
              type="color"
              value={headlineFontColor}
              onChange={(e) => setHeadlineFontColor(e.target.value)}
              className="w-10 h-10 p-1 border rounded-md cursor-pointer"
            />
          </div>

          {/* Bold and Italic Toggle Buttons */}
          <div className="flex items-center space-x-2 mt-3">
            <label className="text-gray-700 font-semibold">Font Style:</label>

            {/* Bold Button */}
            <button
              onClick={() => setIsBold((prev) => !prev)}
              className={`px-3 py-1 border rounded-md ${
                isBold ? "bg-gray-800 text-white" : "bg-gray-200"
              }`}
            >
              B
            </button>

            {/* Italic Button */}
            <button
              onClick={() => setIsItalic((prev) => !prev)}
              className={`px-3 py-1 border rounded-md ${
                isItalic ? "bg-gray-800 text-white" : "bg-gray-200"
              }`}
            >
              I
            </button>
          </div>
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
          {/*Filter Selection dropdown */}
          <div>
            <EditorTools
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              aspectRatio={aspectRatio}
              setAspectRatio={setAspectRatio}
            />
          </div>

          {/* Image Preview with Headline Overlay */}
          <div className="w-full flex flex-col items-center mt-4 relative">
            <h2 className="text-lg font-semibold mb-2">Image Preview</h2>

            <div
              id="ad-preview"
              className="relative inline-block"
              style={{
                width: aspectRatio === "square" ? "500px" : "360px", // Adjust width
                height: aspectRatio === "square" ? "500px" : "640px", // Adjust height
                border: "1px solid #ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              {/* Image */}
              {image && (
                <img
                  src={image}
                  alt="Uploaded Preview"
                  className="shadow-md rounded-lg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: selectedFilter, // Apply the selected filter here
                  }}
                />
              )}

              {/* Draggable Headline */}
              {isClient && adData.headline && (
                <Draggable position={position} onStop={handleDragStop}>
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    className="absolute cursor-move px-4 py-2 text-lg rounded-lg opacity-80"
                    style={{
                      backgroundColor: headlineBgColor,
                      color: headlineFontColor,
                      fontSize: `${headlineFontSize}px`,
                      fontWeight: isBold ? "bold" : "normal",
                      fontStyle: isItalic ? "italic" : "normal",
                      fontFamily: `${headlineFont}, sans-serif`,
                      maxWidth: "90%",
                      textAlign: "center",
                      zIndex: 10,
                      outline: "none",
                    }}
                  >
                    {adData.headline}
                  </div>
                </Draggable>
              )}
            </div>
            <br />
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="bg-red-500 text-white p-2"
            >
              Download Ad
            </button>
          </div>
          {/* Instagram Post Preview */}
          <InstagramPostPreview
            image={image}
            caption={clientCaption}
            headline={clientHeadline}
          />
          {/* Social Media Posting Buttons */}
          <SocialMediaPost image={image} caption={clientCaption} />
        </div>
      </div>
    </>
  );
};

export default CreateAdPage;
