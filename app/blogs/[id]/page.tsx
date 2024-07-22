"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch blog');
        }
        const data = await res.json();
        setBlog(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (loading) {
    return <p className="text-center mt-12 text-lg">Loading...</p>;
  }

  if (!blog) {
    return <p className="text-center mt-12 text-lg text-red-500">Blog not found</p>;
  }

  return (
    <>
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">{blog.title}</h1>
          <p className="text-xl">By: {blog.author}</p>
        </div>
      </section>
      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4">{blog.title}</h2>
          <p className="text-sm text-gray-500 mb-6">{new Date(blog.date).toLocaleDateString()}</p>
          <div className="prose max-w-none mb-8">{blog.content}</div>
          <div className="text-center">
            <Link href="/blogs">
              <p className="text-blue-500 hover:underline text-lg">← Back to Blog</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
