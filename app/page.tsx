'use client';
import React from "react";

import Header from "@/components/home-page/home-6/Header";
import Hero from "@/components/home-page/home-6/Hero";
import ScreenHolder from "@/components/home-page/home-6/ScreenHolder";
import Link from "next/link";
import ProductTabs from "@/components/home-page/home-6/ProductTabs";
import Subscribe from "@/components/home-page/home-6/Subscribe";
import TagList from "@/components/home-page/home-6/TagList";
import Features from "@/components/home-page/home-6/Features";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Image from "next/image";
import ClientReviews from "./clientreviews/page";


const SassProduct = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Feature Section Three */}
      <div className="fancy-feature-three pt-300 lg-pt-200 md-pt-170 sm-pt-120">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content Section */}
            <div
              className="col-lg-6 col-md-6"
              style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
            >
              <div className="title-style-three">
                <div
                  className="sc-title text-uppercase"
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "rgb(84, 106, 236)",
                    letterSpacing: "1px",
                    marginBottom: "10px",
                  }}
                >
                  Integrates your tools
                </div>
                <h2
                  style={{
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "1.5",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                  className="max-w-md main-title fw-200"
                >
                  Kogenie leads in hyper-targeted influence
                </h2>
              </div>
              <p
                className="text-lg mt-15 mb-60 lg-mb-40"
                style={{
                  fontSize: "16px",
                  color: "gray",
                  lineHeight: "1.7",
                  marginBottom: "30px",
                }}
              >
                At Kogenie, we leverage the power of generative AI, granular data, and
                Automated A/B testing to deliver advertisements that connect on a deep,
                instinctive level with your audience. Whether you aim to drive action or
                influence emotions, we have the expertise and tools to make it happen.
              </p>
              <Link
                href="/pages-menu/about-us-v1"
                className="btn-four fw-500"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  backgroundColor: "rgb(84, 106, 236)",
                  color: "#fff",
                  fontWeight: "500",
                  textDecoration: "none",
                  borderRadius: "5px",
                  boxShadow: "0 4px 20px rgba(84, 107, 236, 0.57)",
                  transition: "all 0.3s ease",
                  fontSize: "20px",
                  textAlign: "center"
                }}
              >
                Learn More
              </Link>
            </div>

            {/* Right Image Section */}
            <div
              className="col-lg-6 col-md-6"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <div
                style={{
                  width: "400px",
                  height: "300px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  overflow: "hidden",
                  marginTop: "20px"
                }}
              >
                <Image
                  src="/istockphoto-1611750843-1024x1024.jpg"
                  alt="Professional Illustration"
                  width={400}
                  height={300}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>





      <div
        className="col-xl-6 col-lg-7 col-md-6 ms-auto"
        data-aos="fade-left"
      >
        <ScreenHolder />
      </div>




      {/* 
        =============================================
        Feature Section Four
        ============================================== 
        */}
      <div className="fancy-feature-four pt-250 lg-pt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-md-8 m-auto text-center"
              data-aos="fade-up"
            >
              <div className="title-style-three">
                <h2
                  className="main-title fw-500"
                  style={{
                    marginTop: "-40px", /* Shift text upwards */
                    lineHeight: "1.5", /* Add space between words */
                    marginBlockEnd: "40px",
                  }}
                >
                  <span style={{ color: "black" }}>H o w &nbsp; t o</span>
                  <span
                    className="d-inline-block position-relative"
                    style={{ color: "rgba(74, 90, 187, 1)" }}
                  >
                    &nbsp; G e n e r a t e &nbsp; A d s
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End .row */}

      <ProductTabs />

      {/* /.tab-content */}

      {/* /.container */}

      {/* Feature Section Five */}
      <div className="fancy-feature-five pt-300 lg-pt-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 order-md-last ms-auto">
              <div
                className="block-style-two pe-xxl-5 sm-mb-50"
                data-aos="fade-left"
              >
                <div className="title-style-three">
                  <div className="sc-title text-uppercase"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "rgb(84, 106, 236)",
                      letterSpacing: "1px",
                      marginBottom: "10px",
                    }}>
                    Personalization of granular data
                  </div>
                  <h2
                    style={{
                      fontSize: "36px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                      color: "#333",
                      marginBottom: "20px",
                    }}
                    className="max-w-md main-title fw-200"
                  >
                    The power of Generative AI
                  </h2>
                </div>
                <p
                  className="text-lg mt-15 mb-60 lg-mb-40"
                  style={{
                    fontSize: "16px",
                    color: "gray",
                    lineHeight: "1.7",
                    marginBottom: "30px",
                  }}
                >
                  Our Generative AI and Granular Data works hand in hand to
                  create personalized, high impact advertisement that drives
                  research.
                </p>
                <Link
                  href="/sign-up"
                  style={{
                    display: "inline-block",
                    padding: "12px 20px", // Adjust padding for better spacing
                    backgroundColor: "rgb(84, 106, 236)",
                    color: "#fff",
                    fontWeight: "500",
                    textDecoration: "none",
                    borderRadius: "5px",
                    boxShadow: "0 4px 20px rgba(84, 107, 236, 0.57)",
                    transition: "all 0.3s ease",
                    width: "100%", // Full width for smaller screens
                    maxWidth: "300px", // Limit the maximum width for larger screens
                    fontSize: "16px", // Responsive font size
                    textAlign: "center", // Center the text inside the button
                    margin: "10px auto", // Center the button horizontally on small screens
                  }}
                  className="btn-four fw-500"
                >
                  Try Free Now
                </Link>

              </div>
            </div>
            <div className="col-md-6 order-md-first" data-data-aos="fade-right">
              <div style={{ backgroundColor: "#8693e3" }} className="tags-wrapper position-relative">
                {/* <Image
                  src=""
                  alt="shape"
                  className="lazy-img shapes shape-one"
                  width={100}
                  height={100}
                /> */}
                <div className="h3 m0 fw-normal tx-dark">13+</div>
                <p className="text-lg opacity-50 pb-25 lg-pb-10">
                  Reason to choose us
                </p>
                <TagList />
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Feature Section Six
        ============================================== 
        */}
      <div className="fancy-feature-six position-relative mt-225 lg-mt-100 xs-mt-80">
        <div className="container">
          <div className="row gx-xxl-5 align-items-center">
            <div className="col-lg-4 col-md-6 mt-40" data-aos="fade-up">
              <div className="title-style-three mb-65 lg-mb-40">
                <h2 className="main-title fw-500">
                  Let’s <br />
                  <span className="d-inline-block position-relative">
                    Discover
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#8693e3" }}
                    />
                  </span>
                  our all features
                </h2>
              </div>
              {/* /.title-style-three */}
              <Link
                href="/pages-menu/service-v1"
                className="btn-five tran3s fw-500 fs-17 text-decoration-underline"
              >
                Click here for more info <i className="bi bi-chevron-right" />
              </Link>
            </div>
            <Features />
          </div>
        </div>
        {/* End .container */}


        {/* <Image
          src=""
          alt="shape"
          className="lazy-img shapes shape-two"
          width={100}
          height={100}
        /> */}

      </div>
      {/* /.fancy-feature-six */}

      {/*
        =====================================================
        Feedback Section Two
        =====================================================
        */}
     <div
  className="feedback-section-two position-relative mt-170 pt-150 pb-150 lg-mt-100 lg-pt-100 lg-pb-100 sm-pt-10 sm-pb-10"
  data-aos="fade-up"
>
<ClientReviews/>


        {/*
        =====================================================
        Fancy Short Banner Two
        =====================================================
        */}
        <div
          className="fancy-short-banner-two mt-150 lg-mt-100"
          data-data-aos="fade-up"
        >
          <div style={{backgroundColor:"#8693e3",borderRadius:"10px"}} className="container">
            <div style={{backgroundColor:"rgba(247, 248, 254, 1)"}} className="bg-wrapper ms-xxl-4 me-xxl-4 position-relative">
              <div className="shapes rounded-circle shape-one" />
              <div className="inner-wrapper m-auto">
                <div className="row align-items-center">
                  <div className="col-md-6 text-center text-md-start sm-mb-30">
                    <h6 className="mb-5">Need Custome Plan?</h6>
                    <h3 className="fw-normal m0">Send us message for Help.</h3>
                  </div>
                  <div className="col-md-6 text-center text-md-end">
                    <Link href="/contact" className="btn-six fw-500">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /.bg-wrapper */}
          </div>
        </div>

        {/*
        =====================================================
        Fancy Short Banner Three
        =====================================================
        */}
        <div className="fancy-short-banner-three mt-180 mb-200 lg-mt-100 lg-mb-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-lg-8 col-md-9 m-auto text-center">
                <div
                  className="title-style-three text-center"
                  data-data-aos="fade-up"
                >
                  <h2 className="main-title fw-500">
                    Ready to take
                    <span className="d-inline-block position-relative">
                      plan?
                      <span
                        className="mark-bg"
                      // style={{ backgroundColor: "#C3F0FF" }}
                      />
                    </span>
                    It’s just a matter of clike
                  </h2>
                </div>
                {/* /.title-style-three */}
                <p
                  className="text-lg tx-dark pt-30 pb-55 lg-pb-30 "
                  data-aos="fade-up"
                >
                  Try it risk free — we don’t charge cancellation fees.
                </p>
                <div
                  className="subscribe-form m-auto"
                  data-data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Subscribe />
                  <p className="m0 pt-20">
                    Already a member?
                    <Link
                      href="/sign-in"
                      className="tx-dark text-decoration-underline"
                    >
                      Sign in.
                    </Link>
                  </p>
                </div>
                {/* /.subscribe-form */}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer-style-two theme-basic-footer">
          <div className="top-footer position-relative">
            <div className="container">
              <div className="inner-wrapper m-auto">
                <div className="row">
                  <FooterMenu />
                </div>
              </div>
              {/* /.inner-wrapper */}
            </div>
            <div className="" />
            <div className="" />
            {/* <Image
              src="/images/shape/shape_42.svg"
              alt="shape"
              className="lazy-img shapes shape-three"
              width={100}
              height={100}
            />
            <Image
              src="/images/shape/shape_43.svg"
              alt="shape"
              className="lazy-img shapes shape-four"
              width={100}
              height={100}
            /> */}
          </div>
          {/* /.top-footer */}
          <CopyrightFooter2 />
        </div>
        {/* /.footer-style-two */}
    </div>
      
    </>

  );
};

export default SassProduct;
