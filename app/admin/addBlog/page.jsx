"use client";
import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import dynamic from 'next/dynamic';

// Dynamically load BlogEditorWithPreview to avoid SSR issues
const BlogEditorWithPreview = dynamic(() => import('@/components/blogEditor/BlogEditorWithPreview'), { ssr: false });

const Page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Aayushi Shrivastava",
    authorImg: "/author_img.png",
    date: new Date().toISOString().split('T')[0]
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(data).forEach(([key, val]) => formData.append(key, val));
    formData.append('image', image);

    const response = await axios.post('/api/blog', formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Aayushi Shrivastava",
        authorImg: "/author_img.png",
        date: new Date().toISOString().split('T')[0]
      });
    } else {
      toast.error("Error");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl">Upload thumbnail</p>
      <label htmlFor="image">
        <Image
          className="mt-4"
          src={!image ? assets.upload_area : URL.createObjectURL(image)}
          width={140}
          height={70}
          alt=""
        />
      </label>
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        id="image"
        hidden
        required
      />

      <p className="text-xl mt-4">Blog Title</p>
      <input
        name="title"
        onChange={onChangeHandler}
        value={data.title}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        type="text"
        placeholder="Type here"
        required
      />

      <p className="text-xl mt-4 mb-2">Blog Description</p>

      {/* 📝 Editor with Preview */}
      <BlogEditorWithPreview
        value={data.description}
        onChange={(val) => setData((prev) => ({ ...prev, description: val }))}
      />

      <p className="text-xl mt-6">Blog Category</p>
      <select
        name="category"
        onChange={onChangeHandler}
        value={data.category}
        className="w-40 mt-4 px-4 py-3 border text-gray-500"
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>

      <p className="text-xl mt-4">Publication Date</p>
      <input
        name="date"
        type="date"
        value={data.date}
        onChange={onChangeHandler}
        className="w-40 mt-4 px-4 py-3 border text-gray-500"
        required
      />

      <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Page;
