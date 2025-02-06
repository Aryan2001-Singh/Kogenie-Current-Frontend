export const storeAd = async (adData: any, userEmail: string) => {
  if (!userEmail) {
    console.error("❌ User not authenticated");
    return;
  }

  const adPayload = {
    ...adData,
    userEmail, // ✅ User email is now passed from the component
  };

  try {
    const response = await fetch("https://kogenie-current-backend.onrender.com/api/ads/store", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adPayload),
    });

    if (!response.ok) {
      const errorData = await response.json(); // ✅ Fetch error details for better debugging
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
    const response = await fetch("https://kogenie-current-backend.onrender.com/api/ads");
    
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
