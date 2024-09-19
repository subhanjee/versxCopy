"use client";  
import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import banner from "../../../public/banner.jpg";
import AiButton from "../aiButton";
import MarketButton from "../marketButton";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../heroSection/hero.json";

function SectionOne( ) {
  const texts = ["Generator", "Chatbot", "Assistant"];
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto p-6 ">
      <div className="bg-black relative w-full h-screen  rounded-2xl min-h-screen p-16">
      <div className="absolute inset-0  flex justify-center items-center z-0 opacity-30 pointer-events-none">
        <Lottie
          animationData={groovyWalkAnimation}
          loop
          className="w-full h-full max-w-[800px] max-h-[800px]"
        />
      </div>
        <div className="relative z-50 grid grid-cols-1  md:grid-cols-2 gap-5   ">
          <div className="flex justify-center items-center flex-col   ">
            <div className="">
            <AiButton title="Unleash the Power of AI"/>
              <h1 className="   ">
                Ultimate AI
              </h1>
              <h1 className="mt-5 mb-5    ">
                {texts[currentText]}
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col   ">
            <div>
              <p className="  text-vGray text-xl ">
                All-in-one platform to generate AI content and start making
                money in minutes.
              </p>
              <MarketButton/>
            </div>
          </div>
        </div>
   
      </div>
    </div>
  );
}

export default SectionOne;
