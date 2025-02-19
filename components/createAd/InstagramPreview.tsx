import React, { useState, useEffect } from "react";
import DraggableHeadline from "./DraggableHeadline"; // Import DraggableHeadline
import Image from "next/image";

interface InstagramPreviewProps {
  image: string | null;
  caption: string;
  headlineText: string;
  headlineBgColor: string;
  headlineFontColor: string;
  headlineFontSize: number;
  isBold: boolean;
  isItalic: boolean;
  headlineFont: string;
}

const InstagramPreview: React.FC<InstagramPreviewProps> = ({
  image,
  caption,
  headlineText,
  headlineBgColor,
  headlineFontColor,
  headlineFontSize,
  isBold,
  isItalic,
  headlineFont,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this component is client-rendered
  }, []);

  return (
    <div className="max-w-md mx-auto border border-gray-300 rounded-lg shadow-lg overflow-hidden mt-6">
      {/* Header: Instagram Profile Section */}
      <div className="flex items-center p-3">
        <Image
          src="/images/gallery/img_01.jpg" // Dummy profile picture
          alt="Profile"
          width={40} // Specify width
          height={40} // Specify height
          className="w-10 h-10 rounded-full"
        />
        <span className="ml-2 font-semibold">your_brand_name</span>
      </div>

      {/* Image Preview */}
      <div className="relative">
        {image && (
          <Image
            src={image}
            alt="Instagram Post"
            className="w-full object-cover"
          />
        )}

        {/* Draggable Headline Component */}
        <DraggableHeadline
          headlineText={headlineText}
          headlineBgColor={headlineBgColor}
          headlineFontColor={headlineFontColor}
          headlineFontSize={headlineFontSize}
          isBold={isBold}
          isItalic={isItalic}
          headlineFont={headlineFont}
        />
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
        {isClient ? caption : "Loading..."}
      </div>
    </div>
  );
};

export default InstagramPreview;
