"use client";

import React, { useState } from "react";
// import Image from "next/image";

interface ScrapedImagesButtonProps {
  productImages: string[]; // ✅ List of scraped images
  onSelectImage: (image: string) => void; // ✅ Callback function when an image is selected
}

const ScrapedImagesButton: React.FC<ScrapedImagesButtonProps> = ({
  productImages,
  onSelectImage,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      {/* ✅ Button to Open Scraped Images Popup */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={() => setShowPopup(true)}
      >
        Scraped Images
      </button>

      {/* ✅ Popup for Scraped Images */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-lg">
            <h3 className="text-xl font-semibold mb-4">
              Choose a Scraped Image
            </h3>

            {/* ✅ Display Scraped Images */}
            <div className="flex overflow-x-auto space-x-2">
              {productImages.map((img, index) => (
                <div key={index} className="w-24 h-24 relative">
                  <img
                    src={img}
                    alt={`Scraped Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-75"
                    onClick={() => {
                      onSelectImage(img);
                      setShowPopup(false);
                    }}
                  />
                </div>
              ))}
            </div>

            {/* ✅ Close Button */}
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrapedImagesButton;
