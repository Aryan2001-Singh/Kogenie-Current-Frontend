module.exports = {
  siteUrl: 'https://www.kogenie.com/', // Replace with your actual site URL
  generateRobotsTxt: true, // Generates robots.txt
  sitemapSize: 5000, // Optional: Split sitemap if there are many URLs

  // ✅ Exclude admin-related URLs from the sitemap
  exclude: [
    '/admin',
    '/admin/*', // Excludes all subpages inside /admin
  ],

  // ✅ Custom robots.txt rules
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/admin/*'] }, // Blocks admin pages from search engines
    ],
    additionalSitemaps: [
      'https://www.kogenie.com/sitemap.xml', // Ensures proper sitemap linking
    ],
  },
};