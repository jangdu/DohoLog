import React, { useState } from "react";
import Button from "../components/ui/Button";
import { addNewPost } from "../api/firebase";
import MarkdownViewer from "../components/MarkdownViewer.jsx";

export default function NewPost() {
  const [newPost, setNewPost] = useState({});
  const [isUploading, setIsUpLoading] = useState(false);

  const handleResizeHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
    handleChange(e);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((post) => ({ ...post, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpLoading(true);
    await setNewPost({ ...newPost });
    await addNewPost(newPost);
    setIsUpLoading(false);
  };
  return (
    <section className="flex w-full mx-auto">
      {isUploading && <p>업로드중 ... </p>}
      <div className="p-4">
        <form className="flex flex-col w-[80vw] max-w-xl mx-auto" onSubmit={handleSubmit}>
          <input type="text" placeholder="title" name="title" value={newPost.title ?? ""} required onChange={handleChange} />
          <input type="text" placeholder="description" name="description" value={newPost.description ?? ""} required onChange={handleChange} />
          <input type="text" placeholder="category" name="category" value={newPost.category ?? ""} required onChange={handleChange} />
          <textarea rows={1} className="p-4 my-4 resize-none focus:border-none focus:outline-none" placeholder="내용을 입력하세요" name="content" value={newPost.content ?? ""} onChange={handleResizeHeight} required />
          <div className="fixed font-bold bottom-0 right-28 h-16 ">
            <Button text={isUploading ? "uploading..." : "저장"} disabled={isUploading} />
          </div>
        </form>
      </div>
      <div className="mx-2 mt-40 p-4">
        <MarkdownViewer content={`${newPost.content}`} />
      </div>
    </section>
  );
}
