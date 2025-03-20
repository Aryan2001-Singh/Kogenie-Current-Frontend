"use client";

import React, { useState, useEffect } from "react";
import { useAdStore } from "@/store/useAdStore";
import styles from "@/styles/CreateAdPage.module.css";
import Head from "next/head";
import Image from "next/image";
import EditorTools from "@/components/createAd/EditorTools";
import AdForm from "@/components/createAd/AdForm";
import ImageUploader from "@/components/createAd/ImageUploader";
import ExportButton from "@/components/createAd/exportButton";
import DownloadButton from "@/components/createAd/DownloadButton";
import DraggableHeadline from "@/components/createAd/DraggableHeadline";
import FontSettings from "@/components/createAd/FontSettings";
import PostPreview from "@/components/createAd/PostPreview";
import ScrapedImagesButton from "@/components/createAd/ScrapedImagesButton";

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
  // const [isClient, setIsClient] = useState(false);
  const placeholderImage = "/logo.png";
  // const [showScrapedImages, setShowScrapedImages] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedImage = localStorage.getItem("uploadedImage");
    setImage(savedImage || placeholderImage);
  }, []);

  const [aspectRatio, setAspectRatio] = useState<"square" | "story">("square");
  const [selectedFilter, setSelectedFilter] = useState<string>("none");

  const [clientCaption, setClientCaption] = useState("");
  const [clientHeadline, setClientHeadline] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setClientCaption(adData.adCopy || "Ad Copy Not Generated");
    setClientHeadline(adData.headline || "Headline Not Generated");
  }, [adData.adCopy, adData.headline]);

  useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");
    setImage(savedImage || placeholderImage);
  }, [adDataFromStore]);

  useEffect(() => {
    localStorage.setItem("adData", JSON.stringify(adData));
  }, [adData]);

  useEffect(() => {
    if (adDataFromStore && Object.keys(adDataFromStore).length > 0) {
      console.log("🟢 Loaded Data from Store:", adDataFromStore);
      setAdData(adDataFromStore);
      localStorage.setItem("adData", JSON.stringify(adDataFromStore)); // ✅ Store in localStorage
    } else {
      const storedAdData = localStorage.getItem("adData");
      if (storedAdData) {
        setAdData(JSON.parse(storedAdData)); // ✅ Load from localStorage
      }
    }
  }, [adDataFromStore]);
  // Left column style
  const leftColumnStyle = {
    flex: 1,
    padding: "30px",
    backgroundColor: "#f6f3fc",
  };

  // Right column style
  const rightColumnStyle: React.CSSProperties = {
    flex: 1,
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    backgroundColor: "#f6f3fc",
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

      {/* Main container spanning full width with background color */}
      <div className="w-full relative bg-white min-h-screen">
        <div style={{ marginLeft: "920px" }}>
          <ExportButton
            selectedFilter={selectedFilter}
            aspectRatio={aspectRatio}
          />
          <DownloadButton
            selectedFilter={selectedFilter}
            aspectRatio={aspectRatio}
          />
        </div>
        {/* Main Content Container */}
        <div
          className={styles.parentContainer}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            background: "white",
            width: "100%",
            paddingTop: "20px",
          }}
        >
          {/* Left Column */}
          <div style={leftColumnStyle} className="mt-8 px-2 bg-[#f6f3fc]">
            <AdForm adData={adData} setAdData={setAdData} />
          </div>

          {/* Right Column */}
          <div style={rightColumnStyle} className=" mt-8 px-2 bg-[#f6f3fc]">
            <h2
              style={{
                fontFamily: "serif",
                marginBottom: "-20px",
                marginLeft: "30px",
              }}
              className="text-4xl font-medium tracking-wide text-transparent bg-clip-text 
bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-700 drop-shadow-lg mb-6"
            >
              Ad preview
            </h2>
            {/* Top Editing Bar in Right Column */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex flex-col gap-3 transition-transform duration-200 hover:scale-105">
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
              <div style={{ padding: "20px", marginTop: "-50px" }}>
                <PostPreview
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
            <div className="flex space-x-4 mt-4">
              <ImageUploader image={image} setImage={setImage} />

              {/* ✅ Show Scraped Images Button Only on Client */}
              {isClient && adData?.productImages?.length > 0 && (
                <ScrapedImagesButton
                  productImages={adData.productImages} // ✅ Pass scraped images
                  onSelectImage={(selectedImg) => {
                    setImage(selectedImg); // ✅ Update selected image
                    localStorage.setItem("uploadedImage", selectedImg); // ✅ Store selected image
                  }}
                />
              )}
            </div>

            {/* Image Preview Container */}
            <div className="w-full flex flex-col items-center mt-4 relative">
              <div
                id="ad-preview"
                className={`${styles.adPreview} ${
                  aspectRatio === "square" ? styles.square : styles.story
                } relative`}
              >
               <Image
  src={image || placeholderImage}
  alt="Ad Preview"
  className="shadow-md rounded-lg"
  layout="fill"
  objectFit="cover"
  style={{ filter: selectedFilter }}
/>

                {isClient && clientHeadline && (
                  <DraggableHeadline
                    headlineText={clientHeadline}
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
            {/* <InstagramPostPreview
              image={image}
              caption={clientCaption}
              headlineText={clientHeadline}
              headlineBgColor={headlineBgColor}
              headlineFontColor={headlineFontColor}
              headlineFontSize={headlineFontSize}
              isBold={isBold}
              isItalic={isItalic}
              headlineFont={headlineFont}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAdPage;
