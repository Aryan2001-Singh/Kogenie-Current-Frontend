"use client";

import React, { useState, useEffect } from "react";
import { useAdStore } from "@/store/useAdStore";
import styles from "@/styles/CreateAdPage.module.css"; // Import the styles
import Head from "next/head";
import SocialMediaPost from "@/components/createAd/SocialMedia";
import EditorTools from "@/components/createAd/EditorTools";
import InstagramPostPreview from "@/components/createAd/InstagramPostPreview";
import AdForm from "@/components/createAd/AdForm";
import ImageUploader from "@/components/createAd/ImageUploader";
import DownloadButton from "@/components/createAd/DownloadButton";
import FontSettings from "@/components/createAd/FontSettings";
import DraggableHeadline from "@/components/createAd/DraggableHeadline";
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

  const [image, setImage] = useState<string | null>(null);
  const [headlineBgColor, setHeadlineBgColor] = useState<string>("#000000"); 
  const [headlineFontSize, setHeadlineFontSize] = useState<number>(20); 
  const [headlineFontColor, setHeadlineFontColor] = useState<string>("#FFFFFF"); 
  const [isBold, setIsBold] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false); 
  const [headlineFont, setHeadlineFont] = useState<string>("Arial"); 

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
    if (adDataFromStore) {
      setAdData(adDataFromStore);
    }
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, [adDataFromStore]);

  
  useEffect(() => {
    localStorage.setItem("adData", JSON.stringify(adData));
  }, [adData]);

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
      <div className={styles.parentContainer}>
        <div className={styles.container}>
          <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Create Ad</h1>
          <AdForm adData={adData} setAdData={setAdData} />
          <ImageUploader setImage={setImage} />
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
         
          <div>
            <EditorTools
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              aspectRatio={aspectRatio}
              setAspectRatio={setAspectRatio}
            />
          </div>

          <div className="w-full flex flex-col items-center mt-4 relative">
            <h2 className="text-lg font-semibold mb-2">Image Preview</h2>

            <div
              id="ad-preview"
              className={`${styles.adPreview} ${
                aspectRatio === "square" ? styles.square : styles.story
              }`}
            >
              {/* Image */}
              {image && (
  <img
    src={image}  // ✅ Base64 images work fine with a normal img tag
    alt="Uploaded Preview"
    className="shadow-md rounded-lg"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: selectedFilter,
    }}
  />
)}


              {/* Draggable Headline */}
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
            {/* Download Button */}
            <DownloadButton
              selectedFilter={selectedFilter}
              aspectRatio={aspectRatio}
            />
          </div>
          <br />
          <br />
          <br />
          {/* Instagram Post Preview */}
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
          {/* Social Media Posting Buttons */}
          <SocialMediaPost image={image} caption={clientCaption} />
        </div>
      </div>
    </>
  );
};

export default CreateAdPage;
