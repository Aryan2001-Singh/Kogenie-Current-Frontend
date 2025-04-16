"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminInsightsButton = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (isLoaded && user?.publicMetadata?.role === "admin") {
      setIsAdmin(true);
    }
  }, [isLoaded, user]);

  if (!isAdmin) return null;

  return (
    <div className="space-y-3 mt-6">
      <button
        onClick={() => router.push("/data/insights")}
        className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700 transition"
      >
        📊 View Admin Insights
      </button>
    </div>
  );
};

export default AdminInsightsButton;