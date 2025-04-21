"use client";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left: Sign In Form */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-white border-1 border-grey-300 shadow-md p-8">
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          appearance={{
            elements: {
              card: "shadow-none bg-white p-8 w-full max-w-lg",
              formButtonPrimary:
                "w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition text-sm",
              formFieldInput:
                "w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500",
              formFieldLabel: "text-sm font-medium text-gray-700 mb-1",
              headerTitle: "text-3xl font-bold text-gray-900 mb-2 text-center",
              headerSubtitle: "",
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

        {/* Custom Subtitle */}
        <div className="absolute top-[calc(50%-200px)] text-center w-full">
          <p className="text-sm mb-20 text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/sign-up"
              className="text-indigo-600 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right: Floating Visual Ad Cards (Copied from Sign Up) */}
      <div className="hidden md:flex w-1/2 h-full items-center justify-center bg-gradient-to-br from-purple-400 to-indigo-600  p-8 text-white relative overflow-hidden">
        <div className="relative h-full w-full max-w-xl"> 
          <div className="absolute top-0 left-0 w-full min-h-full shadow-md animate-scrollCards flex flex-col gap-10 justify-start">
            {[
              {
                headline:
                  "Craving something sweet? You don’t have to cheat.\nFuel your day with flavor, not fake promises.",
                image: "/jayed-jadu-CIMR4FyH3lY-unsplash.jpg",
              },
              {
                headline:
                  "You deserve glow that doesn’t wash off at night.\nSay goodbye to acne, dullness, and harsh chemicals.",
                image: "/taisiia-stupak-KP97dx0GOv8-unsplash.jpg",
              },
              {
                headline:
                  "First impressions are made before you even speak.\nWear something that makes you feel like *you*.",
                image: "/sign1.jpg",
              },
              {
                headline:
                  "It’s not just four walls — it’s where life unfolds.\nFind a home that tells your story.",
                image: "/star-0lRNxeYfk-M-unsplash.jpg",
              },
              {
                headline:
                  "Some things never go out of style.\nLike owning every second.",
                image: "/yash-parashar-d3EwG8O4vB0-unsplash.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative w-[350px] min-h-[420px] mx-auto rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/10 flex items-start">
                  <div className="bg-black/10 backdrop-blur-sm mt-4 p-2">
                    <h3 className="text-sm font-regular text-justify text-white whitespace-pre-line">
                      {item.headline}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
