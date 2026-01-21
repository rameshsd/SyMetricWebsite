
export type ContentField = {
    name: string;
    label: string;
    type: 'text' | 'textarea';
    defaultValue: string;
};

export type PageSchema = {
    id: string;
    label: string;
    href: string;
    description: string;
    fields: ContentField[];
};

export const contentSchemas: { [key: string]: PageSchema } = {
    about: {
        id: 'about',
        label: 'About Us',
        href: '/about',
        description: 'Edit the hero, vision, and mission statements on the About Us page.',
        fields: [
            { name: 'heroTitle', label: 'Hero Title', type: 'text', defaultValue: 'Global Company Information' },
            { name: 'heroSubtitle', label: 'Hero Subtitle', type: 'textarea', defaultValue: 'With a global network of customers, partners, employees, and thought leaders, SyMetric helps the world run better and improves people\'s lives.' },
            { name: 'visionSemiboldText', label: 'Vision Main Point', type: 'textarea', defaultValue: 'To accelerate the impact of clinical research on healthcare outcomes through digital interventions.'},
            { name: 'visionDescription', label: 'Vision Description', type: 'textarea', defaultValue: 'We are committed to building technology solutions that stimulate research for the advancement of Patient-Centric medical science. At the core of our vision lies our efforts to make clinical research less resource-intensive and more affordable.'},
            { name: 'missionSemiboldText', label: 'Mission Main Point', type: 'textarea', defaultValue: 'To transform the drug development landscape.'},
            { name: 'missionDescription', label: 'Mission Description', type: 'textarea', defaultValue: 'The SyMetric team works persistently towards this mission by helping systems adopt innovative digital technologies that improve productivity, lower costs, and assure safety.'},
        ]
    },
};
