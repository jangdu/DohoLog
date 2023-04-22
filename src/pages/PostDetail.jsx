import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import MarkdownViewer from "../components/MarkdownViewer";
import LoadingUi from "../components/ui/LoadingUi";
import Comment from "../components/Comment";

export default function PostDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  // console.log(params.id);
  const { isLoading, data: post } = useQuery(["post", params.id], () =>
    getPost(params.id)
  );
  if (isLoading)
    return (
      <div className="w-fit mx-auto">
        <LoadingUi />
      </div>
    );

  return (
    <div>
      {post && (
        <section className="flex flex-col p-4 w-full">
          <img
            className="w-full h-1/5 max-h-[450px]"
            alt={post.title}
            width={760}
            height={420}
            src={
              post.img
                ? post.img
                : "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1682153220/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-04-22_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.46.52_u6wvof.png"
            }
          ></img>
          <div className="w-full max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mt-6">{post.title}</h1>
            <div className="flex items-center mt-4 justify-between">
              <p className="text-lg px-2 my-4 rounded-xl bg-green-300 max-w-fit text-slate-800">
                {post.category}
              </p>
              <p className="font-semibold ml-2 text-green-500">{post.date}</p>
            </div>
            <p className="text-xl font-bold">{post.description}</p>
            <div className="w-60 border-2 border-green-300 mt-4 mb-8 self-center" />
            <MarkdownViewer content={post.content} />
            <Comment id={post.id} />
          </div>
        </section>
      )}
    </div>
  );
}
