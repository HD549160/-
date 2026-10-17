import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://example.github.io';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: {
    build: { cssMinify: true }
  }
});
