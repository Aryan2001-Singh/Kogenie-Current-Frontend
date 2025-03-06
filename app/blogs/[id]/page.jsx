// 'use client'
// import { assets } from '@/Assets/assets';  // Removed `blog_data` since it's not used
// import Header from "@/components/home-page/home-6/Header";
// import FooterMenu from "@/components/home-page/home-6/FooterMenu";
// import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
// import axios from 'axios';
// import Image from 'next/image';
// // import Link from 'next/link';
// import React, { useEffect, useState, useCallback } from 'react';

// const Page = ({ params }) => {
//   const [data, setData] = useState(null);

//   // Memoizing fetchBlogData with useCallback
//   const fetchBlogData = useCallback(async () => {
//     const response = await axios.get('/api/blog', {
//       params: {
//         id: params.id
//       }
//     });
//     setData(response.data);
//   }, [params.id]);  // Add `params.id` as a dependency

//   useEffect(() => {
//     fetchBlogData();
//   }, [fetchBlogData]);  // Now `fetchBlogData` is in the dependency array

//   return (
//     data ? <>

//       {/* Header */}
//       <Header />

//       <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
//         <div className="flex justify-between items-center">
//           {/* <Link href="/">
//             <Image src={assets.logo} width={180} alt="" className="w-[130px] sm:w-auto" />
//           </Link> */}
//           {/* <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
//             Get started <Image src={assets.arrow} alt="" />
//           </button> */}
//         </div>
//         <div className="text-center my-2 mt-40"> {/* Added mt-12 for spacing */}
//   <h1  style ={{marginTop:'20px'}}className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
//   <Image className="mx-auto mt-6 border border-white rounded-full" src={data.authorImg} width={60} height={60} alt="" />
//   <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">Aayushi Shrivastava</p>
// </div>
//       </div>
//       <div className=" mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
//         <Image
//         className="border-4 border-white mx-auto" src={data.image} width={800} height={480} alt="" />
//         <div style={{justifyContent:"center",textAlign:'center',marginTop:'10px'}} className="blog-content" dangerouslySetInnerHTML={{ __html: data.description }} />
//         <div className="my-24">
//           <p className="text-black font font-semibold my-4">Share this article on social media</p>
//           <div className="flex">
//             <Image src={assets.facebook_icon} width={50} alt="" />
//             <Image src={assets.twitter_icon} width={50} alt="" />
//             <Image src={assets.googleplus_icon} width={50} alt="" />
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//        {/* Footer */}
//        <div className="footer-style-two theme-basic-footer">
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
//     </> : <></>
//   );
// };

// export default Page;  // Ensure `Page` is exported with a capital letter
"use client";
import { assets } from "@/Assets/assets";
import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  // Memoizing fetchBlogData with useCallback
  const fetchBlogData = useCallback(async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });
    setData(response.data);
  }, [params.id]);

  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);

  return data ? (
    <div className="min-h-screen bg-[#4a5abb] flex flex-col">
      {/* Header */}
      <Header />

      <div
        style={{
          borderRadius: "20px",
          backgroundColor: "rgba(190, 196, 233, 1)",
        }}
        className="container mx-auto my-10 p-6  bg-#8693e3 rounded-xl shadow-lg max-w-[900px] mt-95"
      >
        {/* Blog Title and Author */}
        <div className="text-center my-10 mt-100">
          <h1
            style={{ color: "#08090a" }}
            className="text-3xl sm:text-5xl font-bold text-gray-800 max-w-[700px] mx-auto mt-100 mb-6"
          >
            {data.title}
          </h1>
          <div className="flex items-center justify-center mt-15">
            <Image
              className="border-2 border-gray-300 rounded-full shadow-md"
              src={data.authorImg}
              width={50}
              height={50}
              alt="Author"
            />
            <p
              style={{ color: "gray" }}
              className="mx-2 ml-3 text-md text-gray-600 font-medium "
            >
              Aayushi Shrivastava
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="mt-4 bg-white rounded-lg p-8">
          <Image
            className=" border-4 border-gray-200 mb-6 shadow-lg mx-auto"
            src={data.image}
            width={500}
            height={300}
            alt="Blog Image"
          />
          <p className=" mt-8 mx-5 my-5 text-gray-600 text-center text-lg font-medium max-w-xl">
            KOgenie makes your ad in just 5 minutes so you can launch ad
            campaigns swiftly, helping you get more people to buy your
            product/service faster.
          </p>
          <div
            className="text-gray-700 mx-5 leading-relaxed text-lg font-light leading-relaxed max-w-lg"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />

          {/* Social Share Section */}
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Share this article on social media
            </p>
            <div className="flex justify-center gap-4">
              <Image
                src={assets.facebook_icon}
                width={40}
                alt="Facebook"
                className="hover:scale-105 transition-transform"
              />
              <Image
                src={assets.twitter_icon}
                width={40}
                alt="Twitter"
                className="hover:scale-105 transition-transform"
              />
              <Image
                src={assets.googleplus_icon}
                width={40}
                alt="Google Plus"
                className="hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-style-two theme-basic-footer mt-16">
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
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-xl font-semibold text-gray-600">Loading...</p>
    </div>
  );
};

export default Page;
