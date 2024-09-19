"use client"
import React from 'react'
import Image from 'next/image'
import coinLogo1 from "../../../public/1.png"
import coinLogo2 from "../../../public/2.png"
import coinLogo3 from "../../../public/3.png"
import coinLogo4 from "../../../public/4.png"
import coinLogo5 from "../../../public/5.png"
import coinLogo6 from "../../../public/6.png"
import coinLogo7 from "../../../public/7.png"
import coinLogo8 from "../../../public/8.png"
import coinLogo9 from "../../../public/9.png"
import coinLogo10 from "../../../public/10.png"
import coinLogo11 from "../../../public/11.png"
import coinLogo12 from "../../../public/12.png"
import coinLogo13 from "../../../public/13.png"
import coinLogo14 from "../../../public/14.png"
import coinLogo15 from "../../../public/15.png"
import coinLogo16 from "../../../public/16.png"
import coinLogo17 from "../../../public/17.png"
import coinLogo18 from "../../../public/18.png"
import coinLogo19 from "../../../public/19.png"
import coinLogo20 from "../../../public/20.png"
import coinLogo21 from "../../../public/21.png"
import coinLogo22 from "../../../public/22.png"

export default function SectionSix() {
  // Array of images
  const coinLogos = [
    coinLogo1,
    coinLogo2,
    coinLogo3,
    coinLogo4,
    coinLogo5,
    coinLogo6,
    coinLogo7,
    coinLogo8,
    coinLogo9,
    coinLogo10,
    coinLogo11,
  ];
  const coinLogosMore = [
    coinLogo12,
    coinLogo13,
    coinLogo14,
    coinLogo15,
    coinLogo16,
    coinLogo17,
    coinLogo18,
    coinLogo19,
    coinLogo20,
    coinLogo21,
    coinLogo22,
  ];

   const repeatedLogos = [...coinLogos, ...coinLogos, ...coinLogos]; // Repeats the images 
  const repeatedLogosMore = [...coinLogosMore, ...coinLogosMore, ...coinLogosMore]; // Repeats the images  

  return (
    <div className="overflow-hidden">
      
      <div className="flex py-12 animate-marquee whitespace-nowrap gap-12 ">
        {repeatedLogos.map((logo, index) => (
          <Image className='bg-black rounded-lg transition-transform transform hover:scale-105 cursor-pointer' key={index} src={logo} alt={`coin-logo-${index}`} width={200} height={200} />
        ))}
      </div>

     
      <div className="flex py-12 animate-marquee2 whitespace-nowrap gap-12">
        {repeatedLogosMore.map((logo, index) => (
          <Image  className='bg-black rounded-lg transition-transform transform hover:scale-105 cursor-pointer' key={index} src={logo} alt={`coin-logo-more-${index}`} width={200} height={200} />
        ))}
      </div>
    </div>
  );
}
