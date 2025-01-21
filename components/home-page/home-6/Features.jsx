import Link from "next/link";
import Image from "next/image";

const FeatureData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_13.svg",
    title: "Product Catalog Management",
    description:
      "Efficiently manage and organize product data, ensuring seamless integration across multiple platforms for KOgenie clients.",
    iconWidth: 75,  // Provide width for each icon
    iconHeight: 75, // Provide height for each icon
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_14.svg",
    title: "Brand Strategy",
    description:
      "Develop strong brand identities that resonate with target audiences, helping businesses grow their online presence.",
    iconWidth: 75,
    iconHeight: 75,
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_15.svg",
    title: "Digital Advertising",
    description:
      "Utilize advanced AI tools to optimize digital advertising campaigns, ensuring better ROI and audience targeting.",
    iconWidth: 75,
    iconHeight: 75,
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_16.svg",
    title: "E-commerce Integration",
    description:
      "Simplify the process of integrating your e-commerce platform with KOgenie’s tools to streamline operations and sales.",
    iconWidth: 75,
    iconHeight: 75,
  },
  {
    id: 5,
    iconSrc: "/images/icon/icon_17.svg",
    title: "Data Analytics",
    description:
      "Leverage data analytics to gain insights into customer behavior and market trends, enabling data-driven decision-making.",
    iconWidth: 75,
    iconHeight: 75,
  },
];

const Features = () => {
  return (
    <>
      {FeatureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6 mt-40"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <div className="card-style-three">
            <div className="icon d-flex align-items-end">
              <Image
                src={feature.iconSrc}
                alt="icon"
                className="lazy-img"
                width={feature.iconWidth}  // Add width
                height={feature.iconHeight}  // Add height
              />
            </div>
            <h4 className="mt-25 mb-20">{feature.title}</h4>
            <p style={{color:"gray"}}className="mb-50">{feature.description}</p>
            <Link  href="/pages-menu/service-details">
              <Image 
                src="/images/icon/icon_18.svg"
                alt="icon"
                className="lazy-img"
                width={39}  // Provide width for this image
                height={15}  // Provide height for this image
               
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
