// ─────────────────────────────────────────────────────────────
// Brands handled by The London LHD Centre.
//  • activeBrands — the 15 makes featured in the main inventory
//    navigation (each gets its own /lhd-cars-for-sale/[brand] page).
//  • allBrandsList — the full valuation dropdown (50 makes; the
//    original list duplicated SSANGYONG/Ssanyong, merged here).
//  • brandSegments — Mid Range / High End split, verbatim from the
//    original site footer.
// Tier drives styling: 'ultra' (gold) for Ferrari/McLaren, 'premium'
// for the prestige marques, 'standard' for the rest. Nothing invented.
// ─────────────────────────────────────────────────────────────

export type BrandTier = 'ultra' | 'premium' | 'standard';

export interface Brand {
  name: string;
  slug: string;
  mark: string; // 2-char monogram for badges / chips
  tier: BrandTier;
  intro: string;
}

export const activeBrands: Brand[] = [
  {
    name: 'Audi',
    slug: 'audi',
    mark: 'Au',
    tier: 'premium',
    intro:
      'Left-hand drive Audi models are among the most sought-after imports we handle — from the A-range saloons and Avant estates to the Q-line SUVs. We regularly source LHD Audis from across Europe and prepare them for UK use.',
  },
  {
    name: 'Ferrari',
    slug: 'ferrari',
    mark: 'Fe',
    tier: 'ultra',
    intro:
      'As a specialist in left-hand drive cars, we are perfectly placed to buy and sell LHD Ferrari models. Many Ferraris were only ever built in left-hand drive, making us a natural home for the marque in the UK.',
  },
  {
    name: 'Ford',
    slug: 'ford',
    mark: 'Fo',
    tier: 'standard',
    intro:
      'We buy and sell left-hand drive Ford models from right across the range. Whether it is a continental-spec hatchback or a European estate, we can source, supply and register LHD Fords for the UK.',
  },
  {
    name: 'Honda',
    slug: 'honda',
    mark: 'Ho',
    tier: 'standard',
    intro:
      'From the iconic S2000 roadster to everyday models, left-hand drive Hondas are a regular part of our inventory. We handle the import paperwork and UK registration so you do not have to.',
  },
  {
    name: 'Jaguar',
    slug: 'jaguar',
    mark: 'Ja',
    tier: 'premium',
    intro:
      'Left-hand drive Jaguars combine British design with continental specification. We buy and sell LHD Jaguar saloons, sports cars and SUVs, with collection and delivery throughout the UK and Europe.',
  },
  {
    name: 'Jeep',
    slug: 'jeep',
    mark: 'Je',
    tier: 'standard',
    intro:
      'Left-hand drive Jeep models — from the Wrangler to the larger SUVs — are popular with our customers heading to Europe and beyond. We source, prepare and register LHD Jeeps for UK and international use.',
  },
  {
    name: 'Kia',
    slug: 'kia',
    mark: 'Ki',
    tier: 'standard',
    intro:
      'We regularly stock left-hand drive Kia models, from compact hatchbacks to seven-seat SUVs and hybrids. Each LHD Kia is sourced from Europe and can be supplied UK-registered with COC papers.',
  },
  {
    name: 'Land Rover',
    slug: 'land-rover',
    mark: 'La',
    tier: 'premium',
    intro:
      'Left-hand drive Land Rover and Range Rover models are in constant demand for export and continental use. We buy and sell LHD Defenders, Discoverys and Range Rovers, and can arrange international delivery.',
  },
  {
    name: 'McLaren',
    slug: 'mclaren',
    mark: 'Mc',
    tier: 'ultra',
    intro:
      'As left-hand drive specialists we are ideally placed to handle LHD McLaren supercars. We buy and sell McLaren models for clients across the UK, Europe, the USA and the Middle East.',
  },
  {
    name: 'Mercedes Benz',
    slug: 'mercedes-benz',
    mark: 'Me',
    tier: 'premium',
    intro:
      'Left-hand drive Mercedes-Benz models have been a cornerstone of our business for over 30 years — from classic SL roadsters to modern saloons and SUVs. We buy, sell and register LHD Mercedes for the UK.',
  },
  {
    name: 'Nissan',
    slug: 'nissan',
    mark: 'Ni',
    tier: 'standard',
    intro:
      'We buy and sell left-hand drive Nissan models across the range, including popular crossovers and SUVs. Each LHD Nissan is sourced from Europe and prepared for UK or international use.',
  },
  {
    name: 'Peugeot',
    slug: 'peugeot',
    mark: 'Pe',
    tier: 'standard',
    intro:
      'Left-hand drive Peugeot models are a regular part of our stock. From compact city cars to estates and SUVs, we source LHD Peugeots from across Europe and handle the UK registration process.',
  },
  {
    name: 'Porsche',
    slug: 'porsche',
    mark: 'Po',
    tier: 'premium',
    intro:
      'Left-hand drive Porsche models — 911, Macan, Cayenne and more — are among our most requested cars. As LHD specialists we buy and sell Porsches for UK and international clients alike.',
  },
  {
    name: 'Renault',
    slug: 'renault',
    mark: 'Re',
    tier: 'standard',
    intro:
      'We stock left-hand drive Renault models from across the range, including the popular Captur and other crossovers. Every LHD Renault can be supplied UK-registered with the correct paperwork.',
  },
  {
    name: 'Skoda',
    slug: 'skoda',
    mark: 'Sk',
    tier: 'standard',
    intro:
      'Left-hand drive Skoda models offer outstanding value, and we keep a steady supply of LHD Fabias, Karoqs and more. Each is sourced from Europe and can be supplied UK-registered with COC papers.',
  },
];

export const activeBrandNames = activeBrands.map((b) => b.name);

export function brandBySlug(slug: string): Brand | undefined {
  return activeBrands.find((b) => b.slug === slug);
}

// Headline brands for the homepage strip (subset of the active 15)
export const featuredBrands = [
  'Ferrari',
  'Porsche',
  'Mercedes Benz',
  'McLaren',
  'Land Rover',
  'Audi',
  'Jaguar',
];

// ── Full valuation dropdown — 50 makes (original list verbatim,
//    SSANGYONG/Ssanyong duplicate merged to "SsangYong"). ──
export const allBrandsList = [
  'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Cadillac',
  'Chevrolet', 'Chrysler', 'Citroen', 'Dacia', 'Dodge', 'Ferrari', 'Fiat', 'Ford',
  'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Lancia',
  'Land Rover', 'Lexus', 'Lotus', 'Maserati', 'Mazda', 'McLaren', 'Mercedes Benz',
  'MINI', 'Mitsubishi', 'Morgan', 'Morris', 'Nissan', 'Opel', 'Peugeot', 'Porsche',
  'Renault', 'Rolls Royce', 'Saab', 'Seat', 'Skoda', 'Smart', 'SsangYong', 'Subaru',
  'Suzuki', 'Toyota', 'Volkswagen', 'Volvo',
];

// also expose under the legacy name used by some inherited components
export const allBrands = allBrandsList;

// ── Mid Range / High End segments — verbatim from the original footer ──
export const brandSegments = {
  midRange: ['Ford', 'Nissan', 'Mazda', 'Toyota', 'VW'],
  highEnd: ['Audi', 'BMW', 'Ferrari', 'Mercedes', 'Porsche'],
};
