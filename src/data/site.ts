// ─────────────────────────────────────────────────────────────
// The London Left Hand Drive Centre — central site configuration.
// Every business fact is taken verbatim from the existing site
// (londonlhdcentre.com) and the brief. Nothing invented.
// UK English throughout. Currency £ GBP. Dates DD/MM/YYYY.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'The London Left Hand Drive Centre',
  shortName: 'London LHD Centre',
  tagline: 'The UK’s leading left-hand drive car specialist',
  logoTagline: 'Buying & Selling Left Hand Drive Cars · Since 1995',
  description:
    'The London LHD Centre — the UK’s leading left-hand drive (LHD) car dealer with over 30 years of experience. Buying and selling LHD cars from Skoda to Ferrari across two London showrooms, with delivery throughout the UK, Europe, the USA and the Middle East.',
  url: 'https://demo-london-lhd-centre.pages.dev',

  // ── Phones: two numbers, plus the international dial format (per brief) ──
  phoneLandline: '020 7371 9120',
  phoneLandlineIntl: '+442073719120',
  phoneLandlineDigits: '442073719120',
  phoneLandlineDial: '00442073719120', // for callers outside the UK

  phoneMobile: '07801 110000',
  phoneMobileIntl: '+447801110000',
  phoneMobileDigits: '447801110000', // also WhatsApp

  email: 'sales@londonlhdcentre.com',
  facebookUrl: 'https://www.facebook.com/London-LHD-Centre-194783807219538/',

  // Pre-filled WhatsApp enquiry per brief
  whatsappMessage: 'Hi, I’d like to enquire about a left-hand drive car please',

  // Service reach (verbatim from brief)
  serviceArea: ['United Kingdom', 'Europe', 'USA', 'Middle East'],

  // ── Two London locations ──
  locations: [
    {
      id: 'barnes',
      name: 'Barnes',
      role: 'Main showroom & inventory base',
      street: '76 Glentham Road',
      area: 'Barnes',
      city: 'London',
      postcode: 'SW13 9JJ',
      country: 'United Kingdom',
      countryCode: 'GB',
      primary: true,
      // Approximate — map embed/directions use the address query for accuracy.
      lat: 51.473,
      lng: -0.2486,
      mapsEmbed:
        'https://www.google.com/maps?q=76+Glentham+Road,+Barnes,+London+SW13+9JJ&z=15&output=embed',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=76+Glentham+Road+Barnes+London+SW13+9JJ',
      directionsUrl:
        'https://www.google.com/maps/dir/?api=1&destination=76+Glentham+Road+Barnes+London+SW13+9JJ',
    },
    {
      id: 'chelsea-harbour',
      name: 'Chelsea Harbour',
      role: 'Premium showroom · by appointment',
      street: 'Chelsea Harbour',
      area: 'Chelsea Harbour',
      city: 'London',
      postcode: 'SW10 0XG',
      country: 'United Kingdom',
      countryCode: 'GB',
      primary: false,
      lat: 51.4742,
      lng: -0.1828,
      mapsEmbed:
        'https://www.google.com/maps?q=Chelsea+Harbour,+London+SW10+0XG&z=15&output=embed',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Chelsea+Harbour+London+SW10+0XG',
      directionsUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Chelsea+Harbour+London+SW10+0XG',
    },
  ],

  // ── Dual opening pattern (verbatim from brief) ──
  // 1) Telephone enquiries: 9:30am–5:00pm Mon–Fri
  // 2) Barnes showroom visits: 11:00am–3:00pm Mon–Fri
  phoneHours: {
    label: 'Telephone enquiries',
    days: 'Monday – Friday',
    value: '9:30am – 5:00pm',
    open: '09:30',
    close: '17:00',
  },
  showroomHours: {
    label: 'Barnes showroom',
    days: 'Monday – Friday',
    value: '11:00am – 3:00pm',
    open: '11:00',
    close: '15:00',
  },

  hoursSummary: [
    { label: 'Telephone enquiries', value: 'Mon – Fri · 9:30am – 5:00pm' },
    { label: 'Barnes showroom', value: 'Mon – Fri · 11:00am – 3:00pm' },
    { label: 'Saturday & Sunday', value: 'By appointment' },
  ],

  // Verifiable figures (heritage standardised to "since 1995 / 30+ years")
  stats: {
    yearsExperience: 30,
    sinceYear: 1995,
    brandsCovered: 50,
    locations: 2,
  },
};

// ── Link helpers ──────────────────────────────────────────────
export const telLandline = `tel:${site.phoneLandlineIntl}`;
export const telMobile = `tel:${site.phoneMobileIntl}`;
export const mailLink = `mailto:${site.email}`;
export const whatsappLink = `https://wa.me/${site.phoneMobileDigits}?text=${encodeURIComponent(site.whatsappMessage)}`;

export function whatsappFor(subject: string) {
  return `https://wa.me/${site.phoneMobileDigits}?text=${encodeURIComponent(subject)}`;
}
export function mailFor(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

// ── Navigation ────────────────────────────────────────────────
export interface NavItem {
  href: string;
  label: string;
  mega?: 'brands';
  children?: { href: string; label: string }[];
}

export const nav: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/lhd-cars-for-sale', label: 'Cars For Sale', mega: 'brands' },
  {
    href: '/buying-lhd-cars',
    label: 'Buying LHD Cars',
    children: [
      { href: '/buying-lhd-cars', label: 'Overview' },
      { href: '/buying-lhd-cars/the-process', label: 'The Process' },
      { href: '/buying-lhd-cars/the-process/what-types-of-lhd-cars-we-buy', label: 'What We Buy' },
      { href: '/buying-lhd-cars/faqs', label: 'FAQs' },
    ],
  },
  { href: '/lhd-sell-your-car', label: 'Sell Your Car' },
  { href: '/lhd-about-us', label: 'About' },
  { href: '/lhd-contact-us', label: 'Contact' },
];

export const legalNav = [
  { href: '/lhd-privacy', label: 'Privacy Policy' },
  { href: '/lhd-cookie-policy', label: 'Cookie Policy' },
  { href: '/lhd-terms-condition', label: 'Terms & Conditions' },
];

// Footer site map (mirrors the original site’s footer link set)
export const footerNav = [
  { href: '/lhd-cars-for-sale', label: 'LHD Cars for Sale' },
  { href: '/lhd-cars-sold', label: 'LHD Cars Sold' },
  { href: '/buying-lhd-cars', label: 'Buying LHD Cars' },
  { href: '/buying-lhd-cars/the-process', label: 'The Process of Selling' },
  { href: '/lhd-sell-your-car', label: 'Sell an LHD Car' },
  { href: '/buying-lhd-cars/faqs', label: 'FAQs' },
  { href: '/lhd-about-us', label: 'About Us' },
  { href: '/lhd-contact-us', label: 'Contact' },
  { href: '/blog', label: 'LHD Centre Blog' },
  { href: '/sitemap', label: 'Sitemap' },
];

// ── Trust signals (homepage hero strip) ──────────────────────
export const trustSignals = [
  '30+ Years Experience',
  'All Major Brands',
  'UK & Europe Delivery',
  'Two London Locations',
];
