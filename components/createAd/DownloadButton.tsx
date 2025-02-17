import React from "react";

interface DownloadButtonProps {
  handleDownload: () => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ handleDownload }) => {
  return (
    <button onClick={handleDownload} className="bg-red-500 text-white p-2 rounded-md shadow-md mt-4">
      Download Ad
    </button>
  );
};

export default DownloadButton;