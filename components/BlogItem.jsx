import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogItem = ({ title, category, image, id, date }) => {
  const hasImage = !!image && image !== "undefined";

  return (
    <Link
      href={`/blogs/${id}`}
      className="group flex flex-col rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
    >
      {/* ✅ Image or Fallback */}
      <div className="relative w-full h-60 bg-gray-100">
        {hasImage ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm font-medium">
            No Image Available
          </div>
        )}

        {/* ✅ Category Badge */}
        {category && (
          <span className="absolute z-10 top-3 left-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
            {category}
          </span>
        )}
      </div>

      {/* ✅ Text Content */}
      <div className="mt-3 px-1 sm:px-0">
        {/* Date */}
        <div className="flex items-center gap-1 text-gray-600 text-sm mt-2">
          <FaRegCalendarAlt className="text-indigo-500" />
          <span>
            {" "}
            <span className="text-grey-600 font-medium">{date}</span>
          </span>
        </div>
        {/* Title */}
        <h3
          style={{ fontFamily: "Poppins" }}
          className="text-lg sm:text-xl font-semibold text-gray-800 leading-snug"
        >
          {title}
        </h3>

        {/* ✅ Read More (Always visible) */}
        <div className="mt-3">
          <span className="text-indigo-600 text-xl font-medium hover:underline inline-flex items-center gap-1">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
