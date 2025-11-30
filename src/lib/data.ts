

import type { NavItem, Solution, Industry, LeadershipMember, Customer, Resource, TeamMember, FeatureGridItem, LatestNewsItem, CustomerSuccessStory, WhyChooseUsFeature, CompanyInfo, SuccessStory, UnlockPotentialItem, UseCase, FAQItem, JobOpening, CompanyValue, EmployeeBenefit, CommunityLeaderSlide, FeaturedTopic, WelcomeLink, TopAuthor, CommunityPost } from '@/lib/types';
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
  GaugeCircle,
  Clock,
  BookOpen,
  Headset,
  GraduationCap,
  Lightbulb,
  Scale,
  Sparkles,
  Stethoscope,
  Network,
  HeartHandshake,
  Settings,
  Archive,
  BookCopy,
  FileSearch,
  BookMarked,
  Tag,
  LifeBuoy,
  HelpCircle,
  Book,
  Monitor,
  MessageCircle,
} from 'lucide-react';
import { CloudErpIcon, FinancialManagementIcon, SpendManagementIcon, SupplyChainIcon, HumanCapitalIcon, CustomerExperienceIcon } from '@/components/icons/feature-icons';
import { PlaceHolderImages } from './placeholder-images';

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
            { name: 'Clinical Data Management', href: '/services/clinical-data-management', description: 'Ensure data quality and compliance with our high-quality Data Management services.' },
            { name: 'Project Management', href: '/services/project-management', description: 'Manage your Clinical Trial effectively from consulting to reporting.' },
            { name: 'Data Migration', href: '/services/data-migration', description: 'Migrate your data onto our Cloud Solutions with ease and integration.' },
            { name: 'Training', href: '/services/training', description: 'Adopt our Platform and tools effortlessly using our comprehensive Online Training Services.' },
            { name: 'Support', href: '/services/support', description: 'Enjoy round-the-clock technical assistance and get your Operational queries answered.' },
          ]
        }
      ]
    },
    { name: 'Industries', href: '/industries' },
    { name: 'Community', href: '/community' },
    { name: 'Resources', href: '/resources'},
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact'},
    { name: 'Careers', href: '/careers'},
];

export const solutions: Solution[] = [
  {
    id: 'ctp',
    name: 'Clinical Trial Platform',
    slug: 'clinical-trial-platform',
    hero: {
      title: 'SyMetric Clinical Trial Platform',
      subtitle: 'An end-to-end, cloud-based platform for Clinical Trials with fully modular tools that allow you to pick and configure them according to your needs.'
    },
    description: 'An integrated platform for seamless clinical trial management from start to finish.',
    longDescription: 'Our Clinical Trial Platform (CTP) provides a unified environment for managing all aspects of your clinical trials. From protocol development to final reporting, CTP streamlines workflows, enhances collaboration, and ensures data integrity.',
    icon: FlaskConical,
    image: 'solution-ctp',
    backgroundColor: '#f5f3ff'
  },
  {
    id: 'irt-iwrs',
    name: 'IRT/IWRS',
    slug: 'irt-iwrs',
    hero: {
      title: 'Interactive Web Response System (IRT/IWRS)',
      subtitle: 'IRT/IWRS enables well-organized, systematized drug supply between different investigation sites, reducing drug wastage to a bare minimum and proactively handling complex randomization procedures for single-arm, large multi-arm, and multi-centred studies.'
    },
    description: 'Comprehensive solution for randomization and trial supply management.',
    longDescription: 'Developed with years of strong industry expertise and tested to deliver against the most complex Clinical Trial designs, our IRT/IWRS solution is the most comprehensive one in the market today.',
    icon: Repeat,
    image: 'irt-iwrs-image',
    backgroundColor: '#ebf8ff',
    capabilities: [
      {
        id: 'randomization',
        title: 'Randomization',
        description: 'Dynamic Adaptive Randomization helps to avoid imbalance of covariates across subjects, resulting in balanced Treatment Assignment within covariate profiles irrespective of sample sizes. This adaptive randomization procedure uses accrued information from past treatment assignments and subject covariate values to select the probability of future treatment assignments and balance them.',
        imageId: 'resource-1'
      },
      {
        id: 'subject-management',
        title: 'Subject Management',
        description: 'Patients Handling functionality of our Clinical Trial Platform provides Subject Screening and Enrolment, Visit Management, IP dispensing and receipt, Unblinding, Withdrawal and Completion tools to manage subjects efficiently. Different Subject statuses — from screening to study completion — can be monitored seamlessly. This enables Sites to reach the Study Enrolment and Completion targets according to planned timelines.',
        imageId: 'resource-4'
      },
      {
        id: 'sites-management',
        title: 'Sites Management',
        description: 'You can register, configure, and manage investigation sites on our platform with ease. Our Site Management tool enables clinical research monitors to activate, deactivate, and reactivate the sites based on study-specific requirements and site performance metrics.',
        imageId: 'solution-sm'
      },
      {
        id: 'clinical-supplies-management',
        title: 'Clinical Supplies Management',
        description: 'SyMetric Platform with robust IP supply management functionality allows drug supply manager to tightly control the supplies sent to Sites, adjust supply strategies for Sites based on the remaining treatment arms and new ratios. SyMetric Platform can enable on-demand labeling and shipping strategy, further reducing supply waste on adaptive trials, thus reducing the costs of IP in a Clinical Trial.',
        imageId: 'supply-chain'
      }
    ]
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
    backgroundColor: '#ebf5cb',
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
    backgroundColor: '#fffbeb'
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
    backgroundColor: '#f5f3ff'
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
    backgroundColor: '#fef2f2'
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
    backgroundColor: '#fdf4ff'
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
    backgroundColor: '#f0fdf4'
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
    imageId: 'leadership-1',
    linkedin: 'https://www.linkedin.com/in/uma-janapareddy-9b169b13'
  },
  {
    id: 'raghuram-janapareddy',
    name: 'Raghuram Janapareddy',
    role: 'Technical Advisor',
    bio: [
      'A seasoned professional with over 34 years of experience in information technology and multiple industry domains, Raghuram is currently the Managing Director, India of Tenthpin Management Consultants. As part of Tenthpin’s global initiative, he is leading the efforts towards establishing a Life Sciences Innovation Centre in India. Enrolled in the Roster of Experts of WHO Digital Health Technical Advisory Group (DHTAG), he works very closely with the healthcare ecosystem in India. He has worked at SAP for nearly 17 years in multiple areas — Supply Chain-, Project-, Global Delivery-, Strategic Vendor-, Practice-, Product-, and Process Management. His guidance is integral to designing products, processes, and delivery models for enterprises in the Life Sciences and healthcare sector.'
    ],
    imageId: 'leadership-2',
    linkedin: 'https://www.linkedin.com/in/janapareddy'
  },
  {
    id: 'ramesh-kumar-t',
    name: 'Ramesh Kumar T',
    role: 'Business Strategist and Mentor',
    bio: [
      'A strategist known for digital dexterity and business acumen, Ramesh fits squarely into SyMetric’s vision. His entrepreneurial experience in the Software Industry extends to over 35 years. He has also made significant contribution to a large-scale Technology company. Business mentorship comes naturally to him, given his background as an entrepreneur, and he helps associates achieve success and growth.'
    ],
    imageId: 'leadership-4',
    linkedin: '#'
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
    imageId: 'leadership-6',
    linkedin: 'https://www.linkedin.com/in/saisiddharth-j'
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
    imageId: 'leadership-5',
    linkedin: '#'
  }
];


export const customers: Customer[] = [
    { 
        name: 'Dr Madhavi Prabhvalkar',
        role: 'Senior Manager, Clinical Data Management',
        company: 'Sun Pharma Advanced Research Company',
        avatarId: 'avatar-1', 
        story: 'SyMetric Integrated Clinical Trial platform of IWRS/EDC/Medical coding was able to deliver complex adoptive Study protocols. The IWRS system maintains adequate Clinical Supplies of multiple formulations, all in Real Time. It also offered insights of Subject recruitment across global sites that supported monitoring Study Progress and aided in informed decision-making. The platform helped with efficient resource management and reduction in overall cost.'
    },
    { 
        name: 'Director, Research and Development',
        role: 'Director, Research and Development',
        company: 'Global Pharmaceutical Company',
        avatarId: 'avatar-2', 
        story: 'Using SyMetric IWRS, we were able to reduce the investigational product (IP) cost by at least 30% which will translate to savings of a few hundred thousand dollars. SyMetric IWRS helped us to reduce man-hours by at least 30% in IP accountability and the sponsor can check the IP status just in one click irrespective of number of sites, depots, and countries involved.'
    }
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
  {
    year: '2014',
    events: ['Acquired our first customer'],
  },
  {
    year: '2013',
    events: ['Launched flagship products IRT/CTM'],
  },
  {
    year: '2012',
    events: ['Founded in Bangalore, India'],
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
    author: "Dr Madhavi Prabhvalkar",
    handle: "@sunpharma",
    avatarId: "avatar-1",
    badge: "Sr. Manager, CDM",
    date: "OCT 15, 2023",
    link: "#",
    company: "Sun Pharma Advanced Research Company",
  },
  {
    id: 2,
    quote: "Using SyMetric IWRS, we were able to reduce the investigational product (IP) cost by at least 30% which will translate to savings of a few hundred thousand dollars. SyMetric IWRS helped us to reduce man-hours by at least 30% in IP accountability and the sponsor can check the IP status just in one click irrespective of number of sites, depots, and countries involved.",
    author: "R&D Director",
    handle: "@globalpharma",
    avatarId: "avatar-2",
    badge: "Director",
    date: "OCT 16, 2023",
    link: "#",
    company: "Global Pharmaceutical Company",
  },
  {
    id: 3,
    quote: "A world-class design system project is currently underway. I've been fortunate enough to beta test it. Keep tracking this - it might turn into the perfect design system for your upcoming side project or new SaaS platform.",
    author: "John Doe",
    handle: "@johndoe",
    avatarId: "avatar-3",
    badge: "Founder",
    date: "OCT 17, 2023",
    link: "#",
    company: "Startup Inc.",
  },
];

export const featureGridItems: FeatureGridItem[] = [
    { 
        icon: Settings, 
        title: 'Study Management',
        description: 'Define, configure, and oversee all aspects of your clinical studies from a centralized dashboard.',
        link: '#' 
    },
    { 
        icon: Hospital, 
        title: 'Site Management',
        description: 'Streamline site activation, monitoring, and communication for efficient trial execution.',
        link: '#',
    },
    { 
        icon: Beaker, 
        title: 'Clinical Supplies Management',
        description: 'Track and manage investigational products and trial supplies in real-time across all sites.',
        link: '#' 
    },
    { 
        icon: Users, 
        title: 'Subject Management',
        description: 'Handle subject enrollment, randomization, and tracking throughout the trial lifecycle.',
        link: '#' 
    },
    { 
        icon: Database, 
        title: 'Data Management',
        description: 'Ensure data quality with our EDC tools, including validation, query management, and exports.',
        link: '#' 
    },
    { 
        icon: FlaskConical, 
        title: 'Lab Management',
        description: 'Manage lab data, normal ranges, and sample tracking with seamless integration.',
        link: '#' 
    },
    { 
        icon: BookMarked, 
        title: 'Medical Coding',
        description: 'Standardize medical terms with integrated coding dictionaries like MedDRA and WHODrug.',
        link: '#',
    },
    { 
        icon: Archive, 
        title: 'Document Management',
        description: 'Maintain a compliant and audit-ready eTMF with version control and secure access.',
        link: '#' 
    },
    { 
        icon: BarChart, 
        title: 'Reports',
        description: 'Generate insightful reports and visualizations for real-time trial oversight.',
        link: '#' 
    },
    { 
        icon: GraduationCap, 
        title: 'Digital Learning',
        description: 'Provide training and certification for trial personnel directly on the platform.',
        link: '#' 
    },
    {
        icon: Users,
        title: 'Volunteer Management',
        description: 'Efficiently manage and communicate with your pool of trial volunteers and participants.',
        link: '#'
    },
    { 
        icon: TestTube, 
        title: 'Sample Management',
        description: 'Track the entire lifecycle of biological samples, from collection to storage and analysis.',
        link: '#' 
    },
    { 
        icon: Tag, 
        title: 'Label Management',
        description: 'Ensure compliance and accuracy with integrated tools for creating and managing drug labels.',
        link: '#',
    },
    { 
        icon: LifeBuoy, 
        title: 'Help and Support',
        description: 'Access our dedicated support team and comprehensive knowledge base 24/7.',
        link: '#' 
    },
];

export const latestNews: LatestNewsItem[] = [
  {
    id: 1,
    title: 'SyMetric at Mint and SAP presents Industry Knowledge Exchange Summit',
    description: 'SyMetric was an exhibitor at the Industry Knowledge Exchange Summit in Mumbai, presented by Mint and SAP.',
    link: '#',
    imageId: 'news-summit',
    main: true,
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
    description: 'SyMetric and SAP revolutionizing the Clinical Trial process to improve Patient Care',
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

export const platformUsers = [
  {
    icon: Beaker,
    title: "Pharma Companies",
    description: "Optimize the time to market for new products with our seamlessly integrated Clinical Trial Platform.",
    cta: "Get started",
    link: "/solutions/pharma",
    imageId: "platform-pharma",
  },
  {
    icon: Building,
    title: "Contract Research Organizations (CROs)",
    description: "Ace your game by integrating your services with that of sponsors on our Clinical Trial Platform.",
    cta: "Try now",
    link: "/solutions/cro",
    imageId: "platform-cro",
  },
  {
    icon: GraduationCap,
    title: "Academia (Hospitals and Universities)",
    description: "Accelerate research and development efforts through broad collaborations with the industry on our platform.",
    cta: "Get going",
    link: "/solutions/academia",
    imageId: "platform-academia",
  },
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
  { id: 'flexible', title: 'Flexible and Customizable', description: 'Tailored applications to suit various research study patterns — Adaptive, Umbrella, and Basket Studies. Configure them to your needs and improve your turnaround time.', imageId: 'why-us-flexible' },
  { id: 'modular', title: 'Modularized and Integrated', description: 'Choose from a range of comprehensive modules that offer the advantage of seamless integration across components such as EDC, IRT, CTM, and Medical Coding', imageId: 'why-us-modular' },
  { id: 'intuitive', title: 'Simple and Intuitive User Interface', description: 'Solve your problems faster and smarter with easy-to-use applications designed to understand your needs.', imageId: 'why-us-intuitive' },
  { id: 'sso', title: 'Single Sign-In Feature', description: 'Access all authorized tools on a cloud platform using a single set of credentials and avoid the hassles of multiple sign-ins and user verifications.', imageId: 'why-us-sso' },
  { id: 'reusable', title: 'Reusable Forms', description: 'Import unique Case Report Forms (CRFs) that are in line with standard guidelines from our Global CRF Library and say goodbye to the tedious process of form designing.', imageId: 'why-us-reusable' },
  { id: 'compliant', title: 'Security Compliant', description: 'Safeguard the confidentiality and integrity of data using our security-compliant applications that adhere to 21 CFR Part 11, ICH-GCP, ISO 27001, ISO 9001, HIIPA, and GDPR.', imageId: 'why-us-compliant' },
  { id: 'tracking', title: 'Real-Time Tracking and Business Intelligence', description: 'Deploy efficient trial management strategies with the help of real-time tracking, key performance indicators, and insightful analytics.', imageId: 'why-us-tracking' },
  { id: "support", title: "24x7 Dedicated Technical Support", description: "Resolve issues within a short time with the help of our technical experts who offer round-the-clock support for all your needs.", imageId: "why-us-support" },
];

export const companyInfo: CompanyInfo = {
    facts: {
      founded: '1972',
      employees: '107,415',
      countries: '130+',
      customers: '440,000'
    }
};

export const salesSpecialistHelp = [
    {
        title: "Help with designing a solution to achieve trial success",
        description: "Help with designing a solution to achieve trial success."
    },
    {
        title: "Guidance on building a proof of concept",
        description: "Guidance on building a proof of concept."
    },
    {
        title: "One-on-one demos",
        description: "One-on-one demos to help you get started on the SyMetric portal, set up your account, and prep for run-in to your first trial."
    },
    {
        title: "Assistance for migrating applications and infrastructure to the cloud",
        description: "Assistance for migrating applications and infrastructure to the cloud and optimizing your environment."
    },
    {
        title: "Information on pricing and cost optimization",
        description: "Information on pricing and cost optimization."
    }
];
    
export const successStories: SuccessStory[] = [
    {
        id: 'global-pharma',
        logoId: 'logo-biogenex',
        title: 'Global Pharmaceutical Company',
        description: 'Using SyMetric IWRS, we were able to reduce the investigational product (IP) cost by at least 30% which will translate to savings of a few hundred thousand dollars. SyMetric IWRS helped us to reduce man-hours by at least 30% in IP accountability and the sponsor can check the IP status just in one click irrespective of number of sites, depots, and countries involved.',
        linkText: 'Director, Research and Development',
        linkUrl: '#',
    },
    {
        id: 'sun-pharma',
        logoId: 'logo-innovate-pharma',
        title: 'Sun Pharma Advanced Research Company',
        description: 'SyMetric Integrated Clinical Trial platform of IWRS/EDC/Medical coding was able to deliver complex adoptive Study protocols. The IWRS system maintains adequate Clinical Supplies of multiple formulations, all in Real Time. It also offered insights of Subject recruitment across global sites that supported monitoring Study Progress and aided in informed decision-making. The platform helped with efficient resource management and reduction in overall cost.',
        linkText: 'Dr Madhavi Prabhvalkar, Senior Manager, Clinical Data Management',
        linkUrl: '#',
    },
];


export const heroCarouselItems = [
    {
      id: "hero-carousel-1",
      title: "Better Data. Better Clinical Trials.",
      subtitle: "Rely on our technology platform to manage your Clinical Trials with accuracy and ease",
      imageId: 'hero-carousel-1',
      cta: {
          text: "Schedule a live demo",
          link: "/contact"
      }
    },
    {
      id: "hero-carousel-2",
      title: "Keep Close Tabs on Your Clinical Supplies",
      subtitle: "Experience seamless management of Clinical Supplies with real-time data and active monitoring",
      imageId: 'hero-carousel-2',
      cta: {
          text: "Contact us for a demo",
          link: "/contact"
      }
    },
    {
      id: "hero-carousel-3",
      title: "A Well-Integrated CTP",
      subtitle: "For a bird’s-eye view of Clinical Trials",
      imageId: 'hero-carousel-3',
      cta: {
          text: "Discover now",
          link: "/solutions/clinical-trial-platform"
      }
    }
  ];

export const unlockPotentialItems: UnlockPotentialItem[] = [
    {
        id: 1,
        title: "Better Data. Better Clinical Trials.",
        description: "Rely on our technology platform to manage your Clinical Trials with accuracy and ease",
        linkText: "Schedule a live demo",
        linkUrl: "/contact",
        imageId: "hero-carousel-1"
    },
    {
        id: 2,
        title: "Keep Close Tabs on Your Clinical Supplies",
        description: "Experience seamless management of Clinical Supplies with real-time data and active monitoring",
        linkText: "Contact us for a demo",
        linkUrl: "/contact",
        imageId: "hero-carousel-2"
    },
    {
        id: 3,
        title: "A Well-Integrated CTP",
        description: "For a bird’s-eye view of Clinical Trials",
        linkText: "Discover now",
        linkUrl: "/solutions/clinical-trial-platform",
        imageId: "hero-carousel-3"
    }
];

export const useCases: UseCase[] = [
    {
        icon: Rocket,
        title: "Accelerate Trial Timelines",
        description: "Streamline startup, recruitment, and data capture to bring therapies to market faster."
    },
    {
        icon: ShieldCheck,
        title: "Enhance Data Quality & Compliance",
        description: "Ensure data integrity and audit readiness with automated validation and real-time monitoring."
    },
    {
        icon: GaugeCircle,
        title: "Improve Operational Efficiency",
        description: "Reduce manual effort and operational costs through automation and integrated workflows."
    },
    {
        icon: Users,
        title: "Boost Patient Engagement",
        description: "Make trial participation easier and more engaging for user-friendly tools."
    }
];

export const faqItems: FAQItem[] = [
  {
    question: "How do I access SyMetric Clinical Trial Platform? Do I need to install any specific software to use it?",
    answer: "The SyMetric Clinical Trial Platform is a web-based application. You can access it through any modern web browser without needing to install any specific software."
  },
  {
    question: "Can SyMetric products integrate with other systems?",
    answer: "Yes, our products are designed for flexibility and can be integrated with other systems, including legacy EDC tools and trial analytics solutions, through our robust data services and APIs."
  },
  {
    question: "How is SyMetric Clinical Trial Platform validated?",
    answer: "Our platform is validated through rigorous internal testing, User Acceptance Testing (UAT), and stringent quality control practices that comply with regulatory standards like 21 CFR Part 11 and ICH-GCP."
  },
  {
    question: "How can I get support for SyMetric’s products and solutions?",
    answer: "You can get support by contacting our dedicated support team via phone or email. We answer most requests within 24 hours. Contact details are provided on this page."
  },
  {
    question: "Is there any limit for the number of Studies, Sites, or Users that can be managed on the SyMetric Clinical Trial Platform?",
    answer: "No, our platform is designed to be highly scalable and can manage a virtually unlimited number of studies, sites, and users to grow with your research needs."
  },
  {
    question: "Can SyMetric Clinical Trial Platform be used for academic research?",
    answer: "Absolutely. Our platform is suitable for academic research, providing powerful tools to accelerate research and development efforts in hospitals and universities."
  },
  {
    question: "Can we change the build Parameters once the Study Build is completed and the Trial has started?",
    answer: "Yes, our platform is flexible and allows for mid-study changes and amendments to the study build without disrupting the ongoing trial."
  },
  {
    question: "Do you have Standard Operating Procedures (SOPs) in place to handle various business processes?",
    answer: "Yes, our solutions are guided by well-defined SOPs that comply with all applicable industry regulations and guidelines to ensure quality and consistency."
  },
  {
    question: "Does the IRT Solution on SyMetric Clinical Trial Platform come with IVRS capabilities?",
    answer: "Yes, our IRT (Interactive Response Technology) solution includes IVRS (Interactive Voice Response System) capabilities for comprehensive trial management."
  },
  {
    question: "How and where is the solution hosted? Can we customize the host of the solutions on our Cloud infrastructure?",
    answer: "Our platform is a SaaS solution available with trusted cloud-hosting options like Microsoft Azure and SAP. We also offer custom deployment models, including dedicated single-tenant solutions or hosting on your own cloud infrastructure."
  },
  {
    question: "Do we get training on how to use SyMetric Products and Solutions?",
    answer: "Yes, we provide comprehensive and customized training services, including online modules and instructor-led sessions, to ensure your workforce can use our solutions efficiently."
  },
  {
    question: "Does SyMetric have a back-up mechanism to deal with system failures?",
    answer: "Yes, we have robust back-up and disaster recovery mechanisms in place to ensure business continuity and data integrity in the event of system failures."
  },
  {
    question: "Is the technical support desk available 24/7?",
    answer: "Yes, our dedicated technical support desk is available 24/7 to provide assistance and answer your queries with a fast turnaround time."
  },
  {
    question: "Can the IRT Solution on SyMetric Clinical Trial Platform manage the reverse supply chain of Clinical Supplies?",
    answer: "Yes, our IRT solution is equipped to manage the complete supply chain, including the reverse logistics of clinical supplies."
  },
  {
    question: "Can the IRT Solution on SyMetric Clinical Trial Platform keep an account of the drugs dispensed to Subjects or Trial Participants?",
    answer: "Yes, the platform accurately tracks and accounts for all drugs dispensed to trial participants, ensuring precise inventory management and accountability."
  }
];
    
export const jobOpenings: JobOpening[] = [
    {
        id: 'dev-001',
        title: 'Senior Frontend Developer',
        department: 'Engineering',
        location: 'Bengaluru, India',
        shortDescription: 'We are looking for an experienced Frontend Developer to build and shape our user-facing products.',
        fullDescription: 'As a Senior Frontend Developer, you will be responsible for developing and maintaining our web applications, collaborating with designers and backend engineers, and mentoring junior developers. You should have strong experience with React, TypeScript, and modern web technologies.',
    },
    {
        id: 'pm-001',
        title: 'Clinical Project Manager',
        department: 'Project Management',
        location: 'Remote',
        shortDescription: 'Manage clinical trial projects from initiation to closure, ensuring they are on time and within budget.',
        fullDescription: 'The Clinical Project Manager will oversee all aspects of clinical trial projects, including planning, execution, and monitoring. You will be the primary point of contact for clients and internal teams. A strong background in clinical research and project management is required.',
    },
    {
        id: 'qa-001',
        title: 'QA Engineer (Clinical Software)',
        department: 'Quality Assurance',
        location: 'Bengaluru, India',
        shortDescription: 'Ensure the quality and compliance of our clinical trial software solutions.',
        fullDescription: 'The QA Engineer will be responsible for designing and executing test plans, identifying and documenting defects, and working with the development team to ensure our software meets the highest quality standards and complies with industry regulations like 21 CFR Part 11.',
    },
];

export const companyValues: CompanyValue[] = [
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'We are driven by a passion for innovation and are constantly seeking better ways to solve complex problems in clinical research.',
    },
    {
        icon: Network,
        title: 'Collaboration',
        description: 'We believe that the best results come from working together. We foster a collaborative environment both internally and with our partners.',
    },
    {
        icon: HeartHandshake,
        title: 'Integrity',
        description: 'We operate with the highest ethical standards, ensuring transparency, and building trust with our clients and stakeholders.',
    },
];

export const employeeBenefits: EmployeeBenefit[] = [
    {
        title: 'Comprehensive Health Insurance',
        description: 'Full medical, dental, and vision coverage for you and your family.',
    },
    {
        title: 'Flexible Work Arrangements',
        description: 'We offer remote and hybrid work options to promote a healthy work-life balance.',
    },
    {
        title: 'Professional Development',
        description: 'Access to training programs, conferences, and certifications to help you grow your skills.',
    },

    {
        title: 'Generous Paid Time Off',
        description: 'Ample vacation days, sick leave, and paid holidays to ensure you can rest and recharge.',
    },
];

export const communityLeadersSlides: CommunityLeaderSlide[] = [
  {
    title: 'Meet our SyMetric Community Leaders',
    description: 'Meet our SyMetric Community Leaders and learn about our Champions program and Mentors program.',
    links: [
      { text: 'SyMetric Community Leaders', href: '#' },
      { text: 'Champions program', href: '#' },
      { text: 'Mentors program', href: '#' },
    ],
  },
  {
    title: 'Become a Community Contributor',
    description: 'Share your expertise, answer questions, and help grow our community. Learn how you can get started as a contributor.',
    links: [{ text: 'Contribution Guidelines', href: '#' }],
  },
  {
    title: 'Upcoming Community Events',
    description: 'Join our upcoming webinars, Q&A sessions, and virtual meetups to connect with experts and peers.',
    links: [{ text: 'View All Events', href: '#' }],
  },
];

export const featuredTopics: FeaturedTopic[] = [
  {
    id: 'dev-news',
    title: 'SyMetric Developer News October 30th, 2025',
    imageId: 'community-dev-news',
  },
  {
    id: 'teched-berlin',
    title: 'SyMetric Community Voice: TechEd in Berlin special edition!',
    imageId: 'community-teched',
  },
  {
    id: 'content-integrity',
    title: 'Protecting the integrity of the community content',
    imageId: 'community-integrity',
  },
];

export const recentActivity: CommunityPost[] = [
    {
        id: '1',
        authorId: 'PENDURV',
        author: {
          name: 'PENDURV',
          role: 'Explorer',
        },
        title: 'Need ABAP expert support to solution the serial number copy from service order to sales order.',
        content: 'Hi Team,Copy line item serial number from the service order to the sales order via forward exchange(CL_CRMS4_PROC_SALESDOC_FWD). We are unable to find a solution.',
        createdAt: '2024-07-28T10:00:00Z',
        category: 'Enterprise Resource Planning Q&A',
        views: 1,
        comments: 0,
        likes: 0
    },
    {
        id: '2',
        authorId: 'plaban_sahoo28',
        author: {
          name: 'plaban_sahoo28',
          role: 'Participant',
        },
        title: 'Repeated reminders and escalations',
        content: 'Hi All, GRC 12. SP24can you please suggest if and how repeated reminders and escalations after certain days is possible in PCRegardsPlaban',
        createdAt: '2024-07-28T09:30:00Z',
        category: 'Technology Q&A',
        views: 19,
        comments: 0,
        likes: 0
    },
    {
        id: '3',
        authorId: '9614386165',
        author: {
          name: '9614386165',
          role: 'Newcomer',
        },
        title: 'How to configuration Year Wise in Fund Management',
        content: 'We are running fund management quarterly. The next plan is to run fund management yearly in the new financial year. Please suggest how to configuration year wise in Fund Management.',
        createdAt: '2024-07-28T09:00:00Z',
        category: 'Enterprise Resource Planning Q&A',
        views: 22,
        comments: 0,
        likes: 0
    },
     {
        id: '4',
        authorId: 'leah_huang71',
        author: {
          name: 'leah_huang71',
          role: 'Newcomer',
        },
        title: 'How to export overload data in FBL3H',
        content: 'We are trying to export a large dataset from FBL3H but are running into performance issues and timeouts. What is the best practice for exporting large volumes of data from this transaction? Are there alternatives to direct export that might be more efficient?',
        createdAt: '2024-07-28T08:00:00Z',
        category: 'Financials Q&A',
        views: 35,
        comments: 2,
        likes: 1
    }
];

export const welcomeLinks: WelcomeLink[] = [
    {
        icon: HelpCircle,
        title: 'FAQs',
        description: 'Find answers to basic questions about using SyMetric Community.'
    },
    {
        icon: Book,
        title: 'Resources',
        description: 'Learn about community rules, take our tutorial, and get support.'
    },
    {
        icon: MessageCircle,
        title: 'Welcome Corner',
        description: 'Introduce yourself and get to know other members.'
    },
    {
        icon: Monitor,
        title: 'All SyMetric Managed Tags',
        description: 'Check out the comprehensive A-Z list of SAP managed tags'
    }
];

export const topAuthors: TopAuthor[] = [
    { id: '1', name: 'thomasalexander_ritter', avatarId: 'avatar-1', kudos: 56, sapLogo: 'https://www.sap.com/dam/application/shared/logos/sap-logo.svg', imageUrl: PlaceHolderImages.find(p => p.id === 'avatar-1')?.imageUrl || '' },
    { id: '2', name: 'Andre_Fischer', avatarId: 'avatar-2', kudos: 24, sapLogo: 'https://www.sap.com/dam/application/shared/logos/sap-logo.svg', imageUrl: PlaceHolderImages.find(p => p.id === 'avatar-2')?.imageUrl || '' },
    { id: '3', name: 'SandeepBSV', avatarId: 'avatar-3', kudos: 22, sapLogo: 'https://www.sap.com/dam/application/shared/logos/sap-logo.svg', imageUrl: PlaceHolderImages.find(p => p.id === 'avatar-3')?.imageUrl || '' },
    { id: '4', name: 'patty_1982', avatarId: 'avatar-4', kudos: 14, imageUrl: PlaceHolderImages.find(p => p.id === 'avatar-4')?.imageUrl || '' },
    { id: '5', name: 'ggalves', avatarId: 'avatar-2', kudos: 14, sapLogo: 'https://www.sap.com/dam/application/shared/logos/sap-logo.svg', imageUrl: PlaceHolderImages.find(p => p.id === 'avatar-2')?.imageUrl || '' },
    { id: '6', name: 'philipp_herzig', avatarId: 'avatar-1', kudos: 14, sapLogo: 'https://www.sap.com/dam/application/shared/logos/sap-logo.svg', imageUrl: PlaceHolderImages.find(p => p.id === 'avatar-1')?.imageUrl || '' },
    { id: '7', name: 'thomas_volmering', avatarId: 'avatar-3', kudos: 12, imageUrl: PlaceHolderImages.find(p => p.id === 'avatar-3')?.imageUrl || '' },
];
