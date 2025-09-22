const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/services', changefreq: 'monthly', priority: 0.9 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/portfolio', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.6 }
    // Add dynamic blog post URLs from your database here
];

const stream = new SitemapStream({ hostname: 'https://www.growtechsolutions.in' });

async function generateSitemap() {
    const sitemapFile = createWriteStream('./public/sitemap.xml');
    streamToPromise(stream).then(data => {
        sitemapFile.write(data.toString());
        sitemapFile.close();
        console.log('Sitemap generated successfully!');
    });

    links.forEach(link => stream.write(link));
    stream.end();
}

generateSitemap();