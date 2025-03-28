'use client';
import React from "react";

import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import Pricing2 from "@/components/pricing/Pricing2";
import Link from "next/link";
import SocialPartner from "@/components/common/SocialPartner";
import Image from 'next/image';

const PricingV2 = () => {
  return (
    <>
      {/* <!-- 
      =============================================
    Theme Default Menu
      ============================================== 	
      --> */}
      <Header />

      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <div className="hero-banner-two position-relative mt-160 pb-80 md-mt-150 lg-pb-50">
        <Image
          src="/images/shape/shape_182.svg"
          alt="shape"
          className="lazy-img shapes shape-left-two"
        />
        <Image
          src="/images/shape/shape_183.svg"
          alt="shape"
          className="lazy-img shapes shape-right-two"
        />
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <h1 className="hero-heading fw-normal font-recoleta">
                Simple, Transparent &amp; Great pricing.
              </h1>
              <p className="text-lg pt-20 lg-pt-10">
                We have all kind of plans for every business that fit with your
                needs
              </p>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.hero-banner-two */}

      {/*
		=====================================================
		Pricing Section One
		=====================================================
		*/}
      <div className="pricing-section-one position-relative">
        <div className="container">
          <Pricing2 />
          {/* /.pricing-table-area-one */}
        </div>
        {/* End container */}

        <div className="" />
        {/* <Image
          src="/images/shape/shape_40.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        /> */}
      </div>
      {/* /.pricing-section-one */}

      {/*
        =====================================================
        Fancy Short Banner Two
        =====================================================
        */}
      <div
        className="fancy-short-banner-two mt-100 lg-mt-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="position-relative">
            <div className="inner-wrapper text-center m-auto">
              <h6 className="mb-5">Need Custome Plan?</h6>
              <h3 className="fw-normal mb-30">Send us message for Help.</h3>
              <Link href="/contact/contact-v1" className="btn-six fw-500">
                Contact Us
              </Link>
            </div>
          </div>{" "}
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-two */}

      {/* 
		=============================================
		Feature Section Eleven
		============================================== 
		*/}
      <div className="fancy-feature-eleven bg-color position-relative mt-160 lg-mt-90 pt-120 lg-pt-80 pb-90 lg-pb-70">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-xl-5 col-lg-6" data-aos="fade-right">
              <div className="title-style-three">
                <div className="sc-title text-uppercase">FAQ</div>
                <h2 className="main-title fw-normal">
                  Have any question In mind?
                </h2>
              </div>{" "}
              {/* /.title-style-four */}
              <div
                className="fs-15 fw-500 pt-40 pb-5 lg-pt-30"
                style={{ color: "#FF6B2F" }}
              >
                Confusion?
              </div>
              <p className="text-lg mb-45">
                Don’t find your answer here? just send us a message for help
              </p>
              <Link
                href="/contact/contact-v1"
                className="tran3s fs-17 fw-500 btn-three"
              >
                Contact Us
              </Link>
            </div>
            {/* End .col */}

            {/* <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <Faq2 />
            </div> */}
          </div>
        </div>{" "}
        {/* /.container */}
      </div>
      {/* /.fancy-feature-eleven */}

      {/* 
		=============================================
		Partner Section One
		============================================== 
		*/}
      <div className="partner-section-one position-relative mt-160 mb-225 lg-mt-90 lg-mb-150 md-mb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <div
                className="title-style-three text-center mb-70 lg-mb-30"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-normal">
                  Thousands of{" "}
                  <span className="d-inline-block position-relative">
                    customers{" "}
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#CDFFF0" }}
                    />
                  </span>{" "}
                  use Jano as their digital HQ, including:
                </h2>
              </div>{" "}
              {/* /.title-style-three */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row align-items-center justify-content-center">
                <SocialPartner />
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.partner-section-one */}

      {/*
        =====================================================
        Footer
        =====================================================
        */}
        <footer className="footer-container">
  <div className="footer-wrapper w-full">
    <div className="inner-wrapper m-auto">
      <div className="row">
        <FooterMenu />
      </div>
    </div>
  </div>

  <style jsx>{`
    .footer-container {
      width: 100vw; /* Ensures full viewport width */
      margin: 0;
      padding: 0;
      background: linear-gradient(to right, #f3f6fc, #e8ecf6);
    }

    .footer-wrapper {
      width: 100%;
      max-width: none;
      padding: 0;
    }
  `}</style>
</footer>

    </>
  );
};

export default PricingV2;
