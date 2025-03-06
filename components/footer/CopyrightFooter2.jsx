const Footer = () => {
  return (
    <div className="bottom-footer lg-pb-20 position-relative">
      <p className="copyright text-center m0">
        Copyright © {new Date().getFullYear()}{" "}
        <a
          style={{ color: "inherit" }}
          href="https://kogenie.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          KOgenie
        </a>
        . All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
