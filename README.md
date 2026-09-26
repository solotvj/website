# Solotvj website

Static landing page for [solotvj.com.ar](https://solotvj.com.ar), built with Astro and the design system in `design-system/` (read-only).

## Run locally

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/
npm run check     # type-check
```

## Add a language

1. Copy `src/i18n/en.ts` to `src/i18n/<code>.ts` and translate every string. TypeScript fails the build if a key is missing.
2. Register it in the `ui` map in `src/i18n/index.ts`.

That's all. Routing (`/<code>/`), the language link, `hreflang` tags and the sitemap all read from `ui`. Spanish (`es`, served at `/`) is the default and reference dictionary.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`: `withastro/action` builds the site and `actions/deploy-pages` publishes `dist/` to GitHub Pages.

One-time repo setup: **Settings → Pages → Source: GitHub Actions**, and set **Custom domain** to `solotvj.com.ar` on the same screen (DNS must point at GitHub Pages).

The site is served from the domain root, so `base` is `/` in `astro.config.mjs`. If it ever moves to `solotvj.github.io/website`, set `site` to `https://solotvj.github.io` and `base` to `/website`. Links and assets already go through `import.meta.env.BASE_URL` and `astro:i18n`.
