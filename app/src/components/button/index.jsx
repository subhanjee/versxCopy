"use client"
import React from "react";
// import { twMerge } from "tailwind-merge ";

const variants = [
  "border-sharp-red bg-transparent shadow-[0_0_.6em_#ff1616]",
  "bg-btn-gradient border-white shadow-[.2rem_0_.6rem_black]",
];

function Button({
  as = "button",
  className,
  children,
  styleVariant = 0,
  ...props
}) {
  const Comp = as;

  return (
    <Comp
      className={
        (`border-2 rounded-[0.5em] py-[.5em] xl:py-[0.75em] px-[1.5em] transition-all duration-200 text-[.9em] xl:text-[1em]`,
        variants[styleVariant],
        className)
      }
      {...props}
    >
      {children}
    </Comp>
  );
}

export default Button;