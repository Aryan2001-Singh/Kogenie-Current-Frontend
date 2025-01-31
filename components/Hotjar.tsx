"use client";

import { useEffect } from "react";

// ✅ Declare Hotjar globally & define `q` to avoid TypeScript errors
declare global {
  interface Window {
    hj?: { (...args: unknown[]): void; q?: unknown[] }; // Replacing `any` with `unknown[]`
    _hjSettings?: { hjid: number; hjsv: number };
  }
}

const HOTJAR_ID = 5287501; // 🔹 Replace with your actual Hotjar Site ID
const HOTJAR_VERSION = 6; // 🔹 Default is `6`, keep it unchanged

const Hotjar = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.hj) {
      // ✅ Initialize Hotjar function globally
      window.hj = function (...args: unknown[]) {
        // Define `q` as an array of unknown values
        (window.hj!.q = window.hj!.q || []).push(args);
      };

      window._hjSettings = { hjid: HOTJAR_ID, hjsv: HOTJAR_VERSION };

      const head = document.querySelector("head");
      if (!head) return;

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://static.hotjar.com/c/hotjar-${HOTJAR_ID}.js?sv=${HOTJAR_VERSION}`;

      head.appendChild(script);
    }
  }, []);

  return null; // ✅ No UI, just loads the script
};

export default Hotjar;
