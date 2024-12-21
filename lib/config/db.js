import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://singharyan082001:3NU8yLS6ZHtRAqXV@cluster0.75h5d.mongodb.net/blog-app');
    console.log("DB Connected");
}