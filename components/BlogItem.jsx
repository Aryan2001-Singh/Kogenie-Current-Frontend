import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa'; // ✅ Import Calendar Icon

const BlogItem = ({ title, description, category, image, id, date }) => {
  return (
    <div
      style={{
       
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%',
        height: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Image Section */}
      <Link href={`/blogs/${id}`} style={{ width: '100%' }}>
        <div
          style={{
            height: '220px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <Image 
            src={image}
            alt={title}
            width={720}
            height={1080}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'all 0.3s ease-in-out',
            }}
          />

          {/* Category Badge */}
          <p
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              background: 'transparent',
              color: '#fff',
              fontSize: '12px',
              padding: '5px 10px',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            {category}
          </p>
        </div>
      </Link>

      {/* Content Section */}
      <div
        style={{
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          height: '180px',
          justifyContent: 'space-between',
        }}
      >
        <h5
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {title}
        </h5>

        {/* Blog Description */}
        <p
          style={{
            fontSize: "16px", 
            color: "#333", 
            textAlign: "justify", 
            margin: "8px 0",
            fontFamily: "Inter, sans-serif", 
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3, 
            WebkitBoxOrient: "vertical",
            lineHeight: "1.6",
            wordSpacing: "1px", 
            letterSpacing: "0.2px", 
            padding: "0 10px",
          }}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>

        {/* ✅ Publication Date with Calendar Icon */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
          <FaRegCalendarAlt style={{ color: '#4a5abb', fontSize: '14px' }} /> {/* Calendar Icon 📅 */}
          <p
            style={{
              fontSize: '13px',
              fontWeight: '500',
              color: '#000', // "Published on:" in Black
            }}
          >
            Published on: <span style={{ color: '#4a5abb', fontWeight: '600' }}>{date}</span> {/* ✅ Date in Indigo */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
