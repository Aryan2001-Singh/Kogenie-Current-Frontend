import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogItem = ({ title, description, category, image, id, date }) => {
  return (
    <div
      style={{
        borderRadius: '10px',
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
              backgroundColor: '#df2826',
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
            color: '#546aec',
            textAlign: 'center',
          }}
        >
          {title}
        </h5>

        <p
          style={{
            fontSize: '14px',
            color: '#555',
            textAlign: 'center',
            margin: '8px 0',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>

        {/* Publication Date */}
        <p
          style={{
            fontSize: '12px',
            color: '#777',
            textAlign: 'center',
          }}
        >
          Published on: {date}
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
