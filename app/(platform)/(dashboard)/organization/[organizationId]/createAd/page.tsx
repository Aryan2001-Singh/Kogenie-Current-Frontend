"use client";

import React, { useState, useEffect } from "react";
import { useAdStore } from "@/store/useAdStore";
import styles from "@/styles/CreateAdPage.module.css";
import Head from "next/head";

import EditorTools from "@/components/createAd/EditorTools";
import InstagramPostPreview from "@/components/createAd/InstagramPostPreview";
import AdForm from "@/components/createAd/AdForm";
import ImageUploader from "@/components/createAd/ImageUploader";
import DownloadButton from "@/components/createAd/DownloadButton";
import DraggableHeadline from "@/components/createAd/DraggableHeadline";
import FontSettings from "@/components/createAd/FontSettings";

const CreateAdPage: React.FC = () => {
  const adDataFromStore = useAdStore((state) => state.adData);
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

  const [headlineFontSize, setHeadlineFontSize] = useState<number>(20);
  const [headlineBgColor, setHeadlineBgColor] = useState<string>("#000000");
  const [headlineFontColor, setHeadlineFontColor] = useState<string>("#FFFFFF");
  const [isBold, setIsBold] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [headlineFont, setHeadlineFont] = useState<string>("Arial");
  const [isClient, setIsClient] = useState(false);
  const placeholderImage = "/blog7.jpg"; // Path to your placeholder image
  const [image, setImage] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("uploadedImage") || placeholderImage;
    }
    return placeholderImage;
  });

  const [aspectRatio, setAspectRatio] = useState<"square" | "story">("square");
  const [selectedFilter, setSelectedFilter] = useState<string>("none");

  const [clientCaption, setClientCaption] = useState("");
  const [clientHeadline, setClientHeadline] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setClientCaption(adData.adCopy);
    setClientHeadline(adData.headline);
  }, [adData.adCopy, adData.headline]);

  useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");
    setImage(savedImage || placeholderImage);
  }, [adDataFromStore]);

  useEffect(() => {
    localStorage.setItem("adData", JSON.stringify(adData));
  }, [adData]);

  // Use flex-1 to let both columns grow equally.
  const leftColumnStyle = {
    flex: 1,
    padding: "30px",
  };

  const rightColumnStyle: React.CSSProperties = {
    flex: 1,
    padding: "30px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* Main container spans full width */}
      <div className="w-full">
        {/* Publish Button at Top Right Corner */}
        <div className="absolute top-4 right-4">
          <DownloadButton selectedFilter={selectedFilter} aspectRatio={aspectRatio} />
        </div>

        {/* Main Content Container */}
        <div
          className={styles.parentContainer}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "30px", 
            background: "linear-gradient(to bottom right, rgba(230, 238, 246, 0.58))",
            width: "100%",
          }}
        >
          {/* Left Column */}
          <div style={leftColumnStyle}>
            <h1 style={{ fontSize: "24px", marginBottom: "20px", fontFamily: "serif" }}>
              Your Ad
            </h1>
            <AdForm adData={adData} setAdData={setAdData} />
          </div>

          {/* Right Column with additional shadow for popup effect */}
          <div
            style={rightColumnStyle}
            className="shadow-lg rounded-lg bg-white"
          >
            {/* Top Section: Font Settings */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <FontSettings
                headlineFontSize={headlineFontSize}
                setHeadlineFontSize={setHeadlineFontSize}
                headlineBgColor={headlineBgColor}
                setHeadlineBgColor={setHeadlineBgColor}
                headlineFontColor={headlineFontColor}
                setHeadlineFontColor={setHeadlineFontColor}
                isBold={isBold}
                setIsBold={setIsBold}
                isItalic={isItalic}
                setIsItalic={setIsItalic}
                headlineFont={headlineFont}
                setHeadlineFont={setHeadlineFont}
              />
            </div>

            {/* Editor Tools */}
            <EditorTools
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              aspectRatio={aspectRatio}
              setAspectRatio={setAspectRatio}
            />

            {/* Image Preview Container with ImageUploader overlay */}
            <div className="w-full flex flex-col items-center mt-4 relative">
              {/* <h2 style={{ fontFamily: "serif", fontSize: "22px" }} className="text-lg mb-4">
                Image Preview
              </h2> */}
              <div
                id="ad-preview"
                className={`${styles.adPreview} ${
                  aspectRatio === "square" ? styles.square : styles.story
                } relative`}
              >
                <img
                  src={image || placeholderImage}
                  alt="Ad Preview"
                  className="shadow-md rounded-lg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: selectedFilter,
                  }}
                />
                {isClient && adData.headline && (
                  <DraggableHeadline
                    headlineText={adData.headline}
                    headlineBgColor={headlineBgColor}
                    headlineFontColor={headlineFontColor}
                    headlineFontSize={headlineFontSize}
                    isBold={isBold}
                    isItalic={isItalic}
                    headlineFont={headlineFont}
                  />
                )}
                {/* ImageUploader placed at top right of ad-preview container */}
                <div className="absolute top-2 right-2">
                  <ImageUploader image={image} setImage={setImage} />
                </div>
              </div>
            </div>

            <br />
            <InstagramPostPreview
              image={image}
              caption={clientCaption}
              headlineText={clientHeadline}
              headlineBgColor={headlineBgColor}
              headlineFontColor={headlineFontColor}
              headlineFontSize={headlineFontSize}
              isBold={isBold}
              isItalic={isItalic}
              headlineFont={headlineFont}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAdPage;
