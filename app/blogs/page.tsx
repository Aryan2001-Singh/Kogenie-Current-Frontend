"use client";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Header from "@/components/home-page/home-6/Header";
// import Image from "next/image";
// import BlogItem from "@/components/BlogItem";
import React from "react";
import BlogList from "@/components/BlogList";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const GridWithSidebar = () => {
  return (
    <>
      <Header />
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <h2 className="main-title fw-500 tx-dark">Latest Blogs</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        {/* <Image
          src="/images/shape/shape_172.svg"
          alt="shape"
          height={280}
          width={360}
          className="lazy-img shapes shape-two"
        /> */}
      </div>

      <div className="text-center my-8 mt-2">
        <h1 className="text-3xl sm:text-5xl font-medium mb-20">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever.
        </p>
        <form
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
          action=""
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none"
            required
          />
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>

      <BlogList />

      {/* Footer */}
      <div className="footer-style-two theme-basic-footer mt-10">
        {" "}
        {/* Added margin-top */}
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
