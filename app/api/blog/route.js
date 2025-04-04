// import { ConnectDB } from "@/lib/config/db";
// import BlogModel from "@/lib/models/BlogModel";
// import { NextResponse } from "next/server"; 
// import { writeFile } from 'fs/promises';
// import fs from 'fs'; 

//  const LoadDB = async () => {
//    await ConnectDB();
//  }
//  LoadDB();


// // // API Endpoint to get all blogs
// // export async function GET(request) {

//   const blogId = request.nextUrl.searchParams.get("id");
//   if (blogId) {
//     const blog = await BlogModel.findById(blogId);
//     return NextResponse.json(blog);
//   }
//   else {
//     const blogs = await BlogModel.find({});
//      return NextResponse.json({ blogs })
//   }



// // // API Endpoint For Uploading Blogs
//  export async function POST(request) {

//   const formData = await request.formData();
//   const timestamp = Date.now();

//   const image = formData.get('image');
//   const imageByteData = await image.arrayBuffer();
//   const buffer = Buffer.from(imageByteData);
//   const path = `./public/${timestamp}_${image.name}`;
//   await writeFile(path, buffer);
//   const imgUrl = `/${timestamp}_${image.name}`;

//   const blogData = {
//     title: `${formData.get('title')}`,
//     description: `${formData.get('description')}`,
//     category: `${formData.get('category')}`,
//     author: `${formData.get('author')}`,
//     image: `${imgUrl}`,
//     authorImg: `${formData.get('authorImg')}`
//   }

//    await BlogModel.create(blogData);
//   console.log("Blog Saved");

//   return NextResponse.json({ success: true, msg: "Blog Added" })
// }

// // Creating API Endpoint to delete Blog

// export async function DELETE(request) {
//    const id = await request.nextUrl.searchParams.get('id');
//   const blog = await BlogModel.findById(id);
//   fs.unlink(`./public${blog.image}`, () => { });
//    await BlogModel.findByIdAndDelete(id);
//    return NextResponse.json({ msg: "Blog Deleted" });
//  }

import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import fs from "fs";

// Initialize the database connection
const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

// API Endpoint to get all blogs
export async function GET(request) {
  try {
    const blogId = request.nextUrl.searchParams.get("id");

    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      return NextResponse.json(blog);
    } else {
      const blogs = await BlogModel.find({});
      return NextResponse.json({ blogs });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// API Endpoint for uploading blogs
export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    const blogData = {
      title: `${formData.get("title")}`,
      description: `${formData.get("description")}`,
      category: `${formData.get("category")}`,
      author: `${formData.get("author")}`,
      image: `${imgUrl}`,
      authorImg: `${formData.get("authorImg")}`,
    };

    await BlogModel.create(blogData);
    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// API Endpoint to delete a blog
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const blog = await BlogModel.findById(id);

    if (blog) {
      const imagePath = `./public${blog.image}`;
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }

      await BlogModel.findByIdAndDelete(id);
      return NextResponse.json({ msg: "Blog Deleted" });
    } else {
      return NextResponse.json({ msg: "Blog not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("DELETE error:", error); // Debug log
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


