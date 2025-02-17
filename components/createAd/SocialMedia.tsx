import React from "react";

interface SocialMediaPostProps {
  image: string | null;
  caption: string;
}

const SocialMediaPost: React.FC<SocialMediaPostProps> = ({ image, caption }) => {
  // Redirect to Instagram
  const redirectToInstagram = () => {
    window.open("https://www.instagram.com/", "_blank");
  };

  // Redirect to Facebook
  const redirectToFacebook = () => {
    window.open("https://www.facebook.com/", "_blank");
  };

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <h2 className="text-lg font-semibold mb-3">Share Your Ad on Social Media</h2>

      {/* Show preview of the ad before redirecting */}
      {image && (
        <img src={image} alt="Ad Preview" className="w-32 h-32 rounded-lg shadow-md mb-3" />
      )}

      <p className="text-center text-gray-600 mb-3">{caption}</p>

      <div className="flex space-x-4">
        <button 
          onClick={redirectToInstagram} 
          className="px-4 py-2 bg-pink-500 text-white rounded-lg"
        >
          Go to Instagram
        </button>

        <button 
          onClick={redirectToFacebook} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Go to Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialMediaPost;