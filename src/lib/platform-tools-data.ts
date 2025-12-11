

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

export const toolsData = [
    { 
        id: 'iam',
        icon: IdentityAccessIcon, 
        label: 'Identity and Access Management',
        description: 'Role-Based Access Control and Self-Service Account Management.',
        link: '/solutions/identity-and-access-management' 
    },
    { 
        id: 'org',
        icon: OrganizationIcon, 
        label: 'Organization Management',
        description: 'Manage all organizations participating in your trials from a central location.',
        link: '#' 
    },
    { 
        id: 'customer',
        icon: CustomerManagementIcon,
        label: 'Customer Management',
        description: 'Manage relationships and data for sponsors and CROs.',
        link: '#' 
    },
    { 
        id: 'study',
        icon: StudyIcon, 
        label: 'Study Management',
        description: 'Define, configure, and oversee all aspects of your clinical studies.',
        link: '/solutions/study-management' 
    },
    { 
        id: 'site',
        icon: SiteIcon, 
        label: 'Site Management',
        description: 'Streamline site activation, monitoring, and communication for efficient trial execution.',
        link: '/solutions/site-management' 
    },
    { 
        id: 'supplies',
        icon: SuppliesIcon, 
        label: 'Clinical Supplies Management',
        description: 'Track and manage investigational products and trial supplies in real-time across all sites.',
        link: '/solutions/clinical-supplies-management' 
    },
    { 
        id: 'subject',
        icon: SubjectIcon, 
        label: 'Subject Management',
        description: 'Handle subject enrollment, randomization, and tracking throughout the trial lifecycle.',
        link: '/solutions/subject-management' 
    },
    { 
        id: 'data',
        icon: DataManagementIcon, 
        label: 'Data Management',
        description: 'Ensure data quality with our EDC tools, including validation, query management, and exports.',
        link: '/solutions/data-management' 
    },
    { 
        id: 'lab',
        icon: LabIcon, 
        label: 'Lab Management',
        description: 'Manage lab data, normal ranges, and sample tracking with seamless integration.',
        link: '/solutions/lab-management' 
    },
    { 
        id: 'coding',
        icon: MedicalCodingIcon, 
        label: 'Medical Coding',
        description: 'Standardize medical terms with integrated coding dictionaries like MedDRA and WHODrug.',
        link: '/solutions/medical-coding',
    },
    { 
        id: 'reports',
        icon: ReportsIcon, 
        label: 'Reports',
        description: 'Generate insightful reports and visualizations for real-time trial oversight.',
        link: '#' 
    },
    { 
        id: 'learning',
        icon: DigitalLearningIcon, 
        label: 'Digital Learning',
        description: 'Provide training and certification for trial personnel directly on the platform.',
        link: '#' 
    },
    {
        id: 'data-services',
        icon: DataServicesIcon,
        label: 'Data Services',
        description: 'Custom data exports, integrations, and reporting services to meet unique needs.',
        link: '/solutions/data-services'
    },
    { 
        id: 'sample',
        icon: SampleManagementIcon, 
        label: 'Sample Management',
        description: 'Track the entire lifecycle of biological samples, from collection to storage and analysis.',
        link: '#' 
    },
    { 
        id: 'label',
        icon: LabelManagementIcon, 
        label: 'Label Management',
        description: 'Ensure compliance and accuracy with integrated tools for creating and managing drug labels.',
        link: '#',
    },
    { 
        id: 'support',
        icon: HelpSupportIcon, 
        label: 'Help and Support',
        description: 'Access our dedicated support team and comprehensive knowledge base 24/7.',
        link: '#' 
    },
];
