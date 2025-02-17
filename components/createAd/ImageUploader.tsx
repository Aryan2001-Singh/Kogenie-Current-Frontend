import React, { ChangeEvent } from "react";

interface ImageUploaderProps {
  handleImageUpload: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ handleImageUpload }) => {
  return (
    <div className="mt-4">
      <label className="block font-semibold">Upload Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mt-2 w-full p-2 border rounded-md"
      />
    </div>
  );
};

export default ImageUploader;