const nextConfig = {
  reactStrictMode: true, // ✅ Enables React's strict mode for better debugging
  swcMinify: true, // ✅ Keep SWC minification enabled for better performance
  productionBrowserSourceMaps: false, // ✅ Prevents source map generation in production to improve security

  images: {
    domains: [
      "img.clerk.com",
      "images.unsplash.com",

      // ✅ Amazon image domains
      "m.media-amazon.com",
      "images-na.ssl-images-amazon.com",
      "images-eu.ssl-images-amazon.com",
      "images.amazon.com",
      "media-amazon.com",

      // ✅ Flipkart
      "rukminim1.flixcart.com",
      "img1a.flixcart.com",

      // ✅ Myntra
      "assets.myntassets.com",
      "image.myntra.com",
    ],
    remotePatterns: [
      { protocol: "https", hostname: "img.clerk.com" },
      { protocol: "https", hostname: "images.unsplash.com" },

      // ✅ Amazon
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com" },
      { protocol: "https", hostname: "images-eu.ssl-images-amazon.com" },
      { protocol: "https", hostname: "images.amazon.com" },
      { protocol: "https", hostname: "media-amazon.com" },

      // ✅ Flipkart
      { protocol: "https", hostname: "rukminim1.flixcart.com" },
      { protocol: "https", hostname: "img1a.flixcart.com" },

      // ✅ Myntra
      { protocol: "https", hostname: "assets.myntassets.com" },
      { protocol: "https", hostname: "image.myntra.com" },
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
          { key: "Permissions-Policy", value: "geolocation=(self), microphone=()" },
          { key: "X-Robots-Tag", value: "index, follow" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;