import React from "react";
import img from "../../../public/line.png";
import Image from "next/image";
function OurWork({
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  title8,
}) {
  return (
    <div className=" p-10 ">
      <div className=" grid grid-cols-1 md:grid-cols-7 gap-1 mx-auto  p-2 border-2 border-vbgYellow rounded-xl shadow-[0_25px_80px_-5px_rgba(0,0,0,0.8)] shadow-vbgYellow">
        <div className=" flex items-center justify-center">
          <h4 className=" font-light  text-1xl  text-center ">
            {title1}
            <br /> {title2}
          </h4>
        </div>
        <div className=" flex items-center justify-center">
          <Image src={img} alt="" />
        </div>
        <div className=" flex items-center justify-center">
          <h4 className=" font-light text-1xl  text-center ">
            {title3}
            <br /> {title4}
          </h4>
        </div>
        <div className=" flex items-center justify-center">
          <Image src={img} alt="" />
        </div>
        <div className=" flex items-center justify-center">
          <h4 className=" font-light text-1xl  text-center">
            {title5}
            <br /> {title6}
          </h4>
        </div>
        <div className=" flex items-center justify-center">
          <Image src={img} alt="" />
        </div>
        <div className=" flex items-center justify-center">
          <h4 className="  font-light text-1xl  text-center ">
            {title7}
            <br /> {title8}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default OurWork;
