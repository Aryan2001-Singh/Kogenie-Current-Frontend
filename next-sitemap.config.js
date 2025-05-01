/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://kogenie.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/admin", "/admin/*", "/404", "/500"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/admin", "/admin/*", "/404", "/500"],
      },
    ],
  },
};