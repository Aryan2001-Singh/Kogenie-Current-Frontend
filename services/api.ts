export const submitFeedback = async ({
  adId,
  adType,
  rating,
  comment,
}: {
  adId: string;
  adType: "manual" | "scraped";
  rating: number;
  comment: string;
}) => {
  try {
    const response = await fetch("http://localhost:5001/api/ads/feedback", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adId, adType, rating, comment }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to submit feedback");
    }

    console.log("✅ Feedback submitted successfully");
    return true;
  } catch (error) {
    console.error("❌ Error submitting feedback:", error);
    return false;
  }
};

export const storeAd = async (adData: any, userEmail: string) => {
  if (!userEmail) {
    console.error("❌ User not authenticated");
    return;
  }

  const adPayload = {
    ...adData,
    userEmail, // ✅ Pass the user email for tracking
  };

  try {
    // ✅ Send the ad data (including headline) to the backend for storage
    const response = await fetch("http://localhost:5001/api/ads/store", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adPayload),
    });

    if (!response.ok) {
      const errorData = await response.json(); // ✅ Fetch error details for debugging
      throw new Error(errorData.message || "Failed to store ad");
    }

    console.log("✅ Ad stored successfully");
  } catch (error) {
    console.error("❌ Error storing ad:", error);
  }
};

// ✅ Function to fetch all stored ads
export const fetchAds = async () => {
  try {
    const response = await fetch("http://localhost:5001/api/ads");

    if (!response.ok) {
      const errorData = await response.json(); // ✅ Fetch error details if request fails
      throw new Error(errorData.message || "Failed to fetch ads");
    }

    const ads = await response.json(); // ✅ Parse the fetched ads data
    console.log("✅ Ads fetched successfully", ads);
    return ads; // ✅ Return fetched ads to be used in frontend
  } catch (error) {
    console.error("❌ Error fetching ads:", error);
    return []; // ✅ Return an empty array to prevent crashes in frontend
  }
};

// ✅ Function to generate ad copy & headline using the updated backend API
export const generateAd = async (adData: any) => {
  try {
    const response = await fetch("http://localhost:5001/generateAdPrompt", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to generate ad");
    }

    const data = await response.json();
    console.log("✅ Ad generated successfully:", data);
    return data; // ✅ Includes both `adCopy` and `headline`
  } catch (error) {
    console.error("❌ Error generating ad:", error);
    return null;
  }
};

// === INSIGHTS API FUNCTIONS ===

// 1. Total ads per user
export const fetchTotalAdsPerUser = async () => {
  try {
    const response = await fetch(
      "http://localhost:5001/api/insights/total-per-user"
    );
    if (!response.ok) throw new Error("Failed to fetch total ads per user");
    return response.json();
  } catch (err) {
    console.error("❌ fetchTotalAdsPerUser error:", err);
    return [];
  }
};

// 2. Manual vs Scraped Ad Breakdown
export const fetchAdTypeBreakdown = async () => {
  try {
    const response = await fetch(
      "http://localhost:5001/api/insights/ad-type-breakdown"
    );
    if (!response.ok) throw new Error("Failed to fetch ad type breakdown");
    return response.json();
  } catch (err) {
    console.error("❌ fetchAdTypeBreakdown error:", err);
    return { manual: 0, scraped: 0 };
  }
};

// 3. Average feedback rating
export const fetchAvgFeedback = async () => {
  try {
    const response = await fetch(
      "http://localhost:5001/api/insights/avg-feedback"
    );
    if (!response.ok) throw new Error("Failed to fetch avg feedback");
    return response.json();
  } catch (err) {
    console.error("❌ fetchAvgFeedback error:", err);
    return { manual: 0, scraped: 0 };
  }
};

// 4. Top 5 performing ads
export const fetchTopPerforming = async () => {
  try {
    const response = await fetch(
      "http://localhost:5001/api/insights/top-performing"
    );
    if (!response.ok) throw new Error("Failed to fetch top performing ads");
    return response.json();
  } catch (err) {
    console.error("❌ fetchTopPerforming error:", err);
    return { manual: [], scraped: [] };
  }
};
export const fetchFeedbackDistribution = async () => {
  const res = await fetch(
    "http://localhost:5001/api/insights/feedback-distribution"
  ); // ✅ FIXED
  if (!res.ok) throw new Error("Failed to fetch feedback distribution");
  return res.json();
};

export const fetchMonthlyUserGrowth = async () => {
  const res = await fetch(
    "http://localhost:5001/api/insights/user-growth-monthly"
  );
  if (!res.ok) throw new Error("Failed to fetch user growth");
  return res.json();
};

export const fetchMonthlyAdGrowth = async () => {
  const res = await fetch(
    "http://localhost:5001/api/insights/ad-growth-monthly"
  );
  if (!res.ok) throw new Error("Failed to fetch ad growth");
  return res.json();
};

export const fetchUserAdHistory = async (email: string) => {
  try {
    const response = await fetch(
      `http://localhost:5001/api/ads/user-history/${email}`
    );
    if (!response.ok) throw new Error("Failed to fetch user ad history");
    return response.json();
  } catch (error) {
    console.error("❌ Error fetching user ad history:", error);
    return { manual: [], scraped: [] };
  }
};

