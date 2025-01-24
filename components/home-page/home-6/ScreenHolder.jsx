
import Image from "next/image";
const logos = [
  // {
  //   src: "/images/logo/Plogo-1.png",
  //   width: 193,  // Use numbers, not strings
  //   height: 193,
    
  // },
  // {
  //   src: "/images/logo/Plogo-2.png",
  //   width: 65,
  //   height: 65,
  //   className: "shapes logo-one",
  // },
  // {
  //   src: "/images/logo/Plogo-3.png",
  //   width: 105,
  //   height: 105,
  //   className: "shapes logo-two",
  // },
  // {
  //   src: "/images/logo/Plogo-4.png",
  //   width: 80,
  //   height: 80,
  //   className: "shapes logo-three",
  // },
  // {
  //   src: "/images/logo/Plogo-5.png",
  //   width: 148,
  //   height: 148,
  //   className: "shapes logo-four",
  // },
  // {
  //   src: "/images/logo/Plogo-6.png",
  //   width: 105,
  //   height: 105,
  //   className: "shapes logo-five",
  // },
];

const ScreenHolder = () => {
  return (
    <div >
     {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={`Logo ${index + 1}`}
          width={logo.width}
          height={logo.height}
          className={logo.className || ""}
        />
      ))}
    </div>
  );
};

export default ScreenHolder;