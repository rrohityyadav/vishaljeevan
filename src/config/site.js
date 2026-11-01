// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update business details across the site.
// Anything marked TODO is an unverified placeholder.
// ─────────────────────────────────────────────────────────────
export const SITE = {
  name: 'Fresh Waters',            // TODO: registered company / brand name
  tagline: 'Packaged Drinking Water Manufacturer',
  url: 'https://www.vishaljeevan.co.in',       // TODO: live domain (also update public/sitemap.xml + robots.txt)
  phoneDisplay: '+91 86014 83308',
  phoneTel: '+918601483308',
  whatsappNumber: '918601483308',       // +91 8601483308 – used everywhere
  email: 'info@vishaljeevan.co.in',            // TODO
  address: 'Registered business address – TODO',
  hasVerifiedAddress: false,            // set true to enable LocalBusiness schema
  social: { facebook: '', instagram: '', youtube: '', linkedin: '' }, // TODO: add real URLs; empty = hidden
}

// Only list certifications the company can document. Empty = placeholder shown.
// Example: { name: 'FSSAI Licence', detail: 'Licence No. XXXXXXXX', logo: '/certs/fssai.webp' }
export const CERTIFICATIONS = []

// Claims that must be confirmed with the plant before being switched on.
export const CLAIMS = {
  minimumOrderQuantity: null,   // e.g. '500 bottles' – leave null to hide
  printingMethods: null,        // e.g. 'Shrink-sleeve labels' – leave null to hide
}

export const WA_MESSAGES = {
  general: 'Hello, I would like to know more about your packaged drinking water products and services.',
  bulk: 'Hello, I am interested in placing a bulk water bottle order. Please share the available options.',
  branding: 'Hello, I want customized water bottles with my company logo. Please share the branding options.',
  jar20: 'Hello, I am interested in your 20-litre water jar supply.',
  partnership: 'Hello, I am interested in discussing a business partnership.',
}

export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Expertise', href: '#expertise' },
  { label: 'Products', href: '#products' },
  { label: 'Custom Branding', href: '#branding' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact Us', href: '#contact' },
]

export const PRODUCTS = [
  { id: 'p250', name: '250 ML Water Bottle', cap: '250 ml', kind: 'bottle', h: 0.6, desc: 'Compact single-serve bottle for events, meetings and hospitality trays.' },
  { id: 'p300', name: '300 ML Water Bottle', cap: '300 ml', kind: 'bottle', h: 0.67, desc: 'A light, easy-to-carry size suited to conferences and guest rooms.' },
  { id: 'p500', name: '500 ML Water Bottle', cap: '500 ml', kind: 'bottle', h: 0.76, desc: 'Everyday on-the-go bottle for retail, offices and travel.' },
  { id: 'p750', name: '750 ML Water Bottle', cap: '750 ml', kind: 'bottle', h: 0.85, desc: 'A larger personal bottle for restaurants, gyms and day trips.' },
  { id: 'p1l', name: '1 Litre Water Bottle', cap: '1 litre', kind: 'bottle', h: 0.93, desc: 'The familiar one-litre size for homes, tables and retail shelves.' },
  { id: 'p2l', name: '2 Litre Water Bottle', cap: '2 litres', kind: 'bottle', h: 1, wide: true, desc: 'Family-size bottle for homes, shops and shared spaces.' },
  { id: 'p5l', name: '5 Litre Water Bottle', cap: '5 litres', kind: 'bottle5', desc: 'Handle-carry pack that suits small offices and households.' },
  { id: 'p10l', name: '10 Litre Water Can', cap: '10 litres', kind: 'can', desc: 'Mid-size can for homes, clinics and small commercial counters.' },
  { id: 'p20l', name: '20 Litre Water Jar', cap: '20 litres', kind: 'jar', desc: 'Returnable-style jar for offices, institutions and dispenser supply.', msg: 'jar20' },
]

export const BRANDED = [
  { label: 'Corporate logo', brand: 'ACME', color: '#204A80', accent: '#079DDD', pattern: 'band' },
  { label: 'Restaurant', brand: 'Saffron', color: '#9A3412', accent: '#F59E0B', pattern: 'stripe' },
  { label: 'Hotel', brand: 'GRAND', color: '#1F2937', accent: '#C9A24B', pattern: 'solid' },
  { label: 'Wedding', brand: 'A & R', color: '#9D174D', accent: '#F9A8D4', pattern: 'dots' },
  { label: 'Birthday', brand: 'Happy 5', color: '#6D28D9', accent: '#FBBF24', pattern: 'dots' },
  { label: 'Event', brand: 'SUMMIT', color: '#047857', accent: '#6EE7B7', pattern: 'stripe' },
  { label: 'Promotional', brand: 'Fresh!', color: '#0E7490', accent: '#FDE047', pattern: 'wave' },
  { label: 'Conference', brand: 'EXPO 26', color: '#3730A3', accent: '#67E8F9', pattern: 'wave' },
]

export const BRANDING_POINTS = [
  'Custom logo printing',
  'Customized bottle labels',
  'Brand colors and designs',
  'Business promotional packaging',
  'Bulk customized orders',
  'Private-label manufacturing',
]

// Illustrative stages – edit to match the plant's verified operations.
export const PROCESS = [
  { t: 'Water Source Management', d: 'Raw water is sourced and monitored before it enters the plant.' },
  { t: 'Water Purification', d: 'Treatment stages prepare the water for drinking-grade processing.' },
  { t: 'Filtration Process', d: 'Multi-stage filtration refines clarity, taste and consistency.' },
  { t: 'Quality Testing', d: 'Samples are checked at defined points in the line.' },
  { t: 'Bottle Cleaning and Preparation', d: 'Bottles, jars and caps are cleaned and readied for filling.' },
  { t: 'Hygienic Filling', d: 'Containers are filled in a controlled, hygienic area.' },
  { t: 'Sealing and Packaging', d: 'Each container is sealed, labelled and packed for dispatch.' },
  { t: 'Storage and Distribution', d: 'Finished stock is stored and dispatched to customers and distributors.' },
]

export const WHY = [
  { icon: 'ShieldCheck', t: 'Quality-Focused Manufacturing', d: 'Hygiene and process discipline built into every stage of production.' },
  { icon: 'Layers', t: 'Multiple Bottle Sizes', d: 'From 250 ml bottles to 20 litre jars under one roof.' },
  { icon: 'Palette', t: 'Customized Branding Solutions', d: 'Your logo, colors and label design on every bottle.' },
  { icon: 'Boxes', t: 'Bulk Order Capabilities', d: 'Planned supply for hotels, events, retailers and institutions.' },
  { icon: 'Truck', t: 'Reliable Supply Solutions', d: 'Dependable scheduling so your stock does not run dry.' },
  { icon: 'Headset', t: 'Customer-Focused Service', d: 'A direct line to our team for quotes, changes and follow-up.' },
]

export const INDUSTRIES = [
  { t: 'Hotels and Resorts', d: 'Branded bottles for rooms, restaurants and banquets.', msg: 'bulk', tone: 0 },
  { t: 'Restaurants and Cafes', d: 'Table water carrying your restaurant name.', msg: 'branding', tone: 1 },
  { t: 'Corporate Offices', d: 'Regular bottle and jar supply for teams and visitors.', msg: 'bulk', tone: 2 },
  { t: 'Wedding and Event Planners', d: 'Personalized bottles for weddings, parties and launches.', msg: 'branding', tone: 3 },
  { t: 'Retailers and Distributors', d: 'Stock the full size range, or partner with us to distribute.', msg: 'partnership', tone: 4 },
  { t: 'Hospitals and Institutions', d: 'Dependable bulk supply for large daily consumption.', msg: 'bulk', tone: 5 },
  { t: 'Marketing Agencies', d: 'Bottles as a branded giveaway for client campaigns.', msg: 'branding', tone: 6 },
  { t: 'Corporate Gifting', d: 'Custom-labelled water as a simple, useful gift.', msg: 'branding', tone: 7 },
]
