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
<<<<<<< HEAD
      <div className="flex flex-col max-w-4xl mx-auto">
=======
      <div className="flex flex-col p-6 max-w-4xl mx-auto">
>>>>>>> 948cf4b (init project)
        {isLoading && <LoadingUi />}
        {error && <p>{error}</p>}
        <Categories
          categories={[ALL_POSTS, ...categories]}
          onClick={(selected) => setSelected(selected)}
          selected={selected}
        />
        <PostGrid posts={posts} selected={selected} />

<<<<<<< HEAD
        <div className="fixed bottom-8 right-12 md:right-28 text-4xl md:text-5xl rounded-full bg-white transition delay-75 duration-300 cursor-pointer text-green-300 hover:text-green-500">
=======
        <div className="fixed bottom-0 right-12 md:right-28 h-16 text-4xl cursor-pointer hover:scale-105">
>>>>>>> 948cf4b (init project)
          <FaArrowAltCircleUp onClick={window.scrollTo(0, 0)} />
        </div>
      </div>
    )
  );
}
