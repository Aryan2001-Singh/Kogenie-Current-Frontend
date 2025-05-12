"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import BlogEditor to avoid SSR issues
const BlogEditor = dynamic(() => import("./BlogEditor"), { ssr: false });

const BlogEditorWithPreview = ({ value, onChange }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* ✏️ Editor */}
      <div className="w-full lg:w-1/2">
        <BlogEditor value={value} onChange={onChange} />
      </div>

      {/* 👁 Live Preview */}
      <div className="w-full lg:w-1/2 bg-white border shadow-sm p-4 rounded">
        <h2 className="text-lg font-semibold mb-3 text-gray-800">Live Preview</h2>
        <article className="prose sm:prose-lg lg:prose-xl max-w-none text-gray-900">
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </article>
      </div>
    </div>
  );
};

export default BlogEditorWithPreview;
