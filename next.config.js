const nextConfig = {
  swcMinify: false,
  productionBrowserSourceMaps: false, // Prevent source map generation in production
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack(config) {
    // Add custom webpack configurations here if needed
    return config;
  },
};


module.exports = nextConfig;
