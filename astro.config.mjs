// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves this repo at https://<user>.github.io/<repo>/.
// If you add a custom domain later, set SITE to it and BASE to '/'.
const SITE = process.env.SITE ?? 'https://autoindent.github.io';
const BASE = process.env.BASE ?? '/myblog';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
