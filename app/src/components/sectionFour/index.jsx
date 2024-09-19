"use client";
import React from "react";

const items = [
  {
    id: 1,
    title: "AI Generator",
    description: "Generate text, image, code, chat and even more with",
  },
  {
    id: 2,
    title: "Advanced Dashboard",
    description: "Access to valuable user insight, analytics and activity.",
  },
  {
    id: 3,
    title: "Payment Gateways",
    description: "Securely process credit card, debit card, or other methods.",
  },
  {
    id: 4,
    title: "Multi-Lingual",
    description:
      "Ability to understand and generate content in different languages",
  },
  {
    id: 5,
    title: "Custom Templates",
    description: "Add unlimited number of custom prompts for your customers.",
  },
  {
    id: 6,
    title: "Support Platform",
    description: "Access and manage your support tickets from your dashboard.",
  },
];

export default function SectionFour() {
  return (
    <div className="  max-w-7xl mx-auto flex flex-col  mt-5 mb-5   ">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded shadow-md mx-auto flex gap-2 transition-transform transform hover:scale-105"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-vlitegrey">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
