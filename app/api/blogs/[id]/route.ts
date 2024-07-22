import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import blog from '@/app/models/blog';

export const GET = async (request: Request) => {
  try {
    await connectDB();

    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    if (!id) {
      return new NextResponse("Blog ID not provided", { status: 400 });
    }

    const fetchedBlog = await blog.findById(id);

    if (!fetchedBlog) {
      return new NextResponse("Blog not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(fetchedBlog), { status: 200 });
  } catch (error) {
    console.error("Error in fetching blog:", error);
    return new NextResponse("Error in fetching blog", { status: 500 });
  }
};
