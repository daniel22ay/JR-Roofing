export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  benefits: string[];
  features: string[];
  lifespan: string;
  windRating: string;
  bestFor: string;
  maintenanceLevel: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  content: string;
  verified: boolean;
  projectType: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'services' | 'permits' | 'pricing';
}

export const COMPANY_INFO = {
  name: "JR Roofing Solutions",
  legalName: "JR Roofing Solutions LLC",
  slogan: "Protecting Your Home Starts at the Top",
  tagline: "South Florida's Premier Residential & Commercial Roofing Specialists",
  phone: "(954) 400-8522",
  phoneRaw: "9544008522",
  spanishPhone: "(954) 400-8536",
  spanishPhoneRaw: "9544008536",
  email: "Jr.roofingsolutionsinfo@gmail.com",
  address: {
    street: "2721 NE 10th Ave",
    city: "Pompano Beach",
    state: "FL",
    zip: "33064",
    county: "Broward County"
  },
  hours: "Monday – Saturday: 7:00 AM – 6:00 PM | 24/7 Emergency Storm Response",
  license: "State Certified Florida Roofing Contractor (CCC Licensed & Fully Insured)",
  rating: 5.0,
  reviewCount: 84,
  stats: [
    { label: "Roofs Installed", value: "2,500+" },
    { label: "Satisfied Clients", value: "1,200+" },
    { label: "Google Rating", value: "5.0 ★" },
    { label: "Licensed & Insured", value: "100%" }
  ],
  serviceAreas: [
    "Pompano Beach",
    "Fort Lauderdale",
    "Boca Raton",
    "Deerfield Beach",
    "Coral Springs",
    "Delray Beach",
    "Boynton Beach",
    "Hollywood",
    "West Palm Beach",
    "Sunrise",
    "Plantation",
    "Coconut Creek",
    "Margate",
    "Tamarac",
    "Miramar",
    "Pembroke Pines"
  ]
};

// Image references
import tileHeroImg from '../assets/images/jr_roofing_hero_florida_1790114005395.jpg';
import metalHeroImg from '../assets/images/jr_metal_roofing_1790114019677.jpg';
import shingleHeroImg from '../assets/images/jr_shingle_roofing_1790114034835.jpg';
import commercialFlatHeroImg from '../assets/images/jr_commercial_flat_1790114046540.jpg';

export { tileHeroImg, metalHeroImg, shingleHeroImg, commercialFlatHeroImg };

export const SERVICES: ServiceItem[] = [
  {
    id: "shingle-roofing",
    name: "Shingle Roofing",
    shortDescription: "Affordable, versatile, and high-performance architectural asphalt shingles designed to withstand Florida's heat, UV, and severe storm winds.",
    fullDescription: "JR Roofing Solutions provides comprehensive shingle roofing solutions across South Florida, including new installations, complete tear-offs, re-roofing, emergency storm leak repairs, and routine maintenance. We partner with industry-leading manufacturers such as Owens Corning, GAF, and CertainTeed to provide wind-resistant, algae-resistant shingles that enhance curb appeal while delivering steadfast weather protection.",
    heroImage: shingleHeroImg,
    benefits: [
      "Exceptional cost-to-performance ratio for homeowners",
      "Class-A fire rating and advanced algae-resistant granules (StreakGuard)",
      "Engineered for high wind uplift resistance up to 130+ MPH",
      "Wide spectrum of architectural colors and dimensional profiles",
      "Fast, non-disruptive installation completed with pristine cleanup"
    ],
    features: [
      "Dimensional Architectural Shingles",
      "Synthetic Underlayment & Ice/Water Shield Barrier",
      "Continuous Ridge Venting for Attic Heat Exhaust",
      "Enhanced 6-Nail Fastening Pattern for Florida Building Code",
      "Factory-backed 25 to 50-Year Manufacturer Warranties"
    ],
    lifespan: "20 – 30 Years",
    windRating: "Up to 130 MPH",
    bestFor: "Single-family homes, budget-conscious homeowners, and rental properties",
    maintenanceLevel: "Low to Moderate"
  },
  {
    id: "tile-roofing",
    name: "Tile Roofing",
    shortDescription: "Timeless Mediterranean beauty and unparalleled hurricane protection with premium clay and concrete tiles engineered for tropical climates.",
    fullDescription: "Tile roofing is an iconic hallmark of South Florida architecture. JR Roofing Solutions specializes in clay barrel tile and concrete flat tile installations, re-roofing, tile repairs, and underlayment restorations. Our precision installation techniques—including hurricane foam adhesive and mechanical fastening—ensure your tile roof withstands tropical storms while lowering attic heat through natural thermal venting.",
    heroImage: tileHeroImg,
    benefits: [
      "Unrivaled aesthetic appeal for South Florida Spanish, Mediterranean, and modern homes",
      "Maximum durability against salt air, heavy rainfall, and intense solar radiation",
      "Natural thermal air insulation lowering household cooling expenses",
      "Class-A fire resistance and imperviousness to insect or rot damage",
      "Superior long-term property appraisal and curb appeal"
    ],
    features: [
      "Authentic Spanish Clay Barrel Tiles & S-Tiles",
      "High-Density Concrete Flat Slate & Shake Profiles",
      "Dual-Ply High-Temp Self-Adhering Underlayment (Polystick)",
      "High-Strength Polyurethane Adhesive Foam Fastening",
      "Lead and Copper Valleys & Drip Edge Flashing Systems"
    ],
    lifespan: "40 – 50+ Years",
    windRating: "Up to 150+ MPH",
    bestFor: "South Florida residences, luxury estates, and HOA communities",
    maintenanceLevel: "Low (Periodic tile inspection & valley clearing)"
  },
  {
    id: "metal-roofing",
    name: "Metal Roofing",
    shortDescription: "The gold standard in hurricane defense, modern architectural styling, and energy efficiency with standing seam and mechanical lock panels.",
    fullDescription: "Engineered to withstand the toughest South Florida storms, metal roofing offers unmatched strength and longevity. JR Roofing Solutions provides custom standing seam metal roofing, 5V-crimp, and architectural panel installations. Our metal systems reflect intense solar heat, dramatically cut air conditioning costs, and offer Category 5 hurricane wind uplift ratings.",
    heroImage: metalHeroImg,
    benefits: [
      "Maximum Category 5 hurricane wind uplift resistance (150 – 180+ MPH)",
      "Cool roof reflective Kynar 500 coatings reducing energy bills by up to 25%",
      "Non-combustible Class A fire rating and zero moisture absorption",
      "Lightweight structure reducing framing stress on existing structures",
      "Outstanding 50+ year lifespan with minimal upkeep needed"
    ],
    features: [
      "Concealed Fastener Standing Seam Metal Panels",
      "Galvalume Steel & High-Grade Marine Aluminum Options",
      "Kynar 500 / Hylar 5000 Premium UV Protective Finishes",
      "High-Temperature Peel & Stick Waterproof Underlayments",
      "Custom Precision Flashing and Edge Metal Fabrication"
    ],
    lifespan: "50 – 70+ Years",
    windRating: "Up to 160 – 180 MPH (High-Velocity Hurricane Zone rated)",
    bestFor: "Coastal homes, modern builds, and homeowners seeking lifetime durability",
    maintenanceLevel: "Minimal"
  },
  {
    id: "flat-roofing",
    name: "Flat Roofing",
    shortDescription: "Advanced commercial-grade single-ply TPO, modified bitumen, and liquid waterproof coatings for flat and low-slope roofs.",
    fullDescription: "Flat and low-slope roofs require specialized engineering in South Florida to prevent ponding water and withstand UV degradation. JR Roofing Solutions installs advanced TPO (thermoplastic polyolefin) membranes, multi-ply SBS modified bitumen systems, and protective elastomeric waterproof coatings for residential additions, carports, and commercial facilities.",
    heroImage: commercialFlatHeroImg,
    benefits: [
      "Superior heat-welded monolithic seams preventing water intrusion",
      "Bright white UV-reflective surface keeping buildings cooler",
      "Cost-effective installation for low-slope architectural footprints",
      "Usable rooftop space for HVAC units, solar arrays, or maintenance access",
      "Ponding water resistant materials tailored for subtropical summer downpours"
    ],
    features: [
      "Energy Star Rated White TPO (60 mil & 80 mil membranes)",
      "Multi-Ply SBS Modified Bitumen Torch & Self-Adhered Systems",
      "Tapered ISO Insulation Boards for Positive Drainage",
      "Commercial-Grade Silicone Waterproof Coating Restorations",
      "Heavy-Duty Parapet & Scupper Drain Flashing"
    ],
    lifespan: "20 – 30 Years",
    windRating: "HVHZ Approved Wind Uplift Resistant",
    bestFor: "Modern homes, home additions, patios, condo buildings, and commercial facilities",
    maintenanceLevel: "Moderate (Periodic drain & scupper inspections)"
  },
  {
    id: "commercial-roofing",
    name: "Commercial Roofing",
    shortDescription: "Complete commercial roof replacement, repair, asset management, and preventative maintenance for South Florida businesses.",
    fullDescription: "JR Roofing Solutions serves commercial building owners, property managers, retail centers, warehouses, office complexes, and HOA boards throughout Broward, Palm Beach, and Miami-Dade. From new commercial roof construction to emergency leak mitigation and preventative maintenance, our team executes on time, within budget, and with minimal operational interruption.",
    heroImage: commercialFlatHeroImg,
    benefits: [
      "Custom commercial specifications matching property occupancy and structural requirements",
      "Comprehensive warranties covering materials and contractor workmanship",
      "Scheduled maintenance to extend commercial roof lifespan and reduce capital outlay",
      "Rapid emergency response team for unexpected storm or water leaks",
      "Full Florida Building Code and OSHA safety compliant project execution"
    ],
    features: [
      "Commercial TPO, PVC, and Built-Up Roofing (BUR)",
      "Standing Seam Metal Roofing for Commercial Centers",
      "Commercial Tile Replacement for Condominiums & HOAs",
      "Waterproofing Coatings & Parapet Flashing Restoration",
      "Detailed Engineering Reports & Insurance Documentation"
    ],
    lifespan: "25 – 35+ Years",
    windRating: "Engineered to strict commercial Florida Building Code",
    bestFor: "Offices, strip malls, industrial warehouses, schools, and multi-family buildings",
    maintenanceLevel: "Scheduled Annual / Semi-Annual Program"
  },
  {
    id: "maintenance",
    name: "Maintenance & Repairs",
    shortDescription: "Proactive storm-ready inspections, leak repairs, gutter clearing, and preventative care to maximize your roof's lifespan.",
    fullDescription: "South Florida's punishing combination of tropical sun, salt air, and relentless hurricane season downpours can shorten your roof's life without regular care. JR Roofing Solutions offers 21-point comprehensive roof health evaluations, prompt leak detection, broken tile replacements, flashing resealing, and preventative storm-hardening to protect your interior investment before small issues turn into costly emergencies.",
    heroImage: shingleHeroImg,
    benefits: [
      "Catches minor leaks and fastener weaknesses before structural water damage occurs",
      "Extends roof operational lifespan by up to 5 to 10 additional years",
      "Satisfies home insurance inspection criteria (4-Point & Wind Mitigation reports)",
      "Maintains active manufacturer warranty compliance",
      "Saves thousands of dollars compared to premature roof tear-offs"
    ],
    features: [
      "21-Point Comprehensive Structural & Waterproofing Inspection",
      "Infrared & Visual Moisture/Leak Detection",
      "Flashing Resealing, Pipe Boot Replacement & Valley Cleaning",
      "Cracked/Broken Tile Replacement & Mortar Re-pointing",
      "Post-Storm Damage Assessments and Emergency Tarping"
    ],
    lifespan: "Adds 5 – 10 Years to existing roof life",
    windRating: "Pre-storm reinforcement and securing",
    bestFor: "All residential and commercial properties in South Florida",
    maintenanceLevel: "Recommended Once Annually or After Major Storms"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Robert V.",
    location: "Pompano Beach, FL",
    rating: 5,
    date: "Verified Google Review",
    content: "Junior did a great job to replace my roof. He gives the best price, did everything fast with good attention to detail. Highly recommend!",
    verified: true,
    projectType: "Full Roof Replacement"
  },
  {
    id: "rev-2",
    author: "Maria G.",
    location: "Fort Lauderdale, FL",
    rating: 5,
    date: "Verified Google Review",
    content: "Junior and his crew provided the best roof and best services! They kept our property completely spotless during the tear-off and passed all county inspections on the first visit. Highly satisfied!",
    verified: true,
    projectType: "Tile Roof Installation"
  },
  {
    id: "rev-3",
    author: "David M.",
    location: "Boca Raton, FL",
    rating: 5,
    date: "Verified Google Review",
    content: "Junior and the whole team did professional work on our roofing project. Honest communication from start to finish, arrived right on schedule, and delivered top-tier craftsmanship. Outstanding team.",
    verified: true,
    projectType: "Shingle Re-Roof"
  },
  {
    id: "rev-4",
    author: "Carlos S.",
    location: "Coral Springs, FL",
    rating: 5,
    date: "Verified Google Review",
    content: "JR Roofing Solutions replaced our hurricane-damaged roof. Clear quote, no surprise costs, and handled the city permits effortlessly. A true South Florida professional who stands behind his word.",
    verified: true,
    projectType: "Storm Damage Restoration"
  },
  {
    id: "rev-5",
    author: "Angela T.",
    location: "Deerfield Beach, FL",
    rating: 5,
    date: "Verified Google Review",
    content: "Fair pricing, licensed and insured, and incredible workmanship. Junior was always accessible by phone and answered all questions immediately. Our home looks brand new!",
    verified: true,
    projectType: "Residential Shingle Roof"
  },
  {
    id: "rev-6",
    author: "Steven L.",
    location: "Delray Beach, FL",
    rating: 5,
    date: "Verified Google Review",
    content: "Upgraded from old shingles to modern standing seam metal with JR Roofing Solutions. The crew was respectful, fast, and the finish is impeccable. Worth every penny for peace of mind during storm season.",
    verified: true,
    projectType: "Standing Seam Metal Roof"
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "general",
    question: "How do I know when my roof needs to be replaced?",
    answer: "Common warning signs include: curling, cupping, or cracked shingles; bald spots where granules have washed into gutters; dark water stains or mold in your attic or ceilings; persistent leaks following heavy rains; sagging rooflines; or if your roof is simply 20 to 25+ years old. In South Florida, prolonged UV exposure and hurricane seasons often accelerate wear. JR Roofing Solutions offers free, no-obligation on-site inspections to determine whether a repair or full replacement is warranted."
  },
  {
    category: "pricing",
    question: "Do you offer free estimates?",
    answer: "Yes, 100%! JR Roofing Solutions provides free, detailed, transparent estimates with zero obligation. A certified technician will inspect your roof, evaluate existing underlayment and decking conditions, take accurate measurements, explain your material options, and deliver a comprehensive itemized quote with no hidden fees."
  },
  {
    category: "services",
    question: "What roofing material is best for South Florida's climate?",
    answer: "Each material offers distinct advantages in South Florida. Tile roofing delivers classic Mediterranean aesthetics and excellent thermal insulation against heat. Metal roofing provides the highest hurricane wind resistance (up to Category 5 / 160+ MPH) and reflects intense solar heat, dramatically lowering utility bills. Architectural shingle roofing remains the most cost-effective solution with strong 130 MPH wind ratings. For flat surfaces, TPO single-ply systems offer unmatched heat-welded waterproofing."
  },
  {
    category: "permits",
    question: "Are you licensed and insured in the state of Florida?",
    answer: "Yes, absolutely. JR Roofing Solutions is a state-certified roofing contractor, fully licensed and insured with both general liability and workers' compensation coverage for residential and commercial roofing. We pull all required municipal building permits, coordinate engineering, and manage city/county building inspections to guarantee 100% compliance with the Florida Building Code."
  },
  {
    category: "general",
    question: "How long does a typical roof replacement take?",
    answer: "Most residential shingle roof replacements are completed within 2 to 4 days, depending on weather and roof complexity. Tile and metal roof replacements typically require 5 to 10 working days to accommodate specialized underlayment installation, precise flashing, and required municipal in-progress inspections. JR Roofing Solutions prioritizes clean, safe, and efficient job sites with daily cleanup."
  },
  {
    category: "permits",
    question: "Do you assist with insurance claims for storm and hurricane damage?",
    answer: "Yes. In the event of severe storm, hail, or hurricane damage, our team performs immediate emergency tarping to stop active leaks, documents all structural and material damage with high-resolution photographic evidence, and provides comprehensive itemized estimates to facilitate your homeowner insurance claim process."
  },
  {
    category: "pricing",
    question: "What warranties come with my new roof?",
    answer: "We provide dual-layer protection: industry-leading manufacturer warranties (ranging from 25 years to Lifetime Limited warranties on premium shingles, tiles, and metal finishes) alongside our JR Roofing Solutions workmanship guarantee. You receive complete written warranty documentation upon project completion."
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Free On-Site Inspection",
    description: "Junior and our experienced technicians conduct a thorough roof evaluation, inspecting shingles, tiles, valleys, decking, attic ventilation, and flashings.",
    highlight: "Free & No Obligation"
  },
  {
    number: "02",
    title: "Transparent Itemized Proposal",
    description: "You receive a clear, straightforward estimate outlining materials, timeline, warranty coverage, and exact pricing with zero surprise charges.",
    highlight: "Honest Pricing"
  },
  {
    number: "03",
    title: "Permitting & Material Procurement",
    description: "We handle all municipal permit filings with Broward, Palm Beach, or Miami-Dade building departments and stage top-grade materials directly to your site.",
    highlight: "100% Code Compliant"
  },
  {
    number: "04",
    title: "Expert Installation & Daily Cleanup",
    description: "Our licensed crew executes precision installation following Florida HVHZ wind codes, complete with magnet sweeps for nails and respectful property protection.",
    highlight: "Master Workmanship"
  },
  {
    number: "05",
    title: "Final Inspection & Warranty Delivery",
    description: "We coordinate with city building inspectors for final sign-off and provide you with comprehensive manufacturer and contractor warranty packages.",
    highlight: "Guaranteed Satisfaction"
  }
];

export const ROOF_COMPARISON = [
  {
    type: "Architectural Shingles",
    lifespan: "20 - 30 Years",
    windRating: "Up to 130 MPH",
    energyEfficiency: "Good (Cool granules)",
    costTier: "$$ (Budget Friendly)",
    maintenance: "Low to Moderate",
    floridaSuitability: "Excellent for residential budgets"
  },
  {
    type: "Spanish Tile (Clay/Concrete)",
    lifespan: "40 - 50+ Years",
    windRating: "Up to 150+ MPH",
    energyEfficiency: "Superior (Thermal air barrier)",
    costTier: "$$$$ (Premium Investment)",
    maintenance: "Low",
    floridaSuitability: "Classic South Florida aesthetic & heat defense"
  },
  {
    type: "Standing Seam Metal",
    lifespan: "50 - 70+ Years",
    windRating: "Up to 160 - 180 MPH (Cat 5)",
    energyEfficiency: "Outstanding (Kynar reflective)",
    costTier: "$$$$ (Maximum Long-Term Value)",
    maintenance: "Very Low",
    floridaSuitability: "Ultimate hurricane & storm defense"
  },
  {
    type: "TPO Commercial Flat",
    lifespan: "20 - 30 Years",
    windRating: "HVHZ Hurricane Resistant",
    energyEfficiency: "High (Bright white reflective)",
    costTier: "$$$ (Cost-effective for flat/low-slope)",
    maintenance: "Moderate (Clear drains)",
    floridaSuitability: "Optimal for low-slope & commercial footprints"
  }
];
