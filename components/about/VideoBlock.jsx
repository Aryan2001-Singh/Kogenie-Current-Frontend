// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const VideoBlock = () => {
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <>
//       {isOpen && (
//         <div
//           className="modal-overlay"
//           onClick={() => setOpen(false)}
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.8)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 1000,
//           }}
//         >
//           <div
//             className="modal-content"
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               position: "relative",
//               width: "90%",
//               maxWidth: "500px",
//               padding: "20px",
//               backgroundColor: "#fff",
//               borderRadius: "8px",
//             }}
//           >
//             <button
//               onClick={() => setOpen(false)}
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 right: "10px",
//                 background: "transparent",
//                 border: "none",
//                 fontSize: "1.5rem",
//                 cursor: "pointer",
//               }}
//             >
//               &times;
//             </button>
//             <iframe
//               src="https://www.instagram.com/reel/DBhaK04R60W/embed"
//               width="100%"
//               height="600"
//               frameBorder="0"
//               allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
//               allowFullScreen
//               style={{ borderRadius: "8px" }}
//             ></iframe>
//           </div>
//         </div>
//       )}

//       <div className="fancy-feature-fiftyTwo mt-130 lg-mt-100">
//         <div className="container">
//           <div className="video-banner d-flex align-items-center justify-content-center">
//             <button
//               className="fancybox video-icon tran3s rounded-circle d-flex align-items-center justify-content-center"
//               onClick={() => setOpen(true)}
//             >
//               <Image
//                 src="/images/icon/icon_140.svg"
//                 alt="icon"
//                 width={50}
//                 height={50}
//               />
//             </button>
//           </div>
//           {/* /.video-banner */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default VideoBlock;
