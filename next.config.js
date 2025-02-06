const nextConfig = {
  reactStrictMode: true, // ✅ Enables React's strict mode for better debugging
  swcMinify: true, // ✅ Keep SWC minification enabled for better performance
  productionBrowserSourceMaps: false, // ✅ Prevents source map generation in production to improve security

  images: {
    domains: ["img.clerk.com", "images.unsplash.com"], // ✅ More concise way to allow external images
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
    minimumCacheTTL: 60, // ✅ Cache images for at least 60 seconds
  },

  experimental: {
    optimizeCss: true, // ✅ Optimizes CSS to reduce unused styles
    scrollRestoration: true, // ✅ Improves navigation experience by restoring scroll position
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = { fs: false }; // ✅ Prevents client-side bundling issues with `fs` module
    }

    // ✅ Example: Enable gzip compression for smaller bundle sizes (Optional)
    config.optimization.splitChunks = {
      chunks: "all",
      maxInitialRequests: 5,
      maxAsyncRequests: 7,
    };

    return config;
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" }, // ✅ Prevents clickjacking attacks
          { key: "X-Content-Type-Options", value: "nosniff" }, // ✅ Prevents MIME type sniffing
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, // ✅ Improves referrer security
          { key: "Permissions-Policy", value: "geolocation=(self), microphone=()" }, // ✅ Restrict browser features
        ],
      },
    ];
  },
};

module.exports = nextConfig;
