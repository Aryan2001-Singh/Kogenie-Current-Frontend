const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,

  images: {
    domains: [
      "img.clerk.com",
      "images.unsplash.com",
      "images-eu.ssl-images-amazon.com", // ✅ Amazon
      "m.media-amazon.com",              // ✅ Amazon
      "rukminim2.flixcart.com",          // ✅ Flipkart
      "assets.myntassets.com",           // ✅ Myntra
      "cdn.stability.ai",                // ✅ Stability AI (NEW)
      "via.placeholder.com",             // ✅ Placeholder
    ],
    remotePatterns: [
      { protocol: "https", hostname: "img.clerk.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images-eu.ssl-images-amazon.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "rukminim2.flixcart.com" },
      { protocol: "https", hostname: "assets.myntassets.com" },
      { protocol: "https", hostname: "cdn.stability.ai" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
    minimumCacheTTL: 60,

    // ✅ Allow base64 and blob URLs (required for production images with data:)
    contentSecurityPolicy: "default-src 'self'; img-src * data: blob:;",
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }

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
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(self), microphone=()",
          },
          { key: "X-Robots-Tag", value: "index, follow" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;