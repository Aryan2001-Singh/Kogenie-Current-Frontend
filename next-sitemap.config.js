/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.kogenie.com", // ✅ Your actual site URL (removed extra `/`)
  generateRobotsTxt: false, // ✅ Generates robots.txt file
  sitemapSize: 5000, // ✅ Prevents splitting unless necessary

  // ✅ Exclude specific admin and error pages from indexing
  exclude: [
    "/admin",
    "/admin/*", // Excludes all subpages inside /admin
    "/404",
    "/500",
  ],

  // ✅ Configure robots.txt rules correctly
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // ✅ Allow all pages
      { userAgent: "*", disallow: ["/admin", "/admin/*", "/404", "/500"] }, // ✅ Block admin & error pages
    ],
    additionalSitemaps: [
      "https://www.kogenie.com/sitemap.xml", // ✅ Single correct sitemap
    ],
  },
};