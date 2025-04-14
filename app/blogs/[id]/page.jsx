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
  const [activeId, setActiveId] = useState("");
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

      const headings = [];
      const elements = Array.from(tempDiv.querySelectorAll("h2, h3"));

      elements.forEach((el, i) => {
        const id = `section-${i}`;
        el.setAttribute("id", id);

        if (el.tagName === "H2") {
          headings.push({
            id,
            text: el.innerText || el.textContent || `Section ${i + 1}`,
            level: 2,
            children: [],
          });
        } else if (el.tagName === "H3" && headings.length > 0) {
          headings[headings.length - 1].children.push({
            id,
            text: el.innerText || el.textContent || `Subsection ${i + 1}`,
            level: 3,
          });
        }
      });

      setTocHeadings(headings);
    }
  }, [data?.description]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -65% 0%" }
    );

    tocHeadings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
      heading.children?.forEach((child) => {
        const childEl = document.getElementById(child.id);
        if (childEl) observer.observe(childEl);
      });
    });

    return () => observer.disconnect();
  }, [tocHeadings]);

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

      <div className="w-full px-4 py-10 bg-[#f9fafb]">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6">
          <aside className="hidden lg:block w-[250px] flex-shrink-0 space-y-6">
            <div className="bg-white mt-20 p-6 ">
              <ul className="space-y-3 max-w-sm text-lg font-bold text-gray-900 mb-4">
                <h4
                  style={{ marginLeft: "20px" }}
                  className="text-[20px] font-medium uppercase mb-2 tracking-wide bg-gradient-to-r from-indigo-500 to-indigo-700 text-transparent bg-clip-text"
                >
                  Table of Contents
                </h4>

                {tocHeadings.map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#${item.id}`}
                      className={`block py-2 px-3 text-[18px] font-semibold border-b border-gray-300 transition-colors duration-200 ${
                        activeId === item.id ? "text-indigo-700 underline" : "text-gray-900"
                      }`}
                    >
                      {item.text}
                    </a>

                    {item.children?.length > 0 && (
                      <ul className="ml-4 mt-1 border-l border-gray-200 pl-3 space-y-1">
                        {item.children.map((sub, j) => (
                          <li key={j}>
                            <a
                              href={`#${sub.id}`}
                              className={`block text-[16px] font-normal text-gray-700 hover:text-indigo-600 ${
                                activeId === sub.id ? "text-indigo-700 underline" : ""
                              }`}
                            >
                              {sub.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-none text-center">
              <p className="text-xl font-bold text-gray-900 mb-3">
                Share this article
              </p>
              <div className="flex justify-center gap-4">
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

          <main className="flex-1">
            <div className=" p-8 md:p-12">
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