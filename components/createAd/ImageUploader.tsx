import React, { ChangeEvent, useRef } from "react";
import { UploadCloud } from "lucide-react"; // Import an upload icon from Lucide React

interface ImageUploaderProps {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ setImage }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
          localStorage.setItem("uploadedImage", reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        className="hidden" // Hides the input
      />

      {/* Small Custom Button with Tooltip */}
      <button
        onClick={() => fileInputRef.current?.click()} // Trigger file input click
        className="relative flex items-center justify-center p-2 bg-gray-500 text-white rounded-full shadow-md transition-all duration-200 hover:bg-blue-700 group"
      >
        <UploadCloud size={20} /> {/* Upload Icon */}
        {/* Tooltip on Hover */}
        <span className="absolute bottom-full mb-2 hidden text-xs bg-gray-800 text-white py-1 px-2 rounded-md shadow-md group-hover:block">
          Upload Image
        </span>
      </button>
    </div>
  );
};

export default ImageUploader;