
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
            />
            <PageHeader title="Digital Learning" secondaryNav={secondaryNav} />
            <div id="overview">
                 <section className="bg-diagram-violet text-white">
                    <div className="container">
                        <div className="flex items-start gap-6">
                            <div className="p-3 bg-white/20 rounded-lg">
                                <MessageSquare className="h-8 w-8 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold">SyMetric Solutions</h2>
                                <p className="text-white/80 mt-1">Explore our documentation or contact our support team for questions about our solutions.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Add more sections here */}
                <FaqAccordion faqs={digitalLearningFaq} />
            </div>
        </>
    );
}
