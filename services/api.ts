export const storeAd = async (adData: any, userEmail: string) => {
  if (!userEmail) {
    console.error("User not authenticated");
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
      throw new Error("Failed to store ad");
    }

    console.log("✅ Ad stored successfully");
  } catch (error) {
    console.error("❌ Error storing ad:", error);
  }
};