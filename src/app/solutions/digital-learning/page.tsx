
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { AskAISection } from '@/components/shared/AskAISection';
import { PageHeader } from '@/components/layout/PageHeader';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { aiFaqItems } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Digital Learning - SyMetric',
  description: 'Empowering users with role-based training modules, interactive content, and automated certification to ensure platform proficiency and compliance.',
};

export default function DigitalLearningPage() {
    const secondaryNav = [
        { label: 'Overview', href: '#overview' },
        { label: 'FAQ', href: '#faq' },
    ];
    return (
        <>
            <div id="overview">
                <SyMetricBusinessAI 
                  title="Digital Learning"
                  subtitle="Empowering users with role-based training modules, interactive content, and automated certification to ensure platform proficiency and compliance."
                />
            </div>
            <PageHeader title="Digital Learning" secondaryNav={secondaryNav} />
            <div>
                <AskAISection />
                
                {/* Add more sections here */}
                <FaqAccordion faqs={aiFaqItems} />
            </div>
        </>
    );
}
