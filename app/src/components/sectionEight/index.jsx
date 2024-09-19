"use client";
import AiButton from "../aiButton";

export default function CardsSection() {
  const cards = [
    {
      id: 1,
      title: "Post Title Generator",
      description:
        "Get captivating post titles instantly with our title generator. Boost engagement and save time.",
      icon: "T",
    },
    {
      id: 2,
      title: "Summarize Text",
      description:
        "Effortlessly condense large text into shorter summaries. Save time and increase productivity.",
      icon: "≡",
    },
    {
      id: 3,
      title: "Product Description",
      description:
        "Easily create compelling product descriptions that sell. Increase conversions and boost sales.",
      icon: "📄",
    },
    {
      id: 4,
      title: "Article Generator",
      description:
        "Instantly create unique articles on any topic. Boost engagement, improve productivity.",
      icon: "📄",
    },
    {
      id: 5,
      title: "Product Name Generator",
      description:
        "Create catchy product names with ease. Attract customers and boost sales.",
      icon: "Tt",
    },
    {
      id: 6,
      title: "Testimonial Review",
      description:
        "Instantly generate authentic testimonials. Build trust and credibility.",
      icon: "⭐",
    },
  ];

  return (
    <div className="  max-w-7xl mx-auto flex flex-col p-10     ">
      <div className="flex justify-center items-center flex-col      ">
        <AiButton title="Custom" />
        <h2 className="mt-5 mb-5 font-bold text-3xl  lg:text-4xl">
          Custom Templates.
        </h2>

        <div className="flex m-auto items-center gap-3 hover:text-vyellow   md:text-base mt-5 mb-5">
          Discover MagicAI
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
        </div>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-black rounded-3xl p-10  hover:border-glow "
          >
            <h4 className="font-bold">{card.title}</h4>
            <p className="font-normal text-base text-vGray mt-3">
              {card.description}
            </p>
            <hr className="border border-1 border-vbgbtnBrown mt-5 mb-5" />
            <div className="flex justify-between items-center mt-5">
              <p>Learn More</p>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
