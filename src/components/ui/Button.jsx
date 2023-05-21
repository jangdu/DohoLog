import React from "react";

export default function Button({ onClick, text, disabled }) {
  return (
    <button
<<<<<<< HEAD
      className="rounded-b border-white border-4 transition delay-100 bg-white hover:border-b-green-300 duration-300"
=======
      className="rounded-b border-white border-4 transition delay-150 bg-white hover:border-b-green-300 duration-300"
>>>>>>> 948cf4b (init project)
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
