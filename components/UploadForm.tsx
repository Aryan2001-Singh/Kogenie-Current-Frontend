"use client";

import { useState, useEffect } from "react";
import { useAdStore } from "@/store/useAdStore"; // ✅ Import Zustand store
import ImageEditor from "./ui/ImageEditor"; // ✅ Import Image Editor

export default function UploadForm() {
  const { adData } = useAdStore(); // ✅ Get ad data from Zustand store
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [adCopy, setAdCopy] = useState(""); // ✅ Store ad copy in local state

  // ✅ Automatically set text from adData when available
  useEffect(() => {
    if (adData?.adCopy) {
      setAdCopy(adData.adCopy);
    }
  }, [adData]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image || !adCopy) {
      alert("Please upload an image.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", image);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.url) {
      setUploadedImageUrl(data.url);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Create Your Post</h1> */}

      {/* Upload Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-md">
        {/* ✅ Removed manual text input, automatically using adCopy */}
        <input type="file" accept="image/*" onChange={handleFileChange} className="p-2" />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded-md" 
          disabled={loading}
        >
          {loading ? "Uploading..." : "Generate Post"}
        </button>
      </form>

      {/* ✅ Use ImageEditor when an image is uploaded */}
      {uploadedImageUrl && adCopy && (
        <div className="mt-6 p-4 border rounded-md shadow-md text-center">
          <h2 className="text-lg font-semibold">Edit Your Generated Post</h2>
          <ImageEditor initialText={adCopy} image={uploadedImageUrl} />
        </div>
      )}
    </div>
  );
}