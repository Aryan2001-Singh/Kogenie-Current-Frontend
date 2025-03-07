import { create } from "zustand";

interface AdData {
  brandName: string;
  productName: string;
  productDescription: string;
  targetAudience: string;
  uniqueSellingPoints: string;
  adCopy: string;
  headline: string;  // ✅ Ensure headline is always a string
  productImages: string[];
  selectedImage: string | null;
}

interface AdState {
  adData: AdData | null;
  setAdData: (data: AdData) => void;
  setSelectedImage: (image: string) => void; // ✅ Function to set selected image
  clearAdData: () => void;
}

export const useAdStore = create<AdState>((set) => ({
  adData: null,
  setAdData: (data: AdData) => {
    const updatedData = {
      ...data,
      headline: data.headline || "Headline Not Generated",  // ✅ Ensure headline is always stored
    };
  
    localStorage.setItem("adData", JSON.stringify(updatedData));
    set({ adData: updatedData });
  },
  setSelectedImage: (image: string) => {
    localStorage.setItem("selectedImage", image);
    set((state) => ({
      adData: state.adData ? { ...state.adData, selectedImage: image } : null,
    }));
  },
  clearAdData: () => {
    localStorage.removeItem("adData");
    localStorage.removeItem("selectedImage");
    set({ adData: null });
  },
}));