const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex h-screen w-full items-center justify-center relative overflow-hidden px-4"
      style={{
        background: "linear-gradient(to right, #4B0082, #8A2BE2, #ffffff)",
      }}
    >
      {/* 🔵 Large Soft Blurred Circles */}
      <div className="absolute w-96 h-96 bg-white/10 backdrop-blur-2xl rounded-full top-10 left-16 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-indigo-400/20 backdrop-blur-2xl rounded-full bottom-20 right-20 animate-pulse"></div>

      {/* ✨ Glowing Floating Elements */}
      <div className="absolute w-24 h-24 bg-indigo-500/20 blur-xl rounded-full top-1/3 left-1/4 animate-bounce"></div>
      <div className="absolute w-16 h-16 bg-purple-500/20 blur-lg rounded-full bottom-1/4 right-1/3 animate-bounce"></div>

      {/* 🌫️ Subtle Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

      {/* 🟡 Small Floating Dots for a Futuristic Look */}
      <div className="absolute w-3 h-3 bg-white/30 rounded-full top-1/4 left-1/3 animate-spin"></div>
      <div className="absolute w-2 h-2 bg-white/40 rounded-full top-2/3 right-1/4 animate-ping"></div>
      <div className="absolute w-2.5 h-2.5 bg-white/20 rounded-full bottom-1/4 left-1/5 animate-pulse"></div>

      {/* 🌟 Center Star-like Glowing Effect */}
      <div className="absolute w-32 h-32 bg-white/10 rounded-full blur-3xl opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl md:h-[600px]">
        {children}
      </div>
    </div>
  );
};

export default ClerkLayout;
