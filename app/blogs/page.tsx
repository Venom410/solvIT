import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";

interface Blog {
  _id: string;
  title: string;
  author: string;
  date: string;
  content: string;
}

async function getData(): Promise<Blog[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/blogs`, { cache: "no-store" });
  if (!res.ok) return notFound();
  return res.json();
}

const Blogs = async () => {
  const data = await getData();

  return (
    <>
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-lg text-white">Explore our latest articles and insights.</p>
        </div>
      </section>
      <section className="mt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data && data.map((blog: Blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
