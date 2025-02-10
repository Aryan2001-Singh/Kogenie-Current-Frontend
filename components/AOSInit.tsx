"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return null; // This component doesn't render anything, just initializes AOS
}