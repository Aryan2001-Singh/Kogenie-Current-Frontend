import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';
import axios from 'axios';
import '../app/blog.css';

const BlogList = () => {
  const [menu, setMenu] = useState('All');
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs || []);
      console.log(response.data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setBlogs([]);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="px-4">
      <div className="flex justify-center gap-4 sm:gap-6 p-2 mt-[-10px] mb-4 flex-wrap">
  {["All", "Technology", "Startup", "Lifestyle"].map((category) => (
    <button
      key={category}
      onClick={() => setMenu(category)}
      className={`
        py-3 px-8 text-lg font-semibold transition duration-300 ease-in-out 
        transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50
        ${
          menu === category
          ? "bg-transparent bg-opacity-20 text-indigo-600 shadow-lg"
        
            : "bg-gray-300 bg-opacity-10 text-gray-900  hover:bg-gray-200 hover:bg-opacity-20"
        }
      `}
      style={{
        backdropFilter: "blur(12px)", 
        WebkitBackdropFilter: "blur(12px)", 
        transition: "all 0.3s ease-in-out",
        boxShadow:
          menu === category ? "0px 0px 12px rgba(79, 70, 229, 0.5)" : "none",
      }}
    >
      {category}
    </button>
  ))}
</div>


      {/* Blog Items */}
      <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px', 
    width: '100vw', 
    maxWidth: '100%', 
    padding: '0 20px', 
    justifyContent: 'center', 
    alignItems: 'start',
  }}
>
{blogs.length > 0 ? (
  blogs
    .filter((item) => (menu === 'All' ? true : item.category === menu))
    .map((item, index) => {
      const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
        weekday: "short", 
        month: "short",   
        day: "2-digit",   
        year: "numeric",  
      });

      return (
        <BlogItem
          key={index}
          id={item._id}
          image={item.image}
          title={item.title}
          category={item.category}
          readTime={item.readTime}
          date={formattedDate} 
        />
      );
    })
  ) : (
    <p
      style={{
        gridColumn: 'span 3',
        textAlign: 'center',
        color: 'gray',
        fontSize: '18px',
      }}
    >
      No blogs available in this category.
    </p>
  )}
</div>
</div>
);
};

export default BlogList;
