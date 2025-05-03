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
        className="w-full inline-flex justify-between items-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-gray-700 font-semibold shadow-sm transition-all duration-200 hover:bg-white/20">

        📊 View Admin Insights
      </button>
    </div>
  );
};

export default AdminInsightsButton;