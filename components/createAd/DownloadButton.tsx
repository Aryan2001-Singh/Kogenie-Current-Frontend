"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

interface DownloadButtonProps {
  selectedFilter: string;
  aspectRatio: "square" | "story";
}

const DownloadButton: React.FC<DownloadButtonProps> = ({  }) => {
  const [showOptions, setShowOptions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Functions to redirect to respective social media apps
  const handleRedirectInstagram = () => {
    window.open("https://www.instagram.com/", "_blank");
    setShowOptions(false);
  };

  const handleRedirectFacebook = () => {
    window.open("https://www.facebook.com/", "_blank");
    setShowOptions(false);
  };

  const handleRedirectTwitter = () => {
    window.open("https://twitter.com/", "_blank");
    setShowOptions(false);
  };

  // Hide dropdown when clicking outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [containerRef]);

  return (
    <div className="relative inline-block" ref={containerRef}>
      {/* Publish Button */}
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="min-w-[130px] px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:shadow-2xl hover:brightness-110 hover:scale-105 transition-transform duration-200 active:scale-95 flex items-center justify-center"
      >
        Publish ⬇️
      </button>

      {/* Dropdown Menu */}
      {showOptions && (
        <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-md z-50">
          <button
            onClick={handleRedirectInstagram}
            className="block w-full text-left p-2 hover:bg-gray-200 flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
          >
            <FaInstagram size={16} className="text-pink-500" />
            <span>Publish on Instagram</span>
          </button>
          <button
            onClick={handleRedirectFacebook}
            className="block w-full text-left p-2 hover:bg-gray-200 flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
          >
            <FaFacebook size={16} className="text-blue-600" />
            <span>Publish on Facebook</span>
          </button>
          <button
            onClick={handleRedirectTwitter}
            className="block w-full text-left p-2 hover:bg-gray-200 flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
          >
            <FaTwitter size={16} className="text-blue-400" />
            <span>Publish on Twitter</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;

// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// interface DownloadButtonProps {
//   selectedFilter: string;
//   aspectRatio: "square" | "story";
// }

// const DownloadButton: React.FC<DownloadButtonProps> = ({ selectedFilter, aspectRatio }) => {
//   const [showOptions, setShowOptions] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleDownload = async (format: "png" | "jpeg" | "pdf") => {
//     const adPreview = document.getElementById("ad-preview");

//     if (adPreview) {
//       const imgElement = adPreview.querySelector("img");

//       if (imgElement) {
//         if (!imgElement.complete) {
//           await new Promise((resolve) => (imgElement.onload = resolve));
//         }
//         imgElement.style.filter = selectedFilter;
//       }

//       setTimeout(async () => {
//         const canvas = await html2canvas(adPreview, {
//           useCORS: true,
//           scale: 2,
//           backgroundColor: "#ffffff",
//           width: aspectRatio === "square" ? 500 : 360,
//           height: aspectRatio === "square" ? 500 : 640,
//         });

//         const imageData = canvas.toDataURL(image/${format});

//         if (format === "pdf") {
//           const pdf = new jsPDF({
//             orientation: aspectRatio === "square" ? "portrait" : "landscape",
//             unit: "px",
//             format: [canvas.width, canvas.height],
//           });

//           pdf.addImage(imageData, "JPEG", 0, 0, canvas.width, canvas.height);
//           pdf.save(aspectRatio === "square" ? "instagram_post.pdf" : "instagram_story.pdf");
//         } else {
//           const link = document.createElement("a");
//           link.href = imageData;
//           link.download =
//             aspectRatio === "square"
//               ? instagram_post.${format}
//               : instagram_story.${format};
//           link.click();
//         }

//         setShowOptions(false); // Hide dropdown after selection
//       }, 500);
//     }
//   };

//   // Hide dropdown when clicking outside the component
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
//         setShowOptions(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [containerRef]);

//   return (
//     <div className="relative inline-block" ref={containerRef}>
//       {/* Export Button */}
//       <button
//         onClick={() => setShowOptions(!showOptions)}
//         className="min-w-[130px] px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-2xl hover:brightness-110 transition-transform duration-200 active:scale-95 flex items-center justify-center"
//       >
//         Export ⬇️
//       </button>

//       {/* Dropdown Menu */}
//       {showOptions && (
//         <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md">
//           <button
//             onClick={() => handleDownload("png")}
//             className="block w-full text-left p-2 hover:bg-gray-200"
//           >
//             Download as PNG
//           </button>
//           <button
//             onClick={() => handleDownload("jpeg")}
//             className="block w-full text-left p-2 hover:bg-gray-200"
//           >
//             Download as JPEG
//           </button>
//           <button
//             onClick={() => handleDownload("pdf")}
//             className="block w-full text-left p-2 hover:bg-gray-200"
//           >
//             Download as PDF
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DownloadButton; 
