"use client";

import { useState, useEffect, FormEvent, CSSProperties } from "react";
import { useRouter, useParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
import { useAdStore } from "@/store/useAdStore";


const advertisementFacts = [
  "Ad spending worldwide reached over $600 billion in 2023.",
  "Video ads increase engagement by 49% compared to static ads.",
  "Instagram ads can reach over 1.4 billion people globally.",
  "Over 80% of people recall a video ad they watched in the past 30 days.",
  "Mobile advertising makes up more than 70% of digital ad spend.",
  "Companies that run ad campaigns on Instagram see a 10 times higher engagement rate.",
  "Around 33% of users find new products through social media ads.",
  "Carousel ads can drive 72% more clicks than single-image ads.",
  "Users are more likely to purchase after seeing retargeted ads.",
  "Native ads outperform traditional display ads by 53%.",
  "Social media ad spending is expected to reach $268 billion by 2024.",
  "People spend 3 hours daily on social media, making it a key platform for advertising.",
  "Colorful ads can increase brand recognition by up to 80%.",
  "Personalized ads lead to a 20% increase in sales.",
  "Interactive ads generate 3 times more engagement than static ads.",
  "Video content is 40 times more likely to be shared on social media than other content.",
  "Dynamic ads can boost click-through rates by up to 300%.",
  "Advertising on social media increases brand loyalty by 45%.",
  "Social media ads drive higher conversion rates compared to traditional online ads.",
  "Consumers spend more time engaging with ads that use a storytelling format.",
  "Around 70% of marketers use Instagram ads as part of their strategy.",
  "Users are 52% more likely to share video ads with their network.",
  "Facebook's ad reach exceeded 2.9 billion users in 2022.",
  "Brands using ads on Instagram Stories saw a 73% higher conversion rate.",
  "Effective ad copy can improve conversion rates by as much as 113%.",
  // Additional facts here
];



const OrganizationIdPage = () => {

  const [url, setUrl] = useState<string>("");   // ✅ Persist input in localStorage
  const [gender, setGender] = useState("global");
  const [ageGroup, setAgeGroup] = useState("9-18");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentFact, setCurrentFact] = useState(0);
  const router = useRouter();
  const { organizationId } = useParams();
  const setAdData = useAdStore((state) => state.setAdData);



  useEffect(() => {
    if (loading) {
      const factInterval = setInterval(() => {
        setCurrentFact((prev) => (prev + 1) % advertisementFacts.length);
      }, 5000);
      return () => clearInterval(factInterval);
    }
  }, [loading]);

  useEffect(() => {
    localStorage.setItem("adUrl", url); // ✅ Save input value to localStorage
  }, [url]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!url || !url.startsWith("http")) {
      setError("Please enter a valid URL.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://kogenie-current-backend.onrender.com/createAd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, gender, ageGroup }),
      });

      const data = await response.json();
      if (response.ok) {
        setAdData(data);
        router.push(`/organization/${organizationId}/createAd`);
      } else {
        throw new Error(data.error || "Failed to generate ad");
      }
    } catch (error) {
      console.error("Error occurred:", error); // Log the error for debugging
      setError("An error occurred while generating the ad.");
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    router.push(`/organization/${organizationId}/manualEntry`);
  };

  const containerStyle: CSSProperties = {
    textAlign: "center",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "50vh",
    width: "100%",
    background: "rgb(243 244 246)",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  };

  const inputStyle: CSSProperties = {
    padding: "8px 20px",
    width: "100%",
    maxWidth: "300px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px",
  };

  const selectStyle: CSSProperties = {
    padding: "10px",
    borderRadius: "5px",
    margin: "0 5px",
  };

  const spinnerStyle: CSSProperties = {
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #DB4A2B",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
    margin: "0 auto",
  };

  const buttonContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  };

  const buttonStyle: CSSProperties = {
    padding: "8px 20px",
    background: "#DB4A2B",
    color: "white",
    borderRadius: "5px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: "20px", fontSize: 35 }}>Generate AI-Powered Ads</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <input
          type="text"
          placeholder="Enter Product URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={inputStyle}
          required
        />

        <div style={{ marginBottom: "10px", display: "flex", justifyContent: "center" }}>
          <label style={selectStyle}>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} style={selectStyle}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
            <option value="global">Global</option>
          </select>

          <label style={selectStyle}>Age Group:</label>
          <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} style={selectStyle}>
            <option value="9-18">9-18</option>
            <option value="18-25">18-25</option>
            <option value="25-40">25-40</option>
            <option value="40-60">40-60</option>
            <option value="60+">60+</option>
          </select>
        </div>

        <div style={buttonContainerStyle}>
          <button disabled={loading} style={buttonStyle}>
            {loading ? "Generating Ad..." : "Generate Ad"}
          </button>
          <button onClick={handleSkip} style={buttonStyle}>
            Skip and Enter Data Manually
          </button>
        </div>
      </form>

      {loading && (
        <div>
          <p>{advertisementFacts[currentFact]}</p>
          <div style={spinnerStyle} />
        </div>
      )}

      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default OrganizationIdPage;