"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAdStore } from "@/store/useAdStore";
import { FaArrowRight } from "react-icons/fa";

const advertisementFacts = [
  "Ad spending worldwide reached over $600 billion in 2023.",
  "Video ads increase engagement by 49% compared to static ads.",
  "Instagram ads can reach over 1.4 billion people globally.",
  "Over 80% of people recall a video ad they watched in the past 30 days.",
  "Mobile advertising makes up more than 70% of digital ad spend.",
];

const OrganizationIdPage = () => {
  const [url, setUrl] = useState<string>("");
  const [gender, setGender] = useState("global");
  const [ageGroup, setAgeGroup] = useState("9-18");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentFact, setCurrentFact] = useState(0);
  const [showTooltip] = useState(false);
  const router = useRouter();
  const { organizationId } = useParams();
  const setAdData = useAdStore((state) => state.setAdData);

  useEffect(() => {
    const factInterval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % advertisementFacts.length);
    }, 5000);
    return () => clearInterval(factInterval);
  }, []);

  // Check if URL is valid
  const isUrlValid = (url: string) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true); // ✅ Start the loader when button is clicked
  
    if (!isUrlValid(url)) {
      setError("Please enter a valid URL.");
      setLoading(false);
      return;
    }
  
    // ✅ Log before making the API request
    console.log("📤 Sending request to backend with:", {
      url,
      gender,
      ageGroup,
    });
  
    try {
      const response = await fetch("https://kogenie-current-backend.onrender.com/createAd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, gender, ageGroup }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("✅ API Response:", data);
  
        setAdData(data);
  
        setTimeout(() => {
          router.push(`/organization/${organizationId}/createAd`);
        }, 500); // ✅ Small delay to ensure Zustand updates state
      } else {
        throw new Error(data.error || "Failed to generate ad");
      }
    } catch (err) {
      console.error("❌ An error occurred while generating the ad:", err);
      setError("An error occurred while generating the ad.");
    } finally {
      setLoading(false); // ✅ Stop the loader when API call is finished
    }
  };
  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(to right, #4B0082, #8A2BE2, #ffffff)",
      }}
    >
      {/* 🔵 Large Soft Blurred Circles */}
      <div className="absolute w-96 h-96 bg-white/10 backdrop-blur-2xl rounded-full top-10 left-16 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-indigo-400/20 backdrop-blur-2xl rounded-full bottom-20 right-20 animate-pulse"></div>

      {/* ✨ Glowing Floating Elements */}
      <div className="absolute w-24 h-24 bg-indigo-500/20 blur-xl rounded-full top-1/3 left-1/4 animate-bounce"></div>
      <div className="absolute w-16 h-16 bg-purple-500/20 blur-lg rounded-full bottom-1/4 right-1/3 animate-bounce"></div>

      {/* 🌫️ Subtle Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

      {/* 🟡 Small Floating Dots for a Futuristic Look */}
      <div className="absolute w-3 h-3 bg-white/30 rounded-full top-1/4 left-1/3 animate-spin"></div>
      <div className="absolute w-2 h-2 bg-white/40 rounded-full top-2/3 right-1/4 animate-ping"></div>
      <div className="absolute w-2.5 h-2.5 bg-white/20 rounded-full bottom-1/4 left-1/5 animate-pulse"></div>

      {/* 🌟 Center Star-like Glowing Effect */}
      <div className="absolute w-32 h-32 bg-white/10 rounded-full blur-3xl opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Your Main Content */}
      <div className="relative z-10">
        {/* Add your actual UI components here */}
      </div>

      {/* Main Content */}
      <div
        className="w-[90%] max-w-xl bg-gradient-to-r from-white to-gray-100 
        p-8 rounded-xl shadow-xl border border-gray-200 relative"
      >
        <h1
          style={{
            fontFamily: "serif",
          }}
          className="text-3xl font-bold mb-4 text-center drop-shadow-lg"
        >
          Generate AI-Powered Ads
        </h1>

        {/* Cycling Advertisement Fact */}
        <p className="text-gray-500 text-sm text-center mb-6 animate-fade">
          {advertisementFacts[currentFact]}
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4 w-full"
        >
          {/* URL Input */}
          <input
            style={{ fontFamily: "serif" }}
            type="text"
            placeholder="Enter Product URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-3 text-black rounded-lg border border-gray-300 outline-none focus:ring-4 focus:ring-indigo-300"
            required
          />

          {/* Gender & Age Selection */}
          <div className="flex w-full justify-between space-x-4">
            <select
              style={{ fontFamily: "serif" }}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="flex-1 p-3 rounded-lg text-black border border-gray-300"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
              <option value="global">Global</option>
            </select>

            <select
              value={ageGroup}
              style={{ fontFamily: "serif" }}
              onChange={(e) => setAgeGroup(e.target.value)}
              className="flex-1 p-3 rounded-lg text-black border border-gray-300"
            >
              <option value="9-18">9-18</option>
              <option value="18-25">18-25</option>
              <option value="25-40">25-40</option>
              <option value="40-60">40-60</option>
              <option value="60+">60+</option>
            </select>
          </div>

          {/* Buttons Section */}
          <div className="flex w-full justify-center space-x-4 mt-6">
            <div className="relative">
            <button
  type="submit"
  disabled={loading || !isUrlValid(url)} // ✅ Disable button while loading
  className={`w-full md:w-auto px-6 py-3 rounded-lg transition-all transform 
    font-semibold flex items-center justify-center space-x-2 shadow-lg relative
    ${
      loading
        ? "bg-gray-400 cursor-not-allowed" // ✅ Disabled style while loading
        : "bg-indigo-400 hover:bg-indigo-500 hover:scale-105 text-white"
    }
  `}
>
  {loading ? (
    <div className="flex items-center">
      <div className="animate-spin rounded-full h-5 w-5 border-t-4 border-white"></div>
      <span className="ml-2">Generating Ad...</span>
    </div>
  ) : (
    <>
      Generate Ad
      <FaArrowRight className="ml-2" />
    </>
  )}
</button>

              {/* Tooltip (Always Visible When Hovered) */}
              {showTooltip && !isUrlValid(url) && (
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 -top-12 
                  bg-black text-white text-xs px-3 py-2 rounded-md shadow-lg z-50 opacity-100"
                >
                  Enter Product URL to proceed
                </div>
              )}
            </div>

            {/* Second Button - Enter Manually */}
            <button
              style={{ fontFamily: "serif" }}
              onClick={() =>
                router.push(`/organization/${organizationId}/manualEntry`)
              }
              className="w-full md:w-auto px-6 py-3 rounded-lg bg-yellow-300 border-2 border-yellow-500 text-black 
                hover:bg-yellow-400 hover:text-black transition-all transform hover:scale-110 font-semibold flex items-center 
                justify-center space-x-2 shadow-lg"
            >
              Skip & Enter Manually
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && <p className="text-red-400 mt-3">{error}</p>}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          50% {
            opacity: 1;
            transform: translateY(0px);
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fade {
          animation: fade 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default OrganizationIdPage;

// "use client";

// import { useState, useEffect, FormEvent, CSSProperties } from "react";
// import { useRouter, useParams } from "next/navigation";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { useAdStore } from "@/store/useAdStore";

// const OrganizationIdPage = () => {
//   const [url, setUrl] = useState<string>("");
//   const router = useRouter();
//   const { organizationId } = useParams();
//   const setAdData = useAdStore((state) => state.setAdData);

//   const handleSkip = () => {
//     router.push(`/organization/${organizationId}/manualEntry`);
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!url || !url.startsWith("http")) return;
//     router.push(`/organization/${organizationId}/createAd`);
//   };

//   return (
//     <div className="flex h-full min-h-screen w-full"> {/* Ensures full height */}

//     {/* Main Content */}
//     <main
//   className="relative flex-1 flex flex-col items-center justify-center
//   bg-gradient-to-br from-[#5B3679] via-[#C29CE1] to-[#5B3679]
//   p-10 overflow-hidden"
// >
//   {/* Glassmorphism Effect Overlay */}
//   <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl
//    rounded-lg z-[-1]"></div>

//   {/* Pulsing Neon Lights */}
//   <div className="absolute top-20 left-10 w-96 h-96 bg-[#C29CE1]/40
//    blur-[150px] rounded-full z-[-1] animate-pulse"></div>
//   <div className="absolute bottom-12 right-16 w-80 h-80 bg-[#5B3679]/40
//    blur-[130px] rounded-full z-[-1] animate-pulse"></div>

//   {/* Moving Wave Effect */}
//   <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t
//    from-[#5B3679] to-transparent opacity-50 animate-bounce"></div>

//   {/* Floating Particle Animation */}
//   <div className="absolute w-4 h-4 bg-[#C29CE1] rounded-full top-12 left-1/4
//    blur-[6px] animate-floating"></div>
//   <div className="absolute w-6 h-6 bg-[#5B3679] rounded-full top-40 right-10
//    blur-[8px] animate-floating"></div>

//   {/* 3D Styled Neon Text */}
//   <div className="relative w-full flex flex-col items-center justify-center">
//     <h1 className="text-white text-5xl font-extrabold drop-shadow-[0_0_20px_#C29CE1]
//      tracking-wide uppercase">
//       AI-Powered Ad Creation 🚀
//     </h1>
//     <p className="text-white/80 mt-4 mb-4 text-lg drop-shadow-[0_0_12px_#5B3679]  ">
//       Generate stunning ads with futuristic visuals & automation.
//     </p>
//   </div>

// <style jsx>{`
//   @keyframes floating {
//     0% { transform: translateY(0px); }
//     50% { transform: translateY(-10px); }
//     100% { transform: translateY(0px); }
//   }

// `}</style>

//       <div className="flex space-x-12"> {/* Increased spacing */}

//         {/* Card 1 - Generate Manually */}
//         <div
//   className="w-63 h-80 p-8 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.3)]
//  flex flex-col items-center
//    justify-center text-center transform transition duration-300 hover:scale-105
//    hover:drop-shadow-[0_0_10px_#8000ff] cursor-pointer"
//   style={{ backgroundColor: "rgba(254, 213, 118, 1)" }}
//   onClick={() => router.push("/organization/${organizationId}/manualEntry")}
// >
//   <div className="flex flex-col items-center justify-center">
//     <h2 className="text-lg font-semibold text-gray-800 leading-tight pt-4">
//       Create your own <span className="text-indigo-600">Product Ads</span> just by giving URL
//     </h2>
//     <FaArrowUpRightFromSquare className="text-gray-700 text-2xl mt-4" />
//   </div>
//   <h3 className="mt-6 font-bold text-xl text-black drop-shadow-lg ">Generate Manually</h3>
// </div>

//         {/* Card 2 - Generate with URL */}
//         <div
//   className="w-64 h-80 bg-white p-8 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.3)]
//  flex
//    flex-col items-center justify-center text-center transform transition duration-300
//    hover:scale-105 hover:drop-shadow-[0_0_10px_#8000ff]  cursor-pointer"
//   onClick={() => router.push("/generate-url")}
// >
//   <div className="flex flex-col items-center justify-center">
//     <h2 className="text-lg font-semibold text-gray-800 leading-tight pt-4">
//       Create Ads by filling Product details manually
//     </h2>
//     <FaArrowUpRightFromSquare className="text-gray-700 text-2xl mt-4" />
//   </div>
//   <h3 className="mt-6 font-bold text-xl text-indigo-600"
//   >Generate with URL</h3>
// </div>
// </div>
//         {/* Footer */}
//         <footer className="mt-10 text-gray-800 text-sm flex flex-col items-center">
//           <p className="mb-2">🚀 Create Ads and publish on</p>
//           <div className="flex space-x-4 text-xl">
//             <FaFacebook className="text-blue-600" />
//             <FaInstagram className="text-pink-600" />
//             <FaLinkedin className="text-blue-500" />
//             <FaTwitter className="text-blue-400" />
//           </div>
//           <p className="mt-2">🚀 Publish your Ads and Check for Insights</p>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default OrganizationIdPage;
// "use client";

// import { useState, useEffect, FormEvent, CSSProperties } from "react";
// import { useRouter, useParams } from "next/navigation";
// // import { Button } from "@/components/ui/button";
// import { useAdStore } from "@/store/useAdStore";

// const advertisementFacts = [
//   "Ad spending worldwide reached over $600 billion in 2023.",
//   "Video ads increase engagement by 49% compared to static ads.",
//   "Instagram ads can reach over 1.4 billion people globally.",
//   "Over 80% of people recall a video ad they watched in the past 30 days.",
//   "Mobile advertising makes up more than 70% of digital ad spend.",
//   "Companies that run ad campaigns on Instagram see a 10 times higher engagement rate.",
//   "Around 33% of users find new products through social media ads.",
//   "Carousel ads can drive 72% more clicks than single-image ads.",
//   "Users are more likely to purchase after seeing retargeted ads.",
//   "Native ads outperform traditional display ads by 53%.",
//   "Social media ad spending is expected to reach $268 billion by 2024.",
//   "People spend 3 hours daily on social media, making it a key platform for advertising.",
//   "Colorful ads can increase brand recognition by up to 80%.",
//   "Personalized ads lead to a 20% increase in sales.",
//   "Interactive ads generate 3 times more engagement than static ads.",
//   "Video content is 40 times more likely to be shared on social media than other content.",
//   "Dynamic ads can boost click-through rates by up to 300%.",
//   "Advertising on social media increases brand loyalty by 45%.",
//   "Social media ads drive higher conversion rates compared to traditional online ads.",
//   "Consumers spend more time engaging with ads that use a storytelling format.",
//   "Around 70% of marketers use Instagram ads as part of their strategy.",
//   "Users are 52% more likely to share video ads with their network.",
//   "Facebook's ad reach exceeded 2.9 billion users in 2022.",
//   "Brands using ads on Instagram Stories saw a 73% higher conversion rate.",
//   "Effective ad copy can improve conversion rates by as much as 113%.",
//   // Additional facts here
// ];

// const OrganizationIdPage = () => {

//   const [url, setUrl] = useState<string>("");   // ✅ Persist input in localStorage
//   const [gender, setGender] = useState("global");
//   const [ageGroup, setAgeGroup] = useState("9-18");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [currentFact, setCurrentFact] = useState(0);
//   const router = useRouter();
//   const { organizationId } = useParams();
//   const setAdData = useAdStore((state) => state.setAdData);

//   useEffect(() => {
//     if (loading) {
//       const factInterval = setInterval(() => {
//         setCurrentFact((prev) => (prev + 1) % advertisementFacts.length);
//       }, 5000);
//       return () => clearInterval(factInterval);
//     }
//   }, [loading]);

//   useEffect(() => {
//     localStorage.setItem("adUrl", url); // ✅ Save input value to localStorage
//   }, [url]);

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     if (!url || !url.startsWith("http")) {
//       setError("Please enter a valid URL.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("https://kogenie-current-backend.onrender.com/createAd", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ url, gender, ageGroup }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setAdData(data);
//         router.push(`/organization/${organizationId}/createAd`);
//       } else {
//         throw new Error(data.error || "Failed to generate ad");
//       }
//     } catch (error) {
//       console.error("Error occurred:", error); // Log the error for debugging
//       setError("An error occurred while generating the ad.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSkip = () => {
//     router.push(`/organization/${organizationId}/manualEntry`);
//   };

//   const containerStyle: CSSProperties = {
//     textAlign: "center",
//     padding: "20px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     height: "50vh",
//     width: "100%",
//     background: "rgb(243 244 246)",
//     boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
//     borderRadius: "10px",
//   };

//   const inputStyle: CSSProperties = {
//     padding: "8px 20px",
//     width: "100%",
//     maxWidth: "300px",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     fontSize: "16px",
//     boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
//     marginBottom: "10px",
//   };

//   const selectStyle: CSSProperties = {
//     padding: "10px",
//     borderRadius: "5px",
//     margin: "0 5px",
//   };

//   const spinnerStyle: CSSProperties = {
//     border: "4px solid #f3f3f3",
//     borderTop: "4px solid #DB4A2B",
//     borderRadius: "50%",
//     width: "40px",
//     height: "40px",
//     animation: "spin 1s linear infinite",
//     margin: "0 auto",
//   };

//   const buttonContainerStyle: CSSProperties = {
//     display: "flex",
//     justifyContent: "center",
//     gap: "10px",
//     marginTop: "10px",
//   };

//   const buttonStyle: CSSProperties = {
//     padding: "8px 20px",
//     background: "#DB4A2B",
//     color: "white",
//     borderRadius: "5px",
//     boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
//     transition: "all 0.3s ease",
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={{ marginBottom: "20px", fontSize: 35 }}>Generate AI-Powered Ads</h1>

//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
//         <input
//           type="text"
//           placeholder="Enter Product URL"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           style={inputStyle}
//           required
//         />

//         <div style={{ marginBottom: "10px", display: "flex", justifyContent: "center" }}>
//           <label style={selectStyle}>Gender:</label>
//           <select value={gender} onChange={(e) => setGender(e.target.value)} style={selectStyle}>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="others">Others</option>
//             <option value="global">Global</option>
//           </select>

//           <label style={selectStyle}>Age Group:</label>
//           <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} style={selectStyle}>
//             <option value="9-18">9-18</option>
//             <option value="18-25">18-25</option>
//             <option value="25-40">25-40</option>
//             <option value="40-60">40-60</option>
//             <option value="60+">60+</option>
//           </select>
//         </div>

//         <div style={buttonContainerStyle}>
//           <button disabled={loading} style={buttonStyle}>
//             {loading ? "Generating Ad..." : "Generate Ad"}
//           </button>
//           <button onClick={handleSkip} style={buttonStyle}>
//             Skip and Enter Data Manually
//           </button>
//         </div>
//       </form>

//       {loading && (
//         <div>
//           <p>{advertisementFacts[currentFact]}</p>
//           <div style={spinnerStyle} />
//         </div>
//       )}

//       {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

//       <style jsx>{`
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default OrganizationIdPage;
