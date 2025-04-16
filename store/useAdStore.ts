import { create } from "zustand";

interface AdData {
  _id: string; // ✅ MongoDB ad ID
  adType: "manual" | "scraped"; // ✅ Needed to know the model
  brandName: string;
  productName: string;
  productDescription: string;
  targetAudience: string;
  uniqueSellingPoints: string;
  brandVoice: string;
  awarenessStage: string;
  tone: string;
  goal: string;
  theme: string;
  problemItSolves: string;
  useLocation: string;
  adCopy: string;
  headline: string;
  productImages: string[];
  selectedImage: string | null;
}

interface AdState {
  adData: AdData | null;
  setAdData: (data: AdData) => void;
  setSelectedImage: (image: string) => void;
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