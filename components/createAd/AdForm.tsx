import React, { ChangeEvent, CSSProperties } from "react";

interface AdFormProps {
  adData: {
    brandName: string;
    productName: string;
    productDescription: string;
    adCopy: string;
    headline: string;
  };
  setAdData: React.Dispatch<React.SetStateAction<{
    brandName: string;
    productName: string;
    productDescription: string;
    adCopy: string;
    headline: string;
  }>>;
}

const AdForm: React.FC<AdFormProps> = ({ adData, setAdData }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAdData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Style to justify text in inputs/textareas
  const justifyStyle: CSSProperties = {
    textAlign: "justify",
  };

  // Glass style using a flat pastel color (#E1EAF3) with blur, inset shadow, and justified text
  const glassStyle: CSSProperties = {
    background: "#AAB7D8",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "inset 0 0 8px rgba(0, 0, 0, 0.3)",
    textAlign: "justify",
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Custom scrollbar styling and glowing focus effect */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #8D97A5;
          border-radius: 4px;
        }
        .input-glow:focus {
          box-shadow: 0 0 10px rgba(99,102,241,0.8) !important;
        }
      `}</style>

      {/* Brand Name */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold italic text-lg mb-2">
          Brand Name
        </label>
        <input
          type="text"
          name="brandName"
          placeholder="Enter your brand name"
          value={adData.brandName}
          onChange={handleInputChange}
          style={justifyStyle}
          className="input-glow w-full p-4 border border-gray-200 rounded-md shadow-lg text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform duration-200 hover:scale-105 active:scale-95"
        />
      </div>

      {/* Product Name */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold italic text-lg mb-2">
          Product Name
        </label>
        <input
          type="text"
          name="productName"
          placeholder="Enter your product name"
          value={adData.productName}
          onChange={handleInputChange}
          style={justifyStyle}
          className="input-glow w-full p-4 border border-gray-200 rounded-md shadow-lg text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform duration-200 hover:scale-105 active:scale-95"
        />
      </div>

      {/* Product Description */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold italic text-lg mb-2">
          Product Description
        </label>
        <textarea
          name="productDescription"
          placeholder="Describe your product..."
          value={adData.productDescription}
          onChange={handleInputChange}
          style={justifyStyle}
          className="input-glow w-full p-4 border border-gray-200 rounded-md shadow-lg text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform duration-200 hover:scale-105 active:scale-95 resize-none h-40"
        />
      </div>

      {/* Ad Copy */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold italic text-lg mb-2">
          Your Ad Copy
        </label>
        <textarea
          name="adCopy"
          placeholder="Generated ad copy will appear here..."
          value={adData.adCopy}
          onChange={handleInputChange}
          style={glassStyle}
          className="input-glow custom-scrollbar w-full p-4 border-2 border-gray-200 rounded-md shadow-lg text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform duration-200 hover:scale-105 active:scale-95 resize-none h-40"
        />
      </div>

      {/* Headline */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold italic text-xl mb-2">
          Headline{" "}
          <span className="italic text-base text-gray-500">
            (Editable: Updates preview image on change) *
          </span>
        </label>
        <textarea
          name="headline"
          placeholder="Enter your headline"
          value={adData.headline}
          onChange={handleInputChange}
          style={glassStyle}
          className="input-glow custom-scrollbar w-full p-4 border-2 border-gray-200 rounded-md shadow-lg text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform duration-200 hover:scale-105 active:scale-95 resize-none h-32"
        />
      </div>
    </div>
  );
};

export default AdForm;
