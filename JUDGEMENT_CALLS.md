# Judgement Calls — The London LHD Centre redesign

Decisions made during the build that an operator may want to review. Everything here is grounded in the live site (londonlhdcentre.com), the brief, or a documented fallback — nothing was invented for marketing effect.

## Brand palette — logo authority applied
The brief proposed navy `#0A1929` + racing-red `#C8102E` + gold. The **real logo** (downloaded from `includes/imgs/logo.png`) is a **steel-blue "LONDON" wordmark with a check-badge** (≈ `#4F89C2`), plus a faint "LEFT HAND DRIVE CENTRE" subtext — not the navy the brief assumed. Per the logo-authority rule we:
- anchored on a deep automotive **navy `#0A1929`** (the logo's blue family, deepened for premium dealer authority),
- used the logo's **steel blue `#4F89C2`** as a bright accent on dark sections,
- kept the brief's **racing-red `#C8102E`** for CTAs, the SOLD state and pricing emphasis (red is layered as an accent on a blue brand — a classic automotive/import combination),
- reserved **gold `#D4AF37`** for the ultra-premium tier only (Ferrari / McLaren / Rolls-Royce).

Implementation note: the red is exposed both as `--rgb-red*` and a legacy `--rgb-orange*` alias so the inherited component library recolours from one source of truth.

## Logo usage
Header + footer use the **real `logo.png`** ("LONDON" + badge) paired with an "LHD CENTRE / Since 1995" text lockup for legibility at small sizes. The logo's own subtext already reads "LEFT HAND DRIVE CENTRE", so there is mild redundancy with the lockup — **operator may prefer to supply a single transparent master logo** (and a white-knockout version for the dark footer). Favicon recreated as an on-brand SVG (navy square + red check-badge, echoing the logo's verified-badge motif).

## Inventory = the **live** 20 vehicles (not the brief's snapshot)
The brief listed a snapshot of stock (Ferrari FF, Jaguar XK, Mitsubishi Pajero …). The **live homepage now shows a rotated set** (Honda S2000, two Renault Capturs, etc.). Since the brief says "do not invent stock," we used the **current live 20 vehicles**, each with its **real photograph** downloaded from the site. 
- **Specs** are derived ONLY from each listing's own title (engine, fuel, transmission, body where stated). Anything not stated is `null` and renders **"On request"** — never invented.
- **Colour + country of origin** are read from the original image filenames (e.g. `RED-SPAIN`, `BLUE-BELGIUM`, `GREY-PORTUGAL`) — real data.
- **Inventory is static** in this build. **Recommendation:** integrate with their current DMS/CMS, or migrate inventory to a headless CMS (Sanity / Strapi) or a stock feed post-launch for ongoing maintenance. The data layer (`src/data/inventory.ts`) is shaped to make that swap straightforward.

## Heritage figures standardised to "since 1995 / 30+ years"
The live site uses **both** "30 years" and "over 35 years" in different places. We standardised on **"over 30 years" / "since 1995"** (1995 → 2026 = 31 years, consistent with "30+") for internal consistency, per the brief's mandate. Operator can confirm the exact founding year.

## 50 brands (the brief's "51")
The original valuation list contained a **duplicate** (`SSANGYONG` and `Ssanyong`) which we merged to a single **"SsangYong"**, and normalised casing (e.g. `Infiniti`). The dropdown therefore offers **50 makes + "Other"** — covering every brand in the brief.

## Brand logos — real manufacturer logos (per client request)
Initially we used typographic monogram badges to avoid reproducing trademarks. **At the client's request we now display the real manufacturer logos** (Audi rings, Ferrari shield, Land Rover badge, etc.) on the homepage brand grid, the brand pages and the nav mega-menu. They were sourced from a public car-logos dataset and stored in `/public/images/brands/`. The logos remain the **trademarks of their respective manufacturers**, shown to indicate the marques we stock (standard dealer usage). The monogram badge is retained as an automatic fallback in `BrandMark.astro`. **Operator: confirm logo usage aligns with any manufacturer brand guidelines.**

## 15 active brand pages — 11 stocked, 4 "source to order"
Brand pages exist for the 15 navigation brands. **Ferrari, Ford, Jaguar and Peugeot** have no live stock, so they show an honest **"we source to order — register your interest"** state rather than an empty grid. **Volvo, BMW and Rolls-Royce** appear in current stock but aren't among the 15 nav brands; their vehicle-detail pages exist and their breadcrumb links back to all-stock.

## Forms — no backend (mailto / WhatsApp), tiles primary
This is a static site (no server). The valuation, enquiry and contact forms compose a pre-filled **email or WhatsApp** message from the visitor's own client — nothing is stored server-side. Prominent **WhatsApp / phone / email tiles** are the primary contact path. Photo upload is handled via "WhatsApp us photos" (a `mailto` form cannot attach files). **If you want submissions captured, wire the forms to an endpoint** (Formspree, or a Cloudflare Pages Function).

## Reviews — Google only, honest placeholder (operator action needed)
The brief mandates **Google reviews only**, never invented reviews, never old-site testimonials (the old site had none). **No Google `place_id` was available** for either location, so we render an honest placeholder ("Review us on Google" + real trust stats: 30+ years, 50+ brands, 2 locations). 
- **Operator action:** provide the Google `place_id` for **Barnes (SW13 9JJ)** and **Chelsea Harbour (SW10 0XG)** to surface live reviews, or confirm a post-launch review-collection strategy. (`src/data/reviews.ts` is ready to receive them.)

## Maps & coordinates
Both Google Maps embeds use an **address query** (no API key needed) for accuracy. Schema `geo` coordinates are **approximate** for each location — drop precise pins if you want exact coordinates.

## Copy / UX modernisation
- The brief's verbatim hero CTA "CLICK HERE TO VIEW LATEST STOCK" was modernised to **"View Latest Stock"** — "click here" is a dated anti-pattern the 2027 redesign explicitly fixes. All other hero/sell copy is verbatim.
- Information architecture preserved: **"Buying LHD Cars"** = the buying-side service (we buy your car: promises, process, what-we-buy, FAQs); **"Sell Your Car"** = the valuation form. Both are about selling to us, per the original site.

## Blog
The live site has a blog link but **no posts**. Per the brief we render a placeholder (latest notices: UK Registration, Car shipping, Facebook) with a "content to be migrated post-launch" note.

## Legal pages
Privacy (UK GDPR), Cookie (PECR) and Terms (sale/purchase, deposits, COC/registration, Consumer Rights Act 2015, England & Wales) are professional drafts using the real business details. They deliberately contain **no** invented company-registration, VAT or ICO numbers. **Operator: have these reviewed and add registration details before relying on them.**

## How this was built
A coherent design system + data layer + inventory engine were built directly; the 10 content/legal pages were generated in parallel by subagents against the locked component APIs, then verified and built centrally. Stack is exactly as mandated: Astro 5 static (no Cloudflare adapter), Tailwind 3.4, `@lucide/astro` — output `/dist` HTML for Cloudflare **Pages**.

_Last updated: 02/06/2026._
