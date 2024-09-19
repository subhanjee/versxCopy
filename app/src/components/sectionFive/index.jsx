import React from "react";
import cardImage from "../../../public/step-1-img.png";
import cardImage1 from "../../../public/step-2-img.png";
import cardImage2 from "../../../public/step-3-img.png";
import Image from "next/image";
import AiButton from "../aiButton";
export default function SectionFive() {
  return (
    <div className="  max-w-7xl mx-auto flex flex-col    ">
      <div className="p-14   bg-black rounded-2xl">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-24">
          <div className="flex justify-center items-center flex-col      ">
            <div className="">
              <AiButton title="Unleash the Power of AIs" />
              <h2 className="mt-5 mb-5 font-bold text-3xl  lg:text-4xl">
                So, how does it work?
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col    ">
            <div>
              <p className="  text-vGray text-base ">
                To create content quickly and effectively,
                <br />
                <a className="font-bold">here are the steps you can follow:</a>
              </p>
              <div className="flex flex-col lgmd:flex lg:flex-row lg:flex gap-3 mt-7 mb-5">
                <div className="border-glow p-4 ">
                  <div className="flex m-auto items-center gap-3 hover:text-vyellow   md:text-base">
                    Learn More
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
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 mb-5 ">
          <div className="max-w-sm bg-vbgCardBrown rounded-2xl p-6 text-center shadow-lg m-4 transition-transform transform hover:scale-105">
            <p className="text-lg font-normal  mb-4">STEP 1</p>
            <div className="    rounded-lg mb-4">
              <Image width={300} height={300} src={cardImage} alt="abc" />
            </div>
            <p className="text-gray-300">
              Simply explain what your content is about and adjust settings
              according to your needs.
            </p>
          </div>
          <div className="max-w-sm bg-vbgdarkYellowcard rounded-2xl p-6 text-center shadow-lg m-4 transition-transform transform hover:scale-105">
            <p className="text-lg font-normal text-gray-900 mb-4">STEP 2</p>
            <div className="    rounded-lg mb-4">
              <Image width={300} height={300} src={cardImage1} alt="abc" />
            </div>
            <p className="text-gray-900">
              Simply input some basic information or keywords about your brand
              or product, and let our AI algorithms do the rest.
            </p>
          </div>

          <div className="max-w-sm bg-teal-800 rounded-2xl p-6 text-center shadow-lg m-4 transition-transform transform hover:scale-105">
            <p className="text-lg  font-normal  mb-4">STEP 3</p>

            <div className=" bg-teal-700 rounded-lg mb-4">
              <Image width={300} height={300} src={cardImage2} alt="abc" />
            </div>
            <p className=" ">
              View, edit, or export your result with a few clicks. And you re
              done!
            </p>
          </div>
        </div>
        <p className="text-center mt-5 mb-5">Want to see? Join Magic</p>
      </div>
    </div>
  );
}
