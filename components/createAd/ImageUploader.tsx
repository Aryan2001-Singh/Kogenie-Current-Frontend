import React, { ChangeEvent } from "react";

interface ImageUploaderProps {
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ setImage }) => {
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
          localStorage.setItem("uploadedImage", reader.result);

          // Ensure the image fully loads before continuing
          const img = new Image();
          img.src = reader.result;
          await new Promise((resolve) => (img.onload = resolve));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
      <label className="block text-gray-700 font-semibold mb-2">
        Upload Image
      </label>
      <input
        type="file"
        onChange={handleImageUpload}
        style={{ backgroundColor: "#AAB7D8" }}
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none 
        focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-500"
      />
    </div>
  );
};

export default ImageUploader;
