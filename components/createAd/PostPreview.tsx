import React, { useState } from "react";
import InstagramPostPreview from "@/components/createAd/InstagramPostPreview";

interface PostPreviewProps {
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

const PostPreview: React.FC<PostPreviewProps> = ({
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
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="mt-4 relative">
      {/* Post Preview Button with Tooltip */}
      <div className="group relative flex justify-center">
        <button
          onClick={() => setIsPreviewOpen(true)}
          className="bg-white text-black text-sm  px-3 py-1 rounded-md shadow-md border border-gray-300 hover:bg-gray-100 transition"
        >
          Post Preview
        </button>
        {/* Tooltip */}
        <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-xs px-2 py-1 rounded-md transition-opacity">
          Instagram Post Preview
        </span>
      </div>

      {/* Full-Screen Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          {/* Full-page container with scrollbar */}
          <div className="absolute inset-0 bg-white overflow-y-auto p-6 shadow-lg rounded-lg flex flex-col items-center">
            {/* Close Button (Fixed at the top) */}
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-4 right-6 text-gray-600 hover:text-black text-lg font-bold"
            >
              ✖
            </button>

            {/* Instagram Post Preview */}
            <div className="w-full max-w-2xl mt-8 mb-6">
              <InstagramPostPreview
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
          </div>
        </div>
      )}
    </div>
  );
};

export default PostPreview;
