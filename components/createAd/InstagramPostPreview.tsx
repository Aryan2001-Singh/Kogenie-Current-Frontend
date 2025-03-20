import React from "react";
import Image from "next/image";
import { IoHeartOutline, IoChatbubbleOutline, IoPaperPlaneOutline } from "react-icons/io5"; // Outline icons
import { FaEllipsisH } from "react-icons/fa"; // Three dots menu
import { IoPersonCircleOutline } from "react-icons/io5"; // Profile icon

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
  
}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-b from-[#F58529] via-[#DD2A7B] to-[#8134AF] overflow-hidden">
      
      {/* Floating Instagram Elements */}
      <div className="absolute top-10 left-20 text-white opacity-30 animate-float">
        <IoHeartOutline className="text-5xl" />
      </div>
      <div className="absolute bottom-20 right-20 text-white opacity-30 animate-floatSlow">
        <IoChatbubbleOutline className="text-5xl" />
      </div>
      <div className="absolute top-1/3 right-1/4 text-white opacity-30 animate-floatMedium">
        <IoPaperPlaneOutline className="text-5xl" />
      </div>

      {/* Instagram Post Container */}
      <div className="w-[380px] bg-black rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
        {/* Instagram Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <IoPersonCircleOutline className="text-3xl text-white" />
            <span className="font-semibold text-white text-sm">your_brand_name</span>
          </div>
          <FaEllipsisH className="text-white cursor-pointer" />
        </div>

        {/* Instagram Image Preview (Fixed Aspect Ratio) */}
        <div className="w-full h-[450px] flex items-center justify-center bg-black relative">
  <Image
    src={image || "/default-image.jpg"}
    alt="Instagram Post"
    layout="fill"
    objectFit="cover"
  />
</div>


        {/* Action Icons (Outline Versions) */}
        <div className="flex items-center px-4 py-3 gap-4 text-white">
          <IoHeartOutline className="text-2xl cursor-pointer hover:text-red-500 transition" />
          <IoChatbubbleOutline className="text-2xl cursor-pointer hover:text-gray-400 transition" />
          <IoPaperPlaneOutline className="text-2xl cursor-pointer hover:text-gray-400 transition" />
        </div>

        {/* Caption Section */}
        <div className="px-4 pb-3 text-white">
          <span className="font-semibold text-sm">your_brand_name</span>
          <span className="text-sm ml-2">{caption}</span>
        </div>
      </div>
    </div>
  );
};

export default InstagramPostPreview;
