// const FaqAccordion = () => {
//   const accordionItems = [
//     {
//       id: "faq-1",
//       question: "How does KOgenie's e-commerce integration work?",
//       answer:
//         "KOgenie seamlessly integrates with your existing e-commerce platform, allowing you to manage products, orders, and customer data in one place. The integration process is smooth and efficient, ensuring minimal disruption to your operations.",
//     },
//     {
//       id: "faq-2",
//       question: "What support does KOgenie provide for product catalog management?",
//       answer:
//         "KOgenie provides tools to easily manage and update product catalogs across multiple platforms. Our system supports bulk uploads, product categorization, and synchronization with your e-commerce store.",
//     },
//     {
//       id: "faq-3",
//       question: "How can KOgenie's digital marketing solutions help my business?",
//       answer:
//         "Our digital marketing solutions are designed to help you increase visibility, drive traffic, and optimize conversion rates. KOgenie offers campaign management, audience targeting, and performance tracking to ensure the best return on your investment.",
//     },
//     {
//       id: "faq-4",
//       question: "Can KOgenie help with mobile application development?",
//       answer:
//         "Yes, KOgenie offers mobile application development services to help you create custom apps tailored to your business needs. Whether you need an app for customer engagement or internal business processes, we can help.",
//     },
//     {
//       id: "faq-5",
//       question: "Does KOgenie offer data analytics services?",
//       answer:
//         "KOgenie's data analytics tools allow you to gain insights into customer behavior, market trends, and business performance. We help you make data-driven decisions that lead to better outcomes.",
//     },
//     {
//       id: "faq-6",
//       question: "How can I get started with KOgenie?",
//       answer:
//         "Getting started with KOgenie is easy! Simply contact our team, and we will guide you through the process of selecting the services that best fit your needs. We offer tailored solutions to meet the specific challenges of your business.",
//     },
//     {
//       id: "faq-7",
//       question: "Can KOgenie help me manage multiple sales channels?",
//       answer:
//         "Yes, KOgenie supports integration across multiple sales channels, helping you manage inventory, orders, and customer data from a single dashboard. This ensures streamlined operations and consistency across platforms.",
//     },
//     {
//       id: "faq-8",
//       question: "What payment methods does KOgenie support?",
//       answer:
//         "KOgenie supports a wide range of payment methods including credit cards, PayPal, and other popular payment gateways. Our platform ensures secure and reliable payment processing to meet the needs of your business.",
//     },
//   ];

//   return (
//     <div className="accordion accordion-style-four" id="accordionOne">
//       {accordionItems.map((item, index) => (
//         <div className="accordion-item" key={item.id}>
//           <div className="accordion-header" id={`heading-${index}`}>
//             <button
//               className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target={`#collapse-${index}`}
//               aria-expanded={index === 2 ? "true" : "false"}
//               aria-controls={`collapse-${index}`}
//             >
//               <span>{`0${index + 1}.`}</span> {item.question}
//             </button>
//           </div>
//           <div
//             id={`collapse-${index}`}
//             className={`accordion-collapse collapse ${
//               index === 2 ? "show" : ""
//             }`}
//             aria-labelledby={`heading-${index}`}
//             data-bs-parent="#accordionOne"
//           >
//             <div className="accordion-body">
//               <p>{item.answer}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FaqAccordion;
