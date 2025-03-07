"use client";

import Link from "next/link";
import Header from "@/components/home-page/home-6/Header";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  // Automatically redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Header */}
      <Header />

      {/* SEO Meta Tags */}
      <head>
        <title>Page Not Found - Kogenie</title>
        <meta
          name="description"
          content="Oops! This page doesn't exist. Let's get you back on track."
        />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Page Not Found - Kogenie" />
        <meta
          property="og:description"
          content="Oops! This page doesn't exist. Let's get you back on track."
        />
        <meta property="og:url" content="https://www.kogenie.com/404" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.kogenie.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "404 - Page Not Found",
              description:
                "Oops! The page you are looking for does not exist. Redirecting you to the homepage.",
              url: "https://www.kogenie.com/404",
            }),
          }}
        />
      </head>

      {/* 404 Page Content */}
      <div className="error-page-content flex items-center justify-center min-h-screen text-center">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 m-auto">
              <h3 className="text-3xl font-semibold text-gray-800">
                Oops! You are in the wrong place.
              </h3>
              <p className="text-gray-600 mt-4">
                The page you are looking for does not exist. We will redirect you
                to the homepage in a few seconds.
              </p>
              <Link href="/" className="btn-primary mt-6 inline-block">
                Go to Homepage
              </Link>
            </div>
          </div>

          {/* 404 Illustration */}
          <Image
            width={800}
            height={522}
            src="/images/assets/ils_06.svg"
            alt="404 Error Illustration"
            className="m-auto mt-8"
          />
        </div>
      </div>

      {/* Background Shape */}
      <Image
        width={1915}
        height={674}
        src="/images/shape/shape_178.svg"
        alt="Background Shape"
        className="absolute bottom-0 left-0 w-full opacity-50"
      />

      {/* Styles */}
      <style jsx>{`
        .error-page-content {
          background: #f9fafc;
          padding: 50px 20px;
          text-align: center;
        }
        .btn-primary {
          padding: 12px 24px;
          background: #4a5abb;
          color: #fff;
          font-weight: 600;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          background: #3c4e99;
        }
      `}</style>
    </>
  );
};

export default NotFoundPage;