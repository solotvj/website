// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { defaultLang, langs, ui } from './src/i18n/index.ts';

// Custom domain (solotvj.com.ar) serves from the root, so base is '/'.
export default defineConfig({
  site: 'https://solotvj.com.ar',
  base: '/',
  output: 'static',
  i18n: {
    defaultLocale: defaultLang,
    locales: langs,
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: defaultLang,
        locales: Object.fromEntries(langs.map((l) => [l, ui[l].htmlLang])),
      },
    }),
  ],
});
