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
        <section className="flex flex-col p-4 w-full max-w-5xl mx-auto">
          <div className="flex items-center mt-4 justify-between">
            <p className="text-lg px-2 rounded-xl bg-green-300 max-w-fit text-slate-800">
              {post.category}
            </p>
            <p className="font-semibold ml-2 text-green-500">{post.date}</p>
          </div>

          <h1 className="text-4xl font-bold my-2">{post.title}</h1>
          <p className="text-xl font-bold">{post.description}</p>
          <div className="w-60 border-2 border-green-300 mt-4 mb-8 self-center" />
          <MarkdownViewer content={post.content} />
          <Comment id={post.id} />
        </section>
      )}
    </div>
  );
}
