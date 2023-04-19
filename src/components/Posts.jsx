import React, { useState } from "react";
import usePost from "../hooks/usePosts";

import PostGrid from "./PostGrid";
import Categories from "./Categories";

const ALL_POSTS = "All Posts";

export default function Posts() {
  const [selected, setSelected] = useState(ALL_POSTS);

  const {
    postsQuery: { isLoading, error, data: posts },
  } = usePost();

  //   const data = getAllPosts();
  //console.log(posts);
  const categories = posts && [...new Set(posts.map((post) => post.category))];
  //console.log(categories);

  //posts && const categories = [...new Set(posts.map((post) => post.category))];
  // console.log(categories);
  return (
    posts && (
      <div className="flex flex-col p-6 max-w-xl mx-auto">
        {isLoading && <p>Loding...</p>}
        {error && <p>{error}</p>}
        <Categories
          categories={[ALL_POSTS, ...categories]}
          onClick={(selected) => setSelected(selected)}
          selected={selected}
        />
        <PostGrid posts={posts} selected={selected} />
      </div>
    )
  );
}
