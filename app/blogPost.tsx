import React from "react";
import Image from "next/image";
import CloseButton from "./closeButton";

type Post = {
  post: {
    title: string;
    body: string;
    imageUrl: string;
    id: number;
  };
};

const BlogPost = ({ post }: Post) => {
  const { title, body, imageUrl, id } = post;

  return (
    <div className="max-w-lg mx-auto flex p-6 bg-white rounded-lg shadow-md relative">
      <div className="flex-shrink-0">
        <Image
          className="h-48 w-48 object-cover"
          src={imageUrl}
          alt={title}
          height={400}
          width={400}
        />
      </div>
      <div className="ml-6 pt-1">
        <h4 className="text-xl text-gray-900 leading-tight">{title}</h4>
        <p className="text-base text-gray-600 leading-normal mt-2">{body}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <CloseButton id={id} />
      </div>
    </div>
  );
};

export default BlogPost;
