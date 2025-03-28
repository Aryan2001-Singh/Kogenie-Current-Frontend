import React, { useState, useEffect } from "react";
import DraggableHeadline from "./DraggableHeadline"; 
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
    setIsClient(true);
  }, []);

  // Function to check if image is a base64 string
  const isBase64 = (str: string) => str.startsWith("data:image");

  return (
    <div className="max-w-sm mx-auto border border-gray-300 rounded-lg shadow-lg overflow-hidden mt-6">
      {/* Header: Instagram Profile Section */}
      <div className="flex items-center p-3">
        <Image
          src="/images/gallery/img_01.jpg" // Dummy profile picture
          alt="Profile"
          width={40} 
          height={40} 
          className="w-10 h-10 rounded-full"
        />
        <span className="ml-2 font-semibold">your_brand_name</span>
      </div>

      {/* Image Preview */}
      <div className="relative">
  {image && (
    isBase64(image) ? (
      <img
        src={image} // ✅ Keeps <img> for base64 images
        alt="Instagram Post"
        className="w-full object-cover"
        loading="lazy" // ✅ Improves performance for base64 images
      />
    ) : (
      <Image
        src={image} // ✅ Uses <Image /> for external images
        alt="Instagram Post"
        width={500} 
        height={500} 
        className="w-full object-cover"
      />
    )
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
