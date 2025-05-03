"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useOrganization } from "@clerk/nextjs";


import {
  IoHeart,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
} from "react-icons/io5";
import { FaEllipsisH } from "react-icons/fa";

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

interface CommentType {
  username: string;
  text: string;
  reply: string;
}

const InstagramPostPreview: React.FC<InstagramPostPreviewProps> = ({
  image,
  caption,
}) => {
  const router = useRouter();
  const { organization } = useOrganization();

  const [liked, setLiked] = useState(false);
  const [activeReplyIndex, setActiveReplyIndex] = useState<number | null>(null);
  const [sentReplies, setSentReplies] = useState<{ [key: number]: boolean }>({});
  const [showComments, setShowComments] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const comments: CommentType[] = [
    { username: "fashionlover21", text: "What’s the price?", reply: "Thanks! We'll DM you." },
    { username: "shopaholic99", text: "Do you ship internationally?", reply: "Yes! Worldwide shipping available." },
    { username: "blackbeauty", text: "Is this available in black?", reply: "Absolutely! We have black in stock." },
  ];

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-b from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-4">
      <div className="w-[390px] bg-black rounded-lg shadow-2xl border border-gray-800 overflow-y-auto max-h-[90vh] font-sans">
        
        {/* Header */}
      {/* Header */}
<div className="flex items-center justify-between px-4 py-3">
  {organization?.id ? (
    <button
      onClick={() => {
        const path = `/organization/${organization.id}/createAd`;
        console.log("🔙 Go Back button clicked");
        console.log("Navigating to:", path);
        router.push(path);
      }}
      className="text-white text-sm font-medium hover:underline"
    >
      ← Go Back
    </button>
  ) : (
    <span className="text-white text-xs italic">Loading organization...</span>
  )}
  <FaEllipsisH className="text-white text-sm cursor-pointer" />
</div>


        {/* Image */}
        <div className="relative w-full aspect-square bg-black">
          <Image
            src={image || "/default-image.jpg"}
            alt="Instagram Post"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-between px-4 py-3 text-white">
          <div className="flex gap-4">
            <div onClick={() => setLiked(!liked)} className="cursor-pointer">
              <IoHeart className="text-2xl text-red-500 transition" />
            </div>
            <div onClick={() => setShowComments(true)} className="cursor-pointer">
              <IoChatbubbleOutline className="text-2xl hover:text-gray-300 transition" />
            </div>
            <IoPaperPlaneOutline className="text-2xl cursor-pointer hover:text-gray-300 transition" />
          </div>
        </div>

        {/* Likes */}
        <div className="px-4 text-white text-sm font-semibold mb-1">1,284 likes</div>

        {/* Caption with toggle */}
        <div className="px-4 text-white text-sm mb-2">
          <span className="font-semibold">your_brand_name </span>
          <span className={isExpanded ? "" : "line-clamp-3"}>
            {caption}
          </span>
          {caption.length > 220 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-blue-300 ml-2"
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        {/* View all comments */}
        <div
          onClick={() => setShowComments(!showComments)}
          className="px-4 text-gray-400 text-sm mb-1 cursor-pointer hover:underline"
        >
          View all {comments.length} comments
        </div>

        {/* Comments */}
        {showComments &&
          comments.map((comment, index) => (
            <div key={index} className="px-4 mb-1">
              <p className="text-sm text-white leading-tight">
                <span className="font-semibold">@{comment.username}</span>{" "}
                <span className="text-white">{comment.text}</span>
              </p>
              {!sentReplies[index] && (
                <button
                  onClick={() => {
                    setActiveReplyIndex(index);
                    setTimeout(() => {
                      setSentReplies(prev => ({ ...prev, [index]: true }));
                    }, 1500);
                  }}
                  className="ml-1 text-xs text-blue-400 hover:text-blue-500 mt-1"
                >
                  Reply
                </button>
              )}
              {activeReplyIndex === index && !sentReplies[index] && (
                <span className="ml-2 text-xs text-gray-400 italic animate-pulse">Typing...</span>
              )}
              {sentReplies[index] && (
                <div className="ml-6 mt-1 text-gray-400 mb-4 text-xs">
                  <span className="text-blue-400">@{comment.username}</span>{" "}
                  <span className="text-white font-medium">{comment.reply}</span>
                </div>
              )}
            </div>
          ))}

        {/* Timestamp */}
        <div className="px-4 text-[11px] text-gray-500 uppercase pb-3">2 HOURS AGO</div>

        {/* Add Comment */}
        <div className="border-t border-gray-800 px-4 py-3 flex items-center gap-2">
          <input
            type="text"
            placeholder="Add a comment..."
            className="bg-transparent text-sm text-white placeholder-gray-400 flex-1 outline-none"
          />
          <button className="text-indigo-400 text-sm font-semibold">Post</button>
        </div>
      </div>
    </div>
  );
};

export default InstagramPostPreview;