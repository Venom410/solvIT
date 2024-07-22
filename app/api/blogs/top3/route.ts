import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/app/models/blog';

export const GET = async () => {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ date: -1 }).limit(3); // Fetch the latest 3 blogs
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return new NextResponse('Error fetching blogs', { status: 500 });
  }
};
