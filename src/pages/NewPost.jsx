import React, { useState } from "react";
import Button from "../components/ui/Button";
import { addNewPost } from "../api/firebase";
import MarkdownViewer from "../components/MarkdownViewer.jsx";

export default function NewPost() {
  const [newPost, setNewPost] = useState({});
  const [isUploading, setIsUpLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [textarea, setTextarea] = useState(``);

  const handleResizeHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
    setTextarea(e.target.value);
    // console.log(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((post) => ({ ...post, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpLoading(true);
    await setNewPost({ ...newPost, content: `${textarea}` });
    console.log(newPost);
    await addNewPost(newPost);
    setIsUpLoading(false);
  };
  return (
    <section className="flex w-full text-center">
      <div className="p-4">
        <form
          className="flex flex-col max-w-xl w-[80vw] mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="title"
            name="title"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="category"
            name="category"
            required
            onChange={handleChange}
          />
          <textarea
            rows={1}
            className="p-4 my-4 resize-none focus:border-none focus:outline-none"
            placeholder="내용을 입력하세요"
            name="content"
            onChange={handleResizeHeight}
            required
          />
          <div className="fixed bottom-0 right-28 h-16 ">
            <button text={"저장"} className="font-bold">
              저장하기
            </button>
          </div>
        </form>
      </div>
      <div className="mx-2 mt-40 p-4">
        <MarkdownViewer content={`${textarea}`} />
      </div>
    </section>
  );
}
