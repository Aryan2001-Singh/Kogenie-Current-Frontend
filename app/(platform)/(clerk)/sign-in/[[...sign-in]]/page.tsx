"use client";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
export default function SignInPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left: Sign In Form */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-white border-1 border-grey-300 shadow-md p-8">
      {/* Accessible and SEO-friendly h1 (invisible if you want to keep design clean) */}
<h1 className="sr-only">Sign in to KOgenie</h1>

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
          <p className="text-sm  mt-10 text-gray-600">
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
             { image: "/sign1.png" },
             { image: "/sign2.png" },
             { image: "/sign3.png" },
             { image: "/sign4.png" },
             { image: "/sign5.png" },
             { image: "/sign6.png" },
             { image: "/sign1.png" },
             { image: "/sign2.png" },
             { image: "/sign3.png" },
             { image: "/sign4.png" },
             { image: "/sign5.png" },
             { image: "/sign6.png" },
             { image: "/sign1.png" },
             { image: "/sign2.png" },
             { image: "/sign3.png" },
             { image: "/sign4.png" },
             { image: "/sign5.png" },
             { image: "/sign6.png" },
             { image: "/sign1.png" },
             { image: "/sign2.png" },
             { image: "/sign3.png" },
             { image: "/sign4.png" },
             { image: "/sign5.png" },
             { image: "/sign6.png" },
           ].map((item, i) => (
             <div
               key={i}
               className="relative w-[350px] h-[420px] mx-auto rounded-2xl overflow-hidden shadow-2xl"
             >
               <Image
                 src={item.image}
                 alt={`Ad example ${i + 1}`}
                 fill
                 style={{ objectFit: "cover" }}
                 className="rounded-2xl"
                 priority={i < 3} // prioritize the first few
               />
               <div className="absolute inset-0 bg-black/10"></div>
             </div>
           ))}
          </div>
        </div>
      </div>
    </div>
  );
}
