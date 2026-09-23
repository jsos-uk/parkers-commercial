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
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/wp-') && !page.includes('/category/'),
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date()
    })
  ]
});
