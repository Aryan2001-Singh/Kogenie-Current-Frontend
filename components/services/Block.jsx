import Image from "next/image";

const Block = () => {
  return (
    <>
      <div className="row align-items-end" data-aos="fade-up">
        <div className="col-md-5 col-sm-4">
          <Image
            src="/images/shape/shape_136.svg"
            alt="shape"
            width={90}
            height={30}
            className="lazy-img d-none d-sm-inline-block"
          />
        </div>
        <div className="col-md-7 col-sm-8" data-aos="fade-down">
          <div className="block-wrapper block-one">
            <h3 style={{ color: "#FFAE10" }}>Our</h3>
            <p>Customers trust us with Ad Creations</p>
          </div>
          {/* /.block-wrapper */}
        </div>
      </div>
      {/* End .row */}

      <div className="row gx-xxl-5" data-aos="fade-down">
        <div className="col-sm-7" data-aos="fade-down">
          <div style={{backgroundColor:"white"}}className="block-wrapper block-two position-relative mt-50 sm-mt-30">
            <h3 style={{ color: "#9650EF" }}>
              Lets <br />
              <span>Get Into</span>
            </h3>
            <p>Ad Creation using &amp; Generative AI</p>
            <Image
              src="/images/shape/shape_138.svg"
              alt="sahpe"
              width={90}
              height={30}
              className="lazy-img shapes shape-one"
            />
          </div>
          {/* /.block-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-sm-5" data-aos="fade-up">
          <div className="block-wrapper block-three mt-50 sm-mt-30">
            <h3 style={{ color: "#00BDE6" }}>
              <span>Claims</span>
            </h3>
            <p>Get Support by expert easily.</p>
          </div>
          {/* /.block-wrapper */}
          <Image
            src="/images/shape/shape_137.svg"
            alt="shape"
            width={90}
            height={30}
            className="lazy-img mt-30 ms-auto me-auto d-none d-sm-inline-block"
          />
        </div>
      </div>
    </>
  );
};

export default Block;
