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
          className="truncate text-xl font-bold max-w-md cursor-pointer border-white border-4 transition delay-150 bg-white hover:border-b-green-300 duration-300"
        >
          {title}
        </h3>
      </div>
      <div>
        <p className="m-2 px-2 py-1 max-w-min text-sm text-black font-semibold rounded-2xl bg-green-300">
          {category}
        </p>
      </div>
      <p className="px-2">{`${description}`}</p>
      <p className="mx-2 py-6 w-[90px] text-gray-500">{date}</p>
    </div>
  );
}
