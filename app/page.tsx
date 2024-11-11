import React from "react";

import Header from "@/components/home-page/home-6/Header";
import Hero from "@/components/home-page/home-6/Hero";
import ScreenHolder from "@/components/home-page/home-6/ScreenHolder";
import Link from "next/link";
import ProductTabs from "@/components/home-page/home-6/ProductTabs";
import Subscribe from "@/components/home-page/home-6/Subscribe";
import TagList from "@/components/home-page/home-6/TagList";
import Features from "@/components/home-page/home-6/Features";
import Testimonial from "@/components/home-page/home-6/Testimonial";
import CircleBgShape from "@/components/home-page/home-6/CircleBgShape";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Image from "next/image";

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
            <div className="col-lg-5 col-md-6">
              <div
                className="block-style-two pe-xxl-5 md-mb-50"
                data-aos="fade-right"
              >
                <div className="title-style-three">
                  <div className="sc-title text-uppercase">
                    Integrates your tools
                  </div>
                  <h2
                    style={{ fontSize: "1 rem" }}
                    className="main-title fw-200"
                  >
                    Kogenie leads in hyper-targeted influence
                  </h2>
                </div>
                <p className="text-lg mt-25 mb-60 lg-mb-40">
                  At Kogenie we leverage the power of generative AI, granular
                  data, and Automated A/B testing to deliver advertisement that
                  connect on a deep, instinctive level with your audience.
                  Whether you aim to drive to aim action or influence emotions,
                  we have the expertise and tools to make it happen.
                </p>
                <Link
                  href="/pages-menu/about-us-v1"
                  className="btn-four fw-500"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-7 col-md-6 ms-auto"
              data-aos="fade-left"
            >
              <ScreenHolder />
            </div>
          </div>
        </div>
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
                <h2 className="main-title fw-500">
                  How to 
                  <span className="d-inline-block position-relative">
                    Generate
                  </span>
                  Ads
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <ProductTabs />

          {/* /.tab-content */}
        </div>
        {/* /.container */}
      </div>

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
                  <div className="sc-title text-uppercase">
                    Personalization of granular data
                  </div>
                  <h2
                    style={{ fontSize: "1 rem" }}
                    className="main-title fw-200"
                  >
                  The power of Generative AI
                  </h2>
                </div>
                <p className="text-lg mt-25 mb-60 lg-mb-40">
                  Our Generative AI and Granular Data works hand in hand to
                  create personalized, high impact advertisement that drives
                  research.
                </p>
                <Link 
                href="/sign-up" className="btn-four fw-500">
                  Try Free Now
                </Link>
              </div>
            </div>
            <div className="col-md-6 order-md-first" data-data-aos="fade-right">
              <div className="tags-wrapper position-relative">
                <Image
                  src="/images/shape/shape_35.svg"
                  alt="shape"
                  className="lazy-img shapes shape-one"
                  width={100}
                  height={100}
                />
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
                      style={{ backgroundColor: "#E1EDFF" }}
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

        <div className="shapes shape-one rounded-circle" />
        <Image
          src="/images/shape/shape_36.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
          width={100}
          height={100}
        />
        <div className="shapes shape-three rounded-circle" />
      </div>
      {/* /.fancy-feature-six */}

      {/*
        =====================================================
        Feedback Section Two
        =====================================================
        */}
      <div
        className="feedback-section-two position-relative mt-170 pt-150 pb-150 lg-mt-100 lg-pt-100 lg-pb-100 sm-pt-10 sm-pb-10"
        data-data-aos="fade-up"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 col-md-8 col-sm-10 m-auto">
              <div className="title-style-three text-center mb-70 lg-mb-40">
                <div
                  className="icon d-flex align-items-center justify-content-center rounded-circle"
                  style={{ background: "#FFC961" }}
                >
                  <Image
                    src="/images/icon/icon_19.svg"
                    alt="icon"
                    className="lazy-img"
                    width={40}
                    height={40}
                  />
                </div>
                <h2 className="main-title fw-500">
                  Check what’s our
                  <span className="d-inline-block position-relative">
                    client
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#BCF8F1" }}
                    />
                  </span>
                  say about us.
                </h2>
              </div>
              {/* /.title-style-three */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xl-7 col-lg-9 m-auto">
              <Testimonial />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <CircleBgShape />
      </div>

     {/*
        =====================================================
        Fancy Short Banner Two
        =====================================================
        */}
      <div
        className="fancy-short-banner-two mt-150 lg-mt-100"
        data-data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper ms-xxl-4 me-xxl-4 position-relative">
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
                      style={{ backgroundColor: "#C3F0FF" }}
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
          <div className="shapes shape-one rounded-circle" />
          <div className="shapes shape-two rounded-circle" />
          <Image
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
          />
        </div>
        {/* /.top-footer */}
        <CopyrightFooter2 />
      </div>
      {/* /.footer-style-two */}
    </>
  );
};

export default SassProduct;
