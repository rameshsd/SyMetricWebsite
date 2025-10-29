

import type { NavItem, Solution, Industry, LeadershipMember, Customer, Resource, TeamMember, FeatureGridItem, LatestNewsItem, CustomerSuccessStory, WhyChooseUsFeature, CompanyInfo } from '@/lib/types';
import {
  FlaskConical,
  FileText,
  Database,
  ShieldCheck,
  Briefcase,
  Hospital,
  Building,
  TestTube,
  Beaker,
  HeartPulse,
  BrainCircuit,
  Zap,
  TrendingUp,
  Users,
  PieChart,
  Repeat,
  ClipboardList,
  Search,
  Combine,
  BarChart,
  Rocket,
  Compass,
} from 'lucide-react';
import { CloudErpIcon, FinancialManagementIcon, SpendManagementIcon, SupplyChainIcon, HumanCapitalIcon, CustomerExperienceIcon } from '@/components/icons/feature-icons';

export const navItems: NavItem[] = [
    { 
        name: 'Products and Services', 
        href: '/solutions',
        subItems: [
            { 
                name: 'Products', 
                href: '/solutions',
                subItems: [
                    { name: 'Clinical Trial Platform', href: '/solutions/clinical-trial-platform' },
                    { name: 'IRT/IWRS', href: '/solutions/irt-iwrs' },
                    { name: 'EDC', href: '/solutions/edc' },
                    { name: 'CTM', href: '/solutions/ctm' },
                    { name: 'Trial Analytics', href: '/solutions/trial-analytics' },
                ]
            },
            { 
                name: 'Services', 
                href: '/services',
                subItems: [
                    { name: 'Clinical Data Management', href: '/services/clinical-data-management', description: 'Comprehensive data management services to ensure data quality and integrity.' },
                    { name: 'Project Management', href: '/services/project-management', description: 'Expert project management to keep your trials on time and on budget.' },
                    { name: 'Data Migration', href: '/services/data-migration', description: 'Seamless and secure migration of your clinical trial data to our platform.' },
                    { name: 'Training', href: '/services/training', description: 'Customized training programs for your team to maximize platform utilization.' },
                    { name: 'Support', href: '/services/support', description: 'Dedicated technical and operational support available 24/7.' },
                ]
            },
        ]
    },
    { name: 'Industries', href: '/industries' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export const solutions: Solution[] = [
  {
    id: 'ctp',
    name: 'CTP (Clinical Trial Platform)',
    slug: 'clinical-trial-platform',
    hero: {
      title: 'SyMetric Clinical Trial Platform',
      subtitle: 'An end-to-end, cloud-based platform for Clinical Trials with fully modular tools that allow you to pick and configure them according to your needs.'
    },
    description: 'An integrated platform for seamless clinical trial management from start to finish.',
    longDescription: 'Our Clinical Trial Platform (CTP) provides a unified environment for managing all aspects of your clinical trials. From protocol development to final reporting, CTP streamlines workflows, enhances collaboration, and ensures data integrity.',
    icon: FlaskConical,
    image: 'solution-ctp',
    backgroundColor: 'bg-[#f5f3ff]'
  },
  {
    id: 'irt-iwrs',
    name: 'IRT/IWRS',
    slug: 'irt-iwrs',
    hero: {
      title: 'IRT/IWRS',
      subtitle: 'Comprehensive solution for randomization and trial supply management. Developed with years of strong industry expertise to deliver against the most complex Clinical Trial designs.'
    },
    description: 'Comprehensive solution for randomization and trial supply management.',
    longDescription: 'Developed with years of strong industry expertise and tested to deliver against the most complex Clinical Trial designs, our IRT/IWRS solution is the most comprehensive one in the market today.',
    icon: Repeat,
    image: 'irt-iwrs-image',
    backgroundColor: 'bg-[#ebf8ff]',
  },
  {
    id: 'edc',
    name: 'EDC',
    slug: 'edc',
    hero: {
        title: 'Electronic Data Capture (EDC)',
        subtitle: 'Our innovative Electronic Data Capture (EDC) tool with its agile methodologies allows users to set up and configure study databases in no time. Users can also design Case Report Forms (CRFs) with programmed edit checks and collect high-quality, accurate clinical data along with extracting submission-ready standardized datasets from an easy-to-use web-based graphical user interface.'
    },
    description: 'Tools to simplify and automate data flow and validation in clinical trials.',
    longDescription: 'The Electronic Data Capture solution includes well-designed tools that transform the Data Management processes and simplify and automate the Data flow and validation of Data in Clinical Trials.',
    icon: Database,
    image: 'edc-image',
    backgroundColor: 'bg-sky-50',
    capabilities: [
      {
        id: 'ecrf-management',
        title: 'eCRF Management',
        description: 'Success of a clinical trial depends largely on well-designed Case Report Forms. Here’s where our eCRF Management module comes in handy by helping design CRFs. It can also program real-time validation checks to operate them efficiently, enabling collection of complete, reliable, and accurate data in line with regulatory standards.',
        imageId: 'edc-ecrf'
      },
      {
        id: 'sdv',
        title: 'Source Data Verification',
        description: 'A key aspect of clinical data management is the Source Data Verification (SDV) process which ensures data quality and conformance to source data. This selective feature focuses on verifying critical study data points instead of 100% SDV for all patients — saving time, effort, and costs while maintaining scientific and ethical integrity of the trial.',
        imageId: 'edc-sdv'
      },
      {
        id: 'query-management',
        title: 'Query Management',
        description: 'Our Discrepancy Management tool helps investigation sites identify and manage data aberrations to ensure that the system captures clean and consistent data. For interim and final comprehensive analysis, the data export feature of our tool enables standard and customizable dataset exports in .CSV and .XLS formats at any time even during the study run.',
        imageId: 'edc-query'
      },
      {
        id: 'ae-sae-reporting',
        title: 'AE/SAE Reporting',
        description: 'As patient safety is the fundamental principle that lies at the core of every clinical trial, it is important that the AE/SAEs are timely reported to stakeholders and regulatory bodies and handled appropriately. Our feature that comes with automatic notifications triggered via email keeps users informed on AE/SAE reporting actions.',
        imageId: 'edc-reporting'
      },
      {
        id: 'medical-coding',
        title: 'Medical Coding',
        description: 'Our built-in coding interface along with real-time data available from our EDC system will help you streamline your coding process. Also, our integrated coding mechanism uses standard medical dictionaries like MedDRA and WHO-Drug Global and can guarantee precise and consistent coding of verbatim terms to harmonized and standard codes.',
        imageId: 'edc-coding'
      }
    ]
  },
  {
    id: 'ctm',
    name: 'CTM',
    slug: 'ctm',
    hero: {
        title: 'Clinical Trial Management (CTM)',
        subtitle: 'Maintain global objects including repositories of Trial Sites, Labs, Organizations, Global Data Libraries, and more.'
    },
    description: 'Repositories to maintain global objects like trial sites, labs, and data libraries.',
    longDescription: 'The Clinical Trial Master provides various repositories to maintain Global objects, including a repository of Trial Sites, Labs, Organizations, Global Data Libraries, and more.',
    icon: ClipboardList,
    image: 'ctm-image',
    backgroundColor: 'bg-amber-50'
  },
  {
    id: 'trial-analytics',
    name: 'Trial Analytics',
    slug: 'trial-analytics',
    hero: {
        title: 'Advanced Trial Analytics',
        subtitle: 'Unlock powerful insights from your trial data with advanced analytics, visualizations, and predictive modeling to make informed decisions faster.'
    },
    description: 'Unlock insights with advanced analytics, visualizations, and predictive modeling.',
    longDescription: 'Unlock powerful insights from your trial data with advanced analytics, visualizations, and predictive modeling to make informed decisions faster.',
    icon: PieChart,
    image: 'trial-analytics-image',
    backgroundColor: 'bg-violet-50'
  },
  {
    id: 'etmf',
    name: 'eTMF (Electronic Trial Master File)',
    slug: 'electronic-trial-master-file',
    hero: {
      title: 'Electronic Trial Master File (eTMF)',
      subtitle: 'Digitize and manage your trial master file with compliance and ease. Our solution offers a secure, compliant, and intuitive way to manage your trial documentation.'
    },
    description: 'Digitize and manage your trial master file with compliance and ease.',
    longDescription: 'SyMetric’s eTMF solution offers a secure, compliant, and intuitive way to manage your trial documentation. With features like automated indexing, quality checks, and real-time collaboration, it ensures your TMF is always audit-ready.',
    icon: FileText,
    image: 'solution-etmf',
    backgroundColor: 'bg-rose-50'
  },
  {
    id: 'rc',
    name: 'Regulatory Compliance',
    slug: 'regulatory-compliance',
    hero: {
        title: 'Regulatory Compliance Suite',
        subtitle: 'Navigate complex regulatory landscapes with our expert solutions. Stay ahead of changes and ensure compliance with global standards.'
    },
    description: 'Navigate complex regulatory landscapes with our expert solutions.',
    longDescription: 'Stay ahead of regulatory changes and ensure compliance with global standards. Our solutions help you manage submissions, track commitments, and maintain a state of continuous compliance throughout the product lifecycle.',
    icon: ShieldCheck,
    image: 'solution-rc',
    backgroundColor: 'bg-fuchsia-50'
  },
  {
    id: 'sm',
    name: 'Site Management',
    slug: 'site-management',
    hero: {
        title: 'Clinical Site Management',
        subtitle: 'Empower clinical sites with tools for efficient trial execution, from patient recruitment to financial management and remote monitoring.'
    },
    description: 'Empower clinical sites with tools for efficient trial execution and monitoring.',
    longDescription: 'Our Site Management solutions provide clinical research sites with the tools they need to operate efficiently. From patient recruitment and scheduling to financial management and remote monitoring, we help sites focus on what matters most: patient care.',
    icon: Briefcase,
    image: 'solution-sm',
    backgroundColor: 'bg-emerald-50'
  },
];

export const industries: Industry[] = [
  {
    name: 'Pharma',
    description: 'Accelerating drug development for large pharmaceutical companies.',
    icon: Beaker,
  },
  {
    name: 'Biotech',
    description: 'Innovative solutions for agile and fast-growing biotech firms.',
    icon: TestTube,
  },
  {
    name: 'Hospitals',
    description: 'Streamlining clinical research within healthcare provider settings.',
    icon: Hospital,
  },
  {
    name: 'CROs',
    description: 'Enhancing efficiency and collaboration for Contract Research Organizations.',
    icon: Building,
  },
  {
    name: 'Research Institutes',
    description: 'Supporting academic and independent research with powerful data tools.',
    icon: HeartPulse,
  },
];

export const leadership: LeadershipMember[] = [
  {
    id: 'uma-janapareddy',
    name: 'Uma Janapareddy',
    role: 'Founder and Managing Director',
    bio: [
      'An entrepreneur with over 20 years experience in establishing and managing multiple business entities in various fields such as Life Sciences, Healthcare, and Social Enterprise, Uma started SyMetric in 2012. She plays a seminal role in all functions — from strategic decision-making to business operations. Under her leadership, SyMetric has expanded to US, Europe, and Latin America besides forging strong partnerships with Pharma Companies, CROs, and Technology Companies such as Microsoft, SAP, Tenthpin Management Consultants, and MINT Medical. She has been at the helm of Ladies Circle India (LCI) and is a member of several reputed organizations — Anthroposophical Medical Society of India, HIMSS India Chapter, 5HT Germany, NASSCOM, and SAP Industry Consortium for Life sciences.'
    ],
    imageId: 'leadership-1'
  },
  {
    id: 'raghuram-janapareddy',
    name: 'Raghuram Janapareddy',
    role: 'Technical Advisor',
    bio: [
      'A seasoned professional with over 34 years of experience in information technology and multiple industry domains, Raghuram is currently the Managing Director, India of Tenthpin Management Consultants. As part of Tenthpin’s global initiative, he is leading the efforts towards establishing a Life Sciences Innovation Centre in India. Enrolled in the Roster of Experts of WHO Digital Health Technical Advisory Group (DHTAG), he works very closely with the healthcare ecosystem in India. He has worked at SAP for nearly 17 years in multiple areas — Supply Chain-, Project-, Global Delivery-, Strategic Vendor-, Practice-, Product-, and Process Management. His guidance is integral to designing products, processes, and delivery models for enterprises in the Life Sciences and healthcare sector.'
    ],
    imageId: 'leadership-2'
  },
  {
    id: 'ramesh-kumar-t',
    name: 'Ramesh Kumar T',
    role: 'Business Strategist and Mentor',
    bio: [
      'A strategist known for digital dexterity and business acumen, Ramesh fits squarely into SyMetric’s vision. His entrepreneurial experience in the Software Industry extends to over 35 years. He has also made significant contribution to a large-scale Technology company. Business mentorship comes naturally to him, given his background as an entrepreneur, and he helps associates achieve success and growth.'
    ],
    imageId: 'leadership-4'
  },
  {
    id: 'sai-siddharth',
    name: 'Sai Siddharth',
    role: 'Director',
    bio: [
      'Sai Siddharth is a leading policy strategist in the field of energy, environment, and climate change. He brings to the table innovative perspectives.',
      'He is a Programme Associate at SED Fund, responsible for implementing and refining the grantmaking and program strategy and managing relationships with partners.',
      'Sai previously was at J-PAL South Asia, where he led the Environment, Energy, and Climate Change sector. He was also interim lead for the financial inclusion sector and worked on the Cash Transfers for Child Health Initiative at J-PAL South Asia. He also worked at the National Health Authority in India, where he helped set up its Innovation Unit, and at the Government of Maharashtra (through a fellowship at the University of Chicago) on a water conservation program in the state.',
      'Sai holds a Master’s degree in Public Administration from Columbia University and a Bachelor’s degree in Mechanical Engineering from RVCE in Bangalore.'
    ],
    imageId: 'leadership-6'
  },
  {
    id: 'pranav-aditya',
    name: 'Pranav Aditya',
    role: 'Director',
    bio: [
      'Pranav brings SyMetric his deep expertise in the user interface. He ensures the technical feasibility of designs for superior product development and is responsible for UI across product suites. He is responsible for expanding and diversifying workflows across systems to enhance quality and efficiency.',
      'Pranav is also an Audio Engineer with the experience of having engineered multiple covers and client compositions with a Recording time limit of 6 hours per song. Well-versed with client requests and their sheer energy ensuring their performance is not hindered.',
      'Well-versed with – DAWs: Protools, Logic Pro X, Audio Cleaning software: RX 9, Avid S3, Analog boards, routing, and signal flow.',
      'He is accomplished with tone matching, tonal balance, understanding compression + ADSR and Depth, process, and need for mastering, and Ear Training.',
      'He is continuously developing more efficient workflows with every recording and improving client interactions and interactions with his/her Environment.'
    ],
    imageId: 'leadership-5'
  }
];


export const customers: Customer[] = [
    { name: 'Embraer', logo: 'logo-embraer', story: '"The SyMetric Platform is the backbone of our digital transformation."', link: '#' },
    { name: 'Chiesi', logo: 'logo-chiesi', story: '"We achieved unprecedented efficiency gains with SyMetric."', link: '#' },
    { name: 'SA Power Networks', logo: 'logo-sa-power', story: '"A powerful and intuitive platform for our complex needs."', link: '#' },
    { name: 'Christ Juweliere', logo: 'logo-christ', story: '"SyMetric helped us unify our data and unlock new insights."', link: '#' },
];

export const resources: Resource[] = [
  {
    id: '1',
    slug: 'decentralized-clinical-trials',
    title: 'The Rise of Decentralized Clinical Trials (DCTs)',
    category: 'Industry Trends',
    date: '2023-10-26',
    image: 'resource-1',
    excerpt: 'Explore how technology is enabling a shift towards more patient-centric trial models.'
  },
  {
    id: '2',
    slug: 'ai-in-drug-discovery',
    title: 'AI and Machine Learning in Drug Discovery',
    category: 'Technology',
    date: '2023-10-20',
    image: 'resource-2',
    excerpt: 'A look at how artificial intelligence is accelerating the pace of pharmaceutical innovation.'
  },
  {
    id: '3',
    slug: 'etmf-best-practices',
    title: 'eTMF Best Practices for a Seamless Audit',
    category: 'Case Study',
    date: '2023-10-15',
    image: 'resource-3',
    excerpt: 'Learn how Apex Clinical leveraged SyMetric\'s eTMF to pass their regulatory audit with flying colors.'
  },
    {
    id: '4',
    slug: 'patient-centricity-in-trials',
    title: 'Improving Patient-Centricity in Clinical Trials',
    category: 'Patient Engagement',
    date: '2023-10-10',
    image: 'resource-4',
    excerpt: 'Strategies and tools for making clinical trials more accessible and friendly for participants.'
  }
]

export const timeline = [
  { year: '2015', event: 'SyMetric Systems founded with a vision to digitize clinical research.' },
  { year: '2017', event: 'Launch of our flagship Clinical Trial Platform (CTP).' },
  { year: '2019', event: 'Introduction of the compliant eTMF solution.' },
  { year: '2021', event: 'Expanded into international markets, serving clients in Europe and Asia.' },
  { year: '2023', event: 'Reached 100+ enterprise customers and launched AI-powered analytics.' },
];

export const heroCarouselItems = [
  {
    id: 1,
    title: 'Unlock the Power of AI in Clinical Research',
    subtitle: 'SyMetric\'s intelligent platform streamlines every phase of your trial, from design to submission.',
    imageId: 'hero-carousel-1',
    cta1: { text: 'Discover AI Solutions', link: '/solutions' },
    cta2: { text: 'Request a Demo', link: '/contact' }
  },
  {
    id: 2,
    title: 'Seamless eTMF for Ultimate Compliance',
    subtitle: 'Ensure your trial documentation is always complete, compliant, and inspection-ready.',
    imageId: 'hero-carousel-2',
    cta1: { text: 'Explore eTMF', link: '/solutions/electronic-trial-master-file' },
    cta2: { text: 'Get Started', link: '/contact' }
  },
  {
    id: 3,
    title: 'Accelerate Trials with Real-World Data',
    subtitle: 'Leverage our integrated data solutions to gain deeper insights and make faster decisions.',
    imageId: 'hero-carousel-3',
    cta1: { text: 'View Data Solutions', link: '/solutions/clinical-data-management' },
    cta2: { text: 'Talk to an Expert', link: '/contact' }
  }
];

export const growthTimeline = [
  {
    year: '2022',
    events: [
      'Integration with Healthcare Data Lake powered by SAP CP',
      'Integration with SAP Clinical Trial Supplies Management',
      'Integration with Radio imaging Company, LMK/IHK systems',
      'Developed monitoring capabilities (pharmacovigilance)',
    ],
  },
  {
    year: '2021',
    events: [
      'Launched virtual clinical trials module',
      'Partnered with Tenthpin Management Consultants',
      'ISO 9001:2015 and ISO 27001:2013 Certified',
    ],
  },
  {
    year: '2020',
    events: [
      'Partnered with SAP PS',
      'Enabled Trial Analytics on SAP BTP',
      'Launched Public Health Platform for Plasma Donations for COVID patients/Donors in collaboration with Govt. of Karnataka and HCG Hospitals',
    ],
  },
  {
    year: '2019',
    events: [
        'Partnered with SAP CDL'
    ],
  },
  {
    year: '2018',
    events: ['Conducted multi-country studies in Europe and Americas'],
  },
  {
    year: '2017',
    events: [
      'Became a member of SAP Startup Studio',
      'Launched SyMetric Integrated Clinical Trial Platform (IRT/IWRS, EDC & CTM)',
    ],
  },
  {
    year: '2016',
    events: ['Introduced exclusive tools for BA/BE studies', 'Launched EDC'],
  },
  {
    year: '2015',
    events: ['First successful FDA submission using data from our solution'],
  },
].sort((a, b) => parseInt(b.year) - parseInt(a.year));


export const homepageContent = {
  revolutionTitle: 'Leading the Revolution in Clinical Trial Technology',
  revolutionContent: 'SyMetric is at the forefront of digital transformation in life sciences. We provide an end-to-end, AI-enabled platform that connects sponsors, CROs, sites, and patients, ensuring seamless data flow and empowering research teams to deliver therapies faster.',
  futureOfTrials: {
    title: 'Building the Future of Clinical Trials, Together',
    subtitle: 'SyMetric is committed to pioneering the next generation of clinical research technology. Our roadmap is focused on three key areas:',
    imageId: 'future-of-trials',
    points: [
      'Deepening AI integration for autonomous trial management.',
      'Expanding our decentralized trial capabilities to make research more accessible to diverse patient populations.',
      'Enhancing real-world data connectivity to bridge the gap between clinical research and clinical practice.'
    ],
    cta: { text: 'Explore Our Vision', link: '/about' }
  }
};

export const customerSuccessStories: CustomerSuccessStory[] = [
  {
    id: 1,
    quote: "SyMetric Integrated Clinical Trial platform of IWRS/EDC/Medical coding was able to deliver complex adoptive Study protocols. The IWRS system maintains adequate Clinical Supplies of multiple formulations, all in Real Time. It also offered insights of Subject recruitment across global sites that supported monitoring Study Progress and aided in informed decision-making. The platform helped with efficient resource management and reduction in overall cost.",
    author: "Dr Madhavi Prabhvalkar, Senior Manager, Clinical Data Management",
    company: "Sun Pharma Advanced Research Company",
  },
  {
    id: 2,
    quote: "Using SyMetric IWRS, we were able to reduce the investigational product (IP) cost by at least 30% which will translate to savings of a few hundred thousand dollars. SyMetric IWRS helped us to reduce man-hours by at least 30% in IP accountability and the sponsor can check the IP status just in one click irrespective of number of sites, depots, and countries involved.",
    author: "Director, Research and Development",
    company: "Global Pharmaceutical Company",
  }
];

export const featureGridItems: FeatureGridItem[] = [
  {
    icon: CloudErpIcon,
    title: 'Cloud ERP',
    description: 'Stay flexible and future-ready using complete, modular solutions driven by built-in AI and analytics.',
    link: '#',
    linkText: 'Explore cloud ERP'
  },
  {
    icon: FinancialManagementIcon,
    title: 'Financial management',
    description: 'See what\'s coming and act with precision using solutions that help you manage uncertainty, optimise processes, and enable compliance.',
    link: '#',
    linkText: 'Explore financial management software'
  },
  {
    icon: SpendManagementIcon,
    title: 'Spend management',
    description: 'Implement AI-powered spend management processes from source to pay with an integrated suite of solutions to deliver spend visibility, control, and savings.',
    link: '#',
    linkText: 'Explore spend management solutions'
  },
  {
    icon: SupplyChainIcon,
    title: 'Supply chain management',
    description: 'Run a risk-resilient and sustainable supply chain that can adapt to anything with our solutions for supply chain planning, manufacturing, and logistics.',
    link: '#',
    linkText: 'Explore supply chain solutions'
  },
  {
    icon: HumanCapitalIcon,
    title: 'Human capital management',
    description: 'Align your workforce and business priorities with AI-enabled solutions for core HR and payroll, employee experience, talent management, and contingent workforce management functions.',
    link: '#',
    linkText: 'Explore HCM software'
  },
  {
    icon: CustomerExperienceIcon,
    title: 'Customer experience',
    description: 'Connect e-commerce, marketing, sales, and service data with our customer experience solutions—and use AI to personalise the customer experience at every touchpoint.',
    link: '#',
    linkText: 'Explore CX software'
  }
];

export const latestNews: LatestNewsItem[] = [
  {
    id: 1,
    title: 'SyMetric at Mint and SAP presents Industry Knowledge Exchange Summit',
    description: 'SyMetric was an exhibitor at the Industry Knowledge Exchange Summit in Mumbai, presented by Mint and SAP.',
    link: '#',
    imageId: 'news-summit'
  },
  {
    id: 2,
    title: 'Navaratri Celebrations at office',
    description: 'The SyMetric team celebrated Navaratri at the office with festive decorations and activities.',
    link: '#',
    imageId: 'news-navratri'
  },
  {
    id: 3,
    title: 'Independence Day Celebrations 2022',
    description: 'The team celebrated India\'s Independence Day with a flag hoisting ceremony and patriotic events.',
    link: '#',
imageId: 'news-independence'
  },
  {
    id: 4,
    title: 'SAP Batch Release Hub for Life Sciences',
    description: 'Our partner SAP has launched Batch Release Hub for Life Sciences, an innovation for the industry.',
    link: '#',
    imageId: 'news-batch-release'
  },
  {
    id: 5,
    title: 'Fun Activity at Office',
    description: 'The SyMetric team participated in a fun team-building activity at the office to boost morale.',
    link: '#',
    imageId: 'news-fun-activity'
  },
  {
    id: 6,
    title: 'SyMetric at SAP Industries Live 2021',
    description: 'SyMetric showcased its solutions at the SAP Industries Live virtual event.',
    link: '#',
    imageId: 'news-industries-live'
  },
  {
    id: 7,
    title: 'SyMetric Celebrates 10 Years in the Industry',
    description: 'We are proud to celebrate a decade of innovation and customer success in the life sciences industry.',
    link: '#',
    imageId: 'news-10-years'
  },
  {
    id: 8,
    title: 'Strategic Partner for ICSM',
    description: 'SyMetric is excited to be a strategic partner for ICSM with SAP and TENTHPIN.',
    link: '#',
    imageId: 'news-icsm-partner'
  },
  {
    id: 9,
    title: 'Christmas Celebrations 2021',
    description: 'The team celebrated Christmas with a secret Santa gift exchange and festive lunch.',
    link: '#',
    imageId: 'news-christmas-2021'
  },
  {
    id: 10,
    title: 'SyMetric at GINSEP Demo Day',
    description: 'SyMetric was chosen to participate in the GINSEP Demo Day for Indian Startup Pitches.',
    link: '#',
    imageId: 'news-ginsep-demo'
  }
];

export const researchIntegrateAnalyzeContent = {
  mainConcepts: [
    { title: "Research", icon: Search },
    { title: "Integrate", icon: Combine },
    { title: "Analyze", icon: BarChart },
  ],
  platformFeatures: [
    { 
      title: "Clinical Trial Platform",
      description: "A unified, end-to-end solution for managing your trials with maximum efficiency.",
      icon: Rocket,
      link: "/solutions/clinical-trial-platform",
    },
    { 
      title: "Trial Analytics",
      description: "Leverage real-time data and AI to derive actionable insights and make informed decisions.",
      icon: TrendingUp,
      link: "/solutions/trial-analytics",
    },
    { 
      title: "Aiding You in Your Journey",
      description: "Our dedicated team provides expert support to ensure your success at every step.",
      icon: Compass,
      link: "/contact",
    },
  ]
};

export const whyChooseUsFeatures: WhyChooseUsFeature[] = [
  { id: 'flexible', title: 'Flexible and Customizable', description: 'Our platform adapts to your unique study protocols and workflows, not the other way around.', imageId: 'why-us-flexible' },
  { id: 'modular', title: 'Modularized and Integrated', description: 'Choose the specific tools you need or use the fully integrated suite for seamless data flow.', imageId: 'why-us-modular' },
  { id: 'intuitive', title: 'Simple and Intuitive User Interface', description: 'Designed for ease of use, reducing training time and increasing adoption across all user levels.', imageId: 'why-us-intuitive' },
  { id: 'sso', title: 'Single Sign-On Feature', description: 'Access all our platform tools with a single, secure login, simplifying user management.', imageId: 'why-us-sso' },
  { id: 'reusable', title: 'Reusable Forms', description: 'Save time and ensure consistency by creating and reusing forms and templates across multiple studies.', imageId: 'why-us-reusable' },
  { id: 'compliant', title: 'Security Compliant', description: 'Built with 21 CFR Part 11 and ICH-GCP guidelines at its core to ensure data integrity and audit readiness.', imageId: 'why-us-compliant' },
  { id: 'tracking', title: 'Real-Time Tracking and Business Intelligence', description: 'Gain instant visibility into trial progress with powerful dashboards and analytics.', imageId: 'why-us-tracking' },
  { id: "support", title: "24x7 Dedicated Technical Support", description: "Our expert team is always available to assist you, ensuring your trials run smoothly without interruption.", imageId: "why-us-support" },
];

export const companyInfo: CompanyInfo = {
    facts: {
      founded: '1972',
      employees: '107,415',
      countries: '130+',
      customers: '440,000'
    }
};
    



