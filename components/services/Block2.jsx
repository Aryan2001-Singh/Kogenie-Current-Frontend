import Image from "next/image";
import React from "react";

const cardData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_02.svg",
    title: "E-commerce Integration",
    description:
      "Seamlessly integrate your e-commerce platform with KOgenie's tools to enhance business operations and sales.",
    delay: 0,
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_156.svg",
    title: "Product Catalog Management",
    description:
      "Efficiently manage and organize product data across platforms, ensuring smooth integration and updates.",
    delay: 200,
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_157.svg",
    title: "Digital Marketing Solutions",
    description:
      "Leverage KOgenie's digital marketing strategies to optimize campaigns, improve ROI, and engage your audience.",
    delay: 300,
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_160.svg",
    title: "Data Analytics & Insights",
    description:
      "Use KOgenie's data analytics tools to gain deep insights into customer behavior and market trends.",
    delay: 400,
  },
];

const Block2 = () => {
  return (
    <>
      {cardData.map((card) => (
        <div
          key={card.id}
          className="group relative bg-white shadow-lg border border-gray-200 
          rounded-2xl p-6 text-center flex flex-col items-center transition-all duration-300 
          hover:shadow-2xl hover:border-indigo-500 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay={card.delay}
        >
          {/* ✅ Indigo Gradient Background for Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg mb-5 transition-transform duration-300 group-hover:rotate-[10deg]">
            <Image width={32} height={32} src={card.iconSrc} alt="icon" />
          </div>

          {/* ✅ Title */}
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition duration-300 font-[Inter]">
            {card.title}
          </h3>

          {/* ✅ Description */}
          <p className="text-gray-600 mt-3 leading-relaxed text-sm font-[Inter]">
            {card.description}
          </p>

          {/* ✅ Hover Effect Line */}
          <div className="h-[2px] w-10 bg-indigo-500 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
      ))}
    </>
  );
};

export default Block2;
