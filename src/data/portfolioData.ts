export type Category = 'All' | 'Brand Strategy' | 'Launch Events' | 'Content Marketing' | 'Art & Design';

export interface ProjectEvidence {
  caption: string;
  sourceRef: string;
  filename: string;
  src?: string;
  aspect?: string;
}

export interface ProjectVideo {
  title?: string;
  src: string;
  poster?: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface SnapshotFigure {
  target: number;
  suffix?: string;
  prefix?: string;
  unit?: string;
  detail: string;
  metric?: string;
}

export interface Project {
  id: string;
  name: string;
  chineseName?: string;
  city: string;
  company: string;
  year: string;
  categories: ('Brand Strategy' | 'Launch Events' | 'Content Marketing' | 'Art & Design')[];
  level: 'hero' | 'additional' | 'design-foundation';
  featuredOnHome?: boolean;
  primaryImage: string;
  allImages: string[];
  carouselImages?: {
    src: string;
    alt: string;
    caption?: string;
    type?: 'image' | 'video';
    poster?: string;
  }[];
  videos?: ProjectVideo[];
  metrics?: Metric[];
  overview: string;
  backgroundChallenge?: string;
  myRole?: string;
  strategyApproach?: string;
  execution?: string;
  results?: string;
  evidence: ProjectEvidence[];
  isReserved?: boolean;
  reservedText?: string;
}

export interface CareerStop {
  id: string;
  city: string;
  years: string;
  type: 'Education' | 'Work';
  organisation: string;
  role: string;
  narrativeLabel: string;
  achievements: string[];
  additionalRoles?: {
    roleTitle: string;
    department?: string;
    achievements: string[];
  }[];
  notes?: string;
}

export interface SkillCategoryGroup {
  number: string;
  name: string;
  subtitle?: string;
  items: {
    name: string;
    note?: string;
    category?: 'applied' | 'academic';
  }[];
}

export interface ResearchItem {
  title: string;
  venue: string;
  year: string;
  location: string;
  proposalType?: string;
  status: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Zhang Chenxi',
    positioning:
      'Brand and marketing strategist with 9 years of experience across four Fortune Global 500 real estate developers, now combining business experience with analytics and AI to support data-driven marketing and consumer decision-making.',
    currentStatus:
      'Master of Science in Business AI candidate at Singapore Management University (SMU), Lee Kong Chian School of Business.',
    email: 'cx.zhang.2026@mbai.smu.edu.sg',
    linkedinUrl: 'https://www.linkedin.com/in/chenxi-zhang-3682851a2/',
    cvUrl: '/cv.pdf',
    portraitUrl: '/Images/portrait/portrait.jpg',
  },

  snapshotFigures: [
    {
      target: 9,
      suffix: '',
      unit: 'YEARS',
      detail: 'IN BRAND & MARKETING STRATEGY',
      metric: '9',
    },
    {
      target: 4,
      suffix: '',
      unit: 'FORTUNE 500',
      detail: 'DEVELOPERS: VANKE, CHINA JINMAO, LONGFOR, SUNAC',
      metric: '4',
    },
    {
      target: 41,
      suffix: '',
      unit: 'PROJECTS',
      detail: 'UNDER REGIONAL BRAND GOVERNANCE',
      metric: '41',
    },
    {
      target: 22,
      prefix: 'RMB ',
      suffix: 'B+',
      detail: 'IN SALES SUPPORTED (2024–2025)',
      metric: '22B+',
    },
    {
      target: 1,
      prefix: 'RMB ',
      suffix: 'B',
      detail: 'OPENING-DAY SALES (QINGYUN QUE LAUNCH)',
      metric: '1B',
    },
  ] as SnapshotFigure[],

  capabilityProgression: [
    { city: 'Shenyang', capability: 'Brand & Consumer Engagement' },
    { city: 'Zhengzhou', capability: 'City-level Strategy' },
    { city: 'Tianjin & Beijing', capability: 'Leadership & Digital Growth' },
    { city: 'Suzhou', capability: 'Product & Go-to-Market Strategy' },
    { city: 'Shenyang / Northeast China', capability: 'Regional Brand Governance' },
  ],

  careerTimeline: [
    {
      id: 'stop-1-bologna',
      city: 'Bologna, Italy',
      years: 'Oct 2014 – Feb 2017',
      type: 'Education',
      organisation: 'Accademia di Belle Arti di Bologna',
      role: 'Master of Fine Arts in Scenography & Staging',
      narrativeLabel: 'Design Foundation',
      achievements: [
        'Mastered spatial narrative, lighting staging, and architectural scenography in Italy.',
        'Explored the integration of physical stagecraft, urban space revitalization, and contemporary public flow dynamics.',
      ],
      notes: 'Education stop distinguishing foundational visual, spatial and scenographic discipline.',
    },
    {
      id: 'stop-2-shenyang',
      city: 'Shenyang',
      years: 'Jul 2017 – Mar 2021',
      type: 'Work',
      organisation: 'Sunac China (Fortune Global 500 developer, HKEX: 1918)',
      role: 'Marketing Planner',
      narrativeLabel: 'Brand & Consumer Engagement',
      achievements: [
        'Led the award-winning launch campaign for Jiangshan Mansion, staging a holographic projection product launch at Shenyang Palace Museum — a heritage × technology format that earned widespread regional media coverage, generated millions of organic impressions and drove pre-launch lead acquisition ahead of market benchmarks.',
        'Built and operated the city\'s owner community system and "Happy Home" brand activity programme; delivered 200+ community events and 100+ city-level activities annually, increasing referral-based sales by 25%.',
        'Managed the city\'s official social media accounts and brand visual identity; ranked top 2 among peer developers in the city for engagement.',
      ],
      notes: 'Formed core expertise in large-scale event production, cultural IP creation, and community operations.',
    },
    {
      id: 'stop-3-zhengzhou',
      city: 'Zhengzhou',
      years: 'Mar 2021 – Mar 2022',
      type: 'Work',
      organisation: 'Sunac China',
      role: 'Principal, Marketing Strategy (City Level)',
      narrativeLabel: 'City-level Strategy',
      achievements: [
        'Owned end-to-end positioning, value architecture and go-to-market strategy for 10 residential projects across the city; led cross-functional brand governance across four functional departments.',
        'Built city-level short-video content factory, producing 1,000+ short videos and 500+ live-stream sessions, generating 100M+ impressions and contributing 1.5% to total sales revenue (saving millions in agency fees).',
        'Led government communications, public relations crisis management, and joint marketing initiatives for major urban renewal developments.',
      ],
      notes: 'Advanced from project-level marketing planning to city-wide portfolio governance, new-media infrastructure, and stakeholder management.',
    },
    {
      id: 'stop-4-tianjin-beijing',
      city: 'Tianjin & Beijing',
      years: 'Mar 2022 – Sep 2023',
      type: 'Work',
      organisation: 'Longfor Group (Fortune Global 500, 2021–2023, HKEX: 0960, Top 10 China developer)',
      role: 'Head of Marketing Strategy & Planning, Tianjin / HQ Specialist',
      narrativeLabel: 'Leadership & Digital Growth',
      achievements: [
        'Led a 20-person marketing planning team across multiple project lifecycles; established review gates and delivery templates.',
        'Delivered landmark RMB 1B opening-day sales within two hours for Tianjin Longfor Qingyun Que — ranking #1 in Tianjin for volume and pricing for 3 consecutive months.',
        'Engineered an innovative TikTok and WeChat digital customer acquisition system: 20+ live broadcasts, 60+ video assets, and 60+ tiered TikTok creators.',
        'Sourced ~RMB 90M in direct sales through first-party digital channels at 40% lower cost-per-lead than external agencies.',
      ],
      notes: 'Strengthened digital transformation capability, data-informed attribution, and cross-functional leadership under challenging market cycles.',
    },
    {
      id: 'stop-5-suzhou',
      city: 'Suzhou',
      years: 'Dec 2023 – May 2024',
      type: 'Work',
      organisation: 'China Jinmao (Fortune Global 500 #198, 2024; Real estate arm of Sinochem)',
      role: 'Project Strategist, East China Region',
      narrativeLabel: 'Product & Go-to-Market Strategy',
      achievements: [
        'Led end-to-end pre-launch strategy and execution for a landmark residential project in Suzhou High-tech Zone, delivering RMB 820M in opening sales and ranking #1 in Suzhou by sales volume, GFA, average price, and total transaction value in its launch month.',
        'Governed full milestone process from land feasibility to launch; established review gates and built KPI dashboards for agency and media partner evaluation.',
        'Curated Haute Couture cross-industry exhibition with celebrity designer Xiong Ying (founder of GAIA Legend, guest designer for CCTV Spring Festival Gala); operated live-streaming room with 41 live sessions delivering 350,000+ views and 125 qualified client leads.',
      ],
      notes: 'High-density, top-tier East China luxury real estate market strategy and product value architecture.',
    },
    {
      id: 'stop-6-shenyang-northeast',
      city: 'Shenyang / Northeast China',
      years: 'May 2024 – 2026',
      type: 'Work',
      organisation: 'Vanke Group (Fortune Global 500 #206, 2024)',
      role: 'Brand Partner',
      narrativeLabel: 'Regional Brand Governance',
      achievements: [
        'Owned end-to-end regional brand strategy and go-to-market campaigns for 41 residential and commercial projects across Northeast China, directly supporting RMB 22B+ in cumulative sales across 2024–2025.',
        'Steered high-profile launches including Shenyang Vanke Yinyue, achieving 1,500+ on-site attendees, 2M+ live broadcast views, and 20+ media outlets broadcasting simultaneously.',
        'Governed agency partnerships, media buying optimization, and brand consistency across diverse market maturity levels.',
      ],
      notes: 'Senior brand leadership role orchestrating regional brand equity, multi-city campaign governance, and stakeholder alignment.',
    },
    {
      id: 'stop-7-singapore',
      city: 'Singapore',
      years: 'Aug 2026 – Aug 2027',
      type: 'Education',
      organisation: 'Singapore Management University, Lee Kong Chian School of Business',
      role: 'Master of Science in Business AI candidate',
      narrativeLabel: 'Business AI',
      achievements: [
        'Awarded the prestigious Community Impact scholarship.',
        'Coursework: AI-Powered Marketing, Human-AI Collaboration, Data-Driven Decision Making with AI, Data Storytelling and AI-augmented Influencing.',
        'Academic research on AI-generated influencers in consumer and high-involvement purchasing decisions.',
      ],
      notes: 'Available for full-time internship starting January 2027.',
    },
  ] as CareerStop[],

  educationCredentials: [
    {
      institution: 'Singapore Management University',
      school: 'Lee Kong Chian School of Business',
      degree: 'Master of Science in Business AI candidate',
      period: 'Aug 2026 – Aug 2027',
      location: 'Singapore',
      details:
        'Awarded Community Impact scholarship. Coursework: AI-Powered Marketing, Human-AI Collaboration, Data-Driven Decision Making with AI, Data Storytelling and AI-augmented Influencing.',
    },
    {
      institution: 'Accademia di Belle Arti di Bologna',
      degree: 'Master of Fine Arts in Scenography & Staging',
      period: 'Oct 2014 – Feb 2017',
      location: 'Bologna, Italy',
      details:
        'Foundation in spatial narrative, scenography, lighting, architectural staging, and experiential event design.',
    },
    {
      institution: 'Anshan Normal University',
      degree: 'Bachelor of Arts, Art & Design',
      period: 'Sep 2010 – Jun 2014',
      location: 'China',
      details:
        'Foundational art, spatial and visual design training.',
    },
  ],

  projects: [
    /* ================================================================
       LEVEL 01 — PROJECT STRATEGY & PLANNING
       Exact required order:
       01 Jinmao Mansion → 02 Vanke Yinyue → 03 Longfor Qingyun Que
       ================================================================ */
    {
      id: 'suzhou-jinmao-mansion',
      name: 'Suzhou Jinmao Mansion',
      chineseName: '狮山金茂府',
      city: 'Suzhou',
      company: 'China Jinmao',
      year: '2023–2024',
      categories: ['Brand Strategy', 'Launch Events'],
      level: 'hero',
      featuredOnHome: true,
      primaryImage: '/Images/jinmao/Jinmao-01-hero.jpg',
      allImages: [
        '/Images/jinmao/Jinmao-01-hero.jpg',
        '/Images/jinmao/Jinmao-02-architecture.jpg',
      ],
      carouselImages: [
        {
          src: '/Images/jinmao/Jinmao-01-hero.jpg',
          alt: 'Suzhou Jinmao Mansion — Landmark demonstration area and architectural entrance',
          caption: 'Landmark residential demonstration area & architectural entrance (Suzhou High-tech Zone)',
          type: 'image',
        },
        {
          src: '/Images/jinmao/Jinmao-02-architecture.jpg',
          alt: 'Suzhou Jinmao Mansion — Demonstration area architecture and spatial design specifications',
          caption: 'Demonstration area architectural view and spatial design specifications',
          type: 'image',
        },
      ],
      metrics: [
        { label: 'Opening Sales', value: 'RMB 820M' },
        { label: 'Market Rank', value: '#1 in Suzhou' },
        { label: 'Customer Visits', value: '5,000+' },
        { label: 'Online Exposures', value: '8M+' },
      ],
      overview:
        'Led end-to-end pre-launch strategy and execution for a landmark residential project in Suzhou High-tech Zone (No. 89 Zhuyuan Road), delivering RMB 820 million in opening sales and ranking #1 in Suzhou by sales volume, GFA, average price, and total transaction value in its launch month.',
      backgroundChallenge:
        'Amid a broader macroeconomic real estate contraction, the project faced intense competition from surrounding high-end parcels with reduced price disparity and declining consumer expectations. The site spanned 49,800 sqm of land area (631 residential units, 1,407 parking spaces) requiring a differentiated product story that shifted from traditional hardware metrics to an emotional lifestyle perception.',
      myRole:
        'Project Strategist, East China Region. Led full-lifecycle milestone governance from land feasibility to launch, established review gates and delivery templates, built KPI dashboards for agency and media partner evaluation, and orchestrated creative launch events.',
      strategyApproach:
        'Formulated the core positioning deduction: "Rare land · Technological residence · Culture · Landscape Warmth · Seamless integration · Social concentration · Radiance". Targeted high-end local upgrade buyers in the 7.5–12.5M RMB bracket by emphasizing Jinmao Mansion 3.0 technology and international cultural prestige.',
      execution:
        'Curated a multi-stage promotion rhythm culminating in a cross-industry Haute Couture Exhibition in collaboration with Xiong Ying (founder of GAIA Legend, guest designer for CCTV Spring Festival Gala). Implemented dynamic digital pattern lights, an immersive courtyard garden tour, and built an independent live-streaming room with 41 live sessions delivering 350,000+ views and 125 qualified client leads.',
      results:
        'Delivered RMB 820 million in opening sales, outperforming market benchmarks. Captured the #1 rank in Suzhou across sales volume, GFA, average price, and gross transaction value. Generated over 5,000 on-site visits and 8 million+ online exposures.',
      evidence: [
        {
          caption: 'Demonstration area architectural view and project specifications',
          sourceRef: 'Portfolio PDF Page 4',
          filename: 'Jinmao-02-architecture.jpg',
          src: '/Images/jinmao/Jinmao-02-architecture.jpg',
        },
      ],
    },
    {
      id: 'shenyang-vanke-yinyue',
      name: 'Shenyang Vanke Yinyue',
      chineseName: '万科·胤樾',
      city: 'Shenyang',
      company: 'Vanke Group',
      year: '2024',
      categories: ['Brand Strategy', 'Launch Events'],
      level: 'hero',
      featuredOnHome: true,
      primaryImage: '/Images/yinyue/yinyue-01-hero.jpg',
      allImages: [
        '/Images/yinyue/yinyue-01-hero.jpg',
        '/Images/yinyue/yinyue-02-architecture.jpg',
        '/Images/yinyue/yinyue-03-detail.jpg',
      ],
      carouselImages: [
        {
          src: '/Images/yinyue/yinyue-01-hero.jpg',
          alt: 'Shenyang Vanke Yinyue — Flagship Oriental garden demonstration area and entrance',
          caption: 'Flagship Oriental garden demonstration area and architectural entrance (Shenyang Huanggu District)',
          type: 'image',
        },
        {
          src: '/Images/yinyue/yinyue-02-architecture.jpg',
          alt: 'Shenyang Vanke Yinyue — Demonstration area architecture and ceremonial garden order',
          caption: 'Demonstration area architecture and ceremonial garden spatial design',
          type: 'image',
        },
        {
          src: '/Images/yinyue/yinyue-03-detail.jpg',
          alt: 'Shenyang Vanke Yinyue — Demonstration area architectural detail',
          caption: 'Demonstration area detail and Oriental architectural craftsmanship',
          type: 'image',
        },
      ],
      metrics: [
        { label: 'Live Broadcast Views', value: '2M+' },
        { label: 'On-site Attendees', value: '1,500+' },
        { label: 'Simultaneous Outlets', value: '20+ Media' },
        { label: 'Online Exposures', value: '1M+' },
      ],
      overview:
        'Pure garden-style residential benchmark in North Shenyang\'s Huanggu District Capital New Area (Floor Area Ratio 1.6), expressing Vanke\'s "Heritage and Future" product strategy.',
      backgroundChallenge:
        'Transforming an industrial city gateway into an innovation corridor required an inspiring cultural story to connect Shenyang\'s royal heritage with contemporary elite family aspirations.',
      myRole:
        'Brand Partner, Vanke Northeast China. Spearheaded regional product positioning, launch event creative direction, and integrated media matrix operations across mainstream and digital outlets.',
      strategyApproach:
        'Defined the core narrative: "Heritage and Future" (印鉴盛京 · 礼序东方). Blended royal ceremonial order inspired by Shenyang Palace with modern Oriental garden aesthetics, blue-gray tone palettes, nanmu wood textures, and auspicious cloud patterns.',
      execution:
        'Staged Shenyang\'s first ice-screen and 3D holographic projection launch show. Coordinated 20+ media outlets broadcasting simultaneously across five major platforms, expert endorsements, and high-impact digital invitation campaigns.',
      results:
        'Over 1,500 attendees gathered on-site; the live broadcast garnered over 2 million views with nearly 60,000 video account views and 1 million+ online exposures, establishing Yinyue as the city\'s flagship launch of the year.',
      evidence: [
        {
          caption: 'Demonstration area architecture and ceremonial garden spatial design',
          sourceRef: 'Portfolio PDF Page 7',
          filename: 'yinyue-02-architecture.jpg',
          src: '/Images/yinyue/yinyue-02-architecture.jpg',
        },
        {
          caption: 'Demonstration area detail and Oriental architectural craftsmanship',
          sourceRef: 'Portfolio PDF Page 8',
          filename: 'yinyue-03-detail.jpg',
          src: '/Images/yinyue/yinyue-03-detail.jpg',
        },
      ],
    },
    {
      id: 'tianjin-longfor-qingyunque',
      name: 'Tianjin Longfor Qingyun Que',
      chineseName: '龙湖青云阙',
      city: 'Tianjin',
      company: 'Longfor Group',
      year: '2023',
      categories: ['Brand Strategy', 'Content Marketing'],
      level: 'hero',
      featuredOnHome: true,
      primaryImage: '/Images/qingyunque/qingyunque-01-hero.jpg',
      allImages: [
        '/Images/qingyunque/qingyunque-01-hero.jpg',
        '/Images/qingyunque/qingyunque-02-detail.jpg',
      ],
      carouselImages: [
        {
          src: '/Images/qingyunque/qingyunque-01-hero.jpg',
          alt: 'Longfor Qingyun Que — Flagship low-density demonstration garden and architectural facade',
          caption: 'Flagship low-density demonstration area and architectural facade (Tianjin Hexi District)',
          type: 'image',
        },
        {
          src: '/Images/qingyunque/qingyunque-02-detail.jpg',
          alt: 'Longfor Qingyun Que — Demonstration area detail and arrival sanctuary',
          caption: 'Demonstration area architectural detail and hotel-style arrival sanctuary',
          type: 'image',
        },
      ],
      metrics: [
        { label: 'Opening-Day Sales', value: 'RMB 1B (2 hrs)' },
        { label: '4-Month Volume', value: 'RMB 2.32B' },
        { label: 'Sell-Through Rate', value: '93%' },
        { label: 'Market Rank', value: '#1 for 3 Months' },
      ],
      overview:
        'Flagship low-density residential project in Tianjin Hexi District Chen Tang Zhuang (81,600 sqm GFA). Opened within 82 days of land acquisition and launched in 95 days, delivering RMB 1 billion in opening-day sales within two hours.',
      backgroundChallenge:
        'Facing an industry-wide downturn in northern China, the project needed to convert high-net-worth settlement and school-seeking upgrade buyers rapidly in Hexi\'s new growth epicenter, overcoming conservative buyer sentiment.',
      myRole:
        'Head of Marketing Strategy & Planning, Tianjin. Led a 20-person marketing planning team, defined value architecture, orchestrated full-channel new-media customer acquisition matrix, and governed execution gates.',
      strategyApproach:
        'Positioned as "Cloud Palace" — low-density garden house luxury residences backed by top-notch nine-year integrated school district resources. Highlighted 85% ultra-high space utilization, 15-meter wide-living rooms, and a hotel-style arrival sanctuary. Created the comprehensive "Cloud Palace VI" visual identity system.',
      execution:
        'Engineered an innovative TikTok and WeChat video distribution matrix: 20+ live broadcast sessions, 60+ video assets, and 60+ tiered TikTok creators. Sourced 1.5% of total company sales (~RMB 90 million) through first-party digital channels at a materially lower cost-per-lead than external agencies.',
      results:
        'Achieved RMB 1 billion in opening sales within two hours of launch. Ranked No. 1 in Tianjin for volume and pricing for three consecutive months. Accumulated RMB 2.32 billion in total sales in 4 months with a 93% sell-through rate and 7,000+ visits.',
      evidence: [
        {
          caption: 'Demonstration area architectural detail and hotel-style arrival sanctuary',
          sourceRef: 'Portfolio PDF Page 10',
          filename: 'qingyunque-02-detail.jpg',
          src: '/Images/qingyunque/qingyunque-02-detail.jpg',
        },
      ],
    },

    /* ================================================================
       LEVEL 02 — BRAND & ACTIVATIONS
       Includes:
       - Jiangshan Mansion Global Launch
       - Shenyang Vanke Yinyue Product Launch (Reserved Case)
       - Community & Cultural IP Programme
       - Zhengzhou Citywide Content Marketing
       ================================================================ */
    {
      id: 'jiangshan-mansion',
      name: 'Jiangshan Mansion Global Launch',
      chineseName: '融创·江山府',
      city: 'Shenyang',
      company: 'Sunac China',
      year: '2020',
      categories: ['Launch Events'],
      level: 'additional',
      primaryImage: '/Images/Jiangshan Mansion Global Launch/jiangshan-01-hero.jpg',
      allImages: [
        '/Images/Jiangshan Mansion Global Launch/jiangshan-01-hero.jpg',
        '/Images/Jiangshan Mansion Global Launch/jiangshan-02-detail.jpg',
        '/Images/Jiangshan Mansion Global Launch/jiangshan-02-detail.M4V',
      ],
      carouselImages: [
        {
          src: '/Images/Jiangshan Mansion Global Launch/jiangshan-01-hero.jpg',
          alt: 'Jiangshan Mansion Global Launch — Holographic projection launch at Shenyang Imperial Palace Museum',
          caption: 'Holographic projection launch at UNESCO World Heritage Shenyang Imperial Palace Museum',
          type: 'image',
        },
        {
          src: '/Images/Jiangshan Mansion Global Launch/jiangshan-02-detail.jpg',
          alt: 'Jiangshan Mansion Global Launch — Forbidden City rooftop illumination and architectural stagecraft',
          caption: 'Forbidden City rooftop illumination and architectural stagecraft',
          type: 'image',
        },
        {
          src: '/Images/Jiangshan Mansion Global Launch/jiangshan-02-detail.M4V',
          alt: 'Jiangshan Mansion Global Launch — Holographic light animation & launch event video document',
          caption: 'Holographic light animation & launch event video document (UNESCO World Heritage Shenyang Imperial Palace Museum)',
          type: 'video',
          poster: '/Images/Jiangshan Mansion Global Launch/jiangshan-02-detail.jpg',
        },
      ],
      videos: [
        {
          title: 'Jiangshan Mansion Global Launch Event Video (Shenyang Imperial Palace Museum)',
          src: '/Images/Jiangshan Mansion Global Launch/jiangshan-02-detail.M4V',
          poster: '/Images/Jiangshan Mansion Global Launch/jiangshan-02-detail.jpg',
        },
      ],
      metrics: [
        { label: 'Organic Impressions', value: 'Millions' },
        { label: 'Media Outlets', value: '100+' },
        { label: 'Distinguished Guests', value: '1,000+' },
      ],
      overview:
        'Award-winning global launch campaign themed "So Many Splendid Mountains and Rivers" (江山如此多娇), staged at the UNESCO World Heritage Shenyang Imperial Palace Museum.',
      myRole:
        'Marketing Planner. Coordinated concept, vendor selection, stagecraft integration, and regional media blitz.',
      strategyApproach:
        'Pioneered a heritage × technology format that united the solemn grandeur of the Forbidden City\'s Golden Throne Hall with contemporary holographic projection and electric stage design.',
      execution:
        'Partnered with top design teams from Beijing Tushi and Hangzhou Xiehe. The event illuminated ancient Forbidden City rooftops with custom light animation, breaking physical space boundaries to deliver an immersive cultural brand statement.',
      results:
        'Over 1,000 guests and 100+ media units attended. Earned widespread regional coverage, millions of organic impressions, and drove pre-launch lead acquisition ahead of market benchmarks.',
      evidence: [
        {
          caption: 'Holographic projection launch at Shenyang Imperial Palace Museum',
          sourceRef: 'Portfolio PDF Page 18',
          filename: 'jiangshan-01-hero.jpg',
          src: '/Images/Jiangshan Mansion Global Launch/jiangshan-01-hero.jpg',
        },
        {
          caption: 'Forbidden City rooftop illumination and architectural stagecraft',
          sourceRef: 'Portfolio PDF Page 18',
          filename: 'jiangshan-02-detail.jpg',
          src: '/Images/Jiangshan Mansion Global Launch/jiangshan-02-detail.jpg',
        },
      ],
    },
    {
      id: 'shenyang-vanke-yinyue-launch',
      name: 'Shenyang Vanke Yinyue Product Launch',
      chineseName: '万科·胤樾产品发布会',
      city: 'Shenyang',
      company: 'Vanke',
      year: '2024',
      categories: ['Launch Events'],
      level: 'additional',
      primaryImage:
        '/Images/yinyue-launch/yinyue-launch-01.jpg',
      allImages: [
        '/Images/yinyue-launch/yinyue-launch-01.jpg',
        '/Images/yinyue-launch/yinyue-launch-02.jpg',
        '/Images/yinyue-launch/yinyue-launch-03.mp4',
      ],
      carouselImages: [
        {
          src: '/Images/yinyue-launch/yinyue-launch-01.jpg',
          alt: 'Shenyang Vanke Yinyue Product Launch — Flagship experiential product launch ceremony and live media choreography',
          caption:
            'Flagship experiential product launch ceremony and live media choreography',
          type: 'image',
        },
        {
          src: '/Images/yinyue-launch/yinyue-launch-02.jpg',
          alt: 'Shenyang Vanke Yinyue Product Launch — Experiential spatial staging and ceremonial lighting design',
          caption:
            'Experiential spatial staging and ceremonial lighting design',
          type: 'image',
        },
        {
          src: '/Images/yinyue-launch/yinyue-launch-03.mp4',
          alt: 'Shenyang Vanke Yinyue Product Launch — Ceremonial lighting and live launch video document',
          caption:
            'Ceremonial lighting and live launch video document',
          type: 'video',
          poster:
            '/Images/yinyue-launch/yinyue-launch-01.jpg',
        },
      ],
      videos: [
        {
          title: 'Shenyang Vanke Yinyue Product Launch Ceremony Video Document',
          src: '/Images/yinyue-launch/yinyue-launch-03.mp4',
          poster: '/Images/yinyue-launch/yinyue-launch-01.jpg',
        },
      ],
      overview:
        'Experiential product launch and brand activation event for the flagship Shenyang Vanke Yinyue development, showcasing experiential spatial staging and live media choreography.',
      myRole:
        'Brand Partner, Vanke Northeast China. Orchestrated event concept, experiential stagecraft, and media broadcast coordination.',
      strategyApproach:
        'Focused product launch and experiential activation translating Vanke\'s flagship architectural narrative into an immersive ceremonial event.',
      execution:
        'Staged high-impact product launch event and live broadcast distribution across regional marketing channels.',
      evidence: [
        {
          caption:
            'Flagship experiential product launch ceremony and live media choreography',
          sourceRef: 'Portfolio PDF Page 8',
          filename: 'yinyue-launch-01.jpg',
          src: '/Images/yinyue-launch/yinyue-launch-01.jpg',
        },
        {
          caption:
            'Experiential spatial staging and ceremonial lighting design',
          sourceRef: 'Portfolio PDF Page 8',
          filename: 'yinyue-launch-02.jpg',
          src: '/Images/yinyue-launch/yinyue-launch-02.jpg',
        },
      ],
    },
    {
      id: 'community-cultural-ip',
      name: 'Community & Cultural IP Programme',
      chineseName: '融创·社群文化IP',
      city: 'Shenyang',
      company: 'Sunac China',
      year: '2017–2021',
      categories: ['Brand Strategy', 'Content Marketing'],
      level: 'additional',
      primaryImage: '/Images/Community & Cultural IP Programme/community-cultural-ip-01-hero.jpg',
      allImages: ['/Images/Community & Cultural IP Programme/community-cultural-ip-01-hero.jpg'],
      carouselImages: [
        {
          src: '/Images/Community & Cultural IP Programme/community-cultural-ip-01-hero.jpg',
          alt: 'Community & Cultural IP Programme — Owner community brand architecture and experiential activities',
          caption: 'Owner community brand architecture and experiential activity system',
          type: 'image',
        },
      ],
      metrics: [
        { label: 'Annual Community Events', value: '200+' },
        { label: 'City-Level Gatherings', value: '100+' },
        { label: 'Referral Sales Growth', value: '+25%' },
        { label: 'Social Media Rank', value: 'Top 2' },
      ],
      overview:
        'Built and operated the city\'s owner community system and "Happy Home" brand activity programme, transforming real estate marketing from one-off transactional sales to long-term lifecycle customer relationships.',
      backgroundChallenge:
        'Homogeneous developer advertising and high agency acquisition costs required a self-reinforcing, referral-driven community model that established organic trust and ongoing brand loyalty.',
      myRole:
        'Marketing Planner. Led community strategy, event roadmap, and social media brand communications.',
      strategyApproach:
        'Established tiered club structures based on homeowner interests (youth, wellness, culture, arts), activating residents as brand co-creators.',
      execution:
        'Delivered 200+ localized community activities and 100+ citywide flagship gatherings annually, integrating seasonal festivals, masterclasses, and philanthropic initiatives.',
      results:
        'Increased referral-based sales by 25%, reduced customer acquisition costs, and ranked top 2 among peer developers in Shenyang for social engagement.',
      evidence: [
        {
          caption: 'Community activity operations and owner engagement frameworks',
          sourceRef: 'Portfolio PDF Page 20',
          filename: 'community-cultural-ip-01-hero.jpg',
          src: '/Images/Community & Cultural IP Programme/community-cultural-ip-01-hero.jpg',
        },
      ],
    },
    {
      id: 'zhengzhou-content-marketing',
      name: 'Zhengzhou Citywide Content Marketing',
      chineseName: '融创·郑州新媒体营销矩阵',
      city: 'Zhengzhou',
      company: 'Sunac China',
      year: '2021–2022',
      categories: ['Content Marketing'],
      level: 'additional',
      primaryImage: '/Images/Zhengzhou Citywide Content Marketing/zhengzhou-citywide-01-hero.jpg',
      allImages: [
        '/Images/Zhengzhou Citywide Content Marketing/zhengzhou-citywide-01-hero.jpg',
        '/Images/Zhengzhou Citywide Content Marketing/zhengzhou-citywide-02-detail.jpg',
        '/Images/Zhengzhou Citywide Content Marketing/zhengzhou-citywide-03-detail.jpg',
        '/Images/Zhengzhou Citywide Content Marketing/zhengzhou-citywide-04-detail.jpg',
        '/Images/Zhengzhou Citywide Content Marketing/zhengzhou-citywide-05-detail.jpg',
      ],
      carouselImages: [
        {
          src: '/Images/Zhengzhou Citywide Content Marketing/zhengzhou-citywide-01-hero.jpg',
          alt: 'Zhengzhou Citywide Content Marketing — Short-video content matrix',
          caption: 'Citywide short-video content factory & live broadcast operations',
          type: 'image',
        },
        {
          src: '/Images/Zhengzhou Citywide Content Marketing/zhengzhou-citywide-02-detail.jpg',
          alt: 'Zhengzhou Citywide Content Marketing — Live broadcast studio set',
          caption: 'Live broadcast studio workflows and creator matrix',
          type: 'image',
        },
        {
          src: '/Images/Zhengzhou Citywide Content Marketing/zhengzhou-citywide-03-detail.jpg',
          alt: 'Zhengzhou Citywide Content Marketing — Creative video production',
          caption: 'Project-level digital video and customer touchpoint content',
          type: 'image',
        },
        {
          src: '/Images/Zhengzhou Citywide Content Marketing/zhengzhou-citywide-04-detail.jpg',
          alt: 'Zhengzhou Citywide Content Marketing — Audience engagement analytics',
          caption: 'Content attribution dashboards and channel analytics',
          type: 'image',
        },
        {
          src: '/Images/Zhengzhou Citywide Content Marketing/zhengzhou-citywide-05-detail.jpg',
          alt: 'Zhengzhou Citywide Content Marketing — Multi-channel distribution matrix',
          caption: 'Multi-channel distribution network across 10 residential projects',
          type: 'image',
        },
      ],
      metrics: [
        { label: 'Short Videos Produced', value: '1,000+' },
        { label: 'Live Broadcast Sessions', value: '500+' },
        { label: 'Total Impressions', value: '100M+' },
        { label: 'Sales Contribution', value: '1.5%' },
      ],
      overview:
        'Built and scaled a centralized city-level short-video and live-streaming content factory for 10 residential developments in Zhengzhou, pioneering in-house social-selling infrastructure.',
      backgroundChallenge:
        'Faced with fragmented marketing spending and escalating cost-per-lead across third-party channels, the city branch required an agile first-party content system to capture organic buyer interest.',
      myRole:
        'Principal, Marketing Strategy. Built and managed the centralized content team, established production standards, governed live-stream schedules, and tracked attribution KPIs.',
      strategyApproach:
        'Standardized topic ideation, video scripting, and live-streaming playbooks across 10 project teams, training on-site sales consultants as internal creators.',
      execution:
        'Delivered 1,000+ short videos and hosted 500+ live-stream sessions across Douyin (TikTok) and WeChat Channels, systematically monitoring watch duration, inquiry rates, and visit conversions.',
      results:
        'Generated over 100 million total online impressions, contributed 1.5% to citywide sales revenue, and substantially reduced dependence on external media agencies.',
      evidence: [
        {
          caption: 'Short-video content matrix and live-stream operations',
          sourceRef: 'Portfolio PDF Page 22',
          filename: 'zhengzhou-citywide-01-hero.jpg',
          src: '/Images/Zhengzhou Citywide Content Marketing/zhengzhou-citywide-01-hero.jpg',
        },
        {
          caption: 'Live broadcast studio workflows and channel distribution',
          sourceRef: 'Portfolio PDF Page 22',
          filename: 'zhengzhou-citywide-02-detail.jpg',
          src: '/Images/Zhengzhou Citywide Content Marketing/zhengzhou-citywide-02-detail.jpg',
        },
      ],
    },

    /* ================================================================
       LEVEL 03 — DESIGN FOUNDATION
       Includes:
       - Theatre Renovation Design
       - Cuore della città & Minime chiave
       ================================================================ */
    {
      id: 'theatre-renovation-design',
      name: 'Theatre Renovation Design',
      chineseName: '剧场空间改造设计',
      city: 'Bologna',
      company: 'Accademia di Belle Arti di Bologna',
      year: '2016',
      categories: ['Art & Design'],
      level: 'design-foundation',
      primaryImage: '/Images/Theatre Renovation Design/theatre-renovation-01-hero.jpg',
      allImages: [
        '/Images/Theatre Renovation Design/theatre-renovation-01-hero.jpg',
        '/Images/Theatre Renovation Design/theatre-renovation-02-detail.jpg',
      ],
      carouselImages: [
        {
          src: '/Images/Theatre Renovation Design/theatre-renovation-01-hero.jpg',
          alt: 'Theatre Renovation Design — Scenographic spatial modeling and lighting study',
          caption: 'Historical theater renovation spatial modeling and scenographic lighting layout (Bologna)',
          type: 'image',
        },
        {
          src: '/Images/Theatre Renovation Design/theatre-renovation-02-detail.jpg',
          alt: 'Theatre Renovation Design — Architectural staging plans and seating sightlines',
          caption: 'Architectural staging floor plans, acoustic sightlines, and structural transformation',
          type: 'image',
        },
      ],
      metrics: [
        { label: 'Design Scale', value: 'Complete Auditorium' },
        { label: 'Academic Rigor', value: 'MFA Thesis Project' },
        { label: 'Discipline', value: 'Spatial & Acoustic Staging' },
      ],
      overview:
        'Graduate scenography thesis project re-imagining a historic Italian performance hall into a modular, contemporary performance and community exhibition space.',
      backgroundChallenge:
        'Balancing preservation of historical European masonry with the technical demands of contemporary lighting, modular stage mechanics, and flexible audience configurations.',
      myRole:
        'Lead Designer (MFA candidate). Executed spatial analysis, CAD structural drafts, 3D renderings, and physical scale models.',
      strategyApproach:
        'Introduced reversible modular structural frames that celebrate heritage stonework while integrating cutting-edge rigging and acoustic baffles.',
      execution:
        'Developed full CAD floor plans, section diagrams, lighting cue elevations, and physical stagecraft maquettes presented to the academic review panel.',
      results:
        'Awarded highest academic honors; formed the architectural and spatial staging rigor that later guided high-budget developer launch events.',
      evidence: [
        {
          caption: 'Scenographic spatial modeling and lighting study',
          sourceRef: 'Portfolio PDF Page 26',
          filename: 'theatre-renovation-01-hero.jpg',
          src: '/Images/Theatre Renovation Design/theatre-renovation-01-hero.jpg',
        },
        {
          caption: 'Architectural staging plans and structural transformation',
          sourceRef: 'Portfolio PDF Page 27',
          filename: 'theatre-renovation-02-detail.jpg',
          src: '/Images/Theatre Renovation Design/theatre-renovation-02-detail.jpg',
        },
      ],
    },
    {
      id: 'cuore-della-citta',
      name: 'Cuore della città & Minime chiave',
      chineseName: '城市之心与最小关键',
      city: 'Bologna & Venice',
      company: 'Accademia di Belle Arti di Bologna',
      year: '2015',
      categories: ['Art & Design'],
      level: 'design-foundation',
      primaryImage: '/Images/Cuore della città & Minime chiave/Cuore della città & Minime chiave-01-hero.jpg',
      allImages: [
        '/Images/Cuore della città & Minime chiave/Cuore della città & Minime chiave-01-hero.jpg',
      ],
      carouselImages: [
        {
          src: '/Images/Cuore della città & Minime chiave/Cuore della città & Minime chiave-01-hero.jpg',
          alt: 'Cuore della città & Minime chiave — Public square spatial choreography and scenographic installation',
          caption: 'Public square spatial choreography and scenographic installation (Italy)',
          type: 'image',
        },
      ],
      metrics: [
        { label: 'Exhibition Context', value: 'Venice / Bologna Staging' },
        { label: 'Medium', value: 'Spatial Installation' },
        { label: 'Core Theme', value: 'Urban Flow Dynamics' },
      ],
      overview:
        'Urban scenography research installation exploring how micro-spatial interventions ("minime chiave") transform civic vitality in historic Italian city centers.',
      backgroundChallenge:
        'Examining how subtle spatial cues, lighting temperatures, and temporary seating alter public flow patterns without intrusive architectural construction.',
      myRole:
        'Researcher & Scenographer. Developed conceptual narrative, spatial choreography maps, and presentation boards.',
      strategyApproach:
        'Drew upon Italian public space theories to design participatory installations that guide pedestrian pauses, conversations, and social exchange.',
      execution:
        'Synthesized field observations, photographic documentation, and spatial mapping diagrams into comprehensive exhibition boards.',
      results:
        'Exhibited at academic design forums in Bologna and Venice, establishing foundational insights into consumer spatial psychology and experience design.',
      evidence: [
        {
          caption: 'Public square spatial choreography and scenographic installation boards',
          sourceRef: 'Portfolio PDF Page 28',
          filename: 'Cuore della città & Minime chiave-01-hero.jpg',
          src: '/Images/Cuore della città & Minime chiave/Cuore della città & Minime chiave-01-hero.jpg',
        },
      ],
    },
  ] as Project[],

  /* ================================================================
     AI & SKILLS — 5 HYBRID CAPABILITY GROUPS
     01 — MARKETING & BUSINESS STRATEGY
     02 — DATA, ANALYTICS & AI
     03 — DESIGN & CREATIVE TOOLS
     04 — PROFESSIONAL CAPABILITIES
     05 — LANGUAGES
     ================================================================ */
  skillGroups: [
    {
      number: '01',
      name: 'Marketing & Business Strategy',
      subtitle: '9 Years Applied Practice · Fortune Global 500 Experience',
      items: [
        { name: 'Brand Strategy', note: 'Portfolio-level brand architecture & equity governance' },
        { name: 'Go-to-Market Strategy', note: 'Product positioning, launch cadence & pricing strategy' },
        { name: 'Campaign Planning', note: 'Integrated multi-channel campaign choreography' },
        { name: 'Media Strategy & Measurement', note: 'Media mix allocation, digital matrix & attribution' },
        { name: 'Marketing Performance', note: 'Sales enablement, conversion funnel & ROI tracking' },
        { name: 'Stakeholder Management', note: 'Executive reporting, agency governance & review gates' },
        { name: 'Cross-functional Coordination', note: 'Bridging marketing, sales, design & operations' },
      ],
    },
    {
      number: '02',
      name: 'Data, Analytics & AI',
      subtitle: 'Applied Practice & SMU Business AI Development',
      items: [
        { name: 'Marketing Analytics & Media Measurement', category: 'applied', note: 'Campaign attribution, funnel conversion & CPL analytics' },
        { name: 'Data Visualization & Dashboards', category: 'applied', note: 'KPI reporting dashboards & performance monitoring' },
        { name: 'Data-driven Decision-making', category: 'applied', note: 'Quantitative customer insights informing strategy' },
        { name: 'Python', category: 'academic', note: 'Data analysis, statistical workflows & consumer modeling' },
        { name: 'AI-enabled Workflows & Prompt Engineering', category: 'academic', note: 'LLM workflow design, research synthesis & productivity' },
        { name: 'AI-assisted Consumer Research', category: 'academic', note: 'Empirical consumer sentiment & influencer study frameworks' },
        { name: 'Analytical Frameworks', category: 'academic', note: 'Translating quantitative insights into business recommendations' },
      ],
    },
    {
      number: '03',
      name: 'Design & Creative Tools',
      subtitle: 'MFA Scenography & Visual Communication Foundation',
      items: [
        { name: 'Adobe Photoshop', note: 'Visual art direction, campaign graphics & image editing' },
        { name: 'CAD', note: 'Spatial drafting, exhibition layouts & architectural floor plans' },
        { name: '3D Design', note: 'Stagecraft modeling, spatial lighting & scenographic design' },
        { name: 'Visual Communication', note: 'Brand identity systems, executive decks & storytelling' },
      ],
    },
    {
      number: '04',
      name: 'Professional Capabilities',
      subtitle: 'Executive Competencies & Business Leadership',
      items: [
        { name: 'Stakeholder Management', note: 'C-suite presentations, developer leadership & agency direction' },
        { name: 'Cross-functional Collaboration', note: 'Aligning marketing, sales, project engineering & external vendors' },
        { name: 'Business Communication', note: 'Structured executive reporting & clear strategic articulation' },
        { name: 'Strategic Storytelling', note: 'Translating complex product values into compelling consumer narratives' },
        { name: 'Analytical Problem-solving', note: 'Deconstructing market contractions into actionable campaign plans' },
        { name: 'Translating Insights into Business Recommendations', note: 'Grounded commercial actions backed by empirical data' },
      ],
    },
    {
      number: '05',
      name: 'Languages',
      subtitle: 'Verified International Language Capabilities',
      items: [
        { name: 'Mandarin', note: 'Native' },
        { name: 'English', note: 'TOEFL 97' },
        { name: 'Italian', note: 'B2, Siena certificate' },
      ],
    },
  ] as SkillCategoryGroup[],

  languages: [
    { language: 'Mandarin', proficiency: 'Native' },
    { language: 'English', proficiency: 'TOEFL 97' },
    { language: 'Italian', proficiency: 'B2, Siena certificate' },
  ],

  workAuthorization: {
    singapore: 'Internship; available full-time Jan–Jun 2027',
    china: 'Citizen',
  },

  earlierEducation: {
    institution: 'Anshan Normal University',
    degree: 'Bachelor of Arts, Art & Design',
    years: 'Sep 2010 – Jun 2014',
  },

  research: [
    {
      title: 'AI-generated influencers and consumer decision-making',
      venue: 'Asia-Pacific Marketing Academy (APMA) 2026',
      year: '2026',
      location: 'Macau',
      status: 'Accepted presentation',
    },
    {
      title: 'AI-enabled influencers, goals, and real-estate decisions: A multi-method research proposal',
      venue: 'China Marketing International Conference (CMIC) 2026',
      year: '2026',
      location: 'China',
      status: 'Accepted research proposal',
    },
  ],

  aboutStory:
    'I trained in art, design and scenography in China and Italy, then spent nine years turning that eye for space and storytelling into brand and marketing strategy for real estate developers across Shenyang, Zhengzhou, Tianjin, Beijing and Suzhou. I am now studying Business AI at Singapore Management University, where my research looks at how AI-generated influencers shape consumer decisions.',
};
