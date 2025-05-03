"use client";

import { useUser, useOrganization } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";


const ConnectInstagramButton = () => {
  const { user } = useUser();
  const { organization } = useOrganization();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleConnect = () => {
    if (!user?.id || !organization?.id) return;

    setIsRedirecting(true);

    const backendBaseUrl =
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "https://api.kogenie.com";

    const returnPath = `/organization/${organization.id}/createAd`;

    const redirectUrl = `${backendBaseUrl}/api/auth/facebook?userId=${user.id}&orgId=${organization.id}&returnPath=${returnPath}`;

    window.location.href = redirectUrl;
  };

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
      <button
  type="button"
  onClick={() => setIsOpen(!isOpen)}
  className="w-full inline-flex justify-between items-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-gray-700 font-semibold shadow-sm transition-all duration-200 hover:bg-white/20"
>
  Tools & Settings
  {isOpen ? <ChevronUp className="ml-2 w-5 h-5" /> : <ChevronDown className="ml-2 w-5 h-5" />}
</button>

      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-gray-100
         ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-2">
            <button
              onClick={handleConnect}
              disabled={!user?.id || !organization?.id || isRedirecting}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-sky-500/10 transition"
            >
              {isRedirecting ? "Redirecting..." : "Connect Instagram"}
            </button>

            <button
              onClick={() => handleNavigation("/userinsights")}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-sky-500/10 transition"
            >
              View Insights
            </button>

            {/* Add more dropdown options here as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectInstagramButton;
