import React, { useState } from "react";
import PostCard from "./PostCard";

const ALL_POSTS = "All Posts";

export default function PostGrid({ posts, selected }) {
  console.log(selected);

  const filteredPosts =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <ul className="flex flex-col w-full mx-auto max-w-xl gap-4 p-4">
      {filteredPosts &&
        filteredPosts.map((post) => (
          <li key={post.id} className="w-">
            <PostCard post={post} />
          </li>
        ))}
    </ul>
  );
}
