"use client"; // Add this directive to make it a Client Component

import React from "react";
 import Image from "next/image";
import chainLogo1 from "../../../public/chain1.png"
import chainLogo2 from "../../../public/chain2.png"
import chainLogo3 from "../../../public/chain3.png"
import chainLogo4 from "../../../public/chain4.png"
import chainLogo5 from "../../../public/chain5.png"
import chainLogo6 from "../../../public/chain6.png"
import chainLogo7 from "../../../public/chain7.png"
import chainLogo8 from "../../../public/chain8.png"
import banner from "../../../public/banner.jpg";

 import AiButton from "../aiButton";
function SectionTwo() {
  const chainLogos = [
    chainLogo1,
    chainLogo2,
    chainLogo3,
    chainLogo4,
    chainLogo5,
    chainLogo6,
    chainLogo7,
    chainLogo8,
     
  ];
  const repeatedLogos = [...chainLogos, ...chainLogos, ...chainLogos]; // Repeats the images 3 times

  return (
    <div className="      ">
      <div className="mx-auto  ">
      <div className="flex justify-center">
          <div className="border-glow  rounded-3xl mb-5">
            <Image
              width={1000}
              height={1000}
              src={banner}
              alt="abc"
              className="mx-auto rounded-3xl   "
            />
          </div>
        </div>
        <p className="text-vlitegrey text-center">
          Trusted by 1000+ companies{" "}
          <a className="text-white">across the world.</a>
        </p>

        <div className="  overflow-hidden  ">
        <div className="flex py-12 animate-marquee whitespace-nowrap gap-20 ">
        {repeatedLogos.map((logo, index) => (
          <Image key={index} src={logo} alt={`chain-logo-${index}`} width={50} height={50} className="transition-transform transform hover:scale-105"/>
        ))}
      </div>
        </div>
        <div className="mx-auto text-center mt-5 mb-10 ">
          <AiButton title="Unleash the Power of AI"/>
          <h2 className="text-4xl text-center font-bold mt-5 mb-5">
            The future of AI.
          </h2>
          <p className="text-vGray text-md text-center mx-auto">
            Glide gives you the powers of a developer and a code — for designer
            to
            <br /> create remarkable tools that solve your most challenging
            business
            <br />
            problems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
