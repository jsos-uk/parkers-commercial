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

function syncSitemaps() {
    const distSitemap = path.join(WORKSPACE_DIR, 'dist', 'sitemap-0.xml');
    const distIndex = path.join(WORKSPACE_DIR, 'dist', 'sitemap-index.xml');
    const publicSitemap = path.join(WORKSPACE_DIR, 'public', 'sitemap.xml');
    const publicIndex = path.join(WORKSPACE_DIR, 'public', 'sitemap-index.xml');

    if (fs.existsSync(distSitemap)) {
        fs.copyFileSync(distSitemap, SITEMAP_PATH);
        fs.copyFileSync(distSitemap, publicSitemap);
        console.log(`✅ Synced dist sitemap to root & public: ${SITEMAP_PATH}`);
    }
    if (fs.existsSync(distIndex)) {
        const rootIndex = path.join(WORKSPACE_DIR, 'sitemap-index.xml');
        fs.copyFileSync(distIndex, rootIndex);
        fs.copyFileSync(distIndex, publicIndex);
        console.log(`✅ Synced dist sitemap-index to root & public: ${rootIndex}`);
    }
}

syncSitemaps();
