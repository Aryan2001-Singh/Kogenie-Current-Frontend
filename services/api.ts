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
    const response = await fetch("http://16.171.150.188:5001/api/ads/store", {
      method: "POST",
      credentials:"include",
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
    const response = await fetch("http://16.171.150.188:5001/api/ads");

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
    const response = await fetch("http://16.171.150.188:5001/generateAdPrompt", {
      method: "POST",
      credentials:"include",
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