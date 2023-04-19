import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostCard({
  post,
  post: { category, title, description, date, id },
}) {
  const navigate = useNavigate();
  return (
    <div className="border-b my-4 border-slate-500 overflow-hidden">
      <div className="mt-2 px-2 flex justify-between items-center mb-4">
        <h3
          onClick={() => {
            navigate(`/post/${id}`);
          }}
          className="truncate text-xl font-bold max-w-sm cursor-pointer hover:scale-105"
        >
          {title}
        </h3>
        <p className="mx-2 w-[90px] text-gray-500">{date}</p>
      </div>
      <div>
        <p className="m-2 px-2 py-1 max-w-min text-sm text-black font-semibold rounded-2xl bg-green-300">
          {category}
        </p>
      </div>
      <p className="px-2 mb-4">{`${description}`}</p>
    </div>
  );
}
