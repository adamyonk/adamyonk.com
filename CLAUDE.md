# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server with live reload on :4200
npm run watch      # watch/rebuild without serving
npm run publish:prod   # production build → _public/
npm run publish:stage  # staging build
npm run check      # biome format + lint (write)
npm run format     # biome format only
npm run lint       # biome lint only
```

No test suite exists.

## Architecture

Personal site built on the **Grease** starter: Eleventy 3 + WebC + LightningCSS + esbuild.

**Source → Output:** `_source/` → `_public/` (never edit `_public/` directly).

**i18n:** Content lives under `_source/en-US/` and `_source/es-ES/`. Caddy rewrites bare paths to `/en-US/*`. It redirects to `/es-ES/*` only when a Spanish file exists for that path, and only when the `lang=es` cookie is set or (no `lang=en` cookie and) the top `Accept-Language` entry is Spanish. Visiting `/en-US/*` or `/es-ES/*` sets the `lang` cookie, so the language switcher links remember the visitor's choice. Keep `Caddyfile` and `Caddyfile.dev` in sync. `eleventy.config.js` registers `EleventyI18nPlugin` with `en-US` as default.

**Templates:** `.webc` files for pages/components, `.md` for content pages. Layouts are in `_source/_layouts/`, components auto-discovered from `_source/_components/**/*.webc`.

**Asset pipeline (zero-config entrypoints):**
- CSS files under `_source/assets/css/` that don't start with `_` are treated as LightningCSS entrypoints — bundled, minified, source-mapped. `@layer` and CSS nesting supported via `drafts`.
- JS files under `_source/assets/js/` that don't start with `_` are esbuild entrypoints — bundled, minified, ESM, code-split.
- Files/folders prefixed `_` are treated as partials/utilities and not emitted directly.

**Filters & shortcodes** registered in `eleventy.config.js`: `fullDate`, `markdownify`, `tagUrl`, `filterTags`, `published`, `getRandom`, `toSentence`, `except`, `i18n`; shortcodes: `image` (eleventy-img), `setVar`.

**Deployment:** Docker multi-stage build (Node 20 builder → Caddy 2 alpine). Production Caddyfile handles i18n rewrites/redirects, font caching, gzip. Dev uses `Caddyfile.dev` on port 4200 with `auto_https off`.
