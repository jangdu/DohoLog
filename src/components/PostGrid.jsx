import React from "react";
import PostCard from "./PostCard";

const ALL_POSTS = "All_Posts";

export default function PostGrid({ posts, selected }) {
  console.log(selected);

  const filteredPosts =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section>
      <ul className="flex flex-col w-full mx-auto gap-4 p-4">
        {filteredPosts &&
          filteredPosts.map((post) => (
            <li key={post.id} className="w-">
              <PostCard post={post} />
            </li>
          ))}
      </ul>
    </section>
  );
}
