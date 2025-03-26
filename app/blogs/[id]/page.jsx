"use client";
import { assets } from "@/Assets/assets";
import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
// import parse from "html-react-parser";
const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [tocHeadings, setTocHeadings] = useState([]);


  const fetchBlogData = useCallback(async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });
    setData(response.data);
    console.log("📄 Blog Description HTML:", response.data.description);

  }, [params.id]);

  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);
  
  useEffect(() => {
    if (data?.description) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data.description;
  
      const headings = Array.from(tempDiv.querySelectorAll("h2, h3")).map((el, i) => {
        const id = `section-${i}`;
        el.setAttribute("id", id);
        return {
          id,
          text: el.innerText || el.textContent || `Section ${i + 1}`,
        };
      });
  
      // ✅ Set only headings (don’t call setData here again)
      setTocHeadings(headings);
    }
  }, [data?.description]);
  
  
  return data ? (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section (Predis-style layout) */}
      <div className="bg-gray-100 py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto mb-30 mt-150 bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
          {/* Left: Title, Author, Date */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {data.title}
            </h1>

            <div className="flex items-center gap-4">
              <Image
                src={data.authorImg}
                width={48}
                height={48}
                alt="Author"
                className="rounded-full object-cover border"
              />
              <div className="text-sm text-gray-700">
                <p className="font-semibold">Aayushi Shrivastava</p>
                <p className="text-gray-500">
                  {new Date(data.date).toDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Featured Image */}
          <div className="w-full">
            <Image
              src={data.image}
              alt="Blog"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-auto shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Blog Content (unchanged) */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

    {/* Table of Contents (Left Column) */}
    <aside className="md:col-span-1 bg-gray-50 p-4 rounded-lg shadow-sm h-fit sticky top-28">
      <h4 className="text-md font-semibold text-gray-800 mb-3">Table of Contents</h4>
      <ul className="text-sm space-y-2 text-blue-600">
  {tocHeadings.map((item, i) => (
    <li key={i}>
      <a href={`#${item.id}`} className="hover:underline">{item.text}</a>
    </li>
  ))}
</ul>

    </aside>

    {/* Blog Content (Right Column) */}
    <div className="md:col-span-3 bg-white rounded-lg p-8 shadow">
      <p className="text-center text-gray-600 text-lg font-medium mb-8">
        KOgenie makes your ad in just 5 minutes so you can launch ad campaigns swiftly, helping you get more people to buy your product/service faster.
      </p>

      <div
        className="prose lg:prose-lg max-w-none text-gray-700"
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
</div>

      {/* Footer (unchanged) */}
      <footer className="footer-container">
        <div className="footer-wrapper w-full">
          <div className="inner-wrapper m-auto">
            <div className="row">
              <FooterMenu />
            </div>
          </div>
        </div>

        <style jsx>{`
          .footer-container {
            width: 100vw;
            margin: 0;
            padding: 0;
            background: linear-gradient(to right, #f3f6fc, #e8ecf6);
          }
          .footer-wrapper {
            width: 100%;
            max-width: none;
            padding: 0;
          }
        `}</style>
      </footer>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-xl font-semibold text-gray-600">Loading...</p>
    </div>
  );
};

export default Page;
