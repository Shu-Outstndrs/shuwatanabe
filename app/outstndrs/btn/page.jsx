"use client";

import { useState } from "react";

export default function Sns() {
  const [likes, setLikes] = useState(true);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <button className="bg-white" onClick={handleClick}>
        aspdjsapod {`${likes}`}
      </button>
    </div>
  );
}
