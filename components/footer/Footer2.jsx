const columns = [
  {
    title: "Links",
    links: [
      { label: "Home", url: "/" },
      { label: "Pricing", url: "/pages/pricing-v2" },
      { label: "About us", url: "/pages/about-us" },
      { label: "Service", url: "/pages/OurService" },
      { label: "Blog", url: "/blog" },
    ],
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
