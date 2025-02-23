import React from "react";

interface SocialMediaPostProps {
  image: string | null;
  caption: string;
}

const SocialMediaPost: React.FC<SocialMediaPostProps> = () => {
  // Redirect to Instagram
  const redirectToInstagram = () => {
    window.open("https://www.instagram.com/", "_blank");
  };

  // Redirect to Facebook
  const redirectToFacebook = () => {
    window.open("https://www.facebook.com/", "_blank");
  };

  return (
    <div className="w-full flex flex-col items-center mt-0">
     

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