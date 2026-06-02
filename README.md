# The London Left Hand Drive Centre — website

Premium 2027 redesign for **The London Left Hand Drive Centre** (londonlhdcentre.com) — the UK's leading specialist dealer for buying and selling **left-hand drive (LHD) cars**, with 30+ years' experience and two London showrooms (Barnes SW13 9JJ + Chelsea Harbour SW10 0XG).

Genuine LHD cars from Skoda to Ferrari, UK registration with COC papers, and delivery throughout the UK, Europe, the USA and the Middle East.

## Stack
- **Astro 5** — static build, no adapter, no SSR (output: `/dist` HTML, never `_worker.js`)
- **Tailwind CSS 3.4** (via `@astrojs/tailwind` — v4 breaks Cloudflare Pages)
- **@lucide/astro** for icons (no emojis anywhere)
- `@astrojs/sitemap`

## Develop
```bash
npm install
npm run dev      # http://localhost:4355
npm run build    # -> dist/  (static HTML)
npm run preview
```

## Deploy — Cloudflare **Pages** (not Workers)
- Framework preset: **Astro**
- Build command: **`npm run build`**
- Build output directory: **`dist`**
- No `_worker.js`, no SSR adapter.

## What's here
- **Inventory system** — 20 real current vehicles (`src/data/inventory.ts`) with a client-side filter/sort grid (`/lhd-cars-for-sale`), 15 dynamic brand pages (`/lhd-cars-for-sale/[brand]`) and a full vehicle-detail template (`/lhd-cars-for-sale/[brand]/[slug]`).
- **Dual everything** — two locations (both Google Maps embeds), two phone numbers, and a **dual live-status** indicator (telephone enquiry hours vs Barnes showroom hours), updated client-side with styled CSS dots (no emoji).
- **The 4 selling promises**, the 50-brand valuation dropdown, UK Registration / COC service, and international shipping — all preserved verbatim from the existing site.
- Palette: navy `#0A1929` + racing-red `#C8102E` + logo-steel `#4F89C2` + ultra-premium gold `#D4AF37` (see `src/styles/global.css`).

## Operator review
See [`JUDGEMENT_CALLS.md`](JUDGEMENT_CALLS.md) for decisions needing review (Google `place_id` for reviews, inventory CMS path, legal-page sign-off) and [`QA_REPORT.md`](QA_REPORT.md) for the full QA.
