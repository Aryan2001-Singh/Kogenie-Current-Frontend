import React, { useState, useEffect } from "react";

interface InstagramPreviewProps {
  image: string | null;
  caption: string;
  headline: string;
}

const InstagramPreview: React.FC<InstagramPreviewProps> = ({ image, caption, headline }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this component is client-rendered
  }, []);

  return (
    <div className="max-w-md mx-auto border border-gray-300 rounded-lg shadow-lg overflow-hidden mt-6">
      {/* Header: Instagram Profile Section */}
      <div className="flex items-center p-3">
        <img
          src="https://via.placeholder.com/40" // Dummy profile picture
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="ml-2 font-semibold">your_brand_name</span>
      </div>

      {/* Image Preview with Headline Overlay */}
      <div className="relative">
        {image && (
          <img
            src={image}
            alt="Instagram Post"
            className="w-full object-cover"
          />
        )}

        {/* Headline Overlay - FIXED POSITION */}
        {headline && (
          <div className="absolute top-0 left-0 w-full text-center bg-black bg-opacity-50 text-white p-2 text-xl font-bold">
            {isClient ? headline : "Loading headline..."}
          </div>
        )}
      </div>

      {/* Like, Comment, Share Icons */}
      <div className="flex p-3 space-x-4">
        <span>❤️</span> {/* Like Icon */}
        <span>💬</span> {/* Comment Icon */}
        <span>🔄</span> {/* Share Icon */}
      </div>

      {/* Caption Section */}
      <div className="p-3">
        <span className="font-semibold">your_brand_name </span>
        {isClient ? caption : "Loading..."} {/* Ensure caption updates after mounting */}
      </div>
    </div>
  );
};

export default InstagramPreview;