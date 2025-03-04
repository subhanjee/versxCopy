import Link from "next/link";
import React from "react";

export default function AiButton({title}) {
  return (
    <div>
      <Link href="#" className=" inline-flex cursor-pointer   justify-center items-center gap-2 main-btn">
        <svg
          stroke-width="1.5"
          class="size-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path>
          <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
          <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        </svg>
        {title}
      </Link>
    </div>
  );
}
