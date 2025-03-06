import Image from "next/image";
// import Link from "next/link";
import React from "react";

const cardData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_02.svg",
    bgColor: "rgba(100, 219, 226, 0.18)",
    title: "E-commerce Integration",
    description:
      "Seamlessly integrate your e-commerce platform with KOgenie's tools to enhance business operations and sales.",
    delay: 0,
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_156.svg",
    bgColor: "rgba(255, 171, 51, 0.18)",
    title: "Product Catalog Management",
    description:
      "Efficiently manage and organize product data across platforms, ensuring smooth integration and updates.",
    delay: 200,
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_157.svg",
    bgColor: "rgba(255, 160, 194, 0.18)",
    title: "Digital Marketing Solutions",
    description:
      "Leverage KOgenie's digital marketing strategies to optimize campaigns, improve ROI, and engage your audience.",
    delay: 300,
  },
  {
    id: 6,
    iconSrc: "/images/icon/icon_160.svg",
    bgColor: "rgba(68, 255, 0, 0.18)",
    title: "Data Analytics & Insights",
    description:
      "Use KOgenie's data analytics tools to gain deep insights into customer behavior and market trends.",
    delay: 300,
  },
];

const Block2 = () => {
  return (
    <>
      {cardData.map((card) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={card.delay}
          key={card.id}
        >
          <div className="card-style-one pe-xxl-5 position-relative mb-90 md-mb-70">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ backgroundColor: card.bgColor }}
            >
              <Image
                width={32}
                height={40}
                src={card.iconSrc}
                alt="icon"
                className="lazy-img"
              />
            </div>
            <h5 className="fw-500 mt-35 mb-25">
              {/* <Link
                href="/pages/service-details"
                className="tran3s tx-dark"
              >
                {card.title}
              </Link> */}
            </h5>
            <p className="mb-25">{card.description}</p>
            {/* <Link href="/pages/service-details">
              <Image
                width={41}
                height={14}
                src="/images/icon/icon_05.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Block2;
