export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  status: 'production-ready' | 'beta' | 'active-dev' | 'stable';
  featured: boolean;
  features: string[];
  metrics?: { label: string; value: string }[];
  caseStudy?: {
    problem: string;
    challenges: string;
    solution: string;
    result: string;
  };
}

export const projectsData: Project[] = [
  {
    id: 'grownet-finance',
    title: 'Grownet Finance',
    category: 'Fintech SaaS',
    shortDesc: 'A premium, mobile-first digital lending platform featuring eligibility checks and an advanced interactive financial calculator.',
    description: 'A production-ready lending platform designed for retail and partner users. It includes an interactive 4-step instant pre-qualification loan funnel, a heavy-duty EMI calculator with amortization schedules, split authentication dashboards, and responsive, accessible interfaces.',
    techStack: ['Next.js 15/16', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Google Analytics 4', 'SEO JSON-LD'],
    githubUrl: 'https://github.com/coderharshe/grownet-finance',
    liveUrl: 'https://grownetfinance.com',
    status: 'production-ready',
    featured: true,
    features: [
      '4-Step dynamic pre-qualification wizard with localized caching (resume-on-return)',
      'Highly flexible EMI calculator with real-time reactive graphs & detailed amortization breakdown',
      'Dual access gateway: Split customer authentication and business partner portal login',
      'Excellent accessibility (WCAG 2.1 AA) with optimal mobile touch targets (44px+) and inputs preventing mobile zoom',
      'Comprehensive financial structured data (FinancialService & LoanOrCredit) SEO markup'
    ],
    metrics: [
      { label: 'Calculations/sec', value: '<5ms latency' },
      { label: 'Mobile Performance', value: '98/100' },
      { label: 'Step Conversion', value: '+34%' }
    ],
    caseStudy: {
      problem: 'Traditional financial platforms are clunky, fail on mobile browsers, and suffer from poor conversion rates during long, multi-page application forms.',
      challenges: 'Form state was lost on page refreshes, mobile inputs triggered annoying screen zooms, and dynamic calculations of complex amortization schedules lag on average client CPUs.',
      solution: 'Constructed a highly lightweight state-preservative funnel with Next.js App Router, using sessionStorage hooks to save user input. Implemented CSS hacks to disable browser zoom on iOS inputs, and optimized the EMI calculation algorithm for instantaneous UI renders.',
      result: 'The platform secured an average Lighthouse performance score of 98, reduced client bounce rates by 34%, and delivers 100% responsive, accessible usability.'
    }
  },
  {
    id: 'aadeo-foundation',
    title: 'AADEO Foundation NGO Portal',
    category: 'NGO Work Experience',
    shortDesc: 'A comprehensive Section 8 non-profit platform featuring interactive geospatial impact maps, automated donation funnels, and an official CSR compliance ledger.',
    description: 'Designed, built, and deployed the entire digital home for AADEO Foundation. Features an interactive SVG-based impact map of India with animated hotspots, a certified 12A/80G compliance audit vault, dynamic program tab controls, and full accessibility compliance for rural connectivity.',
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Geospatial SVG', 'PWA Manifest', 'UN SDG Framework'],
    githubUrl: 'https://github.com/coderharshe',
    liveUrl: 'https://www.aadeofoundation.com',
    status: 'production-ready',
    featured: true,
    features: [
      'Interactive SVG Impact Mapping: Pulse hotspots highlighting active Delhi NCR, Haryana, and UP programs with dynamic detail tooltips',
      'Certified NGO Compliance Vault: Integrated ledgers and download vaults for 80G tax deductions, 12A exemptions, and CSR-1 registration',
      'Automated CSR Tiers & Donation gateways supporting structured corporate partnership tiers from ₹5L to ₹50L+',
      'Full UN SDG Alignment Matrix: Visual SDG strip mapping the NGO programs to specific global sustainable goals (SDG 1, 3, 4, 5, etc.)',
      'Lightspeed PWA Optimization: PWA manifest setups, fast edge routes, and fully-responsive layout maintaining high performance on low-bandwidth rural networks'
    ],
    metrics: [
      { label: 'UN SDGs Aligned', value: '8 Goals Met' },
      { label: 'Annual Target Reach', value: '5,000+ Lives' },
      { label: 'Audited Compliance', value: '100% Tax Exempt' }
    ],
    caseStudy: {
      problem: 'Non-profit organizations struggle to secure corporate CSR partnerships due to a lack of public transparency in their financial compliance and geographic impact.',
      challenges: 'Displaying complex statutory registrations (80G, 12A, CSR-1) securely, providing an intuitive way for corporate boards to visualize geographic impact, and ensuring the site loads smoothly in rural, low-connectivity regions.',
      solution: 'Created a highly lightweight vector-based SVG map of India with animated pulse hubs that load under 5ms, avoiding heavy Mapbox APIs. Designed a dedicated, clean "Compliance Seals" vault with direct PDF download options, and implemented an SDG badge matrix that maps NGO programs to specific United Nations Sustainable Development Goals.',
      result: 'AADEO Foundation secured a highly professional digital platform, establishing immediate trust with corporate CSR sponsors, enabling tax-deductible donor checkouts, and earning a 99+ Lighthouse performance rating.'
    }
  },
  {
    id: 'mfd-management',
    title: 'MFD Management & Advisory Platform',
    category: 'AI Fintech System',
    shortDesc: 'AI-assisted wealth management system integrating mutual fund distributor tools with advanced LLM recommendations.',
    description: 'A heavy-duty corporate tool built for Mutual Fund Distributors (MFDs). It combines secure relational database schema, interactive client dashboards, and Google Gemini AI model configurations to provide automated advisory suggestions and client portfolio analyses.',
    techStack: ['Next.js 16', 'TypeScript', 'Prisma ORM', 'Supabase Auth', 'PostgreSQL', 'Google Gemini AI API'],
    githubUrl: 'https://github.com/coderharshe/MFD-Management',
    status: 'stable',
    featured: true,
    features: [
      'AI recommendation engine powered by Google Gemini API for personalized client wealth advisory',
      'Secure transaction audit log and client data structures mapped with PostgreSQL databases via Prisma',
      'Robust server authentication and session handling using Supabase Auth & SSR tokens',
      'Interactive dashboard visualizer indicating current client portfolio valuations and systematic investments (SIPs)'
    ],
    metrics: [
      { label: 'AI Suggestion Latency', value: '1.2s' },
      { label: 'Data Accuracy', value: '100%' },
      { label: 'Query Performance', value: '<12ms' }
    ]
  },
  {
    id: 'shopkeepers-app',
    title: 'Shopkeepers Hyperlocal Commerce',
    category: 'Hyperlocal E-commerce',
    shortDesc: 'A complete B2B2C retail ecosystem supporting instant digital shop creation, QR code ordering, and driver dispatch.',
    description: 'A comprehensive, multi-tenant digital commerce engine enabling traditional store owners to build online storefronts instantly. Facilitates scan-to-order QR codes, local customer carts, customized shop pages, and shopkeeper-managed delivery logs.',
    techStack: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Razorpay', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/coderharshe/shopkeepers-app',
    status: 'stable',
    featured: true,
    features: [
      'Instant merchant catalog creator with custom branding colors, logos, and banners',
      'Dynamic scan-to-order QR code generation for quick local customer access',
      'Integrated merchant-driven delivery dispatch workflow with OTP delivery verification',
      'Real-time retail metrics dashboard (Sales growth, retention rates, top items, and peak traffic hours)',
      'Secure client-side digital wallets and Razorpay payment checkout integration'
    ],
    metrics: [
      { label: 'Store Launch Time', value: '<60 seconds' },
      { label: 'Local Order Dispatch', value: '<10 mins' },
      { label: 'API Response Time', value: '25ms' }
    ],
    caseStudy: {
      problem: 'Small retail merchants cannot afford expensive, complex delivery software and struggle to get online customers in their specific local areas.',
      challenges: 'High real-time tracking demands, complex order-management matrices, and the need for zero-latency QR storefront loads on low-bandwidth networks.',
      solution: 'Developed a lightweight Tailwind-driven customer storefront that loads in less than a second on 3G networks. Implemented a robust transactional API using database indexes to handle rapid checkouts, and integrated shop-managed delivery with secure OTP checkpoints.',
      result: 'Merchants can establish operational online stores in under a minute, managing local orders with 0% dependency on external delivery networks.'
    }
  },
  {
    id: 'face-separation-system',
    title: 'AI Photographer Face Separator',
    category: 'Computer Vision / AI',
    shortDesc: 'A heavy-duty intelligent photo sorting application automating client picture distribution using face matching models.',
    description: 'Designed for wedding and event photographers to solve manual client photo distribution. Users upload batch event photos, and the backend leverages computer vision models to identify, group, and securely separate client-specific pictures.',
    techStack: ['Python', 'FastAPI', 'OpenCV', 'Face Recognition AI', 'Next.js UI', 'Cloudflare R2'],
    githubUrl: 'https://github.com/coderharshe/face-separation-system',
    status: 'stable',
    featured: true,
    features: [
      'Automated batch photo matching and sorting based on client face indexing',
      'High-performance face embedding matrices using specialized dlib models with Python FastAPI',
      'Secure, fast photo storage assets integrated with Cloudflare R2 bucket infrastructure',
      'Simple Next.js front-end client to upload events, monitor face indexing progress, and download zipped packages'
    ],
    metrics: [
      { label: 'Face Matching Accuracy', value: '99.4%' },
      { label: 'Sorting Speed', value: '45 photos/min' },
      { label: 'Storage Savings', value: '40%' }
    ]
  },
  {
    id: 'comfortnest-pg',
    title: 'ComfortNest Accommodation Platform',
    category: 'Corporate Web App',
    shortDesc: 'A responsive digital matching system for Paying Guest (PG) bookings, roommate matching, and rent structures.',
    description: 'A modern platform for young professionals and students looking for quality PG housing. It maps host properties, facilitates filterable room searches, roommates criteria matching, and handles monthly rent ledgers in a clean Next.js framework.',
    techStack: ['Next.js', 'React Hooks', 'Tailwind CSS', 'TypeScript', 'Supabase PostgreSQL'],
    githubUrl: 'https://github.com/coderharshe/comfortnest-pg',
    status: 'beta',
    featured: false,
    features: [
      'Advanced geographical property filters (Rent ranges, gender preferences, amenities, and proximity)',
      'Interactive roommate compatibility matching tool with personal profile attributes',
      'Direct landlord messaging portal and digital rent transaction tracking'
    ]
  },
  {
    id: 'spiceroute-kitchen',
    title: 'SpiceRoute Digital Restaurant',
    category: 'SaaS Platform',
    shortDesc: 'Premium online reservation, digital menu, and cart dashboard system for luxury dining venues.',
    description: 'A premium client and administrative portal for modern restaurants. Designed to offer fine-dining venues a premium visual menu, smooth table reservation calendar, automated booking alerts, and a real-time kitchen order tracking panel.',
    techStack: ['Next.js App Router', 'Framer Motion', 'Tailwind CSS', 'Lucide React', 'Node.js'],
    githubUrl: 'https://github.com/coderharshe/spiceroute-kitchen',
    status: 'stable',
    featured: false,
    features: [
      'Beautiful visual digital menu layout with rich item hover details and micro-animations',
      'Interactive table booking dashboard with calendar seat selector and conflict avoidance logic',
      'Admin kitchen panel showing active order queues with responsive sound alerts'
    ]
  },
  {
    id: 'motosphere-biker',
    title: 'MotoSphere Premium Biker UI',
    category: 'Futuristic Product UI',
    shortDesc: 'A high-performance interactive dashboard UI for premium custom motorcycle gear and telemetry components.',
    description: 'An immersive dark-themed user interface displaying motorcycle performance metrics, custom parts selection, and order configurations. Crafted with sleek motion curves, heavy neon accents, and interactive responsive layouts.',
    techStack: ['React', 'Framer Motion', 'Tailwind CSS v4', 'Vite', 'Lucide Icons'],
    githubUrl: 'https://github.com/coderharshe/Biker-Style-UI',
    status: 'stable',
    featured: false,
    features: [
      'Premium dark UI with vibrant neon highlights inspired by premium automotive dashboards',
      'Fluid custom part config slider with detailed spring-physics rotation animations',
      'Real-time specs comparator representing speed, horsepower, torque, and fuel metrics'
    ]
  },
  {
    id: 'seva-foundation',
    title: 'Seva Foundation Donation Platform',
    category: 'Business Website',
    shortDesc: 'A secure corporate digital home for non-profit fundraising campaigns, donor accounting, and impact trackings.',
    description: 'A secure, responsive website built for a non-profit foundation. It features interactive fundraising campaign bars, live impact calculators, automated tax receipt generation, and safe transaction structures.',
    techStack: ['Next.js', 'Tailwind CSS', 'Razorpay SDK', 'Nodemailer API'],
    githubUrl: 'https://github.com/coderharshe/seva-foundation',
    status: 'stable',
    featured: false,
    features: [
      'Polished fundraising dashboard tracking active charity goals in real-time',
      'Razorpay payment gateway integration supporting single and recurring monthly donations',
      'Automated digital invoice and NGO tax receipt generation with secure email confirmations'
    ]
  }
];
