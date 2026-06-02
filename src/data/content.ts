// ─────────────────────────────────────────────────────────────
// Page copy for The London LHD Centre. Selling promises, services,
// the "why sell to us" reasons, "what we buy" and the FAQ set are
// taken verbatim from londonlhdcentre.com. Heritage figures are
// standardised to "since 1995 / over 30 years" (the live site used
// both 30 and 35 — see JUDGEMENT_CALLS.md). Nothing invented.
// ─────────────────────────────────────────────────────────────

export interface IconItem { title: string; body: string; icon: string; }

// ── The 4 selling promises (verbatim) ──
export const sellingPromises: IconItem[] = [
  {
    title: 'Get the best price',
    body: 'We urgently require all LHD cars and will pay the best prices.',
    icon: 'Euro',
  },
  {
    title: 'Secure payment',
    body: 'We will make payment to you by cash, bank transfer or bankers draft.',
    icon: 'Lock',
  },
  {
    title: 'We collect',
    body: 'We will collect your car from anywhere in the UK or Europe.',
    icon: 'Truck',
  },
  {
    title: 'No hassle',
    body: 'We are polite and professional, all paperwork is done correctly. Payment is swift and secure.',
    icon: 'ShieldCheck',
  },
];

// ── Core services (verbatim from the existing site) ──
export interface ServiceItem {
  slug: string;
  title: string;
  icon: string;
  lead: string;
  points: string[];
  href: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'buying',
    title: 'Buying LHD Cars',
    icon: 'ShoppingCart',
    lead: 'We urgently require all LHD cars and will pay the best prices.',
    points: [
      'Secure payment by cash, bank transfer or bankers draft',
      'We collect your car from anywhere in the UK or Europe',
      'Polite, professional handling and correct paperwork',
    ],
    href: '/buying-lhd-cars',
  },
  {
    slug: 'selling',
    title: 'Selling LHD Cars',
    icon: 'Car',
    lead: 'Browse our full inventory of left-hand drive cars from all major brands, mid-range to high-end.',
    points: [
      'All major brands, from Skoda to Ferrari',
      'Two London showrooms — Barnes and Chelsea Harbour',
      'Delivery throughout the UK and Europe',
    ],
    href: '/lhd-cars-for-sale',
  },
  {
    slug: 'uk-registration',
    title: 'UK Registration Service',
    icon: 'FileCheck',
    lead: 'We are now offering our UK registration service for imported cars.',
    points: [
      'We can put any car onto UK plates',
      'COC papers provided for all EU supplied cars',
      'A complete, hassle-free import and registration process',
    ],
    href: '/lhd-about-us',
  },
  {
    slug: 'shipping',
    title: 'Car Shipping',
    icon: 'Ship',
    lead: 'We can arrange delivery and collection of your car anywhere in Europe, the USA or the Middle East.',
    points: [
      'International delivery and collection',
      'Europe, the USA and the Middle East',
      'Logistics and transportation handled for you',
    ],
    href: '/lhd-contact-us',
  },
];

// ── About story (grounded in the live About page, years standardised) ──
export const aboutStory: string[] = [
  'The London LHD Centre is the UK’s leading specialist in buying and selling left-hand drive (LHD) cars. With over 30 years of experience in the left-hand drive car market, we have successfully helped thousands of customers to buy and sell their left-hand drive vehicles.',
  'We are the UK’s leading left-hand drive car dealer. We offer a wide range of LHD cars from all major brands — from mid-range Skoda, Kia and Ford to high-end Ferrari, McLaren and Rolls-Royce — and we can help you find the perfect car for your needs.',
  'Our deep market knowledge and expertise in import and export regulations sets us apart. We handle all the necessary paperwork, logistics and transportation details, so whether you are buying or selling, we provide you with the best possible service.',
  'We operate from two London locations: our main site at 76 Glentham Road in Barnes, and a premium showroom at Chelsea Harbour. Wherever you are in the UK, Europe, the USA or the Middle East, we can arrange delivery or collection of your car.',
];

// ── Why customers choose us (about page values) ──
export const aboutValues: IconItem[] = [
  { title: 'Specialist expertise', body: 'Left-hand drive is all we do. Over 30 years of focus on the LHD market means we understand these cars, the import process and the paperwork better than any general dealer.', icon: 'Award' },
  { title: 'Comprehensive inventory', body: 'From £8,000 Skodas to £90,000 Ferraris, we cover every tier of the market with equal commitment, across all major brands.', icon: 'LayoutGrid' },
  { title: 'Two London locations', body: 'Our Barnes site is the inventory base; Chelsea Harbour serves our premium clientele. Two showrooms signal the scale and credibility of an established dealer.', icon: 'Building2' },
  { title: 'International reach', body: 'We arrange delivery and collection throughout the UK, Europe, the USA and the Middle East — wherever your car needs to go.', icon: 'Globe' },
  { title: 'UK registration & COC', body: 'We can put any imported car onto UK plates and provide Certificate of Conformity (COC) papers for all EU supplied cars.', icon: 'FileCheck' },
  { title: 'Hassle-free service', body: 'Polite, professional handling, correct paperwork and swift, secure payment — every step managed so you do not have to.', icon: 'Handshake' },
];

// ── Why sell your LHD car to us (verbatim 5 points from "The Process") ──
export const sellReasons: IconItem[] = [
  { title: 'Competitive Offers', body: 'We understand the true value of LHD vehicles and provide competitive offers based on current market trends.', icon: 'Euro' },
  { title: 'Hassle-Free Process', body: 'From initial contact to final sale, we handle all the paperwork and logistics, making the process stress-free for you.', icon: 'ShieldCheck' },
  { title: 'Immediate Payment', body: 'Once we agree on a price, we ensure prompt payment. No waiting around – you get your money quickly and securely.', icon: 'Banknote' },
  { title: 'Expert Appraisals', body: 'Our team has over 30 years of experience in the left-hand drive car market.', icon: 'Award' },
  { title: 'National & International Service', body: 'No matter where you are in the UK, or abroad, we can facilitate the sale of your left-hand drive car.', icon: 'Globe' },
];

// ── Step-by-step process (structured from the site's stated process) ──
export const processSteps = [
  { n: 1, title: 'Get in touch', body: 'Contact us by phone, email or WhatsApp with your car’s details — make, model, year, mileage and condition.', icon: 'Phone' },
  { n: 2, title: 'Free valuation', body: 'We provide a competitive, no-obligation offer right away, based on the make, model, year, mileage, condition and current market trends.', icon: 'Euro' },
  { n: 3, title: 'Inspection & agreement', body: 'We arrange an inspection at a time that suits you and confirm the offer. There is no obligation to accept.', icon: 'CircleCheck' },
  { n: 4, title: 'Payment & collection', body: 'Once the price is agreed we make prompt, secure payment and collect your car from anywhere in the UK or Europe.', icon: 'Truck' },
];

// ── What types of LHD cars we buy (verbatim structure from the site) ──
export const whatWeBuy = {
  intro:
    'At London LHD Centre, we buy a wide range of left-hand drive (LHD) cars, from mid-range to high-end models.',
  highEnd: [
    { brand: 'Aston Martin', models: 'DB11, Vantage models' },
    { brand: 'Audi', models: 'A4, A6, Q7' },
    { brand: 'BMW', models: '3 Series, 5 Series, X5' },
    { brand: 'Ferrari', models: '488 GTB, Portofino' },
    { brand: 'Jaguar', models: 'F-Type, XF' },
    { brand: 'Maserati', models: 'Ghibli, Levante' },
    { brand: 'McLaren', models: '570S, 720S' },
    { brand: 'Mercedes-Benz', models: 'C-Class, E-Class, GLC' },
    { brand: 'Porsche', models: '911, Cayenne, Macan' },
    { brand: 'Rolls-Royce', models: 'Phantom, Ghost' },
  ],
  midRange: [
    'Jeep', 'Kia', 'Land Rover', 'Citroën', 'Ford', 'Hyundai', 'Toyota', 'Volkswagen',
    'Volvo', 'Seat', 'Skoda', 'Renault', 'Mini', 'Mitsubishi', 'Nissan', 'Opel', 'Subaru', 'Mazda',
  ],
  outro:
    'If you have a left-hand drive car from any of these brands, get in touch with us today for a no-obligation valuation.',
};

// ── FAQs (verbatim, 16 questions across 3 categories) ──
export interface Faq { q: string; a: string; category?: string; }

export const faqs: Faq[] = [
  { category: 'The Process', q: 'What documentation is required to sell my LHD car?', a: 'To sell your LHD car, you will need to provide the vehicle registration document (V5C), service history, MOT certificate and any other relevant paperwork.' },
  { category: 'The Process', q: 'How long does the selling process take?', a: 'The process typically takes a few days, from initial inquiry to final payment.' },
  { category: 'The Process', q: 'How do I get an offer for my left hand drive car?', a: 'We will offer to buy your LHD car once you have contacted us with your car’s details. We will arrange an inspection and provide a competitive offer right away.' },
  { category: 'The Process', q: 'Is there any obligation to accept the offer?', a: 'No, there is no obligation to accept our offer. You are free to consider other options.' },
  { category: 'The Process', q: 'What happens to my car after I sell it to you?', a: 'Your car will be inspected, prepared and added to our inventory for resale.' },
  { category: 'The Process', q: 'Can I part-exchange my left hand drive car?', a: 'Yes, we offer part-exchange options on the LHD vehicles we buy.' },
  { category: 'The Process', q: 'Do you handle the paperwork for the sale?', a: 'Yes, we manage all the paperwork and logistics involved in the sale process.' },
  { category: 'The Process', q: 'How do I start the selling process?', a: 'You can start by contacting us via phone, email or through our online form with your car’s details.' },
  { category: 'Financial', q: 'How is the value of my left hand drive car determined?', a: 'The value of your left-hand drive vehicle is determined based on the make, model, year, mileage, condition and current market trends.' },
  { category: 'Financial', q: 'Do you provide immediate payment?', a: 'Yes, once the offer is accepted and paperwork is completed, we provide prompt and secure payment.' },
  { category: 'Financial', q: 'Would you buy my left hand drive car if it has outstanding finance?', a: 'Yes, but the outstanding finance must be settled before the sale can be completed.' },
  { category: 'Financial', q: 'Is there any cost involved in selling my car to you?', a: 'No, there are no hidden costs or fees when we buy your left-hand drive car.' },
  { category: 'About the Car', q: 'Can I sell a car that is not in perfect condition?', a: 'Yes, we buy LHD cars in various conditions.' },
  { category: 'About the Car', q: 'Do you buy all makes and models of LHD cars?', a: 'We purchase both mid-range and premium brands, including Aston Martin, Audi, BMW, Ferrari, Jaguar, Maserati, McLaren, Mercedes-Benz, Porsche and Rolls-Royce, among many others.' },
  { category: 'About the Car', q: 'Do you buy left hand drive cars from outside London?', a: 'Yes, we buy LHD cars from all over the UK, Europe and other parts of the world and can even arrange collection if needed.' },
  { category: 'About the Car', q: 'What is a Certificate of Conformity (COC) and do you provide one?', a: 'A COC confirms a vehicle meets EU standards and is needed to register an imported car. We provide COC papers for all EU supplied cars as part of our UK registration service.' },
];
export const allFaqs = faqs;

// ── Latest news / notices (grounded in the live homepage notices) ──
export const latestNews: IconItem[] = [
  { title: 'UK Registration Service', body: 'We are now offering our UK registration service for imported cars — we can put any car onto UK plates and provide COC papers for all EU supplied cars.', icon: 'FileCheck' },
  { title: 'Car shipping', body: 'We can arrange delivery and collection of your car anywhere in Europe, the USA or the Middle East.', icon: 'Ship' },
  { title: 'Follow us on Facebook', body: 'Keep up with our latest left-hand drive arrivals and announcements over on our Facebook page.', icon: 'Sparkles' },
];

export const getInTouch = {
  title: 'Looking for an LHD car or want to sell yours?',
  body: [
    'Call us on 020 7371 9120 or 07801 110000, or send us a message — our team is here Monday to Friday.',
    'Whether you are buying or selling, we can provide you with the best possible service.',
  ],
};
