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
import DownloadButton from "@/components/createAd/PublishButton";
import DraggableHeadline from "@/components/createAd/DraggableHeadline";
import FontSettings from "@/components/createAd/FontSettings";
import PostPreview from "@/components/createAd/PostPreview";
import ScrapedImagesButton from "@/components/createAd/ScrapedImagesButton";
import FeedbackForm from "@/components/createAd/FeedbackForm";
import UserAdHistory from "@/components/createAd/adHistory/UserAdHistory";
import { useRouter, useSearchParams } from "next/navigation";

const CreateAdPage: React.FC = () => {
  const defaultAdData = {
    _id: "",
    adType: "manual",
    brandName: "",
    productName: "",
    productDescription: "",
    targetAudience: "",
    uniqueSellingPoints: "",
    brandVoice: "",
    awarenessStage: "",
    tone: "",
    goal: "",
    theme: "",
    problemItSolves: "",
    useLocation: "",
    adCopy: "",
    headline: "",
    productImages: [],
    selectedImage: null,
  };

  const [adData, setAdData] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("adData");
      return saved ? JSON.parse(saved) : defaultAdData;
    }
    return defaultAdData;
  });

  const [headlineFontSize, setHeadlineFontSize] = useState<number>(20);
  const [headlineBgColor, setHeadlineBgColor] = useState<string>("#000000");
  const [headlineFontColor, setHeadlineFontColor] = useState<string>("#FFFFFF");
  const [isBold, setIsBold] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [headlineFont, setHeadlineFont] = useState<string>("Arial");
  const [image, setImage] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  const adDataFromStore = useAdStore((state) => state.adData);

  const setAdDataToStore = useAdStore((state) => state.setAdData);
  const [hydrated, setHydrated] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fbConnected = searchParams.get("fbConnected");
    if (fbConnected === "success") {
      alert("✅ Instagram account connected!");
      const cleanedUrl = window.location.pathname;
      router.replace(cleanedUrl);
    }
  }, [searchParams, router]);

  // useEffect(() => {
  //   if (adDataFromStore && Object.keys(adDataFromStore).length > 0) {
  //     setAdData(adDataFromStore);
  //     localStorage.setItem("adData", JSON.stringify(adDataFromStore));
  //   } else {
  //     const storedAdData = localStorage.getItem("adData");
  //     if (storedAdData) {
  //       const parsed = JSON.parse(storedAdData);
  //       setAdData(parsed);
  //       setAdDataToStore(parsed); // ✅ ✅ ✅ Push into Zustand
  //       console.log("🧠 Zustand hydrated with:", parsed);
  //     }
  //   }
  // }, [adDataFromStore, setAdDataToStore]);

  // useEffect(() => {
  //   const storedAdData = localStorage.getItem("adData");
  //   if (storedAdData) {
  //     const parsed = JSON.parse(storedAdData);
  //     setAdData(parsed);
  //     setAdDataToStore(parsed);
  //     console.log("🧠 Zustand hydrated with:", parsed);
  //   }
  //   setHydrated(true); // ✅ mark as hydrated
  // }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedAdData = localStorage.getItem("adData");

    console.log("📦 Local adData found:", storedAdData);
    console.log("🧠 Zustand adDataFromStore:", adDataFromStore);

    if (!adDataFromStore || Object.keys(adDataFromStore).length === 0) {
      if (storedAdData) {
        try {
          const parsedData = JSON.parse(storedAdData);
          setAdData(parsedData);
          setAdDataToStore(parsedData);
          console.log("✅ Zustand hydrated from localStorage");
        } catch (error) {
          console.error("❌ Failed to parse localStorage adData:", error);
        }
      } else {
        console.warn("⚠️ No adData found in localStorage");
      }
    } else {
      setAdData(adDataFromStore);
      localStorage.setItem("adData", JSON.stringify(adDataFromStore));
      console.log("🔁 Zustand already had adData, synced to localStorage");
    }

    setHydrated(true);
  }, []);
  useEffect(() => {
    if (adDataFromStore?.selectedImage) {
      setImage(adDataFromStore.selectedImage);
    } else {
      setImage(null);
    }
  }, [adDataFromStore]);

  useEffect(() => {
    setIsClient(true);
    const savedImage = localStorage.getItem("uploadedImage");
    setImage(savedImage || null);
  }, []);

  const [aspectRatio, setAspectRatio] = useState<"square" | "story">("square");
  const [selectedFilter, setSelectedFilter] = useState<string>("none");

  const [clientCaption, setClientCaption] = useState("");
  const [clientHeadline, setClientHeadline] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!hydrated || !adData?.adCopy || !adData?.headline) return;
    setClientCaption(adData.adCopy);
    setClientHeadline(adData.headline);
  }, [hydrated, adData]);

  // useEffect(() => {
  //   const savedImage = localStorage.getItem("uploadedImage");
  //   setImage(savedImage || null);
  // }, [adDataFromStore]);

  // useEffect(() => {
  //   localStorage.setItem("adData", JSON.stringify(adData));
  // }, [adData]);

  // useEffect(() => {
  //   if (adDataFromStore && Object.keys(adDataFromStore).length > 0) {
  //     console.log("🟢 Loaded Data from Store:", adDataFromStore);
  //     setAdData(adDataFromStore);
  //     localStorage.setItem("adData", JSON.stringify(adDataFromStore));
  //   } else {
  //     const storedAdData = localStorage.getItem("adData");
  //     if (storedAdData) {
  //       setAdData(JSON.parse(storedAdData));
  //     }
  //   }
  // }, [adDataFromStore]);

  // useEffect(() => {
  //   if (adDataFromStore && Object.keys(adDataFromStore).length > 0) {
  //     console.log("🟢 Loaded Data from Store:", adDataFromStore);
  //     setAdData(adDataFromStore);
  //     localStorage.setItem("adData", JSON.stringify(adDataFromStore));
  //   } else {
  //     const storedAdData = localStorage.getItem("adData");
  //     if (storedAdData) {
  //       const parsed = JSON.parse(storedAdData);
  //       setAdData(parsed);
  //       setAdDataToStore(parsed); // ✅ hydrate Zustand too
  //     }
  //   }
  // }, [adDataFromStore, setAdDataToStore]);

  const leftColumnStyle = { flex: 1, padding: "30px" };
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="w-full relative bg-white min-h-screen">
        <div className="flex justify-end gap-4 p-4">
          <ExportButton
            selectedFilter={selectedFilter}
            aspectRatio={aspectRatio}
          />
          <DownloadButton
            selectedFilter={selectedFilter}
            aspectRatio={aspectRatio}
          />
        </div>

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
          <div style={leftColumnStyle} className="mt-8 px-2">
            <AdForm adData={adData} setAdData={setAdData} />
          </div>

          <div style={rightColumnStyle} className="mt-8 px-2">
            <h2
              style={{
                fontFamily: "serif",
                marginBottom: "-20px",
                marginLeft: "30px",
              }}
              className="text-4xl font-medium tracking-wide text-transparent bg-clip-text bg-gray-700 drop-shadow-lg mb-6"
            >
              Ad preview
            </h2>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex flex-col gap-3 transition-transform duration-200 hover:scale-100">
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
              {isClient && adData?.productImages?.length > 0 && (
                <ScrapedImagesButton
                  productImages={adData.productImages}
                  onSelectImage={(selectedImg) => {
                    setImage(selectedImg);
                    if (selectedImg && !selectedImg.startsWith("data:image")) {
                      try {
                        localStorage.setItem("uploadedImage", selectedImg);
                      } catch (error) {
                        console.warn(
                          "⚠️ Failed to store image in localStorage:",
                          error
                        );
                      }
                    }
                  }}
                />
              )}
            </div>

            <div className="w-full flex flex-col items-center mt-4 relative">
              <div
                id="ad-preview"
                className={`${styles.adPreview} ${
                  aspectRatio === "square" ? styles.square : styles.story
                } relative`}
              >
                {image && (
                  <Image
                    src={image}
                    alt="Ad Preview"
                    className="shadow-md rounded-lg"
                    fill
                    style={{ objectFit: "cover", filter: selectedFilter }}
                  />
                )}

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
            <FeedbackForm />
            <UserAdHistory />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAdPage;
