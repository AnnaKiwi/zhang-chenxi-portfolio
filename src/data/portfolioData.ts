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

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface ResearchItem {
  title: string;
  venue: string;
  year: string;
  location: string;
  proposalType?: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Zhang Chenxi',
    positioning:
      'Brand & marketing strategist turned Business AI candidate: 9 years leading brand, go-to-market and content strategy at four Fortune Global 500 real estate developers in China, now applying AI to marketing and consumer decision-making.',
    currentStatus:
      'Master of Science in Business AI candidate at Singapore Management University (SMU), Lee Kong Chian School of Business.',
    email: 'cx.zhang.2026@mbai.smu.edu.sg',
    linkedinPlaceholder: 'https://linkedin.com/in/zhang-chenxi-placeholder',
    cvUrl: '/cv.pdf',
    portraitUrl: 'https://zhang-chenxi-portfolio.vercel.app/portrait/portraitJPG.JPG',
  },

  snapshotFigures: [
    {
      metric: '9 years',
      detail: 'in brand & marketing strategy',
    },
    {
      metric: '4 Fortune Global 500',
      detail: 'developers: Vanke, China Jinmao, Longfor, Sunac',
    },
    {
      metric: '41 projects',
      detail: 'under regional brand governance',
    },
    {
      metric: 'RMB 22B+',
      detail: 'in sales supported (2024–2025)',
    },
    {
      metric: 'RMB 1B',
      detail: 'opening-day sales (Qingyun Que launch)',
    },
  ],

  capabilityProgression: [
    { city: 'Bologna', capability: 'Design Foundation' },
    { city: 'Shenyang', capability: 'Brand & Consumer Engagement' },
    { city: 'Zhengzhou', capability: 'City-level Strategy' },
    { city: 'Tianjin & Beijing', capability: 'Leadership & Digital Growth' },
    { city: 'Suzhou', capability: 'Product & Go-to-Market Strategy' },
    { city: 'Northeast China', capability: 'Regional Brand Governance' },
    { city: 'Singapore', capability: 'Business AI' },
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
        'Owned end-to-end positioning, value architecture and go-to-market strategy for 10 residential projects across the city; led cross-functional teams through feasibility, launch and sales stages, supporting RMB 6 billion in annual contracted sales.',
        'Oversaw city-level marketing governance, budget control and team performance management; standardized project review gates, creative quality control and vendor management processes.',
      ],
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
        'Led a 20-person marketing planning team across 10+ residential projects in Tianjin and Tangshan; owned full brand and marketing communications for a city portfolio delivering RMB 6 billion (~S$1.1 billion) in annual sales.',
        'Built the city\'s owned "business opportunity" new-media platform as a first-party digital channel; sourced ~1.5% of total company sales (~RMB 90 million / ~S$16 million) at a materially lower cost-per-lead than paid media and agency channels.',
        'Led the end-to-end launch campaign for the Qingyun Que flagship project across short-video, owned social channels and tiered creator partnerships; delivered RMB 1 billion (~S$180 million) in opening-day sales, outperforming market benchmarks amid an industry downturn.',
        'Oversaw team management, performance evaluation and budget governance; standardized regional marketing workflows, review gates and brand guidelines.',
        'Group HQ Enablement (Role B): Designed and built the group\'s first end-to-end social media customer acquisition framework amid the industry\'s digital transformation; developed standardized playbooks, channel mix guidelines and best-practice cases rolled out to all regional teams across the group.',
      ],
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
        'Led end-to-end pre-launch strategy and execution for a landmark residential project; delivered RMB 820 million in opening sales, ranking #1 in Suzhou by sales volume, GFA, average price and total transaction value in its launch month, against a broader market downturn.',
        'Oversaw full-lifecycle project planning and milestone governance from feasibility to launch; standardized planning workflows, review gates and delivery templates, ensuring on-schedule delivery of all key launch milestones.',
        'Built KPI dashboards for agency and media partner evaluation, tracking cost-per-lead and optimizing media and vendor mix.',
      ],
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
        'Owned end-to-end regional brand strategy and go-to-market campaigns for 41 residential and commercial projects across 4 cities, aligning brand positioning with local market insights and sales targets and supporting RMB 22 billion in total sales in 2024–2025.',
        'Led paid, earned and owned media mix optimization with data-driven performance tracking; built a full-channel media matrix covering mainstream outlets, official accounts and KOL networks, and spearheaded flagship product launch events, growing regional brand awareness year-over-year.',
        'Standardized regional brand governance, visual identity and communication guidelines across all 41 projects; established a shared media resource library to improve cross-city team efficiency and reduce agency overhead.',
      ],
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

  projects: [
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
      primaryImage: '/images/qingyunque-1.jpg',
      allImages: ['/images/qingyunque-1.jpg', '/images/qingyunque-2.jpg', '/images/qingyunque-3.jpg'],
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
          caption: 'Demonstration garden architectural facade and rapid delivery milestones',
          sourceRef: 'Portfolio PDF Page 10',
          filename: 'qingyunque-1.jpg',
        },
        {
          caption: 'Customer segmentation analysis, school district positioning and TikTok matrix',
          sourceRef: 'Portfolio PDF Page 11',
          filename: 'qingyunque-2.jpg',
        },
        {
          caption: 'Cloud Palace complete VI visual identity and brand collaterals',
          sourceRef: 'Portfolio PDF Page 12',
          filename: 'qingyunque-3.jpg',
        },
      ],
    },
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
      primaryImage: 'https://zhang-chenxi-portfolio.vercel.app/jinmao/Jinmao-01-hero.jpg',
      allImages: ['https://zhang-chenxi-portfolio.vercel.app/jinmao/Jinmao-01-hero.jpg', 'https://zhang-chenxi-portfolio.vercel.app/jinmao/Jinmao-02-architecture.jpg'],
      carouselImages: [
        {
          src: 'https://zhang-chenxi-portfolio.vercel.app/jinmao/Jinmao-01-hero.jpg',
          alt: 'Suzhou Jinmao Mansion — Landmark demonstration area and architectural entrance',
          caption: 'Landmark residential demonstration area & architectural entrance (Suzhou High-tech Zone)',
        },
        {
          src: 'https://zhang-chenxi-portfolio.vercel.app/jinmao/Jinmao-02-architecture.jpg',
          alt: 'Suzhou Jinmao Mansion — Demonstration area architecture and spatial design specifications',
          caption: 'Demonstration area architectural view and spatial design specifications',
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
      evidence: [],
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
      primaryImage: '/images/yinyue-1.jpg',
      allImages: ['/images/yinyue-1.jpg', '/images/yinyue-2.jpg', '/images/yinyue-3.jpg'],
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
          caption: 'Oriental garden demonstration area and Huanggu district spatial analysis',
          sourceRef: 'Portfolio PDF Page 7',
          filename: 'yinyue-1.jpg',
        },
        {
          caption: 'Strategic approaches and Chinese real estate evolutionary positioning',
          sourceRef: 'Portfolio PDF Page 8',
          filename: 'yinyue-2.jpg',
        },
        {
          caption: 'Destination-scale ice-screen holographic projection launch spectacle',
          sourceRef: 'Portfolio PDF Page 14, 15, 17',
          filename: 'yinyue-3.jpg',
        },
      ],
    },
    {
      id: 'jiangshan-mansion',
      name: 'Jiangshan Mansion Global Launch',
      chineseName: '融创·江山府',
      city: 'Shenyang',
      company: 'Sunac China',
      year: '2020',
      categories: ['Launch Events'],
      level: 'additional',
      primaryImage: '/images/jiangshan-1.jpg',
      allImages: ['/images/jiangshan-1.jpg', '/images/jiangshan-2.jpg'],
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
          filename: 'jiangshan-1.jpg',
        },
        {
          caption: 'Forbidden City rooftop illumination and architectural stagecraft',
          sourceRef: 'Portfolio PDF Page 18',
          filename: 'jiangshan-2.jpg',
        },
      ],
    },
    {
      id: 'shengjing-chenyuan',
      name: 'Shengjing Chen Yuan Product Launch',
      chineseName: '融创·盛京宸院',
      city: 'Shenyang',
      company: 'Sunac China',
      year: '2019',
      categories: ['Launch Events'],
      level: 'additional',
      primaryImage: '/images/chenyuan-1.jpg',
      allImages: ['/images/chenyuan-1.jpg', '/images/chenyuan-2.jpg'],
      metrics: [
        { label: 'Launch Day Units Sold', value: '329 Units' },
        { label: 'Sell-Through Rate', value: '93%' },
        { label: 'Status', value: '2019 Sales Legend' },
      ],
      overview:
        'Product launch event themed "A Tribute to China\'s Essence: Unveiling the Majesty of Shengjing" hosted at the landmark Shengjing Grand Theatre.',
      myRole:
        'Marketing Planner. Designed storytelling narrative, video production, and holographic corridor experience.',
      strategyApproach:
        'Celebrated Shengjing\'s historical memory through modern Chinese-style product aesthetics, generating citywide buzz through experiential theater staging.',
      execution:
        'Produced the "Shengjing in a Minute" film capturing the city\'s three iconic daily timeframes (Chen, Shen, and Wu Time). Debuted Shenyang\'s first holographic corridor show, immersing 400 key guests.',
      results:
        'Sold 329 units on opening day with a 93% sell-through rate, cementing the project as Shenyang\'s 2019 sales benchmark.',
      evidence: [
        {
          caption: 'Shengjing Grand Theatre stage design and executive presentation',
          sourceRef: 'Portfolio PDF Page 18',
          filename: 'chenyuan-1.jpg',
        },
        {
          caption: 'Holographic corridor entrance and urban landmark tribute video',
          sourceRef: 'Portfolio PDF Page 18',
          filename: 'chenyuan-2.jpg',
        },
      ],
    },
    {
      id: 'community-cultural-ip',
      name: 'Community & Cultural IP Programme',
      city: 'Shenyang',
      company: 'Sunac China',
      year: '2018–2020',
      categories: ['Content Marketing'],
      level: 'additional',
      primaryImage: '/images/community-1.jpg',
      allImages: ['/images/community-1.jpg', '/images/community-2.jpg'],
      metrics: [
        { label: 'Annual Community Events', value: '200+' },
        { label: 'City-Level Activities', value: '100+' },
        { label: 'Referral Sales Growth', value: '+25%' },
        { label: 'Homeowner Reach', value: '8,000+' },
      ],
      overview:
        'City-wide community engagement and cultural IP operations ("Happy Home"), operating 44 homeowner communities across 10 residential projects.',
      myRole:
        'Marketing Planner & Community Lead. Built homeowner community system from scratch, operated official social media channels, and led cultural co-creation.',
      strategyApproach:
        'Cultivated customer segmentation and resident co-governance to strengthen emotional belonging and drive authentic referral-based sales.',
      execution:
        'Orchestrated multi-tier flagship programs: "Walk for the Future" (1,400 owners, 12M steps for charity), "Sea Shell Plan" youth swimming, Homeowner Basketball League, and "Maple Leaf Plan" health checkups for 1,000+ seniors. Pioneered "Walking Library" with Jiu Wu Culture City and Liaoning TV Spring Festival collaborations.',
      results:
        'Increased referral-based sales by 25%. Managed 6 official "Happiness+" WeChat accounts with 3,000+ homeowner connections, ranking top 2 among developers for engagement.',
      evidence: [
        {
          caption: 'Community sports leagues, charity walks and family engagement programs',
          sourceRef: 'Portfolio PDF Page 19',
          filename: 'community-1.jpg',
        },
        {
          caption: 'Walking Library cultural IP launch and Liaoning TV Spring Festival gifts',
          sourceRef: 'Portfolio PDF Page 20',
          filename: 'community-2.jpg',
        },
      ],
    },
    {
      id: 'zhengzhou-content-marketing',
      name: 'Zhengzhou Citywide Content Marketing',
      city: 'Zhengzhou',
      company: 'Sunac China',
      year: '2021',
      categories: ['Content Marketing'],
      level: 'additional',
      primaryImage: '/images/zhengzhou-1.jpg',
      allImages: ['/images/zhengzhou-1.jpg', '/images/zhengzhou-2.jpg', '/images/zhengzhou-3.jpg'],
      metrics: [
        { label: 'Zhihu Topic Heat', value: '32.67M+' },
        { label: 'TikTok Topic Views', value: '3.72M+ (5 Days)' },
        { label: 'Award', value: 'Double 11 Marketing Award' },
      ],
      overview:
        'Integrated citywide marketing, cross-industry brand partnerships, and new media operations across 10 residential projects in Zhengzhou, supporting RMB 6 billion in annual contracted sales.',
      myRole:
        'Principal, Marketing Strategy (City Level). Unified multi-project communication, standardized review gates, and led digital media innovation.',
      strategyApproach:
        'Constructed unified citywide messaging across diverse project categories, integrating viral digital content, green-screen livestreaming, and national brand partnerships.',
      execution:
        'Executed campaigns including the "New Youth Microfilm", June Hot Property Festival (City Live Room with 2.274M+ views), Ping An Insurance & Zhihu cross-industry collaboration (32.67M+ topic heat), and the Double 11 TikTok campaign #BeautifulDreamsZheng11Realized with Freshippo and Leju Henan.',
      results:
        'Achieved 3.72M+ TikTok views in 5 days, trended twice on Zhihu, and earned the regional Double 11 Event Marketing Award.',
      evidence: [
        {
          caption: 'Citywide integrated campaign calendar and Double 11 award recognition',
          sourceRef: 'Portfolio PDF Page 21',
          filename: 'zhengzhou-1.jpg',
        },
        {
          caption: 'Hot Property Festival and live broadcast studio operations',
          sourceRef: 'Portfolio PDF Page 22',
          filename: 'zhengzhou-2.jpg',
        },
        {
          caption: 'Zhihu cross-industry collaboration and TikTok hashtag campaign',
          sourceRef: 'Portfolio PDF Page 23 & 25',
          filename: 'zhengzhou-3.jpg',
        },
      ],
    },
    {
      id: 'theatre-renovation-design',
      name: 'Theatre Renovation Design',
      city: 'Italy (Academic)',
      company: 'Accademia di Belle Arti di Bologna',
      year: '2014–2017',
      categories: ['Art & Design'],
      level: 'design-foundation',
      primaryImage: '/images/theatre-1.jpg',
      allImages: ['/images/theatre-1.jpg', '/images/theatre-2.jpg'],
      overview:
        'Scenographic and architectural renovation proposal for an urban theatre complex in mountainous Benxi, investigating geometric decomposition, structural envelope design, and public circulation.',
      myRole:
        'MFA Candidate in Scenography & Staging. Authored spatial analysis, conceptual drawings, 3D models, and circulation diagrams.',
      strategyApproach:
        'Employed an irregular triangular glass collage facade inspired by the highest peak of Pingdingshan, allowing public pedestrian access directly onto the green rooftop.',
      execution:
        'Synthesized structural frameworks with 4D cinema halls, exhibition galleries, acoustic treatments, and security dispersal routes for heavy traffic periods.',
      evidence: [
        {
          caption: 'Mountainous location analysis, structural origin and facade design concepts',
          sourceRef: 'Portfolio PDF Page 26',
          filename: 'theatre-1.jpg',
        },
        {
          caption: 'Architectural scale model, interior functional analysis and circulation plans',
          sourceRef: 'Portfolio PDF Page 27',
          filename: 'theatre-2.jpg',
        },
      ],
    },
    {
      id: 'cuore-della-citta',
      name: 'Cuore della città & Minime chiave',
      city: 'Italy (Academic)',
      company: 'Accademia di Belle Arti di Bologna',
      year: '2014–2017',
      categories: ['Art & Design'],
      level: 'design-foundation',
      primaryImage: '/images/cuore-1.jpg',
      allImages: ['/images/cuore-1.jpg', '/images/minime-1.jpg'],
      overview:
        'Dual academic scenography and spatial studies exploring ecological open space planning and minimalist interior scenography.',
      myRole:
        'MFA Candidate. Developed hand-rendered watercolor master plans, spatial layout diagrams, and material contrast studies.',
      strategyApproach:
        'Cuore della città ("Heart of the City"): Vibrant, sustainable public park protecting 80% natural earth and native flora with circular water boardwalks and stargazing plazas. Minime chiave: Explored monochrome spatial depth, linear illumination, and mirrors.',
      execution:
        'Produced general site master plans, aquatic vegetation integration schemes, and material studies balancing timber warmth against brick and reflective glass.',
      evidence: [
        {
          caption: 'Cuore della città master plan, pond boardwalk design, and ecological zoning',
          sourceRef: 'Portfolio PDF Page 28',
          filename: 'cuore-1.jpg',
        },
        {
          caption: 'Minime chiave interior scenography, linear lighting and chromatic studies',
          sourceRef: 'Portfolio PDF Page 29',
          filename: 'minime-1.jpg',
        },
      ],
    },
  ] as Project[],

  skills: {
    marketing: [
      'Brand strategy',
      'Go-to-market',
      'Positioning',
      'Launch events',
      'Media mix optimization',
      'KOL / creator partnerships',
      'Community operations',
    ],
    data: [
      'Excel',
      'Python',
      'KPI dashboards',
      'Campaign attribution',
      'Media performance analytics',
      'Social listening',
    ],
    ai: [
      'ChatGPT',
      'Claude',
      'Prompt engineering',
      'LLM workflow design',
      'AI-assisted consumer research',
      'AI content generation',
      'Google AI Studio',
    ],
    design: [
      'Adobe Photoshop',
      'CAD',
      '3D design',
    ],
  },

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
