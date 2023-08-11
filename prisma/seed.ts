import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.post.create({
    data: {
      title: "Post Title 1",
      body: "This is some body text for the first blog post.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png",
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: "Post Title 2",
      body: "This is some body text for the second blog post.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSkwqKDUvJLBRbl3Gk28OjVonzoWbcRWI1YLLbkDZC11rq-Jd8hYFQGVvmxauVImYMprE&usqp=CAU",
    },
  });

  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
