"use client";

import { useUser, useOrganization } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import PopupModal from "@/components/PopupModal";

const ConnectInstagramButton = () => {
  const { user } = useUser();
  const { organization } = useOrganization();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
      {/* 🔘 Instagram Toggle */}
      <div className="mb-4">
        <div className="flex justify-between items-center px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow">
          <span className="text-sm text-gray-800 font-medium">Instagram</span>
          <label className="relative inline-block w-12 h-6 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              disabled={isRedirecting}
              onChange={() => setIsPopupOpen(true)}
            />
            <div className="absolute inset-0 bg-gray-400 rounded-full transition" />
            <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300" />
          </label>
        </div>
      </div>

      {/* ▼ Tools & Settings */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full inline-flex justify-between items-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-gray-700 font-semibold shadow-sm transition-all duration-200 hover:bg-white/20"
      >
        Tools & Settings
        {isOpen ? <ChevronUp className="ml-2 w-5 h-5" /> : <ChevronDown className="ml-2 w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5">
          <div className="py-2">
            <button
              onClick={() => handleNavigation("/userinsights")}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-sky-500/10 transition"
            >
              View Insights
            </button>
          </div>
        </div>
      )}

      {/* 🌟 Connect Confirmation Modal */}
      <PopupModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h3 className="text-lg font-semibold mb-2">Connect Instagram?</h3>
        <p className="text-sm text-gray-500 mb-4">
          This will redirect you to Meta to connect your Instagram account.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleConnect}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Yes, Connect
          </button>
          <button
            onClick={() => setIsPopupOpen(false)}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </PopupModal>
    </div>
  );
};

export default ConnectInstagramButton;
