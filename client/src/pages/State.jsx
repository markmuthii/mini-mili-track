import { useState } from "react";

export function State() {
  const counterState = useState(0);
  let counter = 0;

  function handleButtonClick(e) {
    counter += 1;
    console.log("Counter: ", counter);
  }

  return (
    <button
      onClick={handleButtonClick}
      className="bg-green-800 text-white px-4 py-2 cursor-pointer"
    >
      Counter: {counterState[0]}
    </button>
  );
}
