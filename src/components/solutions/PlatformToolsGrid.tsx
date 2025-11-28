
'use client';

import {
  UserAccessIcon,
  OrgManagementIcon,
  StudyManagementIcon,
  SiteManagementIcon,
  SuppliesManagementIcon,
  SubjectManagementIcon,
  DataManagementIcon,
  LabManagementIcon,
  MedicalCodingIcon,
  DataServicesIcon,
  DigitalLearningIcon,
  HelpSupportIcon,
} from '@/components/icons/platform-tool-icons';

const toolsData = [
  {
    id: 'iam',
    icon: UserAccessIcon,
    label: 'Identity and Access Management',
    description: 'Role-Based Access Control and Self-Service Account Management.',
  },
  {
    id: 'org-management',
    icon: OrgManagementIcon,
    label: 'Organization Management',
    description: 'Manage all organizations participating in your trials from a central location.',
  },
  {
    id: 'study-management',
    icon: StudyManagementIcon,
    label: 'Study Management',
    description: 'Define, configure, and oversee all aspects of your clinical studies.',
  },
  {
    id: 'site-management',
    icon: SiteManagementIcon,
    label: 'Site Management',
    description: 'Streamline site activation, monitoring, and communication.',
  },
  {
    id: 'supplies-management',
    icon: SuppliesManagementIcon,
    label: 'Clinical Supplies Management',
    description: 'Track and manage investigational products and trial supplies in real-time.',
  },
  {
    id: 'subject-management',
    icon: SubjectManagementIcon,
    label: 'Subject Management',
    description: 'Handle subject enrollment, randomization, and tracking throughout the trial lifecycle.',
  },
  {
    id: 'data-management',
    icon: DataManagementIcon,
    label: 'Data Management',
    description: 'Global Library, Data Designer, Data Validation Manager, Data Collection, Discrepancy Management, Source Data Verification, and Data Exports',
  },
  {
    id: 'lab-management',
    icon: LabManagementIcon,
    label: 'Lab Management',
    description: 'Manage lab data, normal ranges, and sample tracking with ease.',
  },
  {
    id: 'medical-coding',
    icon: MedicalCodingIcon,
    label: 'Medical Coding',
    description: 'Standardize medical terms with integrated coding dictionaries like MedDRA and WHODrug.',
  },
  {
    id: 'data-services',
    icon: DataServicesIcon,
    label: 'Data Services',
    description: 'Custom data exports, integrations, and reporting services.',
  },
  {
    id: 'learning',
    icon: DigitalLearningIcon,
    label: 'Digital Learning',
    description: 'Provide training and certification for trial personnel directly on the platform.',
  },
  {
    id: 'support',
    icon: HelpSupportIcon,
    label: 'Help and Support',
    description: 'Access our dedicated support team and comprehensive knowledge base.',
  },
];


export function PlatformToolsGrid() {

  return (
    <section className="bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            Overview of Tools on Our Platform
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-prose mx-auto">
            A comprehensive, modular suite to power every aspect of your clinical trial.
          </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsData.map((tool) => (
                <div key={tool.id} className="group p-6 bg-background rounded-2xl border transition-shadow hover:shadow-lg flex flex-col text-left">
                    <div className="flex items-center justify-start gap-4 mb-4">
                        <div 
                            className="flex-shrink-0 h-20 w-20 rounded-lg flex items-center justify-center"
                        >
                            <tool.icon className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="text-base font-bold text-foreground">{tool.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 flex-grow">{tool.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
