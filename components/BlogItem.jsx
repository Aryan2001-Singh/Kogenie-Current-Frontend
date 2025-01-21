// import { assets } from '@/Assets/assets';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const BlogItem = ({ title, description, category, image, id }) => {
//   return (
//     <div
//       style={{
//         borderRadius: '10px',
//         overflow: 'hidden',
//         width: '100%',
//         height: '300px', // Ensuring consistent container height
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.3), 0 12px 30px 0 rgba(0, 0, 0, 0.25)',
//         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//       }}
//       className="w-[350px] h-[500px] bg-gradient-to-br from-gray-100 to-gray-300  transition-all hover:shadow-[-5px_5px_0px_#000000] hover:scale-105 hover:border-black flex flex-col items-center justify-between"
//     >
//       <Link href={`/blogs/${id}`} className="w-full">
//         <div className="flex justify-center items-center h-[300px] ">
//           <Image
//             src={image}
//             alt=""
//             width={720}
//             height={1080}
//             className="object-cover max-h-full max-w-full"
//           />
//         </div>
//       </Link>
//       <div className="p-3 flex flex-col items-center text-center"
//         style={{
//           backgroundColor: '#E8EAF9',
//           boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.3), 0 12px 30px 0 rgba(0, 0, 0, 0.25)',

//         }}>
//         <p className="inline-block bg-black text-white text-xs px-2 py-1">{category}</p>
//         <h5 className="mt-2 text-sm font-medium tracking-tight text-gray-900">{title}</h5>
//         <p
//           style={{ fontSize: '13px' }}
//           className="mt-1 text-xs tracking-tight text-gray-700"
//           dangerouslySetInnerHTML={{ __html: description.slice(0, 60) }} // Shortened description  
//         ></p>
//         {/* <Link
//           href={`/blogs/${id}`}
//           className="inline-flex items-center mt-2 text-sm md:text-base font-semibold 
//            text-gray-900 bg-[#cfb4a5] hover:bg-[#d4b29d] text-center py-2 px-4
//             rounded-lg hover:text-red-500 transition-all duration-300 ease-in-out focus:
//             outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
//           Read More
//           <Image src={assets.arrow} className="ml-2" alt="" width={12} height={12} />
//         </Link> */}
//         <Link
//           href={`/blogs/${id}`}
//           style={{
//             display: 'inline-flex',
//             alignItems: 'center',
//             fontSize: '14px',
//             fontWeight: '600',
//             color: '#fff',
//             backgroundColor: '#cfb4a5',
//             padding: '10px 20px',
//             borderRadius: '20px',
//             textDecoration: 'none',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//             transition: 'all 0.3s ease',
//           }}
//           className="hover:bg-[#d97706] hover:text-white"
//         >
//           <span className="relative z-10">Read More</span>
//           {/* <Image src={assets.arrow} className="ml-2 relative z-10" alt="" width={12} height={12} /> */}

//           {/* Background Gradient Animation */}
//           <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//           {/* Hover Text Underline Animation */}
//           <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d97706] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//         </Link>

//       </div>
//     </div>
//   );
// };


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div
      style={{
        borderRadius: '10px',
        overflow: 'hidden',
        width: '300px', // Card width
        height: '350px', // Card height
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column', // Ensures proper stacking of elements
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      className="hover:scale-105 hover:shadow-lg"
    >
      {/* Image Section */}
      <Link href={`/blogs/${id}`} className="relative w-full">
        <div
          style={{
            height: '200px', // Image container height
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative', // Enables positioning for the category button
            overflow: 'hidden', // Ensures blur effect doesn't exceed the bounds
          }}
        >
          {/* Blurred Image */}
          <Image 
            src={image}
            alt=""
            width={720}
            height={1080}
            className="w-full h-full object-cover transition-all 
            duration-500 ease-in-out group-hover:blur-0 
            group-hover:scale-100 blur-md scale-110"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensures the image covers the container
              filter: 'blur(0px)', // Adds blur to the image
              transform: 'scale(1.1)', // Slightly enlarges the image for better blur
             
            }}></Image>

          {/* Category Button */}
          <p
            style={{
              position: 'absolute', // Places the button on the image
              top: '10px', // Adjusts vertical position
              left: '10px', // Adjusts horizontal position
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
          padding: '10px',
          // backgroundColor: '#ADB7F4',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'space-between',
          height: '200px', // Adjusted content height
        }}
      >
        {/* Title */}
        <h5
          style={{
            fontSize: '14px', // Reduced font size
            fontWeight: 'bold',
            color: '#546aec',
            textAlign: 'center',
          }}
        >
          {title}
        </h5>

        {/* Description */}
        <p
          style={{
            fontSize: '12px',
            color: '#555',
            textAlign: 'center',
          }}
          dangerouslySetInnerHTML={{
            __html: description.slice(0, 60) + '...', // Shortened description
          }}
        ></p>

        {/* Read More Button */}
        <Link
          href={`/blogs/${id}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: '600',
            color: '#fff',
            backgroundColor: '#4a5abb',
            padding: '8px 16px',
            borderRadius: '15px',
            textDecoration: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            alignSelf: 'center', // Centers the button horizontally
            margin:"15px"
          }}
          className="hover:bg-[#d97706] hover:text-white"
        >
          <span>Read More</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;

