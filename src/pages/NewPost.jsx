import React, { useRef, useState } from "react";
import Button from "../components/ui/Button";
import { addNewPost } from "../api/firebase";

export default function NewPost() {
  const [newPost, setNewPost] = useState({});
  const [isUploading, setIsUpLoading] = useState(false);
  const [success, setSuccess] = useState();

  const textarea = useRef();

  const handleResizeHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((newPost) => ({ ...newPost, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUpLoading(true);
    addNewPost();
    setIsUpLoading(false);
  };
  return (
    <section className="w-full text-center">
      <form
        className="flex flex-col max-w-xl w-[80vw] mx-auto"
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="title" required />
        <input type="text" placeholder="description" required />
        <input type="text" placeholder="category" required />
        <textarea
          type="text"
          rows={1}
          className="p-4 my-4 resize-none focus:border-none focus:outline-none"
          placeholder="내용을 입력하세요"
          onChange={handleResizeHeight}
          required
        />
        <div className="fixed bottom-0 right-28 h-16 ">
          <button text={"저장"} className="font-bold">
            저장하기
          </button>
        </div>
      </form>
    </section>
  );
}
