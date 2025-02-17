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
    <div>
      <label className="block text-gray-700 font-semibold mb-2">Upload Image</label>
      <input type="file" onChange={handleImageUpload} className="w-full p-2 border border-gray-300 rounded-md" />
    </div>
  );
};

export default ImageUploader;