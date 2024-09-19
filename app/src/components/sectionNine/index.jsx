"use client";
import React, { useState } from "react";
import AiButton from "../aiButton";
// Accordion content data
const accordionData = [
  {
    question: "How does it generate responses?",
    answer:
      "MagicAI uses the most popular AI models such as GPT, Dall-E, Ada to create text, image, code and more within seconds. The process is simple. All you have to do is provide a topic or idea, and our AI-based generator will take care of the rest.",
  },
  {
    question: "Can i create templates or chat bots?",
    answer:
      "You can use pre-made templates and examples for various content types and industries to help you get started quickly. You can even create your own chatbot or custom prompt template for further customization.",
  },
  {
    question: "Should i buy regular or extended licence?",
    answer:
      "If you plan to charge end users for the final product or service. You should buy the extended license in compliance with Envato’s terms of service same as other projects https://codecanyon.net/licenses/standard",
  },
  {
    question: "Can i translate the script into another language?",
    answer:
      "Yes! MagicAI's multilingual capabilities apply to both content generation and dashboard language. You can easily translate it into other languages. A built-in translation tool is coming soon!",
  },
  {
    question: "Is there a mobile app for MagicAI?",
    answer:
      "MagicAI provides an almost native-app experience thanks to its mobile-first approach. The entire layout is responsive and works great on any device regardless of the size.",
  },
];
export default function SectionNine() {
  // State to manage which accordion is open
  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col  ">
      <div className="bg-black rounded-2xl p-14  ">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Section */}
          <div className="mx-auto flex flex-col">
            <div>
              <AiButton title="FAQ" />
              <h2 className="text-3xl font-bold text-white">
                Have a question?
              </h2>
              <p className="mt-4 text-vlitegrey">
                Our support team will get assistance from AI-powered
                suggestions, making it quicker than ever to handle support
                requests.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="mx-auto flex  ">
            {/* Accordion */}
            <div className="accordion-group">
              {/* Accordion Item */}
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="   pb-6 mb-6 p-2 hover:shadow-sm hover:shadow-vyellow rounded-md"
                >
                  <button
                    className="accordion-toggle group flex justify-between  w-full text-xl font-normal text-vlitegrey  "
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openAccordion === index}
                  >
                    <h5 className="text-vyellow text-lg">{item.question}</h5>
                    <svg
                      className={`text-white transition duration-500 group-hover:text-vyellow ${
                        openAccordion === index ? "rotate-180" : " "
                      }`}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {openAccordion === index && (
                    <div className="mt-4 text-base text-vlitegrey">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
