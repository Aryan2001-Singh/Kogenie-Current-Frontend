import React, { ChangeEvent } from "react";

interface AdFormProps {
  adData: {
    brandName: string;
    productName: string;
    productDescription: string;
    adCopy: string;
    headline: string;
  };
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const AdForm: React.FC<AdFormProps> = ({ adData, handleInputChange }) => {
  return (
    <div className="w-full">
      {/* Brand Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Brand Name</label>
        <input
          type="text"
          name="brandName"
          placeholder="Enter your brand name"
          value={adData.brandName}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Product Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Product Name</label>
        <input
          type="text"
          name="productName"
          placeholder="Enter your product name"
          value={adData.productName}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Product Description */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Product Description</label>
        <textarea
          name="productDescription"
          placeholder="Describe your product..."
          value={adData.productDescription}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      {/* Ad Copy */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Your Ad Copy</label>
        <textarea
          name="adCopy"
          placeholder="Generated ad copy will appear here..."
          value={adData.adCopy}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      {/* Headline */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Your Headline</label>
        <textarea
          name="headline"
          placeholder="Headline"
          value={adData.headline}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>
    </div>
  );
};

export default AdForm;