import React from "react";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Links",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "Home", url: "/" },
        { label: "Pricing", url: "/pages/pricing-v2" },
        { label: "About us", url: "/pages/about-us" },
        { label: "Blog", url: "/blog" },
      ],
    },
  ];

  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "#",
    },
    {
      iconClass: "fab fa-twitter",
      link: "#",
    },
    {
      iconClass: "fab fa-linkedin-in",
      link: "#",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title text-white fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title text-white fw-500">Address</h5>
        <p className="text-white opacity-75 mb-35">
          2190 Zinai terrace, Lake view <br />
          house state, 10 no road.
        </p>
        <ul className="d-flex social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
// import React from "react";
// import { assets } from "@/Assets/assets";  // Assuming assets are correctly imported

// const Footer = () => {
//   const links = [
//     {
//       title: "Quick Links",
//       links: [
//         { label: "Home", url: "/" },
//         { label: "Pricing", url: "/pages-menu/pricing-v2" },
//         { label: "About Us", url: "/pages-menu/about-us-v1" },
//         { label: "Services", url: "/pages-menu/service-v4" },
//         { label: "Blog", url: "/blog" },
//       ],
//     },
//     {
//       title: "Contact Info",
//       links: [
//         { label: "support@company.com", url: "mailto:support@company.com" },
//         { label: "+123-456-789", url: "tel:+123456789" },
//       ],
//     },
//     {
//       title: "Follow Us",
//       links: [
//         { label: "Facebook", url: "#" },
//         { label: "Twitter", url: "#" },
//         { label: "LinkedIn", url: "#" },
//       ],
//     },
//   ];

//   return (
//     <footer
//       className="bg-gradient-to-r from-primary to-accent py-12 px-8 mt-16 rounded-t-3xl"
//       style={{
//         borderTop: '10px solid #4A5ABB', // Adds a clean separation line on top
//       }}
//     >
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
//         {/* Logo and Description */}
//         <div className="text-white space-y-4">
//           <img src={assets.logo_light} alt="Company Logo" className="w-40" />
//           <p className="text-md opacity-90">
//             Helping businesses grow with innovative SaaS solutions. Join us in making a difference!
//           </p>
//           <div className="flex space-x-4">
//             <a href="#" className="text-white hover:text-accent transition">
//               <img src={assets.facebook_icon} alt="Facebook" width={30} />
//             </a>
//             <a href="#" className="text-white hover:text-accent transition">
//               <img src={assets.twitter_icon} alt="Twitter" width={30} />
//             </a>
//             <a href="#" className="text-white hover:text-accent transition">
//               <img src={assets.googleplus_icon} alt="Google Plus" width={30} />
//             </a>
//           </div>
//         </div>

//         {/* Links Sections */}
//         {links.map((linkGroup, index) => (
//           <div className="text-white" key={index}>
//             <h5 className="text-lg font-bold mb-4">{linkGroup.title}</h5>
//             <ul className="space-y-2">
//               {linkGroup.links.map((link, idx) => (
//                 <li key={idx}>
//                   <a
//                     href={link.url}
//                     className="text-sm hover:text-accent transition duration-300"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
        
//         {/* Subscribe Section */}
//         <div className="text-white">
//           <h5 className="text-lg font-bold mb-4">Stay Updated</h5>
//           <p className="text-sm mb-6 opacity-80">
//             Subscribe to our newsletter for the latest updates and offers.
//           </p>
//           <form className="flex space-x-3">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-4 py-3 w-full rounded-full focus:outline-none text-black"
//             />
//             <button
//               type="submit"
//               className="bg-accent text-white py-3 px-6 rounded-full font-semibold hover:bg-secondary transition"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
        
//       </div>

//       {/* Footer Bottom */}
//       <div className="border-t border-gray-700 text-center text-gray-300 mt-10 pt-6">
//         <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
