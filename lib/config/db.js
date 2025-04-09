import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://kogeniemarketing:qnBnrPwUdGeyfcuM@cluster0.cbx7b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("DB Connected");
}

//mongodb+srv://singharyan082001:3NU8yLS6ZHtRAqXV@cluster0.75h5d.mongodb.net/blog-app
