export interface LocationData {
  slug: string;
  name: string;
  county: 'Essex' | 'Greater London';
  type: 'village' | 'town' | 'commercial_hub';
  postcodes: string[];
  nearbyAreas: string[];
  commercialFocus: boolean;
  domesticFocus: boolean;
  landmarks: string[];
  description: string;
}

export const LOCATIONS: LocationData[] = [
  // Affluent Essex Villages (Priority Domestic)
  {
    slug: 'ingatestone',
    name: 'Ingatestone',
    county: 'Essex',
    type: 'village',
    postcodes: ['CM4'],
    nearbyAreas: ['Mountnessing', 'Margaretting', 'Stock', 'Fryerning'],
    commercialFocus: false,
    domesticFocus: true,
    landmarks: ['Ingatestone High Street', 'Anglo European School area', 'Ingatestone Hall'],
    description: 'Picturesque historic Essex village renowned for period properties, country residences, and leafy suburban estates.'
  },
  {
    slug: 'stock',
    name: 'Stock',
    county: 'Essex',
    type: 'village',
    postcodes: ['CM4', 'CM2'],
    nearbyAreas: ['Ingatestone', 'Billericay', 'Galleywood', 'Margaretting'],
    commercialFocus: false,
    domesticFocus: true,
    landmarks: ['Stock High Street', 'Crondon Park', 'Greenwoods'],
    description: 'Affluent Essex village featuring luxury detached homes, barn conversions, and prestige residential properties.'
  },
  {
    slug: 'danbury',
    name: 'Danbury',
    county: 'Essex',
    type: 'village',
    postcodes: ['CM3'],
    nearbyAreas: ['Little Baddow', 'Bicknacre', 'Maldon', 'Chelmsford'],
    commercialFocus: false,
    domesticFocus: true,
    landmarks: ['Danbury Country Park', 'Danbury Common', 'The Heights'],
    description: 'Elevated wooded Essex village famous for substantial executive housing and extensive country grounds.'
  },
  {
    slug: 'writtle',
    name: 'Writtle',
    county: 'Essex',
    type: 'village',
    postcodes: ['CM1'],
    nearbyAreas: ['Chelmsford', 'Roxwell', 'Margaretting'],
    commercialFocus: false,
    domesticFocus: true,
    landmarks: ['Writtle Green', 'Writtle University College', 'The Green'],
    description: 'Charming traditional village with duck pond greens, listed cottages, and sprawling modern family homes.'
  },
  {
    slug: 'kelvedon-hatch',
    name: 'Kelvedon Hatch',
    county: 'Essex',
    type: 'village',
    postcodes: ['CM15'],
    nearbyAreas: ['Brentwood', 'Doddinghurst', 'Navestock', 'Ongar'],
    commercialFocus: false,
    domesticFocus: true,
    landmarks: ['Secret Nuclear Bunker area', 'Stocks Lane', 'Kelvedon Hall Lane'],
    description: 'Desirable rural village situated directly between Brentwood and Chipping Ongar.'
  },
  {
    slug: 'shenfield',
    name: 'Shenfield',
    county: 'Essex',
    type: 'town',
    postcodes: ['CM15'],
    nearbyAreas: ['Brentwood', 'Hutton', 'Ingatestone'],
    commercialFocus: true,
    domesticFocus: true,
    landmarks: ['Shenfield Station Elizabeth Line corridor', 'Hutton Mount private estate'],
    description: 'Premier commuter hub home to exclusive private avenues, high-value residences, and local commercial premises.'
  },

  // Major Commercial & Property Management Hubs (Commercial Focus)
  {
    slug: 'brentwood',
    name: 'Brentwood',
    county: 'Essex',
    type: 'commercial_hub',
    postcodes: ['CM14', 'CM15'],
    nearbyAreas: ['Shenfield', 'Warley', 'Ingatestone', 'Romford'],
    commercialFocus: true,
    domesticFocus: true,
    landmarks: ['Brentwood High Street', 'Warley Business Park', 'Brook Street Business Area'],
    description: 'Major commercial centre in Essex with multi-tenancy business parks, residential block management portfolios, and corporate headquarters.'
  },
  {
    slug: 'chelmsford',
    name: 'Chelmsford',
    county: 'Essex',
    type: 'commercial_hub',
    postcodes: ['CM1', 'CM2', 'CM3'],
    nearbyAreas: ['Writtle', 'Danbury', 'Great Baddow', 'Broomfield'],
    commercialFocus: true,
    domesticFocus: true,
    landmarks: ['Chelmsford City Centre', 'Springfield Business Park', 'Broomfield Hospital Corridor'],
    description: 'Vibrant Essex city featuring major commercial office developments, logistics facilities, and extensive healthcare surgeries.'
  },
  {
    slug: 'romford',
    name: 'Romford',
    county: 'Greater London',
    type: 'commercial_hub',
    postcodes: ['RM1', 'RM2', 'RM3', 'RM7'],
    nearbyAreas: ['Hornchurch', 'Upminster', 'Gallows Corner', 'Brentwood'],
    commercialFocus: true,
    domesticFocus: true,
    landmarks: ['Romford Commercial Corridor', 'Gallows Corner Industrial Estate', 'Harold Hill'],
    description: 'Key East London commercial hub with industrial manufacturing parks, healthcare facilities, and dense residential block developments.'
  },
  {
    slug: 'canary-wharf',
    name: 'Canary Wharf & Docklands',
    county: 'Greater London',
    type: 'commercial_hub',
    postcodes: ['E14'],
    nearbyAreas: ['Isle of Dogs', 'Stratford', 'City of London'],
    commercialFocus: true,
    domesticFocus: false,
    landmarks: ['Canada Square', 'South Quay', 'Heron Quays'],
    description: 'Prestige corporate headquarters, high-rise commercial blocks, and premium facilities management contracts.'
  }
];

export interface ServiceData {
  slug: string;
  name: string;
  division: 'commercial' | 'domestic';
  heroImage: string;
  leadParagraph: string;
  features: string[];
}

export const SERVICES: ServiceData[] = [
  // Commercial Priority Services
  {
    slug: 'commercial-gutter-cleaning',
    name: 'Commercial Gutter Cleaning & Roof Clearance',
    division: 'commercial',
    heroImage: '/images/high-level-gutter-cleaning.jpg',
    leadParagraph: 'High-reach vacuum gutter clearing up to 50ft with wireless CCTV camera verification for commercial property blocks, industrial warehouses, and offices.',
    features: [
      'High-reach vacuum extraction from ground level up to 50ft',
      'Wireless high-definition CCTV camera inspection logs',
      'Downpipe flushing & preventative drainage unblocking',
      'RAMS provided, fully insured with £10M Public Liability'
    ]
  },
  {
    slug: 'property-management',
    name: 'Property Management & Block Cleaning',
    division: 'commercial',
    heroImage: '/images/property-management-external.jpg',
    leadParagraph: 'Fully managed communal area cleaning, stairwell caretaking, bin store sanitisation, and routine block maintenance for managing agents.',
    features: [
      'SLA-backed weekly or fortnightly scheduled communal upkeep',
      'Internal stairwell, lobby, and brass polishing',
      'Bin store power-washing and odour neutralisation',
      'Digital quality audit reports after every site visit'
    ]
  },
  {
    slug: 'healthcare-sanitation-services',
    name: 'Healthcare & CQC Dental Practice Cleaning',
    division: 'commercial',
    heroImage: '/images/healthcare-and-sanitisation.jpg',
    leadParagraph: 'CQC-compliant clinical sanitation, decontamination protocols, and audit-ready cleaning logs for dental practices and medical facilities.',
    features: [
      'Strict CQC & BICSc color-coded cross-contamination prevention',
      'Clinical-grade virucidal disinfection and logbooks',
      'DBS-vetted, uniformed, and trained clinical operatives',
      'Zero-disruption evening and out-of-hours scheduling'
    ]
  },

  // Domestic Priority Services
  {
    slug: 'window-cleaning',
    name: 'Pure Water Window Cleaning',
    division: 'domestic',
    heroImage: '/images/pure-water-window-cleaning.jpg',
    leadParagraph: 'Spotless, smear-free exterior window cleaning using 100% purified water and reach-and-wash telescopic carbon poles.',
    features: [
      '100% demineralised pure water that dries naturally spot-free',
      'Frames, sills, and doors cleaned on every single visit',
      'Reach up to 4 storeys safely from the ground without ladders',
      'Regular 4, 6, or 8-weekly schedules or one-off deep cleans'
    ]
  },
  {
    slug: 'gutter-clearing',
    name: 'Domestic Gutter Clearing & Downpipe Flushing',
    division: 'domestic',
    heroImage: '/images/domestic-gutter-cleaning.webp',
    leadParagraph: 'Powerful wet-and-dry vacuum clearance eliminating leaves, moss, and debris to safeguard your home against damp and water ingress.',
    features: [
      'High-powered vacuum clearance removing all moss, silt, and sludge',
      'Prevents costly water damage, rotting fascias, and foundation damp',
      'Downpipe blockage clearance and water-flow testing',
      'No messy ladders against your walls or gutters'
    ]
  },
  {
    slug: 'pressure-washing',
    name: 'Driveway & Patio Pressure Washing',
    division: 'domestic',
    heroImage: '/images/pressure-washing-before-after.webp',
    leadParagraph: 'Commercial-grade rotary flat-surface pressure washing to restore block paving, Indian sandstone, tarmac, and decking to like-new condition.',
    features: [
      'Industrial rotary surface cleaners preventing messy striping',
      'Deep removal of black lichen, algae, moss, and stubborn oil stains',
      'Kiln-dried re-sanding for block paving joints included',
      'Biocide anti-fungal treatments for long-lasting protection'
    ]
  }
];
