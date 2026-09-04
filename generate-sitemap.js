const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://parkerscommercial.co.uk';
const WORKSPACE_DIR = __dirname;
const SITEMAP_PATH = path.join(WORKSPACE_DIR, 'sitemap.xml');

// Custom priority mapping by page importance
const PRIORITY_MAP = {
    'index.html': { priority: '1.00', changefreq: 'weekly' },
    'commercial-gutter-cleaning.html': { priority: '0.85', changefreq: 'weekly' },
    'services.html': { priority: '0.80', changefreq: 'monthly' },
    'about.html': { priority: '0.80', changefreq: 'monthly' },
    'case-studies.html': { priority: '0.80', changefreq: 'monthly' },
    'contact.html': { priority: '0.80', changefreq: 'monthly' },
    'healthcare-sanitation-services.html': { priority: '0.80', changefreq: 'weekly' },
    'ongoing-contract-maintenance.html': { priority: '0.80', changefreq: 'weekly' },
    'property-management.html': { priority: '0.75', changefreq: 'monthly' },
    'commercial-industrial-cleaning.html': { priority: '0.70', changefreq: 'monthly' },
    'warehouse-factory-cleaning.html': { priority: '0.70', changefreq: 'monthly' },
    'high-level-cladding.html': { priority: '0.70', changefreq: 'monthly' },
    'post-construction-sparkle.html': { priority: '0.70', changefreq: 'monthly' },
    'domestic.html': { priority: '0.64', changefreq: 'monthly' }
};

function generateSitemap() {
    console.log('🔍 Scanning directory for HTML files...');
    const files = fs.readdirSync(WORKSPACE_DIR);
    
    const htmlFiles = files.filter(file => file.endsWith('.html') && !file.startsWith('_'));
    
    const today = new Date().toISOString().split('T')[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Sort to put index first, then high priority pages
    htmlFiles.sort((a, b) => {
        if (a === 'index.html') return -1;
        if (b === 'index.html') return 1;
        return a.localeCompare(b);
    });

    htmlFiles.forEach(file => {
        const route = file === 'index.html' ? '' : file.replace('.html', '');
        const loc = route ? `${DOMAIN}/${route}` : `${DOMAIN}/`;
        
        const config = PRIORITY_MAP[file] || { priority: '0.60', changefreq: 'monthly' };
        
        xml += `  <url>\n`;
        xml += `    <loc>${loc}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `    <changefreq>${config.changefreq}</changefreq>\n`;
        xml += `    <priority>${config.priority}</priority>\n`;
        xml += `  </url>\n`;
    });

    xml += `</urlset>\n`;

    fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
    console.log(`✅ sitemap.xml generated successfully with ${htmlFiles.length} URLs!`);
}

generateSitemap();
