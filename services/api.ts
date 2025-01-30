export const storeAd = async (adData: any) => {
    try {
      const response = await fetch("https://kogenie-current-backend.onrender.com/api/ads/store", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to store ad");
      }
  
      console.log("✅ Ad stored successfully");
    } catch (error) {
      console.error("❌ Error storing ad:", error);
    }
  };