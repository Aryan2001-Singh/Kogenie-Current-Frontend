import React from "react";
import InstagramPreview from "@/components/createAd/InstagramPreview";

interface InstagramPostPreviewProps {
  image: string | null;
  caption: string;
  headline: string;
}

const InstagramPostPreview: React.FC<InstagramPostPreviewProps> = ({
  image,
  caption,
  headline,
}) => {
  return (
    <div className="w-full flex flex-col items-center mt-4 relative">
      <h2 className="text-lg font-semibold mb-2 mt-8">
        Instagram Post Preview
      </h2>
      <InstagramPreview image={image} caption={caption} headline={headline} />
    </div>
  );
};

export default InstagramPostPreview;