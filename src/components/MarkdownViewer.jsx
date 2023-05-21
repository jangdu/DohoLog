import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

<<<<<<< HEAD
=======
const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

# aaa

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

>>>>>>> 948cf4b (init project)
export default function MarkdownViewer({ content }) {
  return (
    <ReactMarkdown
      children={content}
      className="prose max-w-none my-4 text-left"
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...props}
              style={vscDarkPlus}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        //   // img: (image) => (
        //   //   <Image
        //   //     className="w-full max-h-60 object-cover"
        //   //     src={image.src || ""}
        //   //     alt={image.alt || ""}
        //   //     width={500}
        //   //     height={350}
        //   //   />
        //   // ),
      }}
    ></ReactMarkdown>
  );
}
