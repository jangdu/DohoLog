import React from "react";

export default function Button({ onClick, text }) {
  return (
    <button
      className=" px-2 rounded-b border-white border-4 transition delay-150 bg-white hover:border-b-green-300 duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
