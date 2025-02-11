import { create } from 'zustand';

interface AdData {
  brandName: string;
  productName: string;
  productDescription: string;
  targetAudience: string;
  uniqueSellingPoints: string;
  adCopy: string;
  headline?: string;
}

interface AdState {
  adData: AdData | null;
  setAdData: (data: AdData) => void;
  clearAdData: () => void; // ✅ Function to clear ad data
}

export const useAdStore = create<AdState>((set) => ({
  adData: null,
  setAdData: (data: AdData) => {
    localStorage.setItem("adData", JSON.stringify(data)); // ✅ Persist ad data in localStorage
    set({ adData: data });
  },
  clearAdData: () => {
    localStorage.removeItem("adData"); // ✅ Clear ad data from localStorage
    set({ adData: null });
  },
}));
