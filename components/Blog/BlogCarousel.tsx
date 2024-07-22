import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  _id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

const BlogList: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs/top3');
        if (!res.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data: BlogPost[] = await res.json();
        setBlogPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-center mt-12 text-lg">Loading...</p>;
  }

  if (blogPosts.length === 0) {
    return <p className="text-center mt-12 text-lg text-red-500">No blogs found</p>;
  }

  return (
    <div className="container mx-auto py-12 px-4 mt-10">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post._id} className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto transition-transform transform  hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg shadow-blue-gray-500/40">
              <div className="absolute inset-0 flex items-center justify-center bg-opacity-0 hover:bg-opacity-70 transition duration-300">
                <div className="text-center text-lg font-semibold">{post.title}</div>
              </div>
            </div>
            <div className="p-6 mt-10 mb-10 ml-10 mr-10">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                By {post.author}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                 {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link href={`/blogs/${post._id}`}>
                <p className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  Read More
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
