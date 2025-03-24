import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogItem = ({ title, category, image, id, date }) => {
  return (
    <Link
      href={`/blogs/${id}`}
      className="group bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105 flex flex-col justify-between relative"
    >
      {/* ✅ Image Section */}
      <div className="relative w-full h-60 rounded-lg overflow-hidden">
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
      </div>

      {/* ✅ Blog Title */}
      <h3 className="text-xl font-semibold text-gray-800 text-center mt-4 min-h-[60px]">
        {title}
      </h3>

      {/* ✅ Publish Date */}
      <div className="flex items-center justify-center gap-1 text-gray-600 text-sm mt-2">
        <FaRegCalendarAlt className="text-indigo-500" />
        <span>Published on: <span className="text-indigo-600 font-medium">{date}</span></span>
      </div>

      {/* ✅ Read More Button (Only Visible on Hover) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[90%]">
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-md w-full hover:bg-indigo-500 transition-all">
          Read More →
        </button>
      </div>
    </Link>
  );
};

export default BlogItem;
