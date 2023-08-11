import { prisma } from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  console.log("hit", params.id);
  const result = await prisma.post.delete({
    where: {
      id: Number(params.id),
    },
  });

  console.log(result);

  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
