import { prisma } from "@/prisma/prismaClient";
import { revalidatePath } from "next/cache";

export default function AddPost() {
  async function addPost(data: FormData) {
    "use server";

    const { id: postId } = await prisma.post.create({
      data: {
        title: data.get("title") as string,
        body: data.get("body") as string,
        imageUrl: data.get("imageUrl") as string,
      },
    });

    revalidatePath(`/`);
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md bg-white p-8 m-4 rounded-lg shadow-xl">
        <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
          Create New Post
        </h1>
        <form action={addPost}>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="title"
              className="mb-2 font-bold text-lg text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              className="border py-2 px-3 text-grey-800"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="body"
              className="mb-2 font-bold text-lg text-gray-700"
            >
              Body
            </label>
            <textarea name="body" className="border py-2 px-3 text-grey-800" />
          </div>
          <div className="flex flex-col mb-6">
            <label
              htmlFor="imageUrl"
              className="mb-2 font-bold text-lg text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              className="border py-2 px-3 text-grey-800"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}
