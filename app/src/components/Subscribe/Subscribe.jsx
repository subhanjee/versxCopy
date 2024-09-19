"use client"
import React from "react";
import "./Sub.css";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./sub.json";

function Subscribe() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-vbgGreen rounded-lg p-10">
          <div className="flex justify-center items-center flex-col ">
            <div>
            <h2 className="text-2xl text-vbgYellow font-bold mb-2">Subscribe to our Newsletter</h2>
            <p className="text-sm ">
              Stay ahead of the game with BlockAudit s newsletter. Get valuable
              insights, tips, and updates about web3 security.{" "}
            </p>
          </div>
          </div>
          <div className="flex justify-center items-center">
            <Lottie
              animationData={groovyWalkAnimation}
              loop={true}
            />
          </div>
      </div>
    </div>
  );
}

export default Subscribe;
