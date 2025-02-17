import React from "react";
import html2canvas from "html2canvas";

interface DownloadButtonProps {
  selectedFilter: string;
  aspectRatio: "square" | "story";
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ selectedFilter, aspectRatio }) => {
  const handleDownload = async () => {
    const adPreview = document.getElementById("ad-preview");

    if (adPreview) {
      const imgElement = adPreview.querySelector("img");

      // Ensure imgElement exists before proceeding
      if (imgElement) {
        if (!imgElement.complete) {
          await new Promise((resolve) => (imgElement.onload = resolve));
        }

        // ✅ Apply filter only if imgElement exists
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

        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = image;
        link.download = aspectRatio === "square" ? "instagram_post.png" : "instagram_story.png";
        link.click();
      }, 500);
    }
  };

  return <button onClick={handleDownload} className="p-2 bg-blue-500 text-white rounded">Download</button>;
};

export default DownloadButton;