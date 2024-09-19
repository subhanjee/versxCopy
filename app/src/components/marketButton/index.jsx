"use client"
import React from "react";
import { motion } from "framer-motion";

export default function MarketButton() {
  return (
    <div className="flex flex-col lgmd:flex lg:flex-row lg:flex gap-3 mt-7 mb-5">
      <a class="overflow-hidden bg-gradient-to-r from-vbgYellow to-vbgdarkYellow text-black font-semibold rounded-lg w-60 px-10 py-4 hover:shadow-lg hover:shadow-vyellow cursor-pointer">
      <div className="flex   animate-marqueebtn whitespace-nowrap gap-5 ">

          <span className="text-base  ">
            Start Making Money
          </span>
          <span className="text-base  ">
            Start Making Money
          </span>
          <span className="text-base  ">
            Start Making Money
          </span>
          <span className="text-base  ">
            Start Making Money
          </span>
        </div>
      </a>{" "}
      <div className="border-glow p-4 ">
        <div className="flex m-auto items-center gap-3 hover:text-vyellow   md:text-base">
          Discover MagicAI
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 hover:ml-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>{" "}
      </div>
    </div>
  );
}
