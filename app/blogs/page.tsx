// "use client";
// import FooterMenu from "@/components/home-page/home-6/FooterMenu";
// import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
// import Header from "@/components/home-page/home-6/Header";
// import Image from "next/image";
// // import BlogItem from "@/components/BlogItem";
// import React from "react";
// import BlogList from "@/components/BlogList";
// // import { ToastContainer } from "react-toastify";
// // import 'react-toastify/dist/ReactToastify.css'

// const GridWithSidebar = () => {
//   return (
//     <>
//       <Header />
//       {/* background content */}
//       <div className="relative h-screen w-full mt- px-4 sm:px-8 lg:px-16">
//         <Image
//           src="/1733819818920_blog_pic_15.png"
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           priority // Ensures the image loads faster
//           style={{
//             filter: 'blur(8px)', // Adds blur effect
//             transform: 'scale(1.1)', // Slight zoom to reduce visible edges after blur
//           }}
//         />

//         {/* foreground content */}
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             zIndex: 1,
//             textAlign: "center",
//             // color: "#fff",
//           }}>

//           <div className="fancy-feature-fiftyOne position-relative mt-200">
//             <div className="container">
//               <div className="row">
//                 <h2 className="main-title fw-400 tx-dark text-3xl md:text-4xl lg:text-5xl">Latest Blogs</h2>
//                 <div className="text-center mt-16 lg:mt-24">
//                   <h1 className="text-4xl lg:text-6xl font-medium text-gray-900 leading-tight">Latest Blogs</h1>
//                   <p className="text-lg lg:text-xl mt-4 text-gray-600 max-w-2xl mx-auto">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting
//                     industry. Lorem Ipsum has been the industry&apos;s standard dummy text
//                     ever.
//                   </p>
//                   <div className="flex justify-center mt-8">
//                     <form
//                       className="flex items-center bg-gray-100 rounded-lg shadow-md max-w-md p-2 lg:p-4"
//                       action="#"
//                     >
//                       <input
//                         type="email"
//                         placeholder="Your email address"
//                         className="flex-1 px-4 py-2 rounded-l-lg text-gray-700 focus:outline-none"
//                         required
//                       />
//                       <button
//                         type="submit"
//                         className="bg-indigo-600 text-white py-2 px-4 rounded-r-lg hover:bg-indigo-500 transition-all"
//                       >
//                         Subscribe
//                       </button>
//                     </form>
//                   </div>
//                   <div className="col-lg-7" data-aos="fade-right">
//                     <div className="title-style-five mb-65 lg-mb-40"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>


//           </div>
//         </div>
//         {/* <div className="lg:w-1/2">
//           <Image
//             src="public\1733819818920_blog_pic_15.png"
//             alt="Focused"
//             className="rounded-lg shadow-lg"
//           />
//         </div> */}

//         {/* <form
//           className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
//           action=""
//         >
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="pl-4 outline-none"
//             required
//           />
//           <button
//             type="submit"
//             className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
//           >
//             Subscribe
//           </button>
//         </form> */}
//       </div>

//       <BlogList />

//       {/* Footer */}
//       <div className="footer-style-two theme-basic-footer mt-10">
//         {" "}
//         {/* Added margin-top */}
//         <div className="top-footer position-relative">
//           <div className="container">
//             <div className="inner-wrapper m-auto">
//               <div className="row">
//                 <FooterMenu />
//               </div>
//             </div>
//           </div>
//         </div>
//         <CopyrightFooter2 />
//       </div>
//     </>
//   );
// };

// export default GridWithSidebar;
// "use client";
// import FooterMenu from "@/components/home-page/home-6/FooterMenu";
// import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
// import Header from "@/components/home-page/home-6/Header";
// import Image from "next/image";
// // import BlogItem from "@/components/BlogItem";
// import React from "react";
// import BlogList from "@/components/BlogList";
// import { ToastContainer } from "react-toastify";
//  import 'react-toastify/dist/ReactToastify.css'
//  import '/app/blog.css';
// const GridWithSidebar = () => {
//   return (
//     <>
//       <Header />

//      <div className="relative h-screen w-full mt-20 px-4 sm:px-8 lg:px-16 flex items-center">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <Image
//             src="/1736150818741_1733820995780_blog_pic_4.png"
//             alt="Background"
//             layout="fill"
//             objectFit="contain"
//             priority
//             style={{ filter: 'blur(6px)', transform: 'scale(1.1)' }}
//           />
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//         </div>

//         {/* Foreground Content */}
//         <div className="relative z-20 max-w-5xl mx-auto text-white text-center lg:text-left">
//           <h1
//             className="text-5xl lg:text-7xl font-bold leading-tight tracking-wide mb-4"
//             style={{
//               fontFamily: 'Playfair Display, serif',
//               color: 'white',
//               textShadow: '2px 4px 8px rgba(0, 0, 0, 0.7)',
//             }}
//           >
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
//               Latest Blogs
//             </span>
//           </h1>
//           <p
//             className="text-lg lg:text-xl font-light max-w-2xl mx-auto lg:mx-0 mb-8"
//             style={{
//               fontFamily: 'Inter, sans-serif',
//               lineHeight: '1.8',
//               textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)',
//             }}
//           >
//             Discover insights, trends, and industry updates with our curated blogs. Stay ahead and informed with the latest content from experts.
//           </p>
//           <div className="mt-8 flex justify-center lg:justify-start">
//             <form className="flex items-center bg-white rounded-full shadow-lg overflow-hidden max-w-lg w-full">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="flex-1 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 font-medium rounded-full hover:from-indigo-400 hover:to-purple-500 transition-all"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <BlogList />

//       {/* Footer */}
//       <div className="footer-style-two theme-basic-footer mt-10">
//         {" "}
//         {/* Added margin-top */}
//         <div className="top-footer position-relative">
//           <div className="container">
//             <div className="inner-wrapper m-auto">
//               <div className="row">
//                 <FooterMenu />
//               </div>
//             </div>
//           </div>
//         </div>
//         <CopyrightFooter2 />
//       </div>
//     </>
//   );
// };

// export default GridWithSidebar;
"use client";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Header from "@/components/home-page/home-6/Header";
import React from "react";
import BlogList from "@/components/BlogList";
// import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '/app/blog.css';

const GridWithSidebar = () => {
  return (
    <>
      <Header />
      {/* Background Section */}
      <div className="relative h-screen w-full  px-4 sm:px-8 lg:px-16 
      flex items-center overflow-hidden">


        {/* Foreground Content */}
        <div className="relative z-20 max-w-5xl mx-auto text-[#08090a] text-left lg:text-left">
        {/* </div>
        <Image src="/images\assets\ils_07.png" alt="Ad Example" className="w-32 h-auto"></Image>
      </div> */}
      <h6 className="mt-20 text-black-300 font-semibold text-lg tracking-wide">
        Welcome To <span className="text-purple-700">Blog Page</span>
      </h6>


      <h1
        className="text-5xl lg:text-7xl font-bold leading-tight tracking-wide mb-4"
        style={{
          fontFamily: 'Playfair Display, serif',
          color: '#08090a',
        }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r
             from-[#4a5abb] via-[#8693e3] to-[#546aec]">
          Latest Blogs
        </span>
      </h1>
      <p
        className="text-lg lg:text-xl font-light max-w-2xl mx-auto lg:mx-0 mb-8"
        style={{
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.8',
          color: 'grey',
        }}
      >
        Discover insights, trends, and industry updates with our curated blogs.
        Stay ahead and informed with the latest content from experts.
      </p>
      <div className="mt-8 flex justify-left">
        <form className="flex items-left bg-white rounded-full shadow-lg 
            overflow-hidden max-w-lg w-full justify-left">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-full text-gray-700 focus:outline-none
                 focus:ring-2 focus:ring-[#4a5abb]"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#4a5abb] to-[#8693e3] 
                text-white px-6 py-3 font-medium rounded-full hover:from-[#4a5abb]
                 hover:to-[#546aec] transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
  </div>
  </div>


      <BlogList />

      {/* Footer */}
      <div className="footer-style-two theme-basic-footer mt-10" style={{ backgroundColor: '#f7f8fb' }}>
        <div className="top-footer position-relative">
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <FooterMenu />
              </div>
            </div>
          </div>
        </div>
        <CopyrightFooter2 />
      </div>
    </>
  );
};

export default GridWithSidebar;
