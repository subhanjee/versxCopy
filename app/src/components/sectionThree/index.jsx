"use client";
import Image from "next/image";
import { useState } from "react";
import tabImage from "../../../public/tab1.png";
import tabImageOne from "../../../public/tab2.png";
import tabImageTwo from "../../../public/tab3.png";
import tabImageThree from "../../../public/tab4.png";
import tabImageFour from "../../../public/tab5.png";

export default function SectionThree() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      label: "AI Text Generator",
      description:
        "AI Text Generator Writer is designed to help you generate high-quality texts instantly, without breaking a sweat. With our intuitive interface and powerful features, you can easily edit, export or publish your AI-generated result.",
      image: tabImage,
    },
    {
      id: "tab2",
      label: "AI Image Generator",
      description: "Create stunning images.",
      image: tabImageOne,
    },
    {
      id: "tab3",
      label: "AI Code Generator",
      description: "Generate code with AI.",
      image: tabImageTwo,
    },
    {
      id: "tab4",
      label: "AI Chat Bot",
      description: "Chat with AI in real-time.",
      image: tabImageThree,
    },
    {
      id: "tab5",
      label: "AI Speech To Text",
      description: "Convert speech to text.",
      image: tabImageFour,
    },
  ];

  const activeTabContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="  max-w-7xl mx-auto flex flex-col    ">
      <div className="p-14 bg-black rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left Tabs */}
          <div className="flex justify-center items-center flex-col">
            <ul className="w-full">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-4 cursor-pointer rounded-md transition-colors duration-300 ${
                    activeTab === tab.id ? "text-white" : "text-vlitegrey"
                  }`}
                >
                  <h3 className="text-lg md:text-lg lg:text-3xl">
                    {tab.label}
                  </h3>
                  {/* Conditional Content below the Tab */}
                  {activeTab === tab.id && (
                    <div className="mt-4">
                      <p className="text-vlitegrey">{tab.description}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content */}
          <div className="flex justify-center items-center">
            {/* Image container for each tab */}
            <div
              className={`transition-opacity duration-500 ease-in-out ${
                activeTabContent ? "opacity-100" : "opacity-0"
              }`}
            >
              {activeTabContent && (
                <div className=" ">
                  <Image
                    width={1200}
                    height={1200}
                    src={activeTabContent.image}
                    alt={activeTabContent.label}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
