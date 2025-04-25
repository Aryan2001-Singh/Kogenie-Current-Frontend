"use client";

import { useUser, useOrganization } from "@clerk/nextjs";

const ConnectInstagramButton = () => {
  const { user } = useUser();
  const { organization } = useOrganization();

  if (!user || !organization) return null;

  const handleConnect = () => {
    const backendBaseUrl = "http://localhost:5001";

    // 🧠 Pass both userId and orgId in query
    const authUrl = `${backendBaseUrl}/api/auth/facebook?userId=${user.id}&orgId=${organization.id}`;
    window.location.href = authUrl;
  };

  return (
    <button
      onClick={handleConnect}
      className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all duration-200 relative z-20"
    >
      Connect Instagram
    </button>
  );
};

export default ConnectInstagramButton;