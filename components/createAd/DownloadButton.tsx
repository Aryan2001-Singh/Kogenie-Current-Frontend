import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface DownloadButtonProps {
  selectedFilter: string;
  aspectRatio: "square" | "story";
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ selectedFilter, aspectRatio }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleDownload = async (format: "png" | "jpeg" | "pdf") => {
    const adPreview = document.getElementById("ad-preview");

    if (adPreview) {
      const imgElement = adPreview.querySelector("img");

      if (imgElement) {
        if (!imgElement.complete) {
          await new Promise((resolve) => (imgElement.onload = resolve));
        }
        imgElement.style.filter = selectedFilter;
      }

      setTimeout(async () => {
        const canvas = await html2canvas(adPreview, {
          useCORS: true,
          scale: 2,
          backgroundColor: "#ffffff",
          width: aspectRatio === "square" ? 500 : 360,
          height: aspectRatio === "square" ? 500 : 640,
        });

        const imageData = canvas.toDataURL(`image/${format}`);

        if (format === "pdf") {
          const pdf = new jsPDF({
            orientation: aspectRatio === "square" ? "portrait" : "landscape",
            unit: "px",
            format: [canvas.width, canvas.height],
          });

          pdf.addImage(imageData, "JPEG", 0, 0, canvas.width, canvas.height);
          pdf.save(aspectRatio === "square" ? "instagram_post.pdf" : "instagram_story.pdf");
        } else {
          const link = document.createElement("a");
          link.href = imageData;
          link.download =
            aspectRatio === "square"
              ? `instagram_post.${format}`
              : `instagram_story.${format}`;
          link.click();
        }

        setShowOptions(false); // Hide dropdown after selection
      }, 500);
    }
  };

  return (
    <div className="relative inline-block">
      {/* Export Button */}
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="p-2 bg-blue-500 text-white rounded shadow"
      >
        Export ⬇️
      </button>

      {/* Dropdown Menu */}
      {showOptions && (
        <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md">
          <button
            onClick={() => handleDownload("png")}
            className="block w-full text-left p-2 hover:bg-gray-200"
          >
            Download as PNG
          </button>
          <button
            onClick={() => handleDownload("jpeg")}
            className="block w-full text-left p-2 hover:bg-gray-200"
          >
            Download as JPEG
          </button>
          <button
            onClick={() => handleDownload("pdf")}
            className="block w-full text-left p-2 hover:bg-gray-200"
          >
            Download as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;