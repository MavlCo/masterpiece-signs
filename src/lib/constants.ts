import type {
  NavLink,
  Service,
  Testimonial,
  PortfolioItem,
  ProcessStep,
  BlogPost,
} from '@/types'

export const SITE = {
  name: 'Masterpiece Signs & Graphics, Inc.',
  tagline: "Don't just buy a sign, buy a Masterpiece.",
  motto: 'Building Masterpieces Since 1988',
  owner: 'Adam Boutwell',
  phone: { display: '(419) 358-0077', href: 'tel:+14193580077' },
  email: {
    display: 'contact@masterpiecesign.com',
    href: 'mailto:contact@masterpiecesign.com',
  },
  address: {
    street: '902 N. Main Street',
    poBox: 'P.O. Box 124',
    city: 'Bluffton',
    state: 'OH',
    zip: '45817',
    full: '902 N. Main Street, P.O. Box 124, Bluffton, OH 45817',
  },
  hours: 'Mon–Fri 8:00 AM – 4:30 PM',
  social: {
    facebook: 'https://facebook.com/MasterpieceSignsAndGraphics',
    instagram: 'https://instagram.com/masterpiece_signs_and_graphics',
    twitter: 'https://twitter.com/MasterpieceSig1',
    linkedin: 'https://linkedin.com/company/masterpiece-signs',
  },
  rating: { score: 4.6, count: 10 },
  bbb: 'A+',
  founded: 1988,
  statesServed: ['Ohio', 'Michigan', 'Indiana'],
}

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'Process' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export const SERVICES: Service[] = [
  {
    id: 'monument',
    title: 'Monument Signs',
    description:
      'Permanent, ground-level signs crafted from polystyrene, brick, stone, or metal that establish your brand with enduring authority.',
    materials: 'Polystyrene, Brick Façade, Natural Stone, Fabricated Metal',
    useCases: [
      'Corporate campuses',
      'Retail centers',
      'Healthcare facilities',
      'Residential communities',
    ],
    image: '/images/474877277_1140791061041295_5870688950294658381_n.jpg',
  },
  {
    id: 'storefront',
    title: 'Storefront & Channel Letters',
    description:
      'Illuminated and non-illuminated storefront signage and custom channel letters that command attention and drive foot traffic.',
    materials: 'Aluminum, Acrylic, LED Illumination, Vinyl',
    useCases: [
      'Retail storefronts',
      'Restaurants & hospitality',
      'Professional offices',
      'Strip mall tenants',
    ],
    image: '/images/476814996_1152482756538792_1764048222396479793_n.jpg',
  },
  {
    id: 'vehicle',
    title: 'Vehicle Graphics & Wraps',
    description:
      'Transform your fleet into rolling billboards with professionally applied cast vinyl graphics and full vehicle wraps.',
    materials: 'Cast Vinyl, Specialty Films, Overlaminate',
    useCases: [
      'Fleet vehicles',
      'Company cars & vans',
      'Trailers & trucks',
      'Personal vehicles',
    ],
    image: '/images/313419042_651075236679549_534765979086936746_n.jpg',
  },
  {
    id: 'banners',
    title: 'Banners & Yard Signs',
    description:
      'High-impact, cost-effective printed banners and yard signs for events, promotions, grand openings, and seasonal campaigns.',
    materials: '13oz Vinyl, Mesh, Coroplast, H-Stakes',
    useCases: [
      'Grand openings',
      'Events & trade shows',
      'Real estate',
      'Political & fundraising',
    ],
    image: '/images/326775644_761567931530839_4580855714126231212_n.jpg',
  },
  {
    id: 'handpainted',
    title: 'Hand-Painted Signs',
    description:
      'Artisanal, hand-lettered signage delivering timeless character and unmatched craftsmanship that digital production simply cannot replicate.',
    materials: 'One-Shot Enamels, Bulletin Colors, Gold Leaf, Custom Surfaces',
    useCases: [
      'Window lettering',
      'Historic preservation',
      'Specialty retail',
      'Award & memorial pieces',
    ],
    image: '/images/474799269_1143139847473083_3250626863898515692_n.jpg',
  },
  {
    id: 'golf',
    title: 'Golf Course Signage',
    description:
      'Our signature specialty. Premium tee markers, yardage signs, wayfinding systems, scorecards, and complete club identity packages.',
    materials:
      'High-Density Foam, Aluminum, PVC, Engraved Metal, Weather-Resistant Finishes',
    useCases: [
      'Tee markers & yardage signs',
      'Wayfinding & cart path signs',
      'Pro shop & clubhouse',
      'Tournament & event signage',
    ],
    image: '/images/475418291_1147208340399567_1845795267320359964_n.jpg',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Derek Stock',
    company: 'RCR Technology Group',
    rating: 5,
    text: 'Everyone at Masterpiece Signs was wonderful to work with and on top of everything that was asked of them. I would absolutely recommend them for anyone looking for a sign of any size or material.',
    date: '~1 year ago',
  },
  {
    id: 2,
    name: 'DCL',
    rating: 5,
    text: "Quality design and craftsmanship! We are very happy with our products and the installation. Jason is one of the friendliest guys you'll ever meet.",
    date: '~3 years ago',
    badge: 'Local Guide',
  },
  {
    id: 3,
    name: 'Ken Cooper',
    rating: 5,
    text: "Their signs are absolutely STUNNING. You won't find better signs anywhere, PERIOD!",
    date: '~10 years ago',
    badge: 'Local Guide',
  },
  {
    id: 4,
    name: 'Findlay Flex Park',
    rating: 5,
    text: 'They did a great job on all of our signage around our facilities.',
    date: '~3 weeks ago',
  },
  {
    id: 5,
    name: 'Eric Schomber',
    rating: 5,
    text: 'Great service, and good prices!',
    date: '~1 month ago',
    badge: 'Local Guide',
  },
  {
    id: 6,
    name: 'Don Siefer',
    rating: 5,
    text: 'Great to work with — top notch.',
    date: '~7 months ago',
    badge: 'Local Guide',
  },
]

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'RCR Technology Group',
    category: 'Monument',
    client: 'RCR Technology Group',
    image: '/images/461796257_1064058988714503_8509472152614466343_n.jpg',
    description: 'Shaped monument sign for a beloved community institution.',
  },
  {
    id: 2,
    title: 'Lima Firefighters Memorial Museum',
    category: 'Storefront',
    client: 'Lima Firefighters Memorial Museum',
    image: '/images/481220181_1167403558380045_7149764226559404428_n.jpg',
    description: 'Full facility signage system for a beloved community institution.',
  },
  {
    id: 3,
    title: 'Findlay Flex Park',
    category: 'Monument',
    client: 'Findlay Flex Park',
    image: '/images/476826226_1153020873151647_7847445511620926222_n.jpg',
    description: 'Complete signage package for all facilities across the property.',
  },
  {
    id: 4,
    title: 'Eagle Ridge Golf Club Identity',
    category: 'Golf',
    image: '/images/475418291_1147208340399567_1845795267320359964_n.jpg',
    description: 'Full tee marker system, wayfinding, and directional signage package.',
  },
  {
    id: 5,
    title: 'Commercial Fleet Wrap',
    category: 'Vehicle',
    image: '/images/350777126_643178434381360_5357841699464247927_n.jpg',
    description: 'Full vehicle wrap applied to a custom food & coffee trailer.',
  },
  {
    id: 6,
    title: 'Artisan Window Lettering',
    category: 'Hand-Painted',
    image: '/images/477366344_1152482739872127_1887820089743401974_n.jpg',
    description: 'Custom-crafted flat panel sign with precision routed lettering.',
  },
  {
    id: 7,
    title: 'Grand Opening Banner',
    category: 'Banner',
    image: '/images/327444276_1530541020764150_4676692195196536176_n.jpg',
    description: 'High-visibility outdoor banners and large-format printed displays.',
  },
  {
    id: 8,
    title: 'Professional Office Building',
    category: 'Storefront',
    image: '/images/380206216_842420984211639_8770967160468304541_n.jpg',
    description: 'Illuminated channel letters and exterior building signage.',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Design',
    description:
      'We begin with a discovery consultation to understand your brand, goals, and site conditions. Our skilled designers then develop concepts tailored precisely to your vision.',
    details: [
      'Complimentary design consultation',
      'Brand and site analysis',
      'Multiple concept presentations',
      'Revisions until perfect',
    ],
  },
  {
    number: '02',
    title: 'Build',
    description:
      'Our craftspeople bring designs to life using premium materials and precision manufacturing. Our proofing and quality management is second to none — delivered right the first time.',
    details: [
      'Premium material selection',
      'Precision manufacturing',
      'Multi-point quality inspection',
      'Photographic proof before delivery',
    ],
  },
  {
    number: '03',
    title: 'Install',
    description:
      'Professional installation by our expert field team. We handle all logistics, permitting guidance, and ensure your masterpiece is mounted perfectly and built to last.',
    details: [
      'Expert field installation team',
      'Permit guidance & coordination',
      'Site cleanup and care',
      'Post-install walkthrough & guarantee',
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'How Can Signs Affect a Business?',
    excerpt:
      'The right signage can be the difference between a customer walking in or walking past. We explore how signage directly impacts foot traffic, brand perception, and bottom-line revenue.',
    date: 'January 10, 2020',
    category: 'Business Tips',
    image: '/images/380168442_842411320879272_3866588044608308344_n.jpg',
    slug: 'how-signs-affect-business',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Outdoor Sign Placement for Businesses',
    excerpt:
      'Location is everything — even for your sign. Learn the strategic principles behind outdoor sign placement that maximizes visibility and return on investment.',
    date: 'January 9, 2020',
    category: 'Strategy',
    image: '/images/476826226_1153020873151647_7847445511620926222_n.jpg',
    slug: 'outdoor-sign-placement',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Store Front Signage Limitations',
    excerpt:
      'Before you design, know the rules. We break down the common restrictions, zoning regulations, and landlord requirements that govern storefront signage.',
    date: 'January 3, 2020',
    category: 'Guide',
    image: '/images/476557985_1152482923205442_4086881415617206867_n.jpg',
    slug: 'storefront-signage-limitations',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'The Importance of Signage in a Business',
    excerpt:
      'From the first impression to brand recall — why investing in quality signage is one of the highest-ROI decisions a business owner can make.',
    date: 'December 26, 2019',
    category: 'Business Tips',
    image: '/images/481220181_1167403558380045_7149764226559404428_n.jpg',
    slug: 'importance-of-signage',
    readTime: '7 min read',
  },
]

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Monument',
  'Storefront',
  'Vehicle',
  'Banner',
  'Golf',
  'Hand-Painted',
] as const
