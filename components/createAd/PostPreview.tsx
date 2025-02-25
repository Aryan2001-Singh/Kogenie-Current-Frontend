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
    <div className="mt-4">
      {/* Post Preview Button */}
      <button
        onClick={() => setIsPreviewOpen(true)}
        className="bg-yellow-400 text-white px-4 py-2 mt-20 rounded-md shadow-md hover:bg-blue-600 transition"
      >
        Post Preview
      </button>

      {/* Full-Screen Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          {/* Full-page container with scrollbar */}
          <div className="absolute inset-0 bg-white overflow-y-auto p-6 shadow-lg rounded-lg flex flex-col items-center">
            {/* Close Button (Fixed at the top) */}
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-4 right-6 text-gray-600 hover:text-black text-xl font-bold"
            >
              ✖
            </button>

            {/* Instagram Post Preview */}
            <div className="w-full max-w-2xl mt-12 mb-8">
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
