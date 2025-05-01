"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function RedirectClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hasRun = useRef(false);
  const [message, setMessage] = useState("Processing Instagram connection...");

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const fbConnected = searchParams.get("fbConnected");
    const orgId = searchParams.get("orgId");

    console.log("🔍 Redirect Debug:", { fbConnected, orgId });

    if (fbConnected === "success" && orgId) {
      alert("✅ Instagram account connected!");
      setMessage("Redirecting to your workspace...");
      router.replace(`/organization/${orgId}`);
    } else {
      alert("❌ Something went wrong with the connection.");
      setMessage("Missing organization ID or bad redirect.");
      router.replace("/");
    }
  }, [router, searchParams]);

  return <p className="text-center mt-10 text-lg">{message}</p>;
}