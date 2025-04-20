"use client";
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left: Sign Up Form */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-white p-8">
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          appearance={{
            elements: {
              card: "shadow-none bg-white p-8 w-full max-w-lg",
              formButtonPrimary:
                "w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition text-sm",
              formFieldInput:
                "w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500",
              formFieldLabel: "text-sm font-medium text-gray-700 mb-1",
              headerTitle: "text-3xl font-bold text-gray-900 mb-2 text-center",
              headerSubtitle: "", // We'll replace it manually below using `afterSignUpUrl`
              socialButtonsBlockButton:
                "w-full border rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
              dividerRow: "my-6",
              footer: "hidden",
            },
            variables: {
              colorPrimary: "#000000",
              fontFamily: "Inter, sans-serif",
            },
          }}
        />

        {/* 👇 Replacing subtitle manually just below the SignUp heading */}
        <div className="absolute top-[calc(50%-200px)] text-center w-full">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-indigo-600 font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Right: Brand Info */}
      <div className="hidden md:flex w-1/2 h-full items-center justify-center bg-gradient-to-br from-purple-400 to-indigo-600 p-8 text-white relative">
        <div className="space-y-6 max-w-xs">
          <div className="bg-white/20 p-4 rounded-xl backdrop-blur-md">
            <p className="text-xs">TOTAL SALES</p>
            <h2 className="text-3xl font-bold">$527.8K</h2>
            <p className="text-xs">+32% last month</p>
          </div>
          <div className="bg-white/20 p-4 rounded-xl backdrop-blur-md">
            <p className="text-sm">
              KOgenie helped us reach the right people instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
