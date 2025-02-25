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
        className="hidden"
      />

      {/* Custom Button with Icon and Text */}
      <button
        onClick={() => fileInputRef.current?.click()}
        className="relative flex flex-col items-center justify-center p-2 text-gray-700 
        font-bold transition-all duration-200 hover:text-gray-800 hover:ring-2 hover:ring-gray-400 group"

      >
        <UploadCloud size={20} />
        <span className="mt-1 text-xs">Upload Image</span>
        {/* Tooltip on Hover */}
        <span className="absolute bottom-full mb-2 hidden text-xs bg-gray-700 text-white 
        py-1 px-2 rounded-md shadow-md group-hover:block">
          Upload Image
        </span>
      </button>
    </div>
  );
};

export default ImageUploader;
