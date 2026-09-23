import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://parkerscommercial.co.uk',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/wp-') && !page.includes('/category/'),
      serialize(item) {
        if (item.url === 'https://parkerscommercial.co.uk/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (
          item.url.includes('/commercial-gutter-cleaning') ||
          item.url.includes('/property-management') ||
          item.url.includes('/commercial-industrial-cleaning') ||
          item.url.includes('/healthcare-sanitation-services')
        ) {
          // If it's a specific location page, priority 0.8; if primary service page, 0.9
          const parts = item.url.replace('https://parkerscommercial.co.uk/', '').split('/').filter(Boolean);
          item.priority = parts.length > 1 ? 0.8 : 0.9;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/knowledge')) {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/domestic')) {
          item.priority = 0.65;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.75;
          item.changefreq = 'monthly';
        }
        item.lastmod = new Date();
        return item;
      }
    })
  ]
});
