"use client";

import { useUser } from "@clerk/nextjs";

const ConnectInstagramButton = () => {
  const { user } = useUser();

  const handleConnect = () => {
    if (!user?.id) return;
    
    // Redirect to backend route to trigger Meta OAuth
    // window.location.href = `https://www.kogenie.com/api/auth/facebook?userId=${user.id}`;
    window.location.href = `http://localhost:5001/api/auth/facebook?userId=${user.id}`;
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