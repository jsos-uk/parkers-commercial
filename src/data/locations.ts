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
  // B2B Enterprise Extensions
  districtCategory?: 'london_prime' | 'london_corridor' | 'essex_hub' | 'essex_commuter';
  targetSectors?: string[];
  buildingTypes?: string[];
  transportLinks?: string[];
  procurementHighlights?: string[];
  operationalProfile?: {
    challenge: string;
    approach: string;
    typicalPremises: string;
  };
  localFaq?: {
    question: string;
    answer: string;
  };
}

export const LOCATIONS: LocationData[] = [
  // ==========================================
  // Affluent Essex Villages (Priority Domestic)
  // ==========================================
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
    districtCategory: 'essex_commuter',
    targetSectors: ['Professional Practices', 'Executive Suites', 'Commuter Retail & Offices'],
    buildingTypes: ['Multi-Floor Commercial Suites', 'Private Medical Practices', 'Retail Parades'],
    transportLinks: ['Shenfield Elizabeth Line Terminal', 'Brentwood Rail', 'A12 Arterial'],
    landmarks: ['Shenfield Station Elizabeth Line corridor', 'Hutton Mount private estate'],
    procurementHighlights: [
      'Flexible keyholder evening cleaning schedules',
      'COSHH compliant, eco-friendly chemical regimes',
      'Dedicated local contract supervisor'
    ],
    operationalProfile: {
      challenge: 'High-end commuter commercial suites and private medical offices requiring reliable, quiet keyholder cleans with zero disruption to daily client appointments.',
      approach: 'Dedicated local cleaning teams operating early mornings and evenings with strict keyholder accountability and eco-friendly chemical regimes.',
      typicalPremises: 'Accountancy practices, estate agency suites on Shenfield Broadway, and dental clinics.'
    },
    localFaq: {
      question: 'Can you provide out-of-hours keyholder cleaning for offices near Shenfield station?',
      answer: 'Yes. Most of our Shenfield commercial clients require evening or early morning keyholder cleans before commuting hours begin. All staff are vetted and keyholding is fully insured.'
    },
    description: 'Premier commuter hub home to exclusive private avenues, high-value residences, and local commercial premises.'
  },

  // ==========================================
  // Major Essex Commercial Hubs (Commercial Focus)
  // ==========================================
  {
    slug: 'brentwood',
    name: 'Brentwood',
    county: 'Essex',
    type: 'commercial_hub',
    postcodes: ['CM14', 'CM15'],
    nearbyAreas: ['Shenfield', 'Warley', 'Ingatestone', 'Romford', 'Harold Wood'],
    commercialFocus: true,
    domesticFocus: true,
    districtCategory: 'essex_hub',
    targetSectors: ['Financial Services', 'Corporate Regional HQs', 'Property Management Portfolios', 'Healthcare Surgeries'],
    buildingTypes: ['Business Park Headquarters', 'Residential Block Portfolios', 'Multi-Tenant Commercial Units'],
    transportLinks: ['Brentwood Elizabeth Line', 'M25 Junction 28', 'A12 Corridor'],
    landmarks: ['Brentwood High Street', 'Warley Business Park', 'Brook Street Business Area'],
    procurementHighlights: [
      '£10M Public & Employers Liability Insurance',
      'Dedicated mobile supervisor & digital audit reporting',
      'Directly employed, vetted & uniformed cleaning operatives'
    ],
    operationalProfile: {
      challenge: 'Multi-tenant commercial business parks and extensive residential managing agent portfolios needing dependable caretaker schedules and communal cleaning.',
      approach: 'Mobile supervisory vans equipped with high-reach pure water systems, internal buffing equipment, and digital audit reporting for property agents.',
      typicalPremises: 'Corporate head offices in Warley Hill, business units on Brook Street, and modern multi-tenant apartment blocks.'
    },
    localFaq: {
      question: 'How quickly can your Brentwood cleaning team respond to communal block emergencies?',
      answer: 'Our headquarters and primary operations hub are positioned directly in the Brentwood area, allowing us to respond to urgent spills or communal block maintenance issues within 2 hours.'
    },
    description: 'Major commercial centre in Essex with multi-tenancy business parks, residential block management portfolios, and corporate headquarters.'
  },
  {
    slug: 'chelmsford',
    name: 'Chelmsford',
    county: 'Essex',
    type: 'commercial_hub',
    postcodes: ['CM1', 'CM2', 'CM3'],
    nearbyAreas: ['Writtle', 'Danbury', 'Great Baddow', 'Broomfield', 'Springfield'],
    commercialFocus: true,
    domesticFocus: true,
    districtCategory: 'essex_hub',
    targetSectors: ['Corporate Offices', 'NHS & Private Healthcare Surgeries', 'Legal Practices', 'Logistics Depots'],
    buildingTypes: ['Grade-A City Centre Offices', 'Industrial Distribution Units', 'CQC Healthcare Facilities'],
    transportLinks: ['Chelmsford Mainline Station', 'A12 Expressway', 'A130 Link'],
    landmarks: ['Chelmsford City Centre', 'Springfield Business Park', 'Broomfield Hospital Corridor'],
    procurementHighlights: [
      'CQC & BICSc-compliant clinical sanitation regimes',
      'High-reach gutter vacuuming and facade restoration',
      'Tailored SLA contracts with guaranteed uptime'
    ],
    operationalProfile: {
      challenge: 'Clinical sanitation compliance for medical surgeries along the Broomfield corridor and high-level facade care for Springfield business parks.',
      approach: 'Colour-coded clinical decontamination procedures paired with exterior reach-and-wash systems up to 50ft for contemporary city centre office blocks.',
      typicalPremises: 'Private dental and GP surgeries, law offices in New London Road, and commercial warehouses in Springfield.'
    },
    localFaq: {
      question: 'Do you provide audit-ready CQC cleaning logs for medical and dental practices in Chelmsford?',
      answer: 'Yes. We supply signed daily checklist folders and digital logs meeting Care Quality Commission standards, including colour-coded cross-contamination prevention protocols.'
    },
    description: 'Vibrant Essex city featuring major commercial office developments, logistics facilities, and extensive healthcare surgeries.'
  },
  {
    slug: 'romford',
    name: 'Romford',
    county: 'Greater London',
    type: 'commercial_hub',
    postcodes: ['RM1', 'RM2', 'RM3', 'RM7'],
    nearbyAreas: ['Hornchurch', 'Upminster', 'Gallows Corner', 'Brentwood', 'Dagenham'],
    commercialFocus: true,
    domesticFocus: true,
    districtCategory: 'london_corridor',
    targetSectors: ['Light Manufacturing & Distribution', 'Block Management Portfolios', 'Automotive & Commercial Showrooms'],
    buildingTypes: ['Industrial Parks', 'Residential Block Developments', 'Commercial High Street Buildings'],
    transportLinks: ['Romford Elizabeth Line', 'A12 / A127 Arterial Nexus', 'M25 Access'],
    landmarks: ['Romford Commercial Corridor', 'Gallows Corner Industrial Estate', 'Harold Hill'],
    procurementHighlights: [
      'Ride-on floor scrubber dryers & factory degreasing',
      'Communal block cleaning & bin store sanitisation',
      '24/7 keyholder and out-of-hours deployment'
    ],
    operationalProfile: {
      challenge: 'Heavy footfall industrial trade estates, automotive showrooms, and high-density residential blocks requiring combined internal/external care.',
      approach: 'Deploying heavy industrial scrubber dryers for showroom and workshop concrete floors, alongside scheduled bin store steam-cleaning for block managing agents.',
      typicalPremises: 'Trade units at Gallows Corner, motor dealerships along London Road, and multi-floor communal apartment buildings.'
    },
    localFaq: {
      question: 'Do you clean industrial units and trade counters around Gallows Corner and Harold Hill?',
      answer: 'Yes. We provide scheduled warehouse floor scrubbing, high-level structural beam dust extraction, and exterior cladding restoration across Romford commercial parks.'
    },
    description: 'Key East London commercial hub with industrial manufacturing parks, healthcare facilities, and dense residential block developments.'
  },

  // =========================================================================
  // Prime London Commercial Business Districts (Enterprise B2B Target Hubs)
  // =========================================================================
  {
    slug: 'city-of-london',
    name: 'City of London (Square Mile)',
    county: 'Greater London',
    type: 'commercial_hub',
    postcodes: ['EC1', 'EC2', 'EC3', 'EC4'],
    nearbyAreas: ['Canary Wharf', 'London Bridge', 'Holborn', 'Finsbury', 'Shoreditch'],
    commercialFocus: true,
    domesticFocus: false,
    districtCategory: 'london_prime',
    targetSectors: [
      'Global Investment Banks & Financial Institutions',
      'International Law Chambers & Legal Practices',
      'Lloyd’s Insurance Underwriters & Broking Houses',
      'Fintech & Private Equity Headquarters'
    ],
    buildingTypes: [
      'Multi-Tenancy Grade-A Corporate Towers',
      'Historic Listed Commercial Freeholds',
      'Institutional Landmark Headquarters'
    ],
    transportLinks: ['Bank Station', 'Liverpool Street Elizabeth Line', 'Moorgate', 'Cannon Street', 'Fenchurch Street'],
    landmarks: [
      'The Gherkin (30 St Mary Axe)',
      'The Leadenhall Building (Cheesegrater)',
      '22 Bishopsgate',
      'Heron Tower',
      'Paternoster Square',
      'Bank of England Corridor'
    ],
    procurementHighlights: [
      'Dedicated Contract Supervisor & timestamped digital audit reports',
      'Directly employed, enhanced DBS-checked & uniformed operatives',
      '£10M Public & Employers Liability Insurance with Tier-1 risk assessment',
      'Strict BICSc colour-coding, COSHH safety compliance & sustainable chemistry',
      'Zero-disruption evening, out-of-hours & 24/7 keyholder contracts'
    ],
    operationalProfile: {
      challenge: 'High-density corporate towers, active trading floors, and sensitive legal chambers requiring strict evening security, non-disclosure compliance, and zero daytime footprint.',
      approach: 'Vetted keyholder teams deployed in synchronized out-of-hours shifts, utilizing anti-static floor treatments for server suites and silent HEPA-filtered vacuum extraction.',
      typicalPremises: 'Multi-floor financial HQs, barrister chambers in Temple and Chancery Lane, and insurance underwriting suites around Leadenhall.'
    },
    localFaq: {
      question: 'How do you handle security protocols and NDAs in City of London corporate offices?',
      answer: 'All operatives assigned to Square Mile premises undergo enhanced DBS screening, right-to-work authentication, and sign legally binding Non-Disclosure Agreements (NDAs). We integrate with your building turnstiles and keycard logging systems without fuss.'
    },
    description: 'The historic financial capital of the world, characterized by iconic high-rise office towers, multi-floor corporate headquarters, prestige legal chambers, and high-density executive commercial suites.'
  },
  {
    slug: 'canary-wharf',
    name: 'Canary Wharf & Docklands',
    county: 'Greater London',
    type: 'commercial_hub',
    postcodes: ['E14'],
    nearbyAreas: ['Isle of Dogs', 'Stratford', 'City of London', 'Wapping', 'Greenwich Peninsula'],
    commercialFocus: true,
    domesticFocus: false,
    districtCategory: 'london_prime',
    targetSectors: [
      'Tier-1 Facilities Management (FM) Firms',
      'Multinational Banking & Financial Services HQs',
      'Professional Services & Advisory Consultancies',
      'Luxury Residential & Commercial Mixed-Use Blocks'
    ],
    buildingTypes: [
      'High-Rise Corporate Megastructures',
      'Multi-Tenancy Dockside Commercial Blocks',
      'High-Footfall Retail & Concourse Plazas'
    ],
    transportLinks: ['Canary Wharf Elizabeth Line', 'Canary Wharf Jubilee Line', 'DLR Network', 'London City Airport Link'],
    landmarks: [
      'One Canada Square',
      'South Quay Plaza',
      'Heron Quays',
      'Crossrail Place',
      'Wood Wharf Development',
      'Cabot Square'
    ],
    procurementHighlights: [
      'Integrated high-level facade, cladding & pure-water window cleaning',
      'High-reach vacuum gutter & structural roof drainage clearing up to 50ft',
      'Automated digital audit logs delivered directly to FM portals',
      'Fully vetted, DBS-checked, uniformed operatives with strict security clearance',
      '£10M Insurance cover with comprehensive RAMS signed off prior to mobilisation'
    ],
    operationalProfile: {
      challenge: 'Vast multi-tenancy floorplates, dockside maritime weathering on glass and architectural cladding, and rigorous Tier-1 FM compliance reporting.',
      approach: 'Coordinated facilities maintenance with digital supervisor audits uploaded directly to facilities portals, backed by specialized high-reach pure water wash rigs.',
      typicalPremises: 'High-rise banking towers across Canada Square, mixed-use commercial blocks in Wood Wharf, and dockside commercial plazas.'
    },
    localFaq: {
      question: 'Can you integrate cleaning reports directly into our Facilities Management (FM) portal in Canary Wharf?',
      answer: 'Yes. Our supervisors use digital auditing tablets with photographic verification that produce standardized PDF logs or direct CSV exports formatted for major corporate CAFM and facilities portals.'
    },
    description: 'A global epicenter for financial institutions and international corporate headquarters, demanding rigorous facilities management standards, discrete out-of-hours execution, and strict SLA compliance.'
  },
  {
    slug: 'westminster-mayfair',
    name: 'Westminster, Victoria & Mayfair',
    county: 'Greater London',
    type: 'commercial_hub',
    postcodes: ['SW1', 'W1'],
    nearbyAreas: ['St James’s', 'Belgravia', 'Soho', 'Marylebone', 'City of London'],
    commercialFocus: true,
    domesticFocus: false,
    districtCategory: 'london_prime',
    targetSectors: [
      'Private Equity, Sovereign Wealth & Family Offices',
      'Embassy & Diplomatic Missions',
      'Prestige Real Estate & Landed Estate Portfolios (Grosvenor / Crown Estate)',
      'Government Advisory & Public Affairs Consultancies'
    ],
    buildingTypes: [
      'Period Georgian & Victorian Corporate Headquarters',
      'Boutique Grade-A Office Developments',
      'Institutional Embassy Premises & Consulates'
    ],
    transportLinks: ['Victoria Station (Gatwick Express)', 'Green Park', 'Bond Street Elizabeth Line', 'Westminster Station'],
    landmarks: [
      'Victoria Street Corporate Corridor',
      'Berkeley Square',
      'Curzon Street',
      'St James’s Square',
      'Grosvenor Place',
      'Nova Victoria Complex'
    ],
    procurementHighlights: [
      'Discretion-first service delivery for high-net-worth & diplomatic premises',
      'Preservation cleaning for delicate marble, hardwood, and listed architectural brass',
      'Enhanced DBS vetted operatives with non-disclosure agreements (NDAs)',
      'Direct account manager access with 2-hour priority emergency response',
      'Comprehensive RAMS and ISO-aligned environmental cleaning protocols'
    ],
    operationalProfile: {
      challenge: 'Heritage Victorian and Georgian freeholds, listed building conservation restrictions, and utmost privacy required for sovereign wealth, diplomatic, and private equity offices.',
      approach: 'Low-impact, specialist conservation cleaning using pH-neutral chemicals, diamond pad polishing for imported marble floors, and dedicated operatives bound by non-disclosure agreements.',
      typicalPremises: 'Boutique family offices in Mayfair, embassy mansions in Belgravia, and executive corporate suites along Victoria Street.'
    },
    localFaq: {
      question: 'Can you work within Grade-II listed buildings and conservation regulations in Mayfair & Westminster?',
      answer: 'Yes. Our staff are trained in architectural surface care—from natural Italian marble and Portland stone to antique brasswork and bespoke hardwood joinery—using strictly pH-neutral, non-abrasive treatments.'
    },
    description: 'London’s most prestigious commercial district, housing elite private equity funds, diplomatic embassies, sovereign wealth institutions, and heritage architectural head offices requiring meticulous discretion.'
  },
  {
    slug: 'stratford-olympic-park',
    name: 'Stratford & International Quarter',
    county: 'Greater London',
    type: 'commercial_hub',
    postcodes: ['E15', 'E20'],
    nearbyAreas: ['Canary Wharf', 'Hackney Wick', 'Bow', 'Leyton', 'Barking'],
    commercialFocus: true,
    domesticFocus: false,
    districtCategory: 'london_corridor',
    targetSectors: [
      'Public Sector & Government Department HQs (FCA, TfL)',
      'Higher Education & Cultural Campuses (East Bank, UCL East)',
      'Commercial Property & High-Density Block Management',
      'Technology & Creative Innovation Hubs'
    ],
    buildingTypes: [
      'International Quarter London (IQL) Grade-A Office Towers',
      'Modern High-Density Residential & BTR Commercial Blocks',
      'Educational & Creative Production Facilities'
    ],
    transportLinks: ['Stratford Regional Station', 'Stratford International', 'Elizabeth Line', 'Central & Jubilee Lines'],
    landmarks: [
      'International Quarter London (IQL)',
      'Queen Elizabeth Olympic Park',
      'Westfield Stratford City Commercial Precinct',
      'Here East Innovation Campus',
      'East Bank Cultural Quarter'
    ],
    procurementHighlights: [
      'High-volume communal block caretaking & Build-To-Rent (BTR) contracts',
      'Rotary floor scrubbing & high-reach atrium vacuuming',
      'Sustainability-first green cleaning chemicals reducing corporate carbon footprint',
      'Directly employed, security-vetted on-site cleaning personnel',
      'Digital attendance tracking and automated shift handover reports'
    ],
    operationalProfile: {
      challenge: 'High footfall public-facing atriums, multi-tenant BTR residential towers, and large public sector headquarters demanding rigorous day-and-night cleaning rotations.',
      approach: 'High-efficiency day janitors paired with comprehensive evening deep cleans, deploying ride-on scrubber dryers for concourses and reach-and-wash systems for high-level interior atriums.',
      typicalPremises: 'IQL corporate towers, university research hubs at East Bank, and high-density Build-to-Rent developments surrounding the Olympic Park.'
    },
    localFaq: {
      question: 'Do you offer combined internal communal cleaning and external maintenance for BTR blocks in Stratford?',
      answer: 'Yes. We provide complete facilities packages for Build-to-Rent and managing agents covering internal stairwells, concierge lobbies, lift cars, bin store power-washing, and reach-and-wash window cleaning.'
    },
    description: 'East London’s dynamic metropolitan powerhouse, anchored by the International Quarter London (IQL), major public sector HQs, high-density Build-to-Rent developments, and innovation campuses.'
  },
  {
    slug: 'london-bridge-southwark',
    name: 'Southwark & London Bridge',
    county: 'Greater London',
    type: 'commercial_hub',
    postcodes: ['SE1'],
    nearbyAreas: ['City of London', 'Waterloo', 'Borough', 'Bermondsey', 'Canary Wharf'],
    commercialFocus: true,
    domesticFocus: false,
    districtCategory: 'london_prime',
    targetSectors: [
      'Legal & Professional Services Firms',
      'Tech Scale-Ups & Creative Media Agenciess',
      'Healthcare Institutions & Medical Surgeries (Guys Hospital Corridor)',
      'Commercial Landlords & Riverfront Asset Portfolios'
    ],
    buildingTypes: [
      'Riverfront Landmark Commercial Complexes',
      'Converted Warehouse Tech & Media Studios',
      'Multi-Tenant Corporate Offices'
    ],
    transportLinks: ['London Bridge Mainline & Underground', 'Waterloo Station', 'Southwark Underground', 'Blackfriars'],
    landmarks: [
      'The Shard Quarter',
      'More London Riverside',
      'London Bridge City',
      'Borough Yards',
      'South Bank Cultural & Commercial Strip',
      'Bankside 123'
    ],
    procurementHighlights: [
      'Commercial carpet deep extraction & hard floor diamond polishing',
      'High-level glass & facade reach-and-wash systems',
      'CQC-compliant sanitation protocols for clinical & diagnostic facilities',
      'Dedicated site supervisors with daily digital sign-off audits',
      '£10M Public Liability insurance with site-specific risk management'
    ],
    operationalProfile: {
      challenge: 'Riverside moisture, high tourist and commuter footfall along More London, and clinical sanitation demands from nearby Southwark medical clinics.',
      approach: 'Specialized hard floor buffering, high-frequency glass cleaning for riverfront panoramas, and CQC-compliant colour-coded sanitization for diagnostic centers.',
      typicalPremises: 'Commercial offices in The Shard Quarter, tech and creative studios in Borough Yards, and clinical consultation suites near Guy’s Hospital.'
    },
    localFaq: {
      question: 'How do you handle riverfront exterior window and facade grime near London Bridge?',
      answer: 'River Thames frontage exposes exterior glass to rapid mineral buildup and atmospheric residue. We deploy pure de-ionised water telescopic pole systems up to 50ft and IPAF-certified MEWPs to keep glass streak-free.'
    },
    description: 'The South Bank’s dominant commercial nexus, stretching from More London Riverside and The Shard to Bankside, combining major legal practices, technology studios, and extensive corporate complexes.'
  },
  {
    slug: 'kings-cross-camden',
    name: 'King’s Cross & Knowledge Quarter',
    county: 'Greater London',
    type: 'commercial_hub',
    postcodes: ['N1C', 'NW1'],
    nearbyAreas: ['Euston', 'Bloomsbury', 'Islington', 'Camden Town', 'City of London'],
    commercialFocus: true,
    domesticFocus: false,
    districtCategory: 'london_prime',
    targetSectors: [
      'Global Big Tech Headquarters (Google, Meta, DeepMind)',
      'Life Sciences & Bioscience Research Institutes',
      'Creative & Global Architectural Studios',
      'Mixed-Use Commercial Estate Portfolios'
    ],
    buildingTypes: [
      'State-of-the-Art BREEAM-Outstanding Corporate Campuses',
      'Laboratory & Cleanroom Research Facilities',
      'Converted Railway Heritage Offices & Retail Complexes'
    ],
    transportLinks: ['King’s Cross St Pancras International (Eurostar)', 'Euston Mainline', 'Thameslink Corridor'],
    landmarks: [
      'King’s Cross Estate (Coal Drops Yard)',
      'Francis Crick Institute Corridor',
      'Google London HQ Campus',
      'Pancras Square Commercial Cluster',
      'Regent’s Place Commercial Estate'
    ],
    procurementHighlights: [
      'Rigorous cleanroom, laboratory & tech campus sanitation procedures',
      'Eco-friendly, chemical-reduced cleaning methods aligning with BREEAM standards',
      'Full COSHH management and ISO-compliant health & safety registers',
      'Strict security vetting with keycard access control logging',
      'Dedicated mobile account management with daily supervisor sign-offs'
    ],
    operationalProfile: {
      challenge: 'Strict corporate sustainability mandates (BREEAM Outstanding), high-tech server labs, and open collaborative campuses requiring discreet, green cleaning regimes.',
      approach: 'Utilizing microfibre technology, plant-based non-toxic chemistry, and silent day-cleaning operatives to maintain tech campus cleanliness while supporting corporate ESG objectives.',
      typicalPremises: 'Multinational tech headquarters in Pancras Square, bioscience research units near Francis Crick, and creative agencies in Coal Drops Yard.'
    },
    localFaq: {
      question: 'Do your cleaning chemicals comply with BREEAM and corporate ESG sustainability targets?',
      answer: 'Yes. In the Knowledge Quarter we utilize EU Ecolabel certified, low-VOC, biodegradable cleaning agents and deionised water systems that support your BREEAM Outstanding environmental ratings.'
    },
    description: 'Europe’s leading Knowledge Quarter and premier technological epicentre, featuring hyper-modern corporate campuses, bioscience laboratories, and multinational tech headquarters demanding world-class cleanliness.'
  },
  {
    slug: 'barking-dagenham',
    name: 'Barking & Dagenham Logistics Corridor',
    county: 'Greater London',
    type: 'commercial_hub',
    postcodes: ['IG11', 'RM9', 'RM10'],
    nearbyAreas: ['Romford', 'Rainham', 'Stratford', 'Thurrock', 'Beckton'],
    commercialFocus: true,
    domesticFocus: false,
    districtCategory: 'london_corridor',
    targetSectors: [
      'National Logistics & FMCG Distribution Centers',
      'Cold Storage & Food Manufacturing Plants',
      'Industrial Plant Facilities & Heavy Engineering Units',
      'Commercial Fleet & Transport Depots'
    ],
    buildingTypes: [
      'High-Bay Logistics Warehouses (>100,000 sq ft)',
      'Manufacturing & Production Plants',
      'Multi-Unit Trade Parks & Industrial Estates'
    ],
    transportLinks: ['A13 Commercial Corridor', 'A406 North Circular', 'Barking Rail & Freight Terminals', 'M25 Junction 30/31'],
    landmarks: [
      'Barking Riverside Commercial Zone',
      'Dagenham Dock Industrial Hub',
      'A13 Logistics Corridor',
      'Thames Enterprise Park Gateway',
      'Rippleside Commercial Estate'
    ],
    procurementHighlights: [
      'Heavy-duty ride-on scrubber dryers & industrial concrete degreasing',
      'High-reach vacuum gutter clearance for expansive warehouse roofing up to 50ft',
      'Combustible dust extraction from high structural steelwork & HVAC ducts',
      '24/7/365 scheduling accommodating continuous shift rotations',
      'IPAF-certified high-access operators and full RAMS provided'
    ],
    operationalProfile: {
      challenge: 'Massive warehouse floorplates, heavy forklift tire staining, combustible dust accumulation on high steel rafters, and round-the-clock shift schedules.',
      approach: 'Industrial heavy-machinery fleet including high-capacity scrubber dryers, industrial degreasers, and ATEX-rated high-reach dust extraction systems deployed during planned shift changeovers.',
      typicalPremises: 'E-commerce fulfillment depots along the A13, food distribution logistics units in Dagenham Dock, and trade counters across Rippleside.'
    },
    localFaq: {
      question: 'Can you clean active logistics facilities in Barking & Dagenham without stopping forklift operations?',
      answer: 'Yes. We section off dedicated work bays using safety cordons and warning barriers, or schedule deep floor scrubbing and high-bay dust extraction during off-peak shift rotations.'
    },
    description: 'East London’s vital arterial logistics and manufacturing corridor, home to high-throughput distribution centres, freight hubs, and expansive industrial facilities requiring heavy-duty industrial sanitation.'
  }
];

export interface ServiceData {
  slug: string;
  name: string;
  division: 'commercial' | 'domestic';
  heroImage: string;
  leadParagraph: string;
  features: string[];
  b2bTitle?: string;
  slaHighlights?: string[];
  complianceNotes?: string;
}

export const SERVICES: ServiceData[] = [
  // ==========================================
  // Commercial Priority Services (Programmatic)
  // ==========================================
  {
    slug: 'commercial-gutter-cleaning',
    name: 'Commercial Gutter Cleaning & Roof Clearance',
    b2bTitle: 'Commercial Gutter Cleaning & Preventative Roof Drainage',
    division: 'commercial',
    heroImage: '/images/high-level-gutter-cleaning.jpg',
    leadParagraph: 'High-reach vacuum gutter clearing up to 50ft with wireless CCTV camera verification for corporate office towers, commercial property blocks, and industrial warehouses.',
    features: [
      'High-reach vacuum extraction from ground level up to 50ft without scaffolding',
      'Wireless high-definition CCTV camera inspection logs and photographic sign-off',
      'Downpipe flushing, hopper clearing, and preventative drainage unblocking',
      'Full RAMS provided, IPAF-certified operators, fully insured with £10M Public Liability'
    ],
    slaHighlights: [
      'Guaranteed free site survey and photographic drainage assessment within 24 hours',
      'Zero ground-level disruption to tenant access and daily operations',
      'Preventative bi-annual contracts with automatic seasonal clearance scheduling'
    ],
    complianceNotes: 'Compliant with Working at Height Regulations 2005. Complete Risk Assessment & Method Statement (RAMS) issued prior to any site mobilisation.'
  },
  {
    slug: 'property-management',
    name: 'Property Management & Block Cleaning',
    b2bTitle: 'Commercial Property & Block Management Communal Maintenance',
    division: 'commercial',
    heroImage: '/images/property-management-external.jpg',
    leadParagraph: 'Fully managed communal area cleaning, stairwell caretaking, bin store sanitisation, and routine block maintenance for institutional managing agents and landlords.',
    features: [
      'SLA-backed daily, weekly, or fortnightly scheduled communal upkeep',
      'Internal stairwell, lobby, lift car, and architectural brass/marble polishing',
      'Bin store high-pressure steam washing, degreasing, and odour neutralisation',
      'Digital quality audit reports with supervisor photographic sign-offs after every site visit'
    ],
    slaHighlights: [
      'Dedicated mobile site supervisor assigned to every block portfolio',
      '2-hour emergency spill and reactive sanitation callout response',
      'Directly employed, uniformed caretakers and cleaners'
    ],
    complianceNotes: 'BICSc colour-coded hygiene system prevents cross-contamination between waste areas, washrooms, and public corridors. Fully COSHH compliant.'
  },
  {
    slug: 'commercial-industrial-cleaning',
    name: 'Corporate Office & Commercial Premises Cleaning',
    b2bTitle: 'Corporate Office Cleaning & Multi-Floor Commercial Facility Care',
    division: 'commercial',
    heroImage: '/images/commercial-industrial-hero.jpg',
    leadParagraph: 'Comprehensive daily and periodic cleaning contracts for corporate headquarters, multi-tenancy office towers, financial institutions, and professional practices.',
    features: [
      'Bespoke daily office cleaning: desk sanitisation, communal breakout zones, and washrooms',
      'Deep carpet soil extraction and anti-static treatments for server rooms and trading floors',
      'High-touch surface disinfection reducing corporate absenteeism and seasonal sickness',
      'Keyholder out-of-hours, evening, and weekend operations with zero tenant disruption'
    ],
    slaHighlights: [
      'Uniformed, permanently employed, and enhanced DBS-checked cleaning operatives',
      'Dedicated account manager with monthly formal KPI and SLA review audits',
      'Site-specific RAMS and COSHH compliance packs prior to first shift'
    ],
    complianceNotes: 'Strict adherence to Health and Safety at Work Act 1974, COSHH guidelines, and non-disclosure agreements (NDAs) for sensitive corporate and legal chambers.'
  },
  {
    slug: 'warehouse-factory-cleaning',
    name: 'Industrial Warehouse & Logistics Cleaning',
    b2bTitle: 'Industrial Warehouse & Logistics Depot Deep Cleaning',
    division: 'commercial',
    heroImage: '/images/warehouse-factory-hero.webp',
    leadParagraph: 'Heavy-duty industrial floor scrubbing, structural steelwork degreasing, and high-level dust extraction for high-throughput distribution centres and manufacturing plants.',
    features: [
      'Ride-on and walk-behind industrial scrubber dryer floor scrubbing and tire mark removal',
      'Combustible dust vacuuming from high-level steelwork, HVAC ducting, and lighting rigs',
      'De-greasing and decontamination of loading bays, vehicle docks, and plant rooms',
      '24/7/365 scheduling aligned meticulously with logistics downtime and shift changes'
    ],
    slaHighlights: [
      'High-capacity machinery fleet capable of cleaning over 100,000 sq ft per shift',
      'Rapid turnaround during tenant lease-ends, fit-outs, and dilapidation handovers',
      'IPAF, PASMA, and CSCS-certified industrial cleaning crews'
    ],
    complianceNotes: 'Full compliance with HSE industrial guidelines, ATEX combustible dust awareness, and site-specific RAMS tailored to active forklift zones.'
  },
  {
    slug: 'healthcare-sanitation-services',
    name: 'Healthcare & CQC Dental Practice Cleaning',
    b2bTitle: 'Clinical Sanitation & CQC-Compliant Healthcare Facility Cleaning',
    division: 'commercial',
    heroImage: '/images/healthcare-and-sanitisation.jpg',
    leadParagraph: 'CQC-compliant clinical sanitation, decontamination protocols, and audit-ready cleaning logs for dental practices, private clinics, and healthcare facilities.',
    features: [
      'Strict CQC & BICSc color-coded cross-contamination prevention throughout all clinical zones',
      'Clinical-grade virucidal disinfection and tamper-proof daily audit logbooks',
      'DBS-vetted, uniformed, and infection-control certified cleaning operatives',
      'Zero-disruption evening and out-of-hours scheduling for uninterrupted patient consultations'
    ],
    slaHighlights: [
      'Guaranteed 100% CQC audit-ready standard with verifiable inspection trails',
      'Emergency biological decontamination and outbreak response within 2 hours',
      'Monthly ATP bioluminescence surface swab testing available upon request'
    ],
    complianceNotes: 'Fully aligned with Care Quality Commission (CQC) Fundamental Standards, HTM 01-05 (dental decontamination), and NHS National Specifications for Cleanliness.'
  },
  {
    slug: 'high-level-cladding',
    name: 'High-Level Facade & Cladding Restoration',
    b2bTitle: 'Commercial Facade Washing & High-Level Architectural Cladding Care',
    division: 'commercial',
    heroImage: '/images/high-level-cleaning.webp',
    leadParagraph: 'Specialist exterior architectural cladding washing, powder-coated facade restoration, and reach-and-wash window cleaning for commercial buildings and business parks.',
    features: [
      'IPAF-certified high-access operators utilizing MEWPs, cherry pickers, and spider lifts',
      'Non-abrasive pure water wash systems and specialist pH-neutral cladding detergents',
      'Removal of traffic film, industrial fallout, atmospheric soot, and biological growth',
      'Comprehensive exterior glass, canopy, and signage restorative washdown'
    ],
    slaHighlights: [
      'Full traffic and pedestrian management plans for busy public and commercial thoroughfares',
      'Dramatically enhances commercial kerb appeal and preserves multi-million pound building assets',
      'Transparent fixed-price project quotes backed by detailed photographic before/after reporting'
    ],
    complianceNotes: 'Work at Height Regulations 2005 compliant. Detailed method statements, drop-zone risk assessments, and pedestrian segregation cordons installed for every project.'
  },

  // ==========================================
  // Domestic Priority Services
  // ==========================================
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
