// ─────────────────────────────────────────────────────────────
// Current LHD inventory — the 20 vehicles shown live on the
// existing homepage (londonlhdcentre.com), with real photography.
// Specs are derived ONLY from each listing's own title; colour and
// country of origin are read from the original image filenames
// (e.g. "RED-SPAIN", "BLUE-BELGIUM"). Anything not stated is left
// null and rendered as "On request" — nothing is invented.
//
// NB: inventory is shown as STATIC EXAMPLES in this initial build.
// See JUDGEMENT_CALLS.md for the recommended CMS migration path.
// ─────────────────────────────────────────────────────────────

export type VehicleStatus = 'available' | 'sold' | 'call';
import type { BrandTier } from './brands';

export interface Vehicle {
  slug: string;
  brand: string;
  brandSlug: string;
  title: string;
  year: number | null;
  price: number | null; // GBP; null when SOLD or "call us"
  status: VehicleStatus;
  tier: BrandTier;
  image: string;
  location: string; // Barnes | Chelsea Harbour
  // specs (null -> shown as "On request")
  engine: string | null;
  fuel: string | null;
  transmission: string | null;
  body: string | null;
  drive: string | null;
  power: string | null;
  seats: number | null;
  mileage: number | null;
  colour: string | null;
  origin: string | null; // country the car was sourced from
  vat: string | null;
  euro: string | null;
}

export const vehicles: Vehicle[] = [
  {
    slug: '12c-spider-3-8-2013', brand: 'McLaren', brandSlug: 'mclaren',
    title: 'McLaren 12C Spider 3.8 2013 VAT Qualified',
    year: 2013, price: null, status: 'call', tier: 'ultra',
    image: '/images/cars/mclaren-12c-spider.jpg', location: 'Chelsea Harbour',
    engine: '3.8L V8 Twin-Turbo', fuel: 'Petrol', transmission: 'Automatic (dual-clutch)',
    body: 'Convertible', drive: 'Rear-wheel drive', power: null, seats: 2,
    mileage: null, colour: 'Black', origin: 'United Kingdom', vat: 'VAT Qualified', euro: null,
  },
  {
    slug: 'karoq-1-6-tdi-se-2019', brand: 'Skoda', brandSlug: 'skoda',
    title: 'Skoda Karoq 1.6 TDI SE Panoramic Roof',
    year: 2019, price: null, status: 'sold', tier: 'standard',
    image: '/images/cars/skoda-karoq.jpg', location: 'Barnes',
    engine: '1.6L TDI', fuel: 'Diesel', transmission: null,
    body: 'SUV', drive: null, power: null, seats: 5,
    mileage: null, colour: 'White', origin: 'Spain', vat: null, euro: null,
  },
  {
    slug: 'sl320-v6-auto-2001', brand: 'Mercedes Benz', brandSlug: 'mercedes-benz',
    title: 'Mercedes-Benz SL320 V6 Auto',
    year: 2001, price: null, status: 'sold', tier: 'premium',
    image: '/images/cars/mercedes-sl320.jpg', location: 'Barnes',
    engine: '3.2L V6', fuel: 'Petrol', transmission: 'Automatic',
    body: 'Convertible', drive: 'Rear-wheel drive', power: null, seats: 2,
    mileage: null, colour: 'Silver', origin: 'Spain', vat: null, euro: null,
  },
  {
    slug: 's2000', brand: 'Honda', brandSlug: 'honda',
    title: 'Honda S2000',
    year: null, price: 12995, status: 'available', tier: 'premium',
    image: '/images/cars/honda-s2000.jpg', location: 'Barnes',
    engine: '2.0L', fuel: 'Petrol', transmission: 'Manual',
    body: 'Convertible', drive: 'Rear-wheel drive', power: null, seats: 2,
    mileage: null, colour: 'Black', origin: null, vat: null, euro: null,
  },
  {
    slug: 'captur-1-3-tce-rs-line-2021', brand: 'Renault', brandSlug: 'renault',
    title: 'Renault Captur 1.3 TCe RS Line EDC Automatic',
    year: 2021, price: 11995, status: 'available', tier: 'standard',
    image: '/images/cars/renault-captur-rsline.jpg', location: 'Barnes',
    engine: '1.3L TCe', fuel: 'Petrol', transmission: 'Automatic (EDC)',
    body: 'SUV', drive: 'Front-wheel drive', power: null, seats: 5,
    mileage: null, colour: 'Blue', origin: null, vat: null, euro: null,
  },
  {
    slug: 'sl-560-v8-auto-1989', brand: 'Mercedes Benz', brandSlug: 'mercedes-benz',
    title: 'Mercedes-Benz SL 560 V8 Auto',
    year: 1989, price: 37995, status: 'available', tier: 'premium',
    image: '/images/cars/mercedes-sl560.jpg', location: 'Barnes',
    engine: '5.6L V8', fuel: 'Petrol', transmission: 'Automatic',
    body: 'Convertible', drive: 'Rear-wheel drive', power: null, seats: 2,
    mileage: null, colour: 'White', origin: 'United Kingdom', vat: null, euro: null,
  },
  {
    slug: 'defender-110-2013', brand: 'Land Rover', brandSlug: 'land-rover',
    title: 'Land Rover Defender 110',
    year: 2013, price: null, status: 'sold', tier: 'premium',
    image: '/images/cars/landrover-defender-110.jpg', location: 'Barnes',
    engine: '2.2L Diesel', fuel: 'Diesel', transmission: 'Manual',
    body: 'SUV (4x4)', drive: 'Four-wheel drive', power: null, seats: 7,
    mileage: null, colour: 'Green', origin: 'United Kingdom', vat: null, euro: null,
  },
  {
    slug: 'sorento-1-6-hybrid-2022', brand: 'Kia', brandSlug: 'kia',
    title: 'Kia Sorento 1.6 HT-GDI 2 Petrol Hybrid Edition Auto 226 BHP 7 Seater',
    year: 2022, price: 28495, status: 'available', tier: 'standard',
    image: '/images/cars/kia-sorento.jpg', location: 'Barnes',
    engine: '1.6L T-GDi Hybrid', fuel: 'Hybrid (Petrol)', transmission: 'Automatic',
    body: 'SUV', drive: null, power: '226 BHP', seats: 7,
    mileage: null, colour: 'Blue', origin: 'United Kingdom', vat: null, euro: null,
  },
  {
    slug: 'wrangler-3-8-v6-soft-top-2008', brand: 'Jeep', brandSlug: 'jeep',
    title: 'Jeep Wrangler 3.8 V6 5 Speed Manual Soft Top',
    year: 2008, price: 12995, status: 'available', tier: 'standard',
    image: '/images/cars/jeep-wrangler.jpg', location: 'Barnes',
    engine: '3.8L V6', fuel: 'Petrol', transmission: 'Manual (5-speed)',
    body: 'Convertible (Soft Top) 4x4', drive: 'Four-wheel drive', power: null, seats: 4,
    mileage: null, colour: 'Black', origin: 'United Kingdom', vat: null, euro: null,
  },
  {
    slug: 'q5-2-0-diesel-2020', brand: 'Audi', brandSlug: 'audi',
    title: 'Audi Q5 2.0 Diesel Auto',
    year: 2020, price: 23495, status: 'available', tier: 'premium',
    image: '/images/cars/audi-q5.jpg', location: 'Barnes',
    engine: '2.0L TDI', fuel: 'Diesel', transmission: 'Automatic',
    body: 'SUV', drive: 'AWD (quattro)', power: null, seats: 5,
    mileage: null, colour: 'Red', origin: 'Spain', vat: null, euro: null,
  },
  {
    slug: 'discovery-sport-p300e-2023', brand: 'Land Rover', brandSlug: 'land-rover',
    title: 'Land Rover Discovery Sport 1.5 P300e R-Dynamic 4WD Hybrid',
    year: 2023, price: 32995, status: 'available', tier: 'premium',
    image: '/images/cars/landrover-discovery-sport.jpg', location: 'Barnes',
    engine: '1.5L P300e', fuel: 'Plug-in Hybrid', transmission: 'Automatic',
    body: 'SUV', drive: 'Four-wheel drive', power: null, seats: 5,
    mileage: null, colour: 'Grey', origin: 'Portugal', vat: null, euro: null,
  },
  {
    slug: 'fabia-1-0-estate-2018', brand: 'Skoda', brandSlug: 'skoda',
    title: 'Skoda Fabia 1.0 Petrol Manual Estate',
    year: 2018, price: 8495, status: 'available', tier: 'standard',
    image: '/images/cars/skoda-fabia-estate.jpg', location: 'Barnes',
    engine: '1.0L', fuel: 'Petrol', transmission: 'Manual',
    body: 'Estate', drive: 'Front-wheel drive', power: null, seats: 5,
    mileage: null, colour: 'Blue', origin: null, vat: null, euro: null,
  },
  {
    slug: 'v60-d2-momentum-2015', brand: 'Volvo', brandSlug: 'volvo',
    title: 'Volvo V60 D2 Automatic Momentum',
    year: 2015, price: null, status: 'sold', tier: 'standard',
    image: '/images/cars/volvo-v60.jpg', location: 'Barnes',
    engine: '2.0L Diesel (D2)', fuel: 'Diesel', transmission: 'Automatic',
    body: 'Estate', drive: 'Front-wheel drive', power: null, seats: 5,
    mileage: null, colour: 'Blue', origin: 'Austria', vat: null, euro: null,
  },
  {
    slug: 'macan-s-3-0-v6-pdk', brand: 'Porsche', brandSlug: 'porsche',
    title: 'Porsche Macan S 3.0 V6 PDK 4WD Euro 6',
    year: null, price: 25995, status: 'available', tier: 'premium',
    image: '/images/cars/porsche-macan-s.jpg', location: 'Barnes',
    engine: '3.0L V6 Twin-Turbo', fuel: 'Petrol', transmission: 'Automatic (PDK)',
    body: 'SUV', drive: 'Four-wheel drive', power: null, seats: 5,
    mileage: null, colour: 'Grey', origin: null, vat: null, euro: 'Euro 6',
  },
  {
    slug: '218i-se-cabrio-2018', brand: 'BMW', brandSlug: 'bmw',
    title: 'BMW 218i SE Cabrio Auto',
    year: 2018, price: null, status: 'sold', tier: 'premium',
    image: '/images/cars/bmw-218i-cabrio.jpg', location: 'Barnes',
    engine: '1.5L', fuel: 'Petrol', transmission: 'Automatic',
    body: 'Convertible', drive: 'Front-wheel drive', power: null, seats: 4,
    mileage: null, colour: 'Silver', origin: 'France', vat: null, euro: null,
  },
  {
    slug: 'fabia-se-l-tsi-1-0-2019', brand: 'Skoda', brandSlug: 'skoda',
    title: 'Skoda Fabia SE L TSI 1.0 95 BHP Estate',
    year: 2019, price: null, status: 'sold', tier: 'standard',
    image: '/images/cars/skoda-fabia-sel.jpg', location: 'Barnes',
    engine: '1.0L TSI', fuel: 'Petrol', transmission: null,
    body: 'Estate', drive: 'Front-wheel drive', power: '95 BHP', seats: 5,
    mileage: null, colour: 'Smoke Silver', origin: 'Spain', vat: null, euro: null,
  },
  {
    slug: 'qashqai-1-3-dig-t-2020', brand: 'Nissan', brandSlug: 'nissan',
    title: 'Nissan Qashqai 1.3 DIG-T N-Connecta DCT Auto Petrol',
    year: 2020, price: 15995, status: 'available', tier: 'standard',
    image: '/images/cars/nissan-qashqai.jpg', location: 'Barnes',
    engine: '1.3L DIG-T', fuel: 'Petrol', transmission: 'Automatic (DCT)',
    body: 'SUV', drive: 'Front-wheel drive', power: null, seats: 5,
    mileage: null, colour: 'White', origin: 'United Kingdom', vat: null, euro: null,
  },
  {
    slug: 'gt-line-1-6-t-gdi-awd-2019', brand: 'Kia', brandSlug: 'kia',
    title: 'Kia 1.6 T-GDI AWD GT-Line 177 Automatic',
    year: 2019, price: null, status: 'sold', tier: 'standard',
    image: '/images/cars/kia-gtline.jpg', location: 'Barnes',
    engine: '1.6L T-GDi', fuel: 'Petrol', transmission: 'Automatic',
    body: null, drive: 'AWD', power: '177 BHP', seats: 5,
    mileage: null, colour: 'Blue', origin: 'Belgium', vat: null, euro: null,
  },
  {
    slug: 'captur-1-5-dci-2021', brand: 'Renault', brandSlug: 'renault',
    title: 'Renault Captur 1.5 dCi 6 Speed',
    year: 2021, price: 11495, status: 'available', tier: 'standard',
    image: '/images/cars/renault-captur-dci.jpg', location: 'Barnes',
    engine: '1.5L dCi', fuel: 'Diesel', transmission: 'Manual (6-speed)',
    body: 'SUV', drive: 'Front-wheel drive', power: null, seats: 5,
    mileage: null, colour: 'White', origin: 'Spain', vat: null, euro: null,
  },
  {
    slug: 'ghost-6-6-v12-auto', brand: 'Rolls Royce', brandSlug: 'rolls-royce',
    title: 'Rolls-Royce Ghost 6.6 V12 Auto',
    year: 2014, price: null, status: 'sold', tier: 'ultra',
    image: '/images/cars/rolls-royce-ghost.jpg', location: 'Chelsea Harbour',
    engine: '6.6L V12 Twin-Turbo', fuel: 'Petrol', transmission: 'Automatic',
    body: 'Saloon', drive: 'Rear-wheel drive', power: null, seats: 5,
    mileage: null, colour: 'Blue', origin: 'United Kingdom', vat: null, euro: null,
  },
];

// ── Derived helpers ───────────────────────────────────────────
export const availableVehicles = vehicles.filter((v) => v.status !== 'sold');
export const soldVehicles = vehicles.filter((v) => v.status === 'sold');

export function priceLabel(v: Vehicle): string {
  if (v.status === 'sold') return 'SOLD';
  if (v.status === 'call' || v.price === null) return 'Call us';
  return '£' + v.price.toLocaleString('en-GB');
}

export function vehicleByParams(brandSlug: string, slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.brandSlug === brandSlug && v.slug === slug);
}

export function vehiclesByBrandSlug(brandSlug: string): Vehicle[] {
  return vehicles.filter((v) => v.brandSlug === brandSlug);
}

export function relatedVehicles(v: Vehicle, n = 3): Vehicle[] {
  const sameBrand = vehicles.filter((o) => o.slug !== v.slug && o.brandSlug === v.brandSlug);
  const sameTier = vehicles.filter(
    (o) => o.slug !== v.slug && o.brandSlug !== v.brandSlug && o.tier === v.tier
  );
  return [...sameBrand, ...sameTier].slice(0, n);
}

// Distinct brand names that currently have stock (for the inventory grid filter)
export const brandsInStock = Array.from(new Set(vehicles.map((v) => v.brand))).sort();

// Filter facets (derived from real data only)
export const bodyTypes = Array.from(
  new Set(vehicles.map((v) => v.body).filter((b): b is string => !!b))
).sort();
export const fuelTypes = Array.from(
  new Set(vehicles.map((v) => v.fuel).filter((f): f is string => !!f))
).sort();
export const transmissionTypes = Array.from(
  new Set(
    vehicles
      .map((v) => v.transmission && (v.transmission.startsWith('Auto') ? 'Automatic' : 'Manual'))
      .filter((t): t is string => !!t)
  )
).sort();

export const priceBands = [
  { id: 'under-10k', label: 'Under £10,000', min: 0, max: 9999 },
  { id: '10k-25k', label: '£10,000 – £25,000', min: 10000, max: 25000 },
  { id: '25k-50k', label: '£25,000 – £50,000', min: 25000, max: 50000 },
  { id: '50k-plus', label: '£50,000+', min: 50000, max: Infinity },
];

export const inventoryStats = {
  total: vehicles.length,
  available: availableVehicles.length,
  lowest: Math.min(...vehicles.filter((v) => v.price).map((v) => v.price as number)),
  brands: brandsInStock.length,
};
