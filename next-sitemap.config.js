/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://kogenie.com",            // ✅ Make sure this matches your live domain
  generateRobotsTxt: true,                   // ✅ Auto-generates robots.txt
  sitemapSize: 7000,                         // ✅ Keeps all URLs in one sitemap (unless over 7000)
  exclude: [                                 // ✅ Pages to exclude from both sitemap and indexing
    "/admin", 
    "/admin/*", 
    "/404", 
    "/500"
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",                          // ✅ Allow all other routes
      },
      {
        userAgent: "*",
        disallow: ["/admin", "/admin/*", "/404", "/500"], // ✅ Prevent indexing of these
      },
    ],
  },
};