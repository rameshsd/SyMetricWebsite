import type { NavItem, Solution, Industry, LeadershipMember, Customer, Resource, TeamMember, FeatureGridItem } from '@/lib/types';
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
} from 'lucide-react';
import { CloudErpIcon, FinancialManagementIcon, SpendManagementIcon, SupplyChainIcon, HumanCapitalIcon, CustomerExperienceIcon } from '@/components/icons/feature-icons';

export const navItems: NavItem[] = [
  { name: 'Products', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'Transform and Support', href: '#' },
  { name: 'Learning', href: '#' },
  { name: 'Community', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'About', href: '/about' },
];

export const solutions: Solution[] = [
  {
    id: 'ctp',
    name: 'CTP (Clinical Trial Platform)',
    slug: 'clinical-trial-platform',
    description: 'An integrated platform for seamless clinical trial management from start to finish.',
    longDescription: 'Our Clinical Trial Platform (CTP) provides a unified environment for managing all aspects of your clinical trials. From protocol development to final reporting, CTP streamlines workflows, enhances collaboration, and ensures data integrity.',
    icon: FlaskConical,
    image: 'solution-ctp',
  },
  {
    id: 'etmf',
    name: 'eTMF (Electronic Trial Master File)',
    slug: 'electronic-trial-master-file',
    description: 'Digitize and manage your trial master file with compliance and ease.',
    longDescription: 'SyMetric’s eTMF solution offers a secure, compliant, and intuitive way to manage your trial documentation. With features like automated indexing, quality checks, and real-time collaboration, it ensures your TMF is always audit-ready.',
    icon: FileText,
    image: 'solution-etmf',
  },
  {
    id: 'cdm',
    name: 'Clinical Data Management',
    slug: 'clinical-data-management',
    description: 'Comprehensive tools for high-quality clinical data collection and analysis.',
    longDescription: 'Our Clinical Data Management Suite provides robust tools for electronic data capture (EDC), data validation, and analysis. Ensure the highest quality data for your trials with our user-friendly and powerful CDM solutions.',
    icon: Database,
    image: 'solution-cdm',
  },
  {
    id: 'rc',
    name: 'Regulatory Compliance',
    slug: 'regulatory-compliance',
    description: 'Navigate complex regulatory landscapes with our expert solutions.',
    longDescription: 'Stay ahead of regulatory changes and ensure compliance with global standards. Our solutions help you manage submissions, track commitments, and maintain a state of continuous compliance throughout the product lifecycle.',
    icon: ShieldCheck,
    image: 'solution-rc',
  },
  {
    id: 'sm',
    name: 'Site Management',
    slug: 'site-management',
    description: 'Empower clinical sites with tools for efficient trial execution and monitoring.',
    longDescription: 'Our Site Management solutions provide clinical research sites with the tools they need to operate efficiently. From patient recruitment and scheduling to financial management and remote monitoring, we help sites focus on what matters most: patient care.',
    icon: Briefcase,
    image: 'solution-sm',
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
  { name: 'Dr. Evelyn Reed', role: 'Chief Executive Officer', image: 'leadership-1' },
  { name: 'Marcus Chen', role: 'Chief Technology Officer', image: 'leadership-2' },
  { name: 'Dr. Lena Petrova', role: 'Chief Scientific Officer', image: 'leadership-3' },
  { name: 'Samuel Jones', role: 'Chief Operating Officer', image: 'leadership-4' },
  { name: 'Isabella Garcia', role: 'VP, Regulatory Affairs', image: 'leadership-5' },
  { name: 'David Lee', role: 'VP, Business Development', image: 'leadership-6' },
];

export const customers: Customer[] = [
    { name: 'Innovate Pharma', logo: 'logo-innovate-pharma', story: 'SyMetric\'s eTMF solution reduced our audit preparation time by 60%.', link: '#' },
    { name: 'BioGenex', logo: 'logo-biogenex', story: 'The CTP platform enabled seamless collaboration across our global trial sites.', link: '#' },
    { name: 'Apex Clinical', logo: 'logo-apex-clinical', story: 'We achieved 99.9% data accuracy with SyMetric\'s Clinical Data Management suite.', link: '#' },
    { name: 'St. Jude\'s Research', logo: 'logo-st-judes', story: 'A powerful and intuitive platform for our academic research needs.', link: '#' },
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

export const homepageContent = {
  revolutionTitle: 'Leading the Revolution in Clinical Trial Technology',
  revolutionContent: 'SyMetric is at the forefront of digital transformation in life sciences. We provide an end-to-end, AI-enabled platform that connects sponsors, CROs, sites, and patients, ensuring seamless data flow and empowering research teams to deliver therapies faster.',
  customerSuccessTitle: 'Trusted by Life Science Leaders',
  customerSuccessSubtitle: 'From global pharmaceutical giants to innovative biotechs, organizations of all sizes rely on SyMetric to accelerate their research and development.',
  whyChooseUsTitle: 'Why SyMetric?',
  whyChooseUsSubtitle: 'Our platform is built on four key pillars that ensure your success.',
  whySyMetricAI: {
    tagline: 'The SyMetric Difference',
    title: 'Why SyMetric AI is a game changer for your research',
    subtitle: 'Our purpose-built AI for clinical research goes beyond simple automation. It provides predictive insights, identifies risks, and accelerates critical decision-making across the trial lifecycle.',
    imageId: 'ai-infographic',
    points: [
      {
        icon: BrainCircuit,
        title: 'Intelligent Automation',
        description: 'Automate repetitive tasks, from document classification in eTMF to data cleaning in EDC, freeing up your team for high-value work.'
      },
      {
        icon: Zap,
        title: 'Predictive Analytics',
        description: 'Forecast enrollment rates, identify at-risk sites, and predict study timelines with a high degree of accuracy.'
      },
      {
        icon: TrendingUp,
        title: 'Actionable Insights',
        description: 'Turn complex data into clear, actionable insights that drive better strategic decisions and improve trial outcomes.'
      },
    ]
  },
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

export const customerSuccessStories = [
  { id: 1, customerName: 'Innovate Pharma', logoId: 'logo-innovate-pharma', quote: 'SyMetric\'s eTMF solution reduced our audit preparation time by 60%, allowing us to focus on science, not paperwork.', link: '#' },
  { id: 2, customerName: 'BioGenex Therapeutics', logoId: 'logo-biogenex', quote: 'The CTP platform enabled seamless collaboration across our global trial sites, dramatically improving efficiency.', link: '#' },
  { id: 3, customerName: 'Apex Clinical Research', logoId: 'logo-apex-clinical', quote: 'We achieved 99.9% data accuracy on our last pivotal trial thanks to SyMetric\'s robust Clinical Data Management suite.', link: '#' }
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
    linkText: 'Explore CRM and CX solutions'
  }
];

export const whyChooseUsItems = [
  "End-to-End Unified Platform",
  "AI-Powered Intelligence",
  "Uncompromising Compliance",
  "Dedicated Customer Partnership",
  "Scalable and Flexible Architecture",
  "User-Centric Design",
  "Seamless Integration Capabilities",
  "Actionable, Real-Time Analytics"
];

export const latestNews = [
    { 
        id: 1, 
        title: "SyMetric Launches AI-Powered Predictive Analytics for Patient Recruitment", 
        description: "New module helps sponsors and CROs forecast enrollment timelines with over 90% accuracy.",
        category: "Product News",
        imageId: "resource-1",
        link: "#"
    },
    { 
        id: 2, 
        title: "Understanding the Impact of FDA's New Guidance on Digital Health Technologies", 
        description: "Our experts break down what the latest regulatory updates mean for your trials.",
        category: "Regulatory",
        imageId: "resource-2",
        link: "#"
    },
    { 
        id: 3, 
        title: "Case Study: How a Mid-Sized Biotech Accelerated Phase II with SyMetric's Platform", 
        description: "Discover how BioGenex Therapeutics cut their trial database lock time by 4 weeks.",
        category: "Case Study",
        imageId: "resource-3",
        link: "#"
    }
];

export const companyInfo = {
  name: 'SyMetric',
  mission: 'To accelerate the delivery of new therapies to patients by providing innovative, user-friendly, and compliant digital solutions for clinical research.',
  history: 'Founded in 2015 by a team of clinical research veterans and technology experts, SyMetric was born from a shared frustration with the outdated, paper-based processes that slowed down vital research. We set out to build the digital infrastructure for the future of clinical trials.',
  facts: {
    founded: '2015',
    employees: '500+',
    countries: '25+',
    customers: '100+'
  }
};

export const teamMembers: TeamMember[] = [
  { id: 1, name: 'Dr. Evelyn Reed', role: 'Chief Executive Officer', avatar: 'ER', bio: 'Visionary leader with 20+ years in life sciences and a passion for technology-driven innovation.' },
  { id: 2, name: 'Marcus Chen', role: 'Chief Technology Officer', avatar: 'MC', bio: 'Expert in building scalable, secure, and compliant cloud platforms for regulated industries.' },
  { id: 3, name: 'Dr. Lena Petrova', role: 'Chief Scientific Officer', avatar: 'LP', bio: 'Renowned clinical researcher with deep experience in trial design and data analysis.' },
  { id: 4, name: 'Samuel Jones', role: 'Chief Operating Officer', avatar: 'SJ', bio: 'Drives operational excellence and ensures our solutions meet the needs of our global customer base.' },
  { id: 5, name: 'Isabella Garcia', role: 'VP, Regulatory Affairs', avatar: 'IG', bio: 'Navigates the complex global regulatory landscape to ensure our products and customers are always compliant.' },
  { id: 6, name: 'David Lee', role: 'VP, Business Development', avatar: 'DL', bio: 'Forges strategic partnerships to expand our ecosystem and deliver more value to our customers.' },
];
