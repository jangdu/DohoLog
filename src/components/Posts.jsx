import React, { useState } from "react";
import usePost from "../hooks/usePosts";

import PostGrid from "./PostGrid";
import Categories from "./Categories";
import { FaArrowAltCircleUp } from "react-icons/fa";
import LoadingUi from "./ui/LoadingUi";

const ALL_POSTS = "All_Posts";

export default function Posts() {
  const [selected, setSelected] = useState(ALL_POSTS);

  const {
    postsQuery: { isLoading, error, data: posts },
  } = usePost();

  if (isLoading) return <LoadingUi />;
  //   const data = getAllPosts();
  //console.log(posts);
  const categories = posts && [...new Set(posts.map((post) => post.category))];
  //console.log(categories);

  //posts && const categories = [...new Set(posts.map((post) => post.category))];
  // console.log(categories);
  return (
    posts && (
      <div className="flex flex-col max-w-4xl mx-auto">
        {isLoading && <LoadingUi />}
        {error && <p>{error}</p>}
        <Categories
          categories={[ALL_POSTS, ...categories]}
          onClick={(selected) => setSelected(selected)}
          selected={selected}
        />
        <PostGrid posts={posts} selected={selected} />

        <div className="fixed bottom-8 right-12 md:right-28 text-4xl md:text-5xl rounded-full bg-white transition delay-75 duration-300 cursor-pointer text-green-300 hover:text-green-500">
          <FaArrowAltCircleUp onClick={window.scrollTo(0, 0)} />
        </div>
      </div>
    )
  );
}
