/** @type {import('tailwindcss').Config} */
// The London Left Hand Drive Centre — 2027 premium LHD-specialist palette.
//   navy   #0A1929  established premium-dealer authority (base / text)
//   red    #C8102E  classic racing-red accent (CTAs, SOLD, emphasis)
//   steel  #4F89C2  the LONDON logo blue (bright accent on dark)
//   gold   #D4AF37  ultra-premium tier only (Ferrari / McLaren / Rolls-Royce)
// Colours are exposed as RGB triplets so Tailwind opacity modifiers work
// (e.g. bg-navy/80). Single source of truth lives in src/styles/global.css :root.
// The brand-red is ALSO aliased under the legacy `orange` token so inherited
// component classes recolour automatically. No emojis — Lucide icons only.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: 'rgb(var(--rgb-navy) / <alpha-value>)',
          rich: 'rgb(var(--rgb-navy-rich) / <alpha-value>)',
          deep: 'rgb(var(--rgb-navy-deep) / <alpha-value>)',
          ink: 'rgb(var(--rgb-navy-ink) / <alpha-value>)',
          600: 'rgb(var(--rgb-navy-600) / <alpha-value>)',
          500: 'rgb(var(--rgb-navy-500) / <alpha-value>)',
        },
        red: {
          DEFAULT: 'rgb(var(--rgb-red) / <alpha-value>)',
          bright: 'rgb(var(--rgb-red-bright) / <alpha-value>)',
          deep: 'rgb(var(--rgb-red-deep) / <alpha-value>)',
          dark: 'rgb(var(--rgb-red-dark) / <alpha-value>)',
        },
        // legacy alias → brand red (keeps inherited component classes working)
        orange: {
          DEFAULT: 'rgb(var(--rgb-red) / <alpha-value>)',
          bright: 'rgb(var(--rgb-red-bright) / <alpha-value>)',
          deep: 'rgb(var(--rgb-red-deep) / <alpha-value>)',
          dark: 'rgb(var(--rgb-red-dark) / <alpha-value>)',
        },
        steel: {
          DEFAULT: 'rgb(var(--rgb-steel) / <alpha-value>)',
          light: 'rgb(var(--rgb-steel-light) / <alpha-value>)',
        },
        gold: {
          DEFAULT: 'rgb(var(--rgb-gold) / <alpha-value>)',
          deep: 'rgb(var(--rgb-gold-deep) / <alpha-value>)',
        },
        snow: 'rgb(var(--rgb-snow) / <alpha-value>)',
        stone: 'rgb(var(--rgb-stone) / <alpha-value>)',
        ink: 'rgb(var(--rgb-navy) / <alpha-value>)',
        muted: 'rgb(var(--rgb-muted) / <alpha-value>)',
        'muted-light': 'rgb(var(--rgb-muted-light) / <alpha-value>)',
        line: 'rgb(var(--rgb-border) / <alpha-value>)',
        green: 'rgb(var(--rgb-green) / <alpha-value>)',
        amber: 'rgb(var(--rgb-amber) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Open Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'monospace'],
      },
      borderRadius: {
        pill: '999px',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
