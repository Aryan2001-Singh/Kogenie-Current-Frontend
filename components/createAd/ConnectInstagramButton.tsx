"use client";

import { useUser, useOrganization } from "@clerk/nextjs";
import { useState } from "react";

const ConnectInstagramButton = () => {
  const { user } = useUser();
  const { organization } = useOrganization();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleConnect = () => {
    if (!user?.id || !organization?.id) return;

    setIsRedirecting(true);

    const backendBaseUrl =
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "https://api.kogenie.com";

    const returnPath = encodeURIComponent(
      `/organization/${organization.id}/createAd`
    );

    const redirectUrl = `${backendBaseUrl}/api/auth/facebook?userId=${user.id}&orgId=${organization.id}&returnPath=${returnPath}`;

    window.location.href = redirectUrl;
  };

  return (
    <button
      onClick={handleConnect}
      className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all duration-200"
      disabled={!user?.id || !organization?.id || isRedirecting}
    >
      {isRedirecting ? "Redirecting..." : "Connect Instagram"}
    </button>
  );
};

export default ConnectInstagramButton;
