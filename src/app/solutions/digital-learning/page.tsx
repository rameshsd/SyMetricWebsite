
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { PageHeader } from '@/components/layout/PageHeader';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { digitalLearningFaq } from '@/lib/data';
import { MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Learning - SyMetric',
  description: 'Empowering users with role-based training modules, interactive content, and automated certification to ensure platform proficiency and compliance.',
};

export default function DigitalLearningPage() {
    const secondaryNav = [
        { label: 'FAQ', href: '#faq' },
    ];
    return (
        <>
            <SyMetricBusinessAI 
              title="Digital Learning"
              subtitle="Empowering users with role-based training modules, interactive content, and automated certification to ensure platform proficiency and compliance."
              heroImageId="digital-learning-hero"
            />
            <PageHeader title="Digital Learning" secondaryNav={secondaryNav} />
            <div id="overview">
                
                {/* Add more sections here */}
                <FaqAccordion faqs={digitalLearningFaq} />
            </div>
        </>
    );
}
