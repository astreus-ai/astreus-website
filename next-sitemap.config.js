/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://astreus.org',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/node_modules/'],
      },
    ],
    additionalSitemaps: [
      'https://astreus.org/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1.0 : path.includes('/guides/quick-start') ? 0.9 : 0.8,
      lastmod: new Date().toISOString(),
    }
  },
}