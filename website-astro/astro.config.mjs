import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://faqwa.github.io/arc-',
  base: '/arc-',
  integrations: [mdx(), react()],
});
