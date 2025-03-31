"use client";
import { assets } from "@/Assets/assets";
import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [tocHeadings, setTocHeadings] = useState([]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const fetchBlogData = useCallback(async () => {
    const response = await axios.get("/api/blog", {
      params: { id: params.id },
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
      const headings = Array.from(tempDiv.querySelectorAll("h2, h3")).map(
        (el, i) => {
          const id = `section-${i}`;
          el.setAttribute("id", id);
          return {
            id,
            text: el.innerText || el.textContent || `Section ${i + 1}`,
          };
        }
      );
      setTocHeadings(headings);
    }
  }, [data?.description]);

  if (!hasMounted || !data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      {/* Hero Section */}
      <div className="bg-white py-16 px-4 sm:px-8">
        <div className=" mx-auto  mb-20 bg-white shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl max-w-xl font-extrabold text-gray-900 leading-tight p-8 mt-20 ">
              {data.title}
            </h1>
            <div className="flex items-center gap-4 p-8 ">
              <Image
                src={data.authorImg}
                width={48}
                height={48}
                alt="Author"
                className="rounded-full object-cover border"
              />
              <div className="text-sm text-gray-600">
                <p className="font-semibold">Aayushi Shrivastava</p>
                <p className="text-gray-400">
                  {new Date(data.date).toDateString()}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-8 mt-20">
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

      {/* Blog Layout */}
      <div className="w-full px-4 py-10 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          {/* Sidebar */}
          <aside className="hidden lg:block w-[250px] flex-shrink-0 space-y-6">
            {/* Table of Contents */}
            <div className="bg-white  mt-20 p-6 ">
              <ul className="space-y-3 max-w-sm text-lg font-bold text-gray-900 mb-4">
                <h4
                  style={{ marginLeft: "20px" }}
                  className="text-[20px] font-medium uppercase mb-2  tracking-wide bg-gradient-to-r from-indigo-500 to-indigo-700 text-transparent bg-clip-text"
                >
                  Table of Contents
                </h4>

                {tocHeadings.map((item, i) => (
                  <li key={i} className="border-b p-6 border-black pb-10">
                    <a
                      href={`#${item.id}`}
                      className="block hover:text-indigo-600 transition-colors duration-200 truncate tracking-wide leading-tight text-[20px] font-semibold"
                      title={item.text}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Share Section */}
            <div className="bg-white rounded-xl p-5 shadow-none text-center">
              <p className="text-xl font-bold text-gray-900 mb-3">
                Share this article
              </p>
              <div className="flex justify-center gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://kogenie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={assets.facebook_icon}
                    width={48}
                    alt="Facebook"
                    className="hover:scale-110 transition-transform"
                    style={{
                      filter:
                        "invert(20%) sepia(100%) saturate(600%) hue-rotate(180deg)",
                    }}
                  />
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/intent/tweet?url=https://kogenie.com&text=Check%20out%20this%20amazing%20blog!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={assets.twitter_icon}
                    width={48}
                    alt="Twitter"
                    className="hover:scale-110 transition-transform"
                    style={{
                      filter:
                        "invert(35%) sepia(90%) saturate(700%) hue-rotate(190deg)",
                    }}
                  />
                </a>

                {/* Google Plus (deprecated — use Gmail/share instead) */}
                <a
                  href="mailto:?subject=Check%20this%20out&body=Check%20out%20this%20awesome%20article:%20https://kogenie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={assets.googleplus_icon}
                    width={48}
                    alt="Share via Email"
                    className="hover:scale-110 transition-transform"
                    style={{
                      filter:
                        "invert(32%) sepia(80%) saturate(700%) hue-rotate(340deg)",
                    }}
                  />
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className=" p-8 md:p-12">
              <p className="text-center text-gray-500 text-base font-medium mb-10 italic">
                KOgenie makes your ad in just 5 minutes — so you can launch
                faster and sell better.
              </p>
              <div
                className="prose prose-blue lg:prose-lg max-w-none text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
          </main>
        </div>
      </div>

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
  );
};

export default Page;
