
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { AskAISection } from '@/components/shared/AskAISection';
import { PageHeader } from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Digital Learning - SyMetric',
  description: 'Empowering users with role-based training modules, interactive content, and automated certification to ensure platform proficiency and compliance.',
};

export default function DigitalLearningPage() {
    const secondaryNav = [
        { label: 'AI solutions', href: '#ai-solutions' },
        { label: 'AI business resources', href: '#ai-resources' },
        { label: 'Trustworthy AI', href: '#trustworthy-ai' },
        { label: 'News and insights', href: '#news-insights' },
        { label: 'AI in practice', href: '#ai-practice' },
        { label: 'Customer stories', href: '#customer-stories' },
        { label: 'FAQ', href: '#faq' },
    ];
    return (
        <div>
            <div id="overview">
                <SyMetricBusinessAI 
                  title="Digital Learning"
                  subtitle="Empowering users with role-based training modules, interactive content, and automated certification to ensure platform proficiency and compliance."
                />
            </div>
            <PageHeader title="Digital Learning" secondaryNav={secondaryNav} />
            <AskAISection />
            
            {/* Add more sections here */}
        </div>
    );
}
