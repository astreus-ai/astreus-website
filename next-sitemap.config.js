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
    let priority = 0.5;
    let changefreq = 'monthly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.includes('/docs/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}