# QA Report — The London Left Hand Drive Centre (2027 redesign)

Build: **Astro 5** (static, no adapter, no SSR) · **Tailwind 3.4.17** · **@lucide/astro 1.16+** · output `/dist` (HTML, **no `_worker.js`**). Deploy target: **Cloudflare Pages** (Framework: Astro · Build: `npm run build` · Output: `dist`).

QA date: 02/06/2026. **50 pages** built and verified.

> **Method note:** the in-browser screenshot tool mis-composites `backdrop-filter` glass and scroll-reveal (`.fade-in`) frames, so visual verification combined confirmed fresh-load screenshots (home desktop + mobile, nav) **with** authoritative DOM inspection via `preview_eval` (computed styles, element presence, live filter/sort interaction, per-width horizontal-overflow probes) and `dist` HTML greps. Lighthouse was not run in this sandbox — recommend running it post-deploy (the output is static, lazy-loaded HTML with no blocking JS).

| # | QA step | Result |
|---|---------|--------|
| 1 | Visual @ 1440 / 768 / 375 | ✅ Home captured premium desktop + mobile; **0 horizontal overflow** at 375/1440 on home, cars-for-sale, vehicle detail, contact (DOM probe) |
| 2 | Pill nav (glass, backdrop-blur, brand mega-menu, 2 phones + WhatsApp + search, hamburger) | ✅ Floating glass pill; brand mega-menu (15) + Buying dropdown; landline + mobile CTAs + WhatsApp + search popover; mobile hamburger + sticky dual-phone bar |
| 3 | Inventory system (status badges, filters, brand pages, detail template, sort) | ✅ Available/SOLD/Call badges; filter verified live (Skoda → 3, reset → 20); sort price-asc → £8,495 first; 15 brand pages (11 stocked + 4 "source-to-order" states); detail = 14-row spec table + enquiry form + related + Car schema |
| 4 | Animations (hover, scroll-reveal, counters, `prefers-reduced-motion`) | ✅ `.fade-in` reveal, card lift + image zoom, hero slider crossfade, stat counters; reduced-motion disables slider + animations |
| 5 | Content (4 promises, 50 brands, phones, email, both addresses, dual hours, 30+ heritage, LHD positioning) | ✅ All verbatim and present on every page — confirmed in `dist` HTML |
| 6 | Two locations (both Google Maps embeds, correct coordinates) | ✅ Barnes SW13 9JJ + Chelsea Harbour SW10 0XG address-query embeds on home, about & contact |
| 7 | Technical (build OK, `/dist` HTML not `_worker.js`, no console errors) | ✅ 50 static pages; no `_worker.js`; 0 console errors |
| 8 | SEO (unique titles, meta < 155, Schema.org AutoDealer + 2 locations, sitemap, robots) | ✅ AutoDealer + LocalBusiness @graph w/ both locations; Car schema on details; FAQPage on FAQs; `sitemap-index.xml`; `robots.txt`; hreflang en-GB; OG + Twitter |
| 9 | Language (UK spelling, £ GBP, UK phone format, intl dial) | ✅ No US spellings found; £ GBP; `020 7371 9120` / `07801 110000`; intl `00442073719120` documented |
| 10 | Compliance (Privacy, Cookie, Terms, cookie banner) | ✅ UK-GDPR Privacy, PECR Cookie, England & Wales Terms; consent banner (localStorage) |
| 11 | Live status (dual: phone vs showroom, CSS dots, no emoji) | ✅ Phone 9:30–17:00 + showroom 11:00–15:00 Mon–Fri; verified "closed" at 17:25; styled CSS dots, 60s refresh |
| 12 | Site mood (light inherited, no dark/light toggle) | ✅ Light with dark navy accent sections; **no toggle** |
| 13 | Brand colours (navy + red + gold, status colours) | ✅ navy `#0A1929`, red `#C8102E`, steel `#4F89C2`, gold `#D4AF37`; green = available, red = sold, gold = call |
| 14 | Logo (original logo in header) | ✅ Real `logo.png` ("LONDON" + check badge) in header + footer lockup; on-brand favicon |
| 15 | No emoji (whole codebase) | ✅ Python scan of `src` + `dist` → none (one code-comment arrow corrected) |
| 16 | Mobile performance (LCP/CLS/INP) | ⚠️ Not measured in sandbox. Static HTML, eager hero + lazy images, width/height set to limit CLS. **Run Lighthouse post-deploy.** |
| 17 | Accessibility | ✅ Skip link, `:focus-visible` rings, aria-labels, alt text, keyboard-operable nav/forms, WCAG-AA contrast (navy/red on white). Lighthouse a11y to confirm post-deploy. |
| 18 | Reviews source (Google only / placeholder) | ✅ Honest placeholder + "Review us on Google"; **no invented reviews, no old-site testimonials** |
| 19 | Inventory CMS strategy | ✅ Static examples; CMS migration path documented (see JUDGEMENT_CALLS) |
| 20 | Docs (QA_REPORT + JUDGEMENT_CALLS) | ✅ Both present |

## Pages (50 total)
Home · Cars For Sale (filterable) · 15 brand pages · 20 vehicle detail pages · Cars Sold · Sell Your Car (valuation) · Buying LHD Cars · The Process · What We Buy · FAQs · About · Contact · Blog · Sitemap · Privacy · Cookie Policy · Terms.

## Content fidelity (confirmed in `dist`)
- 4 selling promises verbatim · 50-brand valuation dropdown (Bugatti, SsangYong, Lamborghini, Morris, Infiniti … all present) · `sales@londonlhdcentre.com` · both postcodes · `07801 110000` · `00442073719120` · COC / UK-registration messaging on 26 pages.

_Build verified green: 50 page(s) built, 0 errors._
