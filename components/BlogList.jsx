import React, { useEffect, useState } from 'react';  
import BlogItem from './BlogItem';  
import axios from 'axios';  

const BlogList = () => {  
  const [menu, setMenu] = useState('All');  
  const [blogs, setBlogs] = useState([]);  

  const fetchBlogs = async () => {  
    const response = await axios.get('/api/blog');  
    setBlogs(response.data.blogs);  
    console.log(response.data.blogs);  
  };  

  useEffect(() => {  
    fetchBlogs();  
  }, []);  

  return (  
    <div className="px-4">  
      {/* Category Buttons */}  
      <div className="flex justify-center gap-4 my-10 flex-wrap">  
        {['All', 'Technology', 'Startup', 'Lifestyle'].map((category) => (  
          <button  
            key={category}  
            onClick={() => setMenu(category)}  
            className={`py-2 px-6 rounded-md transition-all duration-300 ${  
              menu === category  
                ? 'bg-black text-white'  
                : 'bg-gray-200 text-black hover:bg-gray-300'  
            }`}  
          >  
            {category}  
          </button>  
        ))}  
      </div>  

      {/* Blog Items */}  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 mb-16 mt-10 xl:mx-24">  
        {blogs.filter((item) => (menu === 'All' ? true : item.category === menu)).length > 0 ? (  
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
          <p className="text-gray-500 text-lg">No blogs available in this category.</p>  
        )}  
      </div>  
    </div>  
  );  
};  

export default BlogList;  