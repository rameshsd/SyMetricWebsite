import type { NavItem, Solution, Industry, LeadershipMember, Customer, Resource } from '@/lib/types';
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
} from 'lucide-react';

export const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
  { name: 'Tools', href: '/tools/summarizer'}
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
