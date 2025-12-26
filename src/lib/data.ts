
import type { NavItem, Solution, Industry, LeadershipMember, Customer, Resource, TeamMember, FeatureGridItem, LatestNewsItem, CustomerSuccessStory, WhyChooseUsFeature, CompanyInfo, SuccessStory, UnlockPotentialItem, UseCase, FAQItem, JobOpening, CompanyValue, EmployeeBenefit, CommunityLeaderSlide, FeaturedTopic, CommunityPost, ResearchIntegrateAnalyzeFeature, WelcomeLink, TopAuthor, PlatformFeature, NewsItem, RelatedContent } from '@/lib/types';
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
  Fingerprint,
  MousePointerClick,
  Files,
  ChevronsRight,
  LifeBuoy as LifeBuoyIcon,
  BarChart as BarChartIcon,
  Package,
  FilePlus,
  SearchCheck,
  AlertTriangle,
  Code2,
  Library,
  Key,
} from 'lucide-react';
import { CloudErpIcon, FinancialManagementIcon, SpendManagementIcon, SupplyChainIcon, HumanCapitalIcon, CustomerExperienceIcon } from '@/components/icons/feature-icons';
import { PlaceHolderImages } from './placeholder-images';
import { 
    DataManagementIcon,
    DataServicesIcon,
    DigitalLearningIcon,
    HelpSupportIcon,
    IdentityAccessIcon,
    LabIcon,
    MedicalCodingIcon,
    OrganizationIcon,
    SiteIcon,
    StudyIcon,
    SubjectIcon,
    SuppliesIcon,
    CustomerManagementIcon,
    ReportsIcon,
    SampleManagementIcon,
    LabelManagementIcon,
} from '@/components/icons/feature-grid-icons';

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
    { name: 'News', href: '/news' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact'},
    { name: 'Careers', href: '/careers'},
];

const defaultRelatedContent: RelatedContent = {
  title: "Explore Related SyMetric Solutions",
  description: "Our comprehensive technology platform brings together AI, data, and applications to transform your clinical operations.",
  featurePoints: [
    {
      title: "Optimised trial operations",
      description: "Go live faster with preconfigured processes and guided onboarding—cutting manual work and accelerating time to value."
    },
    {
      title: "Action-ready insights",
      description: "Make better decisions faster with ready-to-use KPIs and embedded AI on shared, governed data."
    },
    {
      title: "Transformative, scalable impact",
      description: "Expand confidently by adopting new trial models that drive research forward while keeping operations secure and compliant."
    }
  ],
  relatedProducts: [
    {
      title: "EDC (Electronic Data Capture)",
      description: "Seamlessly integrate your trial management with our powerful EDC system to ensure data consistency and accuracy.",
      link: "/solutions/edc",
      linkText: "Explore EDC"
    },
    {
      title: "IRT/IWRS",
      description: "Connect your CTM with our robust randomization and supply management solution for unified trial oversight.",
      link: "/solutions/irt-iwrs",
      linkText: "Explore IRT/IWRS"
    },
    {
      title: "Trial Analytics",
      description: "Turn your trial data into actionable insights. Monitor progress, recruitment, and milestones in real-time.",
      link: "/solutions/trial-analytics",
      linkText: "Explore Analytics"
    }
  ]
};

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
    backgroundColor: '#f5f3ff',
    relatedContent: defaultRelatedContent
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
    capabilities: [
      {
        id: 'randomization',
        title: 'Randomization',
        description: 'Dynamic Adaptive Randomization helps to avoid imbalance of covariates across subjects, resulting in balanced Treatment Assignment within covariate profiles irrespective of sample sizes. This adaptive randomization procedure uses accrued information from past treatment assignments and subject covariate values to select the probability of future treatment assignments and balance them.',
        imageId: 'irt-randomization'
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
    ],
    relatedContent: {
      title: "Explore Related IRT/IWRS Solutions",
      description: "Our comprehensive technology platform brings together AI, data, and applications to transform your clinical operations.",
      featurePoints: [
        {
          title: "Optimised trial operations",
          description: "Go live faster with preconfigured processes and guided onboarding—cutting manual work and accelerating time to value."
        },
        {
          title: "Action-ready insights",
          description: "Make better decisions faster with ready-to-use KPIs and embedded AI on shared, governed data."
        },
        {
          title: "Transformative, scalable impact",
          description: "Expand confidently by adopting new trial models that drive research forward while keeping operations secure and compliant."
        }
      ],
      relatedProducts: [
        {
          title: "EDC (Electronic Data Capture)",
          description: "Seamlessly integrate your randomization and supply management with our powerful EDC system to ensure data consistency and accuracy from patient entry to data lock.",
          link: "/solutions/edc",
          linkText: "Explore EDC"
        },
        {
          title: "CTM (Clinical Trial Management)",
          description: "Connect your site and subject activities with our CTM solution for a unified view of trial progress, resource allocation, and milestone tracking.",
          link: "/solutions/ctm",
          linkText: "Explore CTM"
        },
        {
          title: "Trial Analytics",
          description: "Turn your IRT/IWRS data into actionable insights. Monitor recruitment, supply levels, and randomization balance in real-time with our advanced analytics.",
          link: "/solutions/trial-analytics",
          linkText: "Explore Analytics"
        }
      ]
    }
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
    backgroundColor: '#2463eb',
    capabilities: [
      {
        id: 'ecrf-management',
        title: 'eCRF Management',
        description: 'Success of a clinical trial depends largely on well-designed Case Report Forms. Here’s where our eCRF Management module comes in handy by helping design CRFs. It can also program real-time validation checks to operate them efficiently, enabling collection of complete, reliable, and accurate data in line with regulatory standards.',
        imageId: 'edc-ecrf',
        iconName: 'FilePlus'
      },
      {
        id: 'sdv',
        title: 'Source Data Verification',
        description: 'A key aspect of clinical data management is the Source Data Verification (SDV) process which ensures data quality and conformance to source data. This selective feature focuses on verifying critical study data points instead of 100% SDV for all patients — saving time, effort, and costs while maintaining scientific and ethical integrity of the trial.',
        imageId: 'edc-sdv',
        iconName: 'ShieldCheck'
      },
      {
        id: 'query-management',
        title: 'Query Management',
        description: 'Our Discrepancy Management tool helps investigation sites identify and manage data aberrations to ensure that the system captures clean and consistent data. For interim and final comprehensive analysis, the data export feature of our tool enables standard and customizable dataset exports in .CSV and .XLS formats at any time even during the study run.',
        imageId: 'edc-query',
        iconName: 'SearchCheck'
      },
      {
        id: 'ae-sae-reporting',
        title: 'AE/SAE Reporting',
        description: 'As patient safety is the fundamental principle that lies at the core of every clinical trial, it is important that the AE/SAEs are timely reported to stakeholders and regulatory bodies and handled appropriately. Our feature that comes with automatic notifications triggered via email keeps users informed on AE/SAE reporting actions.',
        imageId: 'edc-reporting',
        iconName: 'AlertTriangle'
      },
      {
        id: 'medical-coding',
        title: 'Medical Coding',
        description: 'Our built-in coding interface along with real-time data available from our EDC system will help you streamline your coding process. Also, our integrated coding mechanism uses standard medical dictionaries like MedDRA and WHO-Drug Global and can guarantee precise and consistent coding of verbatim terms to harmonized and standard codes.',
        imageId: 'edc-coding',
        iconName: 'Code2'
      }
    ],
    relatedContent: {
      title: "Explore Related EDC Solutions",
      description: "Enhance your data capture capabilities by integrating with other powerful SyMetric modules.",
      featurePoints: [
        {
          title: "Unified Data Flow",
          description: "Connect EDC with IRT and CTM to create a single, seamless flow of data from patient randomization to final analysis."
        },
        {
          title: "Real-time Insights",
          description: "Feed your clean, validated EDC data directly into our Trial Analytics module to monitor trends and make proactive decisions."
        },
        {
          title: "Enhanced Compliance",
          description: "Pair EDC with our eTMF solution to automatically file data-related documentation and ensure your trial is always audit-ready."
        }
      ],
      relatedProducts: [
        {
          title: "Medical Coding",
          description: "Integrate MedDRA and WHO-DD coding directly into your EDC workflow for faster, more accurate term standardization.",
          link: "/solutions/medical-coding",
          linkText: "Explore Medical Coding"
        },
        {
          title: "IRT/IWRS",
          description: "Link subject screening and enrollment data from EDC directly to randomization and supply allocation in our IRT system.",
          link: "/solutions/irt-iwrs",
          linkText: "Explore IRT/IWRS"
        },
        {
          title: "eTMF",
          description: "Automatically push signed-off forms, query resolutions, and audit trails from EDC to your electronic Trial Master File.",
          link: "/solutions/etmf",
          linkText: "Explore eTMF"
        }
      ]
    }
  },
  {
    id: 'ctm',
    name: 'CTM',
    slug: 'ctm',
    hero: {
        title: 'Clinical Trial Management (CTM)',
        subtitle: 'Our Clinical Trial Management solution — designed to be a centralized Study Repository — has provisions for maintaining master entities and global objects that allow reusability across Clinical Trials. It forms the backbone of our Clinical Trial Platform, providing total control to System Administrators, Project Managers, and Clinical Data Managers to effectively maintain, manage, and monitor a study and operational database. We provide a set of tools that enables pharmaceutical organizations and CROs achieve speed and efficiency while implementing Software Solutions for their Clinical Trials.'
    },
    description: 'Repositories to maintain global objects like trial sites, labs, and data libraries.',
    longDescription: 'The Clinical Trial Master provides various repositories to maintain Global objects, including a repository of Trial Sites, Labs, Organizations, Global Data Libraries, and more.',
    icon: ClipboardList,
    image: 'ctm-image',
    backgroundColor: '#2463eb',
    capabilities: [
      {
        id: 'user-access-management',
        title: 'Centralized User & Access Management',
        description: 'Our centralized User Administration service enables you to manage User Identities on our Platform and allows users to log in and access Study Resources. The unified sign-on feature simplifies access to our Platform’s various tools, facilitating Conditional Access to protect, govern, and engage with internal and external users more securely. Role-Based Authorization Control allows you to define roles centrally with granular levels of permissions that support the principles of least-privilege and segregation of duties.',
        imageId: 'tool-iam-1',
        iconName: 'Users'
      },
      {
        id: 'organization-sites-master',
        title: 'Organization and Investigation Sites Master',
        description: 'We help you maintain a master for all Organizations you engage with and track their involvement in different Clinical Trials. Also, you can have a centralized database that lists Warehouses, Clinical Investigation Sites, Labs, Sponsors, CROs, Retention Facilities, Statistical Service Providers, and other Vendors to avoid repetitive processes in setting up Clinical Trials.',
        imageId: 'tool-org-1',
        iconName: 'Network'
      },
      {
        id: 'unified-study-builder',
        title: 'Unified Study Builder',
        description: 'Our Study Builder tools come with advanced features that allow you to define and configure the various processes and workflows needed for a Clinical Trial. Completely driven by Graphical User Interfaces — you can maintain the Study for even complex clinical trial designs including recent ones such as Adaptive Trials, Umbrella Trials, and Basket Studies. The Study Builder comes with versioning management to accommodate Study Amendments and Post-Production Changes in a centralized location within the tools, allowing targeted release across the Study, centrally or to individual Sites.',
        imageId: 'tool-study-1',
        iconName: 'Settings'
      },
      {
        id: 'global-data-libraries',
        title: 'Global Clinical Data Libraries',
        description: 'Our Global Clinical Data Library provides a Centralized Form Library for CRFs, CDISC Libraries for Annotations and Controlled Terminology, and a central library for maintaining the Medical Coding dictionaries from MedDRA and WHO-DD. These libraries allow Clinical Data Management teams to build a comprehensive set of objects that can be reused across Clinical Trials, thereby reducing the setup time required for each Trial. All it takes is a few clicks for these objects to be imported into the Study Data design. Additionally, SyMetric is a Gold Member at the CDISC Community.',
        imageId: 'resource-3',
        iconName: 'Library'
      },
      {
        id: 'real-time-reporting',
        title: 'Real-Time Reporting',
        description: 'We have developed this function over the years based on our growing understanding of the monitoring needs of various stakeholders in Clinical Trials. As a result, this module provides the most comprehensive set of out-of-the-box reports that you can use directly to aid you in real-time monitoring of Studies and various other processes involved in a Clinical Trial.',
        imageId: 'tool-data-svc-1',
        iconName: 'BarChart'
      },
      {
        id: 'security-compliance-manager',
        title: 'Centralized Security and Compliance Manager',
        description: 'We firmly believe that Security and Compliance play a very important role in digital Clinical Trial Systems. Our centralized Security and Compliance Management tool on the Clinical Trial Platform allows Customers to define policies and drive security settings across various tools and modules based on their specific internal compliance and regulatory needs. Also, it comes with central auditability of data across the platform.',
        imageId: 'why-us-compliant',
        iconName: 'ShieldCheck'
      }
    ],
    relatedContent: defaultRelatedContent
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
    backgroundColor: '#f5f3ff',
    relatedContent: defaultRelatedContent
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
    backgroundColor: '#fef2f2',
    relatedContent: defaultRelatedContent
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
    backgroundColor: '#fdf4ff',
    relatedContent: defaultRelatedContent
  },
  {
    id: 'site-management',
    name: 'Site Management',
    slug: 'site-management',
    hero: {
        title: 'Centralized Control of Sites Across Global Clinical Trials',
        subtitle: 'The Site Management module provides a unified framework to configure, govern, and monitor every site participating in a clinical study.'
    },
    description: 'Empower clinical sites with tools for efficient trial execution and monitoring.',
    longDescription: 'Our Site Management solutions provide clinical research sites with the tools they need to operate efficiently. From patient recruitment and scheduling to financial management and remote monitoring, we help sites focus on what matters most: patient care.',
    icon: Briefcase,
    image: 'solution-sm',
    backgroundColor: '#f0fdf4',
    relatedContent: defaultRelatedContent
  },
  {
    id: 'iam',
    name: 'Identity & Access Management',
    slug: 'identity-and-access-management',
    hero: {
        title: 'Identity & Access Management (IAM) Module',
        subtitle: 'Centralized Access Control, Security Governance, and User Lifecycle Management for clinical trials.'
    },
    description: 'Secure, centralized control over users, roles, and permissions across all studies and organizations.',
    longDescription: 'The IAM module provides a robust, secure, and fully governed environment for managing users, roles, permissions, and authentication across all customers, studies, and organizations.',
    icon: IdentityAccessIcon,
    image: 'iam-hero',
    backgroundColor: '#f0f9ff',
    relatedContent: defaultRelatedContent
  },
  {
    id: 'csm',
    name: 'Clinical Supplies Management',
    slug: 'clinical-supplies-management',
    hero: {
        title: 'Clinical Supplies Management Module',
        subtitle: 'End-to-end control of Investigational Products (IP), packaging, inventory, shipments, retention, and temperature management across global clinical trials.'
    },
    description: 'Track and manage investigational products and trial supplies in real-time across all sites.',
    longDescription: 'The Clinical Supplies Management module delivers a powerful, fully compliant system for handling Investigational Products across the entire clinical supply chain.',
    icon: Package,
    image: 'clinical-supplies-hero',
    backgroundColor: '#f0f9ff',
    relatedContent: defaultRelatedContent
  },
  {
    id: 'dm',
    name: 'Data Management',
    slug: 'data-management',
    hero: {
        title: 'Data Management Module',
        subtitle: 'End-to-end electronic data capture, validation, discrepancy handling, SDV, and export capabilities for regulatory-compliant clinical trials.'
    },
    description: 'A unified ecosystem to design CRFs, collect subject data, validate accuracy, and manage queries.',
    longDescription: 'The Data Management module provides a unified ecosystem to design CRFs, collect subject data, validate accuracy, manage queries/discrepancies, audit changes, freeze/lock data, and export final cleaned datasets.',
    icon: DataManagementIcon,
    image: 'data-management-hero',
    backgroundColor: '#f0f9ff',
    relatedContent: defaultRelatedContent
  },
   {
    id: 'study-management',
    name: 'Study Management',
    slug: 'study-management',
    hero: {
        title: 'Study Management',
        subtitle: 'Centralized setup, configuration, versioning, and governance of clinical studies from initiation to closure.'
    },
    description: 'The control center of your clinical trial platform, ensuring consistent execution across all sites.',
    longDescription: 'The Study Management module acts as the control center of your clinical trial platform. It provides a single source of truth for all study metadata, configurations, visit schedules, treatment arms, and versioned study builds.',
    icon: StudyIcon,
    image: 'study-management-hero',
    backgroundColor: '#f0f9ff',
    relatedContent: defaultRelatedContent
  },
  {
    id: 'mc',
    name: 'Medical Coding',
    slug: 'medical-coding',
    hero: {
        title: 'Medical Coding',
        subtitle: 'Automated and manual coding of clinical terms using MedDRA & WHO-DD with full review, approval, and discrepancy management.'
    },
    description: 'Standardize clinical terms using globally accepted dictionaries like MedDRA and WHO-Drug.',
    longDescription: 'The Medical Coding module ensures that all verbatim terms recorded in clinical case report forms (CRFs) are standardized using globally accepted dictionaries, with tools for efficient coding, review, and discrepancy resolution.',
    icon: MedicalCodingIcon,
    image: 'medical-coding-hero',
    backgroundColor: '#f0f9ff',
    relatedContent: defaultRelatedContent
  },
  {
    id: 'lab',
    name: 'Lab Management',
    slug: 'lab-management',
    hero: {
        title: 'Lab Data Management Module',
        subtitle: 'End-to-end management of central & local lab configurations, reference ranges, and automated lab data imports for clinical trials.'
    },
    description: 'Unified lab setup, reference ranges, and data uploads to ensure standardized and validated lab results.',
    longDescription: 'The Lab Data Management module unifies lab setup, reference ranges, and data uploads, ensuring all lab results are standardized, validated, and fully traceable.',
    icon: LabIcon,
    image: 'lab-management-hero',
    backgroundColor: '#f0f9ff',
    relatedContent: defaultRelatedContent
  },
  {
    id: 'ds',
    name: 'Data Services',
    slug: 'data-services',
    hero: {
        title: 'Data Services (API & Integration Management)',
        subtitle: 'Seamlessly connect your clinical ecosystem with a configurable, secure, and scalable integration layer.'
    },
    description: 'Powerful and flexible integration framework for connecting SyMetric with external clinical platforms.',
    longDescription: 'Our Data Services module provides a powerful, flexible, and fully configurable integration framework that enables secure, real-time communication between SyMetric and external clinical platforms.',
    icon: DataServicesIcon,
    image: 'data-services-hero',
    backgroundColor: '#f0f9ff',
    relatedContent: defaultRelatedContent
  },
  {
    id: 'sample-management',
    name: 'Sample Management',
    slug: 'sample-management',
    hero: {
        title: 'Sample Management System',
        subtitle: 'A powerful, end-to-end module designed to manage the lifecycle of clinical samples—from definition to collection, labeling, shipment, storage, and final analysis.'
    },
    description: 'Manage the lifecycle of clinical samples with full traceability and compliance.',
    longDescription: 'With deep configurability, automated tracking, and audit-ready controls, it ensures sample integrity, compliance, and full traceability throughout the study.',
    icon: Package,
    image: 'sample-management-hero',
    backgroundColor: '#f0f9ff',
    relatedContent: defaultRelatedContent
  },
  {
    id: 'label-management',
    name: 'Label Management',
    slug: 'label-management',
    hero: {
      title: 'Label Management',
      subtitle: 'A complete end-to-end module designed to define, configure, generate, request, approve, and visually verify labels for subjects and samples in clinical trials.',
    },
    description: 'A complete end-to-end module for defining, generating, and verifying labels for subjects and samples.',
    longDescription: 'The Label Management system ensures accuracy, consistency, and compliance across all labeling workflows.',
    icon: LabelManagementIcon,
    image: 'label-management-hero',
    backgroundColor: '#f0f9ff',
    relatedContent: defaultRelatedContent
  },
  {
    id: 'subject-management',
    name: 'Subject Management',
    slug: 'subject-management',
    hero: {
        title: 'Subject Management Module',
        subtitle: 'End-to-end control of subject lifecycle from screening to study completion.'
    },
    description: 'Handle subject enrollment, randomization, and tracking throughout the trial lifecycle.',
    longDescription: 'The Subject Management module provides a comprehensive and compliant framework to manage every stage of a subject’s journey in a clinical trial, ensuring accuracy, regulatory integrity, and consistent application of study protocols.',
    icon: SubjectIcon,
    image: 'subject-management-hero',
    backgroundColor: '#f0f9ff',
    relatedContent: defaultRelatedContent
  },
  {
    id: 'help-and-support',
    name: 'Help & Support',
    slug: 'help-and-support',
    hero: {
      title: 'Help & Support',
      subtitle: 'Empowering users with instant assistance, guided learning, and efficient issue resolution for a seamless experience across the platform.',
    },
    description: 'Instant assistance, guided learning, and efficient issue resolution for a seamless user experience.',
    longDescription: 'Our Help & Support module ensures that every user receives the right guidance—whether they need step-by-step instructions, technical support, or help correcting critical data.',
    icon: HelpSupportIcon,
    image: 'help-support-hero',
    backgroundColor: '#f0f9ff',
    relatedContent: defaultRelatedContent
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
      'An entrepreneur with over 20 years experience in establishing and managing multiple business entities in various fields such as Life Sciences, Healthcare, and Social Enterprise, Uma started SyMetric in 2012. She plays a seminal role in all functions — from strategic decision-making to business operations. Under her leadership, SyMetric has expanded to US, Europe, and Latin America besides forging strong partnerships with Pharma Companies, CROs, and Technology Companies such as Microsoft, SAP, and MINT Medical. She has been at the helm of Ladies Circle India (LCI) and is a member of several reputed organizations — Anthroposophical Medical Society of India, HIMSS India Chapter, 5HT Germany, NASSCOM, and SAP Industry Consortium for Life sciences.'
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
    year: '2025',
    events: [
      'Launch of SyMetric AI Copilot for autonomous trial monitoring',
      'Introduction of blockchain for enhanced data integrity and security',
      'Expansion into the APAC region with new data centers',
    ],
  },
  {
    year: '2024',
    events: [
      'Release of predictive analytics module for patient recruitment',
      'Achieved full integration with wearable and IoT devices',
      'Hosted first annual SyMetric Innovate conference',
    ],
  },
  {
    year: '2023',
    events: [
      'Launched generative AI features for protocol authoring',
      'Formed strategic partnership with leading AI research institute',
      'Recognized as "Innovator of the Year" by Life Science Weekly',
    ],
  },
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
];


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
        icon: IdentityAccessIcon, 
        title: 'Identity and Access Management',
        description: 'Role-Based Access Control and Self-Service Account Management.',
        link: '#' 
    },
    { 
        icon: OrganizationIcon, 
        title: 'Organization Management',
        description: 'Manage all organizations participating in your trials from a central location.',
        link: '#' 
    },
    { 
        icon: CustomerManagementIcon,
        title: 'Customer Management',
        description: 'Manage relationships and data for sponsors and CROs.',
        link: '#' 
    },
    { 
        icon: StudyIcon, 
        title: 'Study Management',
        description: 'Define, configure, and oversee all aspects of your clinical studies.',
        link: '#' 
    },
    { 
        icon: SiteIcon, 
        title: 'Site Management',
        description: 'Streamline site activation, monitoring, and communication for efficient trial execution.',
        link: '#' 
    },
    { 
        icon: SuppliesIcon, 
        title: 'Clinical Supplies Management',
        description: 'Track and manage investigational products and trial supplies in real-time across all sites.',
        link: '#' 
    },
    { 
        icon: SubjectIcon, 
        title: 'Subject Management',
        description: 'Handle subject enrollment, randomization, and tracking throughout the trial lifecycle.',
        link: '#' 
    },
    { 
        icon: DataManagementIcon, 
        title: 'Data Management',
        description: 'Ensure data quality with our EDC tools, including validation, query management, and exports.',
        link: '#' 
    },
    { 
        icon: LabIcon, 
        label: 'Lab Management',
        description: 'Manage lab data, normal ranges, and sample tracking with seamless integration.',
        link: '#' 
    },
    { 
        icon: MedicalCodingIcon, 
        title: 'Medical Coding',
        description: 'Standardize medical terms with integrated coding dictionaries like MedDRA and WHODrug.',
        link: '#',
    },
    { 
        icon: ReportsIcon, 
        title: 'Reports',
        description: 'Generate insightful reports and visualizations for real-time trial oversight.',
        link: '#' 
    },
    { 
        icon: DigitalLearningIcon, 
        title: 'Digital Learning',
        description: 'Provide training and certification for trial personnel directly on the platform.',
        link: '#' 
    },
    {
        icon: DataServicesIcon,
        title: 'Data Services',
        description: 'Custom data exports, integrations, and reporting services to meet unique needs.',
        link: '#'
    },
    { 
        icon: SampleManagementIcon, 
        title: 'Sample Management',
        description: 'Track the entire lifecycle of biological samples, from collection to storage and analysis.',
        link: '#' 
    },
    { 
        icon: LabelManagementIcon, 
        title: 'Label Management',
        description: 'Ensure compliance and accuracy with integrated tools for creating and managing drug labels.',
        link: '#',
    },
    { 
        icon: HelpSupportIcon, 
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

export const researchIntegrateAnalyzeContent: {
  platformFeatures: ResearchIntegrateAnalyzeFeature[]
} = {
  platformFeatures: [
    {
      title: 'Research',
      description: 'Our unified platform provides end-to-end solutions for managing trials with maximum efficiency, from startup to submission.',
      icon: Search,
      link: '/solutions/clinical-trial-platform',
      linkText: 'Explore Research'
    },
    {
      title: 'Integrate',
      description: 'Seamlessly connect data sources, systems, and partners to create a single source of truth for your clinical data.',
      icon: Combine,
      link: '/services/data-migration',
      linkText: 'Explore Integration'
    },
    {
      title: 'Analyze',
      description: 'Leverage real-time data and powerful AI to derive actionable insights, monitor progress, and make informed decisions faster.',
      icon: BarChart,
      link: '/solutions/trial-analytics',
      linkText: 'Explore Analytics'
    }
  ]
};

export const whyChooseUsFeatures: WhyChooseUsFeature[] = [
    {
        id: 'flexible-customizable',
        title: 'Flexible and Customizable',
        description: 'Highly adaptable to your specific research study protocols and unique workflows.',
        imageId: 'why-us-flexible',
        learnMoreLink: '#'
    },
    {
        id: 'modular-integrated',
        title: 'Modularized and Integrated',
        description: 'A modularized experience that allows seamless integration and scalability for your trials.',
        imageId: 'why-us-modular',
        learnMoreLink: '#'
    },
    {
        id: 'simple-intuitive',
        title: 'Simple and Intuitive User Interface',
        description: 'An easy-to-use interface that reduces training time and increases user adoption.',
        imageId: 'why-us-intuitive',
        learnMoreLink: '#'
    },
    {
        id: 'sso',
        title: 'Single Sign-In Feature',
        description: 'Access all platform tools with a single, secure login, simplifying user management.',
        imageId: 'why-us-sso',
        learnMoreLink: '#'
    },
    {
        id: 'reusable-forms',
        title: 'Reusable Forms',
        description: 'Save time and ensure consistency by creating and reusing forms and business rules across studies.',
        imageId: 'why-us-reusable',
        learnMoreLink: '#'
    },
    {
        id: 'compliant',
        title: 'Security Compliant',
        description: 'Adheres to 21 CFR Part 11 and ICH-GCP guidelines, ensuring data integrity and audit readiness.',
        imageId: 'why-us-compliant',
        learnMoreLink: '#'
    },
    {
        id: 'tracking',
        title: 'Real-Time Tracking and Business Intelligence',
        description: 'Gain instant visibility into trial progress with powerful real-time dashboards and analytics.',
        imageId: 'why-us-tracking',
        learnMoreLink: '#'
    },
    {
        id: 'support',
        title: '24x7 Dedicated Technical Support',
        description: 'Our expert technical support team is always available to ensure your trials run smoothly.',
        imageId: 'why-us-support',
        learnMoreLink: '#'
    },
];

export const platformFeatures: PlatformFeature[] = [
    {
      title: "Clinical Trial Platform",
      description: "A unified, end-to-end solution for managing your trials with maximum efficiency.",
      icon: Rocket,
      link: "/solutions/clinical-trial-platform",
      linkText: "Learn More"
    },
    {
      title: "Trial Analytics",
      description: "Leverage real-time data and AI to derive actionable insights and make informed decisions.",
      icon: TrendingUp,
      link: "/solutions/trial-analytics",
      linkText: "Learn More"
    },
    {
      title: "Aiding You in Your Journey",
      description: "Our dedicated team provides expert support to ensure your success at every step.",
      icon: Compass,
      link: "/services/support",
      linkText: "Learn More"
    }
];


export const companyInfo: CompanyInfo = {
    facts: {
      founded: '2012',
      employees: '50+',
      countries: '3+',
      customers: '100+'
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

export const clinicalSuppliesFaq: FAQItem[] = [
    {
        question: "How does the module handle temperature excursions during shipment?",
        answer: "The Clinical Supplies Management module supports both manual and automated temperature logging. If a temperature logger detects an excursion, an alert is automatically triggered in the system, and the affected stock's status is updated to prevent its use until a quality review is completed."
    },
    {
        question: "Can the system manage both blinded and unblinded studies?",
        answer: "Yes. The system is designed to handle both study types. For blinded trials, it maintains separate actual and blinded expiry dates, ensuring that site users only see the blinded information while supply managers can track the true expiry."
    },
    {
        question: "How are stockouts prevented?",
        answer: "Stockouts are prevented through several mechanisms: real-time inventory visibility across all locations, configurable minimum stock thresholds at each site, and automated resupply triggers that generate shipment requests when inventory falls below these thresholds."
    },
    {
        question: "Is it possible to manage subject-specific dosing, such as dose titration?",
        answer: "Absolutely. The module allows for subject-specific kit reservations and supports complex dosing schedules, including dose titration, where the dosage may change based on the subject's response during the trial."
    },
    {
        question: "How does the system integrate with external warehouse management systems (WMS)?",
        answer: "The module supports API-based integrations. It can send and receive structured data (like XML or JSON) for shipment requests, dispatch advice, and inventory updates, allowing for seamless communication with third-party WMS or other logistics platforms."
    }
];

export const customerManagementFaq: FAQItem[] = [
    {
        question: "What defines a 'Customer' in the SyMetric platform?",
        answer: "A 'Customer' is the primary contractual entity, which is typically a Sponsor or a master CRO that owns and is responsible for the clinical trials being conducted on the platform. All other entities, like studies, sites, and users, are ultimately linked to a customer."
    },
    {
        question: "How are the user and study limits enforced?",
        answer: "The limits configured in the Customer Management module are automatically enforced by the system. For instance, if a customer tries to create a new study that exceeds their contractual limit, the system will prevent the action and display an alert. The same applies to creating new user accounts."
    },
    {
        question: "Is the information in the Customer Master confidential?",
        answer: "Yes, absolutely. The Customer Master is a top-level, secure registry. All information within it is treated as highly confidential and is only accessible to a limited set of authorized super-administrators within the SyMetric internal team."
    },
    {
        question: "Can a customer's profile be deactivated?",
        answer: "Yes, a customer profile can be deactivated (soft-deleted). This action preserves all historical data for audit and compliance purposes but prevents the customer from initiating any new studies or adding new users."
    },
    {
        question: "How does this module support multi-tenancy?",
        answer: "The Customer Management module is the foundation of our multi-tenant architecture. By creating a distinct and separate record for each customer, it ensures that all data—from studies and sites to users and roles—is securely segregated. There is no data leakage or shared visibility between different customers on the platform."
    }
];

export const dataManagementFaq: FAQItem[] = [
    {
        question: "What is the Global Library and how does it help ensure consistency?",
        answer: "The Global Library is a centralized repository for reusable study components like forms, controlled terminology (e.g., MedDRA), and variable definitions. By reusing these validated components across multiple studies, you ensure data is collected consistently, which simplifies cross-study analysis and reporting."
    },
    {
        question: "How complex can the data validation rules be?",
        answer: "The Data Validation Engine is highly powerful. You can create simple rules (e.g., range checks) as well as complex, cross-form and cross-visit edit checks. It also supports dynamic actions, such as showing or hiding fields based on other data points, and can trigger real-time notifications to users."
    },
    {
        question: "Is the Source Data Verification (SDV) process customizable?",
        answer: "Yes, the SDV module is flexible. You can configure it for full 100% SDV, a risk-based approach where only critical data points are marked for verification, or a combination. The system also supports remote SDV where monitors can review uploaded source documents."
    },
    {
        question: "How does the system comply with 21 CFR Part 11 for eSignatures?",
        answer: "The platform's eSignature functionality is fully compliant with 21 CFR Part 11. It requires users to enter their unique username and PIN for authentication. Every signature is timestamped and recorded in an unalterable audit trail. If any data on a signed form is changed, the signature is automatically revoked, and re-signing is required."
    },
    {
        question: "What formats are available for data export?",
        answer: "The Dataset & Export Engine is highly flexible. You can define custom dataset structures and export them in various formats, including CSV, Excel, and SAS. This allows you to create analysis-ready datasets tailored to the needs of your biostatisticians."
    }
];

export const dataServicesFaq: FAQItem[] = [
    {
        question: "What is the primary purpose of the Data Services module?",
        answer: "The primary purpose is to provide a centralized, secure, and configurable framework for integrating the SyMetric platform with external clinical systems, such as a Sponsor's warehouse management system (e.g., SAP ICSM) or another vendor's EDC/CTMS. It automates data exchange, eliminating manual uploads and reducing errors."
    },
    {
        question: "Which authentication methods are supported for APIs?",
        answer: "The module is highly flexible and supports multiple industry-standard authentication methods, including OAuth 2.0, API Keys, JWT (JSON Web Tokens), and Basic Authentication. All credentials and keys are stored securely with encryption at rest."
    },
    {
        question: "How does the system handle API failures or downtime from an external vendor?",
        answer: "The system has a robust error handling and auto-retry mechanism. For transient errors (like temporary network issues), it will automatically retry the API call based on a configurable schedule. For persistent failures, it will stop retrying after a certain point and trigger a notification to administrators to investigate the issue."
    },
    {
        question: "Can we transform data before sending it to an external system?",
        answer: "Yes. The data mapping and transformation engine is a core feature. You can perform field-level mapping (e.g., map 'subjectId' in SyMetric to 'participantID' in the external system), convert data types, and even reshape the entire JSON payload to match the vendor's required format."
    },
    {
        question: "Is there a log of all API requests and responses?",
        answer: "Yes, for full traceability and auditability, the module maintains a detailed log of every API request sent and every response received. This includes the full payload, HTTP status codes, and timestamps, which is invaluable for debugging and compliance."
    }
];

export const digitalLearningFaq: FAQItem[] = [
    {
        question: "How does role-based training work?",
        answer: "The system allows you to create specific training curricula for each role in a study (e.g., CRA, Investigator, Data Manager). When a user with a specific role logs in, they are automatically assigned the relevant training modules, ensuring they only learn what's necessary for their tasks."
    },
    {
        question: "What kind of content can be included in the training modules?",
        answer: "Our Digital Learning module supports a variety of interactive content, including video tutorials, step-by-step guides with screenshots, downloadable documents (like SOPs), and knowledge-assessment quizzes."
    },
    {
        question: "Can we track who has completed their training?",
        answer: "Yes. The system provides a comprehensive dashboard for administrators to track the training progress of all users. You can see who has started, who is in progress, and who has successfully completed their assigned curriculum."
    },
    {
        question: "Is it possible to prevent users from accessing the live study until they complete their training?",
        answer: "Absolutely. You can configure the system to enforce a 'training prerequisite'. This means a user will not be able to access any live study data or perform any tasks until they have successfully passed all the quizzes in their assigned training modules and received their automated certificate."
    },
    {
        question: "Are the training certificates official?",
        answer: "The system generates a digital, timestamped certificate of completion for each user who passes their curriculum. This serves as a formal record for your study's training documentation and is available for review during audits."
    }
];

export const helpAndSupportFaq: FAQItem[] = [
    {
        question: "What is the 'Online Help Content' feature?",
        answer: "It's a context-aware help system. When you're on a specific page in the platform, clicking the 'Help' icon will automatically open articles and guides relevant to that page's functionality. This provides instant, targeted assistance without you having to search for it."
    },
    {
        question: "How does the 'Support Requests' ticketing system work?",
        answer: "Users can submit a support ticket directly from within the platform. The request is routed to the appropriate support team, and its status (e.g., 'New', 'In Progress', 'Resolved') is tracked. The system maintains a full history of communication, and users receive automated email notifications as their ticket is updated."
    },
    {
        question: "What is the purpose of the 'Support Request Data Correction Tool'?",
        answer: "This is a highly controlled and fully audited tool for exceptional circumstances where critical data (like a subject's stratification flag) was entered incorrectly and needs to be fixed. It requires multi-level approvals and PIN authentication, ensuring that any data correction is authorized, intentional, and fully documented for regulatory compliance."
    },
    {
        question: "Is there a central place to see all my submitted tickets?",
        answer: "Yes. Each user has a personal dashboard where they can view the status and history of all the support requests they have submitted, providing full transparency into the resolution process."
    },
    {
        question: "How is the help content created and maintained?",
        answer: "The help content is created and maintained by our team of technical writers and product experts. We regularly update the articles to reflect the latest features and best practices of the SyMetric platform."
    }
];

export const iamFaq: FAQItem[] = [
    {
        question: "What is the difference between a role and a profile?",
        answer: "A role defines a set of permissions (e.g., 'CRA' can view subject data). A profile links a user to an organization or study and assigns them one or more roles within that context. A single user can have multiple profiles, allowing them to perform different functions across different studies or organizations without needing multiple accounts."
    },
    {
        question: "How does the system handle password and PIN policies?",
        answer: "The system enforces strong password and PIN policies, including complexity requirements, expiration, and history rules. Users can securely reset their own credentials through a self-service portal, and all credential-related activities are fully audited."
    },
    {
        question: "Can access be restricted to specific sites or countries?",
        answer: "Yes. Role-based access control is granular. You can create roles that grant access only to specific sites, a group of sites, or all sites within a country, ensuring users only see the data they are authorized to see."
    },
    {
        question: "What happens when a user's access needs to be revoked immediately?",
        answer: "Administrators can immediately 'Block' a user profile. This action instantly revokes all access for that user while preserving their activity history for audit purposes. The action is fully reversible and requires PIN authentication to complete."
    },
    {
        question: "Is there an audit trail for changes to user roles and permissions?",
        answer: "Yes, every change made within the IAM module is captured in a comprehensive and unalterable audit trail. This includes role creation, permission changes, user assignments, and profile updates, ensuring full traceability for regulatory compliance."
    }
];

export const labelManagementFaq: FAQItem[] = [
    {
        question: "What types of barcodes are supported for label generation?",
        answer: "The Label Management module supports industry-standard barcode formats, including QR Codes and Code 128 linear barcodes, ensuring compatibility with a wide range of scanners and laboratory equipment."
    },
    {
        question: "How are label templates created and managed?",
        answer: "You can create and manage a library of label templates. Each template defines the layout, dimensions, and data fields (e.g., Subject ID, Visit Name, Sample Type) to be included on the label. These templates can then be reused across multiple studies for consistency."
    },
    {
        question: "What is the purpose of the 'Label Request Workflow'?",
        answer: "This workflow ensures control and traceability. A site user requests a set of labels, which then goes to an authorized approver (like a CRA or Study Manager). Only after approval are the labels made available for printing. This prevents unauthorized or incorrect label generation."
    },
    {
        question: "What is 'Visual Verification' and why is it important?",
        answer: "Visual Verification is a critical quality control step. After printing, the user is required to scan the physical label. The system then displays the printed information alongside the expected information. The user must visually confirm they match and provide a PIN-based signature to complete the verification, ensuring the physical label is 100% accurate before use."
    },
    {
        question: "Can labels be generated for both subjects and samples?",
        answer: "Yes. The system is designed to handle labeling for both. You can generate labels for subject binders or records, as well as for biological samples, including primary collection tubes (e.g., vacutainers) and their derived aliquots."
    }
];

export const labManagementFaq: FAQItem[] = [
    {
        question: "What is the difference between a 'Central' and 'Local' lab?",
        answer: "A 'Central Lab' is a single laboratory that processes samples for all sites in a study, ensuring consistency. A 'Local Lab' is a laboratory associated with a specific investigation site, often used for tests that require a quick turnaround. Our module can manage both types simultaneously."
    },
    {
        question: "How does the system handle lab reference ranges that vary by age or gender?",
        answer: "When setting up a lab, you can define specific normal ranges for each test parameter based on factors like age and gender. When lab results are uploaded, the system automatically compares the result to the correct range and flags any out-of-range values."
    },
    {
        question: "How does the 'Lab Data Loads' feature work?",
        answer: "This feature allows you to upload external lab data files (e.g., from a central lab's LIMS) in formats like Excel or CSV. You map the columns in your file to the corresponding fields in the subject's eCRF. The system then automatically populates the CRF, validates the data, and creates a full audit trail."
    },
    {
        question: "What happens if I upload a file with data for a subject visit that already has data?",
        answer: "The Smart Batch Uploading feature gives you control over this. You can choose to either overwrite the existing values with the new data or skip updating records that already have data, depending on your study's workflow."
    },
    {
        question: "Does the system create an audit trail for lab data uploads?",
        answer: "Yes, every piece of data loaded into a CRF via the upload feature is fully audited. The audit trail clearly indicates that the data was system-generated from an external file, who uploaded the file, and the exact date and time of the transaction, ensuring full compliance."
    }
];

export const medicalCodingFaq: FAQItem[] = [
    {
        question: "Which medical dictionaries are supported?",
        answer: "Our Medical Coding module supports the latest versions of MedDRA (Medical Dictionary for Regulatory Activities) for adverse events and WHO-DD (WHO Drug Dictionary) for medications. We handle the regular updates of these dictionaries for you."
    },
    {
        question: "How does auto-coding work?",
        answer: "The system uses a combination of exact matches and a configurable synonym list. When a site user enters a verbatim term (e.g., 'Headache'), the system automatically searches for a match in the dictionary or synonym list. If a unique, exact match is found, it's auto-coded. If multiple matches are found, it's flagged for manual review."
    },
    {
        question: "What is the review and approval workflow for coded terms?",
        answer: "It's a two-level process. First, a 'Medical Coder' reviews auto-coded terms and manually codes any un-coded terms. Once they are done, the terms are sent to a 'Coding Reviewer' who performs a second verification. Only after the second-level approval is the coded term considered final."
    },
    {
        question: "How are coding discrepancies handled?",
        answer: "If a coder or reviewer is unsure about a verbatim term, they can raise a discrepancy (query) directly from the coding interface. This query is sent back to the clinical site to provide clarification or correct the verbatim term, ensuring the final code is as accurate as possible."
    },
    {
        question: "Is it possible to see the coding history for a specific term?",
        answer: "Yes. The system maintains a complete, 21 CFR Part 11-compliant audit trail for every verbatim term. You can view the entire history, including who coded it, when it was coded, any changes made during review, and who approved it."
    }
];

export const organizationManagementFaq: FAQItem[] = [
    {
        question: "What is the difference between Organization Management and Customer Management?",
        answer: "Customer Management defines the contractual entity (Sponsor/CRO) that owns the studies. Organization Management defines all the operational entities that participate in those studies, such as investigation sites, labs, and warehouses. Every 'Organization' must be linked to a 'Customer' to ensure proper data segregation."
    },
    {
        question: "Why is it important to classify organizations by type (e.g., Site, Lab, Warehouse)?",
        answer: "Classifying organizations by type is crucial for downstream workflows. For example, only an organization classified as a 'Site' can enroll subjects, and only a 'Warehouse' can be a source for clinical supply shipments. This structured approach prevents errors and ensures operational integrity."
    },
    {
        question: "Can an organization (like a hospital) act as a site for multiple different customers/sponsors?",
        answer: "Yes. The same organization can be linked to multiple customers. However, the data for each customer's studies remains completely segregated. A user from Customer A will have no visibility into the activities of Customer B, even if they are happening at the same physical site."
    },
    {
        question: "What information is stored in the Organization Directory?",
        answer: "The directory stores essential metadata for each organization, including its official name, type (Site, Lab, etc.), physical and mailing addresses, and contact information. This creates a centralized 'master list' for all trial-related entities."
    },
    {
        question: "Who can add or edit organizations in the directory?",
        answer: "Access to manage the Organization Directory is restricted to authorized administrative roles within your team. This ensures that the master list of organizations is maintained accurately and securely, preventing unauthorized changes."
    }
];

export const reportsFaq: FAQItem[] = [
    {
        question: "Are the reports generated in real-time?",
        answer: "Yes, all reports in the module are generated using real-time, transactional data from the platform. When you run a report, you are seeing the most up-to-date information available across all study operations."
    },
    {
        question: "In what formats can I export the reports?",
        answer: "All reports can be exported into both Microsoft Excel (.xlsx) and Adobe PDF formats, making it easy to share, archive, and perform further analysis outside of the platform."
    },
    {
        question: "What is the purpose of the Audit Trail Report?",
        answer: "The Audit Trail Report provides a comprehensive, unalterable record of all significant actions taken within the system. This includes data creation, modifications, deletions, e-signatures, and user access changes. It is a critical component for ensuring 21 CFR Part 11 compliance and being inspection-ready."
    },
    {
        question: "Can I get a report on the status of all investigational products (IP) in my study?",
        answer: "Yes. The module includes several inventory and shipment reports. The 'Inventory Status Report' gives you a real-time snapshot of stock levels at every site and warehouse, while the 'Shipment Detailed Report' tracks the full lifecycle of every shipment."
    },
    {
        question: "Is it possible to track the entire lifecycle of a subject in a report?",
        answer: "Absolutely. The 'Subject Lifecycle Report' provides a complete history for each subject, from screening and randomization to every visit, IP dispensation, and finally to study completion or withdrawal. This gives you full visibility into the subject's journey through the trial."
    }
];

export const sampleManagementFaq: FAQItem[] = [
    {
        question: "What is the difference between 'Sample Status' and 'Sample Inventory Status'?",
        answer: "'Sample Status' tracks the lifecycle of the sample itself (e.g., Identified, Collected, Analysed). 'Sample Inventory Status' tracks the physical state and location of the sample container (e.g., In-Site-Storage, In-Transit, At-Lab, Destroyed). Together, they provide a complete chain-of-custody."
    },
    {
        question: "How does the system handle sample collection at specific visit timepoints?",
        answer: "In the 'Sample Timepoints' configuration, you define exactly which samples need to be collected at each subject visit (e.g., 'Blood' and 'Urine' at 'Visit 2'). When a site user opens that visit for a subject, the system automatically prompts them to record the collection of those specific samples."
    },
    {
        question: "Can the system manage shipments to both central and local labs?",
        answer: "Yes. The Sample Shipments feature allows you to create shipments from a clinical site to any pre-defined destination, whether it's a central lab for the whole study or a local lab associated with that specific site."
    },
    {
        question: "How are sample labels generated?",
        answer: "The Sample Management module is fully integrated with the Label Management module. When a sample is generated or collected, you can trigger a workflow to request, approve, and print a unique, compliant barcode or QR code label for that specific sample container."
    },
    {
        question: "What happens if a sample is recorded as 'Not Collected'?",
        answer: "If a planned sample cannot be collected, the user can mark it as 'Not Collected' and must provide a reason from a pre-configured list (e.g., 'Subject Refused', 'Insufficient Quantity'). This action is captured in the audit trail, ensuring there are no gaps in the data."
    }
];

export const siteManagementFaq: FAQItem[] = [
    {
        question: "How does the module handle sites in different countries with different regulations?",
        answer: "The Site Management module allows for region-specific configurations. For example, for sites within the EU, you can enable GDPR-compliant settings that restrict the collection of sensitive subject metadata, ensuring you meet local data privacy requirements."
    },
    {
        question: "Can we set recruitment targets for each site?",
        answer: "Yes, you can define specific subject recruitment targets for each site. The system then tracks enrollment in real-time against these targets, giving you a clear view of which sites are performing well and which may need additional support."
    },
    {
        question: "What happens when a site is made 'Inactive'?",
        answer: "When a site's status is changed to 'Inactive', all transactional activities for that site, such as subject enrollment or data entry, are automatically blocked. This provides a clear operational control to pause site activities. An automated notification is also sent to all relevant users."
    },
    {
        question: "How are local labs associated with a specific site?",
        answer: "Within the Site Management module, you can directly associate one or more local labs (which are defined in the Organization Management module) with an investigation site. This creates a formal link, ensuring that sample collection and shipping workflows are automatically routed to the correct destination."
    },
    {
        question: "Is there an audit trail for changes made to site configurations?",
        answer: "Absolutely. Every change to a site's configuration—including status changes, updates to recruitment targets, or linking/delinking of labs—is captured in a detailed, timestamped audit trail to ensure full regulatory compliance and traceability."
    }
];

export const studyManagementFaq: FAQItem[] = [
    {
        question: "How does the module handle protocol amendments?",
        answer: "The Study Version Management feature is designed for this. You can create a new version of the study, make necessary changes to the protocol (e.g., add a visit, change a form), and then deploy it. The system manages the transition, ensuring data integrity and providing a full audit trail of all versions."
    },
    {
        question: "What is the difference between 'Live' and 'Training' mode?",
        answer: "'Live' mode is for the actual clinical trial with real patient data. 'Training' mode creates a sandboxed copy of the study configuration where users can practice data entry and workflows without affecting the live study data. This is ideal for User Acceptance Testing (UAT) and training new site staff."
    },
    {
        question: "Can study configurations be reused for new trials?",
        answer: "Yes. The platform is designed to promote reusability. You can copy an entire study build, including its forms, rules, and visit schedules, to use as a template for a new study. This saves a significant amount of time and reduces setup errors."
    },
    {
        question: "How is data access controlled at the study level?",
        answer: "Each study is linked to a specific customer (Sponsor/CRO). Users are then assigned roles within the context of that study. This ensures that a user working on 'Study A' for 'Sponsor X' has no visibility or access to the data in 'Study B', even if it's run by the same sponsor."
    },
    {
        question: "What kind of metadata can be exported?",
        answer: "You can export a comprehensive package of study metadata, which includes the full study configuration, visit schedule, CRF designs (annotated CRFs), data validation rules, and more. This is crucial for regulatory submissions and for archival purposes."
    }
];

export const subjectManagementFaq: FAQItem[] = [
    {
        question: "How does the system prevent enrolling subjects who don't meet eligibility criteria?",
        answer: "During the Screening and Enrolment process, the system validates subject metadata (like age and gender) against the study's pre-configured eligibility rules. If a subject does not meet the criteria, the system will prevent enrolment and flag the discrepancy."
    },
    {
        question: "Can the randomization module handle complex schemes like stratification?",
        answer: "Yes. Our randomization engine is highly robust. It supports simple, block, and stratified randomization. You can define stratification factors (e.g., age group, disease severity), and the system will ensure that treatment assignments are balanced across these strata."
    },
    {
        question: "What happens if a subject misses a visit?",
        answer: "The visit management workflow is flexible. If a subject misses a scheduled visit, site users can record it as 'Missed'. This is captured in the subject's record and audit trail. The system can be configured to either skip that visit's activities or require them to be completed at a later time, depending on the protocol."
    },
    {
        question: "How is subject unblinding controlled?",
        answer: "Unblinding is a highly restricted action. It requires specific, role-based permissions and is not available to general users. When an authorized user performs an unblinding, they must provide a mandatory reason. The action is logged in an irreversible audit trail, and notifications are sent to key study personnel."
    },
    {
        question: "What is the 'Subject Replacement' feature used for?",
        answer: "If a subject withdraws from a study, the 'Subject Replacement' feature allows you to enroll a new subject who can take the place of the withdrawn one within the randomization scheme. This is crucial for maintaining the statistical power and balance of the treatment arms, especially in studies with complex designs."
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
    
export const aiFaqItems: FAQItem[] = [
    {
      question: 'What is SyMetric Business AI?',
      answer:
        'SyMetric Business AI is a suite of solutions that embeds AI into your core business processes, connecting finance, supply chain, procurement, sales, marketing, and human resources.'
    },
    {
      question: 'How is SyMetric Business AI relevant, reliable, and responsible?',
      answer:
        'SyMetric AI is relevant because it is built into the SyMetric applications that power your most mission-critical processes. It is reliable because it is built on decades of industry expertise and deep process knowledge. It is responsible because it is delivered with the highest levels of concern for security, privacy, compliance, and ethics.'
    },
    {
      question: 'Is Joule available today?',
      answer:
        'Joule is available in the latest editions of SyMetric solutions and is planned to be available in other solutions soon. For more information, refer to the SyMetric product roadmap.'
    },
    {
      question: 'What is the pricing model for Joule?',
      answer:
        'Joule is included in the standard license for SyMetric cloud solutions. For more information on pricing, please contact our sales team.'
    },
    {
      question: 'How does Joule work?',
      answer:
        'Joule is a natural language, generative AI copilot that is deeply integrated into SyMetric’s portfolio of cloud solutions. It quickly sorts through and contextualizes data from multiple systems to surface smarter insights.'
    },
];
    
