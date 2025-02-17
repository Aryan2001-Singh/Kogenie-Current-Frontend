
"use client";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Header from "@/components/home-page/home-6/Header";
import React from "react";
import BlogList from "@/components/BlogList";
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import '/app/blog.css';

const GridWithSidebar = () => {
  return (
    <>
      <Header />

      {/* Hero Section with Background */}
      <div
        className="relative w-full flex items-center justify-center text-center px-4 sm:px-8 lg:px-16 pb-12"
        style={{ height: '90vh', backgroundColor: '#f7f8fb', position: 'relative' }}
      >
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/retrosupply-jLwVAUtLOAQ-unsplash.jpg" 
            alt="Blog Banner"
            layout="fill"
            objectFit="cover"
            quality={90}
            className="z-0"
          />
          {/* Full Page Overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        </div>

        {/* Foreground Content */}
        <div style={{marginTop:"70px"}}className="relative z-20 max-w-5xl mx-auto text-white mt-16">
          <h6 className="text-lg font-semibold tracking-wide" style={{ color: '#d1d5db' }}>
            Welcome to <span style={{ color: '#a78bfa' }}>Our Blog</span>
          </h6>

          <h1
            className="text-5xl lg:text-7xl font-bold leading-tight tracking-wide mb-6"
            style={{ fontFamily: 'Playfair Display, serif', backgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, #4a5abb, #8693e3, #546aec)' }}
          >
            Latest Insights & Trends
          </h1>

          <p 
            className="text-lg lg:text-xl font-light max-w-3xl mx-auto mb-10"
            style={{ color: '#d1d5db' }}
          >
            Stay informed with expert opinions, industry trends, and insightful content to help you navigate the latest updates.
          </p>

          {/* Subscription Form */}
          <div className="mt-10 flex justify-center">
            <form 
              className="flex items-center rounded-xl shadow-lg overflow-hidden max-w-lg w-full"
              style={{ backgroundColor: 'white', padding: '10px', borderRadius: '30px' }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 text-gray-700 border-none focus:outline-none focus:ring-2"
                style={{ borderRadius: '12px', fontSize: '16px' }}
                required
              />
             <button
  type="submit"
  className="px-8 py-4 font-medium text-lg transition-all"
  style={{ 
    backgroundColor: '#4a5abb', 
    color: 'white', 
    borderRadius: '20px', 
    boxShadow: '0px 4px 15px rgba(74, 90, 187, 0.5)', 
    transform: 'scale(1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  }}
  onMouseEnter={(e) => {
    const target = e.currentTarget as HTMLButtonElement; // ✅ Explicitly cast target
    target.style.transform = 'scale(1.1)';
    target.style.boxShadow = '0px 6px 20px rgba(74, 90, 187, 0.7)';
  }}
  onMouseLeave={(e) => {
    const target = e.currentTarget as HTMLButtonElement; // ✅ Explicitly cast target
    target.style.transform = 'scale(1)';
    target.style.boxShadow = '0px 4px 15px rgba(74, 90, 187, 0.5)';
  }}
>
  Subscribe
</button>

            </form>
          </div>
        </div>
      </div>


      {/* Main Blog Content */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-8">
        <BlogList />
      </div>

      {/* Footer */}
      <div className="footer-style-two theme-basic-footer mt-6" style={{ backgroundColor: '#f7f8fb' }}>
        <div className="top-footer position-relative">
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <FooterMenu />
              </div>
            </div>
          </div>
        </div>
        <CopyrightFooter2 />x
      </div>
    </>
  );
};

export default GridWithSidebar;