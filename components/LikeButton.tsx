"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="rounded bg-pink-100 px-4 py-2 text-pink-700 hover:bg-pink-200 transition"
    >
      ❤ {likes}
    </button>
  );
}