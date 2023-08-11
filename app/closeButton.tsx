"use client";

import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export default function CloseButton({ id }: { id: number }) {
  const router = useRouter();

  const close = async () => {
    try {
      const result = await fetch(`/api/post/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error);
    }
    router.refresh();
  };

  return (
    <button
      className="absolute top-0 right-0 mt-2 mr-2 bg-white rounded-full p-1 "
      onClick={close}
    >
      X
    </button>
  );
}
