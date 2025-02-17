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
      {/* Category Buttons with Further Reduced Top Margin */}
      <div className="flex justify-center gap-8 p-2 mt-[-10px] mb-2 flex-wrap">
        {['All', 'Technology', 'Startup', 'Lifestyle'].map((category) => (
          <button
            key={category}
            onClick={() => setMenu(category)}
            className={`
              py-3 px-14 rounded-lg text-lg font-semibold transition duration-300 ease-in-out 
              transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50
              ${menu === category ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-200 text-black hover:bg-gray-300'}
            `}
            style={{
              borderRadius: '8px',
              padding: '12px 32px',
              backgroundColor: menu === category ? '#4F46E5' : '#E5E7EB',
              color: menu === category ? '#FFFFFF' : '#000000',
              boxShadow: menu === category ? '0px 0px 12px rgba(79, 70, 229, 0.8)' : 'none',
              transition: 'all 0.3s ease-in-out',
              margin: '0 10px',
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
    gridTemplateColumns: 'repeat(3, 1fr)', // Forces 3 equal columns
    gap: '20px', // Space between blogs
    width: '100vw', // Takes full viewport width
    maxWidth: '100%', // Ensures no restrictions
    padding: '0 20px', // Small padding on sides to prevent overflow
    justifyContent: 'center', // Ensures content is centered properly
    alignItems: 'start',
  }}
>
  {blogs.length > 0 ? (
    blogs
      .filter((item) => (menu === 'All' ? true : item.category === menu))
      .map((item, index) => (
        <BlogItem
          key={index}
          id={item._id}
          image={item.image}
          title={item.title}
          description={item.description}
          category={item.category}
        />
      ))
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
