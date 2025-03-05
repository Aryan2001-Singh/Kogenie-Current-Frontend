import { create } from "zustand";

interface AdData {
  brandName: string;
  productName: string;
  productDescription: string;
  targetAudience: string;
  uniqueSellingPoints: string;
  adCopy: string;
  headline?: string;
  productImages: string[];  // ✅ Store scraped images
  selectedImage: string | null; // ✅ Track selected image
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
    localStorage.setItem("adData", JSON.stringify(data));
    set({ adData: data });
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