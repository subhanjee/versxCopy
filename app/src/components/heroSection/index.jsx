 "use client";

import Lottie from "lottie-react";
import groovyWalkAnimation from "./hero.json";
import React, { useRef } from "react";

function Hero() {
  const form = useRef();

  return ( 
    <div className="p-10">
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden  bg-black rounded-lg">
       {/* Centered Lottie Animation as Background */}
      <div className="absolute inset-0  flex justify-center items-center z-0 opacity-30 pointer-events-none">
        <Lottie
          animationData={groovyWalkAnimation}
          loop
          className="w-full h-full max-w-[800px] max-h-[800px]"
        />
      </div>

      {/* Content on top of Lottie Animation */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-32   text-white">
        {/* Left Section - Heading */}
        <div className="flex justify-center items-center flex-col text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Audit <span className="text-vbgYellow">Service</span> For
          </h1>
        </div>

        {/* Right Section - Content */}
        <div className="flex justify-center items-center flex-col">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">Smart Contract Audit</h2>
            <p className="text-lg mt-2">
              Complete our quick form for a prompt response.
            </p>
          </div>
        </div>
      </div>
     </div>
     </div>
  );
}

export default Hero;
