// import React from "react";
// import { FaInstagram, FaFacebook } from "react-icons/fa";

// interface SocialMediaPostProps {
//   image: string | null;
//   caption: string;
// }

// const SocialMediaPost: React.FC<SocialMediaPostProps> = () => {
//   // Redirect to Instagram
//   const redirectToInstagram = () => {
//     window.open("https://www.instagram.com/", "_blank");
//   };

//   // Redirect to Facebook
//   const redirectToFacebook = () => {
//     window.open("https://www.facebook.com/", "_blank");
//   };

//   return (
//     <div className="w-full flex flex-col items-center mt-0">
//       <div className="flex space-x-4 ml-4">
//         <button 
//           onClick={redirectToInstagram} 
//           className="p-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500"
//         >
//           <FaInstagram size={24} />
//         </button>
//         <button 
//           onClick={redirectToFacebook} 
//           className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500"
//         >
//           <FaFacebook size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SocialMediaPost;
