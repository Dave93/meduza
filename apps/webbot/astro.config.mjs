import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import turbolinks from '@astrojs/turbolinks';

export default defineConfig({
  outDir: '../../dist/apps/webbot',
  integrations: [react(), partytown(), sitemap(), tailwind(), turbolinks()],
});
