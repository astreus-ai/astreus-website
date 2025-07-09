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
    // Determine priority based on page importance
    let priority = 0.5; // Default priority
    let changefreq = 'monthly'; // Default change frequency
    
    // High priority pages (updated frequently)
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } 
    // Documentation pages - high priority
    else if (path.includes('/docs/')) {
      if (path.includes('/guides/quick-start') || path.includes('/docs/index')) {
        priority = 0.9;
        changefreq = 'weekly';
      } else if (path.includes('/guides/')) {
        priority = 0.8;
        changefreq = 'biweekly';
      } else if (path.includes('/concepts/')) {
        priority = 0.7;
        changefreq = 'monthly';
      } else if (path.includes('/plugins/')) {
        priority = 0.6;
        changefreq = 'monthly';
      } else {
        priority = 0.7;
        changefreq = 'monthly';
      }
    }
    // Plugins page - medium-high priority
    else if (path === '/plugins') {
      priority = 0.8;
      changefreq = 'weekly';
    }
    // Other pages
    else {
      priority = 0.5;
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
    }
  },
}