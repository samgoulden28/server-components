import Image from "next/image";
import BlogPost from "./blogPost";
import { prisma } from "@/prisma/prismaClient";

export default async function Home() {
  const posts = await prisma.post.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
      <a href="/addPost">
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add a Blog post
        </div>
      </a>
    </main>
  );
}
