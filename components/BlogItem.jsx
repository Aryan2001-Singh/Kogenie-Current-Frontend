import { assets } from '@/Assets/assets';  
import Image from 'next/image';  
import Link from 'next/link';  
import React from 'react';  

const BlogItem = ({ title, description, category, image, id }) => {  
  return (  
    <div  
      style={{  
        borderRadius: '10px',  
        overflow: 'hidden',  
      }}  
      className="w-[350px] h-[500px] bg-gradient-to-br from-gray-100 to-gray-300  transition-all hover:shadow-[-5px_5px_0px_#000000] hover:scale-105 hover:border-black flex flex-col items-center justify-between"  
    >  
      <Link href={`/blogs/${id}`} className="w-full">  
        <div className="flex justify-center items-center h-[300px] ">  
          <Image  
            src={image}  
            alt=""  
            width={720}  
            height={1080}  
            className="object-cover max-h-full max-w-full"  
          />  
        </div>  
      </Link>  
      <div className="p-3 flex flex-col items-center text-center">  
        <p className="inline-block bg-black text-white text-xs px-2 py-1">{category}</p>  
        <h5 className="mt-2 text-sm font-medium tracking-tight text-gray-900">{title}</h5>  
        <p  
          style={{ fontSize: '13px' }}  
          className="mt-1 text-xs tracking-tight text-gray-700"  
          dangerouslySetInnerHTML={{ __html: description.slice(0, 60) }} // Shortened description  
        ></p>  
        <Link  
          href={`/blogs/${id}`}  
          className="inline-flex items-center mt-2 text-xs font-semibold text-center hover:text-red-500 transition-colors"  
          style={{ color: 'blue', fontSize: '1rem' }}  
        >  
          Read More  
          <Image src={assets.arrow} className="ml-1" alt="" width={10} />  
        </Link>  
      </div>  
    </div>  
  );  
};  

export default BlogItem;  