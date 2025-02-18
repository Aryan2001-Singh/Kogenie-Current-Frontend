import React from "react";
import InstagramPreview from "@/components/createAd/InstagramPreview";

interface InstagramPostPreviewProps {
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

const InstagramPostPreview: React.FC<InstagramPostPreviewProps> = ({
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
  return (
    <div className="w-full flex flex-col items-center mt-4 relative">
      <h2 className="text-lg font-semibold mb-2 mt-8">Instagram Post Preview</h2>
      <InstagramPreview
        image={image}
        caption={caption}
        headlineText={headlineText}
        headlineBgColor={headlineBgColor}
        headlineFontColor={headlineFontColor}
        headlineFontSize={headlineFontSize}
        isBold={isBold}
        isItalic={isItalic}
        headlineFont={headlineFont}
      />
    </div>
  );
};

export default InstagramPostPreview;