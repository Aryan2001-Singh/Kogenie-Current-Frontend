"use client";

import React, { useState, useEffect } from "react";
import { useAdStore } from "@/store/useAdStore";
import styles from "@/styles/CreateAdPage.module.css";
import Head from "next/head";
// import SocialMediaPost from "@/components/createAd/SocialMedia";
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

  // Left column: only the form (50% width)
  const leftColumnStyle = {
    width: "50%",
    padding: "30px",
  };

  // Right column: contains the rest of the components (50% width)
  const rightColumnStyle: React.CSSProperties = {
    width: "50%",
    padding: "30px",
    display: "flex",
    flexDirection: "row",
  };

  // Main content style (100% width of right column content)
  const mainContentStyle = {
    width: "100%",
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
      </Head>
      <div
        className={styles.parentContainer}
        style={{
          display: "flex",
          flexDirection: "row",
          background:
            "linear-gradient(to bottom right,rgba(230, 238, 246, 0.58))",
        }}
      >
        {/* Left Column: Only the Form */}
        <div style={leftColumnStyle}>
          <h1
            style={{
              fontSize: "24px",
              marginBottom: "20px",
              fontFamily: "serif",
            }}
          >
            Your Ad
          </h1>
          <AdForm adData={adData} setAdData={setAdData} />
        </div>
        {/* Right Column: All other components */}
        <div style={rightColumnStyle}>
          <div style={mainContentStyle}>
            {/* Export Button Container: Top-right aligned */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "20px",
              }}
            >
              <DownloadButton
                selectedFilter={selectedFilter}
                aspectRatio={aspectRatio}
              />
              {/* <SocialMediaPost image={image} caption={clientCaption} /> */}
            </div>
            <ImageUploader image={image} setImage={setImage} />
            <EditorTools
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              aspectRatio={aspectRatio}
              setAspectRatio={setAspectRatio}
            />
            <div className="w-full flex flex-col items-center mt-4 relative">
              <h2
                style={{ fontFamily: "serif", fontSize: "22px" }}
                className="text-lg mb-4"
              >
                Image Preview
              </h2>
              <div
                id="ad-preview"
                className={`${styles.adPreview} ${
                  aspectRatio === "square" ? styles.square : styles.story
                }`}
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
              </div>
              <br />
            </div>
            <br />
            <br />
            <br />
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
