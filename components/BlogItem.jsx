import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogItem = ({ title,category, image, id, date, readTime }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105 flex flex-col justify-between">
      {/* ✅ Image Section */}
      <Link href={`/blogs/${id}`} className="block relative w-full h-60 rounded-lg overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          width={720} 
          height={500} 
          className="w-full h-full object-cover rounded-lg"
        />
        {/* ✅ Category Badge */}
        <span className="absolute top-3 left-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
          {category}
        </span>
      </Link>

      {/* ✅ Blog Title */}
      <h3 className="text-xl font-semibold text-gray-800 text-center mt-4 min-h-[60px]">
        {title}
      </h3>

      {/* ✅ Read Time & Date */}
      <div className="flex items-center justify-center gap-3 text-gray-600 text-sm mt-2">
        <p>⏳ {readTime} min read</p>
        <span className="flex items-center gap-1">
          <FaRegCalendarAlt className="text-indigo-500" />
          <span>Published on: <span className="text-indigo-600 font-medium">{date}</span></span>
        </span>
      </div>

      {/* ✅ Read More Button */}
      <Link href={`/blogs/${id}`} className="mt-4">
        <button className=" text-white py-2 px-4 rounded-md w-full hover:bg-indigo-500 transition-all">
          Read More →
        </button>
      </Link>
    </div>
  );
};

export default BlogItem;
