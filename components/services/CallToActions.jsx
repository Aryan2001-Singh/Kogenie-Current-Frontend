import Link from "next/link";
import React from "react";

const CallToActions = () => {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-6 sm:px-12 lg:px-20 text-center ">
      <div style={{marginTop:"30px"}} className="max-w-5xl mx-auto">
        {/* ✅ Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Start Your Free Trial Today!
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Join thousands of businesses leveraging{" "}
          <span className="font-semibold text-indigo-600">
            KOgenie&apos;s AI-powered solutions
          </span>
          to boost growth and efficiency.
        </p>

        {/* ✅ Centered Email Input & Button */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
          <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-3 font-semibold shadow-md hover:scale-105 transition">
            Subscribe
          </button>
        </div>

        {/* ✅ Sign-in Link */}
        <p style={{paddingBottom:"20px"}} className="mt-4 text-gray-600">
          Already a member?{" "}
          <Link
            href="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CallToActions;
