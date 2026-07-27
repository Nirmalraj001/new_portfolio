const fs = require('fs');
const path = require('path');

const domain = 'https://nirmalraj.dev';
const date = new Date().toISOString().split('T')[0];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}/</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${domain}/resume</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

const robotsContent = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml`;

// Resolve paths
const publicDir = path.resolve(__dirname, '../public');
const distDir = path.resolve(__dirname, '../dist');

try {
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap.xml
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent.trim() + '\n');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent.trim() + '\n');
  }
  console.log('SEO Build Step: sitemap.xml generated successfully.');

  // Write robots.txt
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent.trim() + '\n');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsContent.trim() + '\n');
  }
  console.log('SEO Build Step: robots.txt generated successfully.');
} catch (error) {
  console.error('SEO Build Step Error:', error);
  process.exit(1);
}
