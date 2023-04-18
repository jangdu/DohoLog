import React from "react";

export default function Button({ onClick, text }) {
  return (
    <button
      className=" px-2 py-2 rounded-lg hover:scale-105 hover:bg-slate-100"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
