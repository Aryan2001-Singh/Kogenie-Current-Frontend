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
              headerSubtitle: "", // Replaced manually below
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

     {/* Right: Floating Ad Generator Visual */}
<div className="hidden md:flex w-1/2 h-full items-center justify-center bg-gradient-to-br from-purple-400 to-indigo-600 p-8 text-white relative overflow-hidden">
  <div className="relative h-full w-full max-w-md">
    <div className="absolute animate-scrollCards flex flex-col gap-8">
      {[
        {
          type: "ad",
          content: {
            headline: "✨ Say Goodbye to Dull Skin.",
            body: "Introducing GlowEssence – India's most loved ayurvedic serum. See visible results in just 7 days.",
          },
        },
        {
          type: "testimonial",
          content: {
            quote: "KOgenie literally read my customer’s mind. The first ad got us 300% higher engagement.",
            author: "Ritu Sharma, D2C Founder",
          },
        },
        {
          type: "ad",
          content: {
            headline: "🚀 Boost Your Conversion Rate.",
            body: "HyperTargeted ads for your SaaS product. Speak to the right persona at the right moment.",
          },
        },
        {
          type: "stat",
          content: {
            label: "CTR Uplift",
            value: "+4.7%",
            sub: "Average uplift seen across campaigns using KOgenie.",
          },
        },
        {
          type: "ad",
          content: {
            headline: "🧼 Gentle on Skin. Tough on Acne.",
            body: "Try our AI-optimized skincare ads. Tailored to your customer pain points.",
          },
        },
        {
          type: "quote",
          content: {
            quote: "Good ads persuade. Great ads feel like conversations.",
          },
        },
        {
          type: "ad",
          content: {
            headline: "🎯 Real Estate Ads That Actually Convert",
            body: "Get leads, not impressions. Personalized ad copy that sells location + lifestyle.",
          },
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white/20 backdrop-blur-md text-white p-6 rounded-2xl shadow-lg w-full h-60 flex flex-col justify-center"
        >
          {item.type === "ad" && (
            <>
              <h3 className="text-xl font-semibold mb-2">{item.content.headline}</h3>
              <p className="text-sm">{item.content.body}</p>
            </>
          )}
          {item.type === "testimonial" && (
            <>
              <p className="italic text-md mb-2">“{item.content.quote}”</p>
              <p className="text-sm text-right">– {item.content.author}</p>
            </>
          )}
          {item.type === "stat" && (
            <>
              <p className="text-xs uppercase tracking-widest mb-1">{item.content.label}</p>
              <h2 className="text-4xl font-bold mb-1">{item.content.value}</h2>
              <p className="text-xs text-white/80">{item.content.sub}</p>
            </>
          )}
          {item.type === "quote" && (
            <p className="text-center text-lg italic font-light">“{item.content.quote}”</p>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
}
