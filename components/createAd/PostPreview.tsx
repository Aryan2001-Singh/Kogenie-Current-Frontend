import React, { useEffect, useRef, useState } from "react";
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
const comments = [
  {
    username: "shoplover",
    text: "Do you ship internationally?",
    reply: "Yes! We offer international shipping.",
  },
  {
    username: "techgeek",
    text: "What’s the price?",
    reply: "Thanks for your interest! We'll DM you the pricing.",
  },
];

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
  const modalRef = useRef<HTMLDivElement>(null);

  const handleReply = (username: string, message: string) => {
    alert(`Reply sent to @${username}: ${message} (simulated)`);
    console.log(
      `Simulated POST to /{media-id}/comments -> Reply to @${username}: "${message}"`
    );
  };

  // Scroll to top when modal opens
  useEffect(() => {
    if (isPreviewOpen && modalRef.current) {
      modalRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isPreviewOpen]);

  return (
    <div className="mt-4 relative">
      {/* Post Preview Button */}
      <div className="group relative flex justify-center">
        <button
          onClick={() => setIsPreviewOpen(true)}
          className="bg-white text-black text-sm px-3 py-1 rounded-md shadow-md border border-gray-300 hover:bg-gray-100 transition"
        >
          Post Preview
        </button>
        <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-xs px-2 py-1 rounded-md transition-opacity">
          Instagram Post Preview
        </span>
      </div>

      {/* Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="absolute inset-0 bg-white overflow-y-auto p-6 shadow-lg rounded-lg flex flex-col items-center max-h-[90vh]"
          >
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-4 right-6 text-gray-600 hover:text-black text-lg font-bold"
            >
              ✖
            </button>
            {/* Instagram Post */}
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
                onBack={() => setIsPreviewOpen(false)} // ✅ ADD THIS
              />
            </div>
            z{/* 🔥 Simulated Comments Section */}
            {/* 🔥 Simulated Comments Section */}
            <div className="w-full max-w-2xl p-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">
                Comments (simulated)
              </h3>

              {comments.map((c, index) => (
                <div key={index} className="mb-4">
                  <p className="text-sm text-gray-800">
                    <strong>@{c.username}:</strong> {c.text}
                  </p>
                  <button
                    onClick={() => handleReply(c.username, c.reply)}
                    className="mt-1 text-xs text-blue-600 underline hover:text-blue-800"
                  >
                    Reply
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostPreview;
