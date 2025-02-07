
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
