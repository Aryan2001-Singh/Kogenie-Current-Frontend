/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://kogenie.com", // ✅ Ensure it's correct
  generateRobotsTxt: true, // ✅ Generates robots.txt
  sitemapSize: 7000, // ✅ Keeps all URLs in one sitemap

  // ✅ Exclude unwanted pages
  exclude: ["/admin", "/admin/*", "/404", "/500"],

  // ✅ Fix Nested Sitemap issue
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/admin/*", "/404", "/500"] },
    ],
    additionalSitemaps: [
      "https://kogenie.com/sitemap-0.xml", // ✅ Use only this sitemap
    ],
  },
};