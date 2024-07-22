import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import blog from "@/app/models/blog";

export const GET = async() =>{
  try{
    await connectDB();
    const blogs = await blog.find();

    return new NextResponse(JSON.stringify(blogs), {status: 200})

  }
  catch(error){
    return new NextResponse("error in fetching blogs" + error,{status: 500})
  }
}