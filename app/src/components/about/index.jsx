"use client";
import React from "react";
import "./About.css";
import Block from "../../../public/main-logo.webp";
import logo from "../../../public/Vlogo.png";
import cutted from "../../../public/cutted-box.webp";
import cuttedred from "../../../public/cutted-box-red.webp";
import cuttedgri from "../../../public/cutted-box-gradient.webp";
import { RiShareBoxFill } from "react-icons/ri";
import Image from "next/image";

const boxVariants = [
  "scale(1)",
  "scaleX(-1) scaleY(1)",
  "scaleX(1) scaleY(-1)",
  "scaleX(-1) scaleY(-1)",
];

const CuttedBox = ({
  title,
  mainTitle,
  details,
  buttonText,
  Icons,
  SoLink,
  variant = 0,
}) => {
  return (
    <div className="boxes">
      <div
        className={`cutted-box-wrapper `}
        style={{ transform: boxVariants[variant] }}
      >
        <div className="cutted-box-wrapper-box">
          <Image src={cutted} className="cutted-box" alt="BlockAudit Box" />
          <Image
            width={500}
            height={500}
            src={cuttedred}
            className="cutted-box-red"
            alt="BlockAudit Box edge"
          />
          <Image
            width={500}
            height={500}
            src={cuttedgri}
            className="cutted-box-gradient"
            alt="BlockAudit Box Round"
          />
        </div>
      </div>

      <div className="content">
        <p>{title}</p>
        <h3>{mainTitle}</h3>
        <p className="con-p">{details}</p>
        <button className="btn-about fs-20px white weight-4 pointer flex-btn">
          <a href={SoLink} className="flex items-center gap-2">
            {buttonText} <span style={{ color: "#fff" }}>{Icons}</span>{" "}
          </a>
        </button>
      </div>
    </div>
  );
};

function About() {
  return (
    <main>
      <section id="service">
        <div className="p-10">
          <div className="grid-about">
            <CuttedBox
              title="Smart Contract"
              mainTitle="Audits"
              target="_blank"
              buttonText="Explore"
              Icons={<RiShareBoxFill />}
              SoLink="/audit-service"
              details="Trust in our expertise to ensure optimal security and performance for your smart contracts within the dynamic web3 landscape."
            />

            <CuttedBox
              variant={1}
              title="Advanced"
              mainTitle="Pen Test"
              SoLink="/pen-test"
              Icons={<RiShareBoxFill />}
              details="Utilising advanced techniques to identify and eliminate potential security risks, you can rest assured that your project is secure and optimised."
              target="_blank"
              buttonText="Explore"
            />

            <Image
              width={300}
              height={300}
              src={logo}
              className="center-logo"
              alt=""
            />

            <CuttedBox
              variant={2}
              title="Fund"
              mainTitle="Recovery"
              Icons={<RiShareBoxFill />}
              SoLink="/fund-recovery"
              buttonText="Explore"
              details="Identifying and collecting assets that belonged to a deceased person and then sending them back to their beneficiaries. "
            />

            <CuttedBox
              variant={3}
              title="Security Policy"
              mainTitle="Consultation"
              SoLink="/consultation-service"
              buttonText="Explore"
              Icons={<RiShareBoxFill />}
              details="We develop customised security policies and provide guidance on regulatory compliances, risk management, and incident response planning."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
