"use client";

import React, { useState, useEffect, ChangeEvent, CSSProperties } from "react";
import { useAdStore } from "@/store/useAdStore";
// import { useRouter } from "next/navigation";
// import PublishButton from "./PublishButton";
// import AuthButton from "./AuthButton";



const CreateAdPage: React.FC = () => {
  // const router = useRouter();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const adDataFromStore = useAdStore((state) => state.adData); // Get ad data from store
  const [adData, setAdData] = useState({
    brandName: "",
    productName: "",
    productDescription: "",
    adCopy: "",
  });

  useEffect(() => {
    // Populate ad data from store
    if (adDataFromStore) {
      setAdData(adDataFromStore);
    }

    // Check if the user has been redirected back with an auth code
    // const handleAuthCallback = () => {
      // const urlParams = new URLSearchParams(window.location.search);
      // const authCode = urlParams.get("code");

      // if (authCode) {
      //   console.log("User authenticated with code:", authCode);
      //   setIsAuthenticated(true);
      // }
    // };

    // handleAuthCallback();
  }, [adDataFromStore]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAdData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handlePublishAd = () => {
  //   if (!isAuthenticated) {
  //     alert("You must authenticate first!");
  //     return;
  //   }

  //   console.log("Publishing ad...");
  //   alert("Ad published successfully!");
  // };

  // Styling
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

  // const publishButtonContainerStyle: CSSProperties = {
  //   marginLeft: "20px",
  // };

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
        </div>
      </div>

      {/* Authentication Button */}
      {/* <AuthButton /> */}

      {/* Publish Button */}
      {/* <div style={publishButtonContainerStyle}>
        <PublishButton onClick={handlePublishAd} />
      </div> */}
      {/* <button onClick={()=> router.push("/upload")}
      className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Get Started
      </button> */}
<div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Create Your Post</h1>
      <UploadForm />
    </div>

    </div>
  );
};

export default CreateAdPage;