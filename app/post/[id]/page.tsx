import { prisma } from "@/prisma/prismaClient";
import Image from "next/image";

export default async function Post({ params }: { params: { id: number } }) {
  const post = await prisma.post.findUnique({
    where: { id: Number(params.id) },
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center w-full">
        <Image
          src={post?.imageUrl || ""}
          alt={post?.title || ""}
          className="rounded-lg mb-4"
          width={600}
          height={600}
        />
        <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
        <p className="text-lg">{post?.body}</p>
      </div>
    </div>
  );
}
