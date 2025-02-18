const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #4B0082, #8A2BE2, #ffffff)",
      }}
    >
      {children}
    </div>
  );
};

export default ClerkLayout;