"use client";

import React, { useState, useEffect } from "react";
import { useAdStore } from "@/store/useAdStore";
import styles from "@/styles/CreateAdPage.module.css";
import Head from "next/head";

import EditorTools from "@/components/createAd/EditorTools";
import InstagramPostPreview from "@/components/createAd/InstagramPostPreview";
import AdForm from "@/components/createAd/AdForm";
import ImageUploader from "@/components/createAd/ImageUploader";
import ExportButton from "@/components/createAd/exportButton";
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
  const placeholderImage = "/blog7.jpg";
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

  // Left column style
  const leftColumnStyle = {
    flex: 1,
    padding: "30px",
  };

  // Right column style
  const rightColumnStyle: React.CSSProperties = {
    flex: 1,
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* Main container spanning full width */}
      <div className="w-full relative">
        <div style={{marginLeft:"920px"}}>
         <ExportButton selectedFilter={selectedFilter} aspectRatio={aspectRatio} />
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
            paddingTop: "20px",
          }}
        >
          {/* Left Column */}
          <div style={leftColumnStyle}>
            <AdForm adData={adData} setAdData={setAdData} />
          </div>

          {/* Right Column */}
          <div style={rightColumnStyle} className="shadow-lg mt-8 rounded-lg bg-white">
          <h2 style={{fontFamily:"serif",marginBottom:'-20px'}}className="text-4xl font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-lg mb-6">
            Ad preview
          </h2>
            {/* Top Editing Bar in Right Column */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex flex-col gap-3">
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
                <EditorTools
                  selectedFilter={selectedFilter}
                  setSelectedFilter={setSelectedFilter}
                  aspectRatio={aspectRatio}
                  setAspectRatio={setAspectRatio}
                />
              </div>
              {/* Shift ImageUploader slightly downward on the right side */}
              <div style={{ padding:"20px",marginTop:"-50px"}}>
                <ImageUploader image={image} setImage={setImage} />
              </div>
            </div>

            {/* Image Preview Container */}
            <div className="w-full flex flex-col items-center mt-4 relative">
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
