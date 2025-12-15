
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
import { AskAISection } from '@/components/shared/AskAISection';

export const metadata: Metadata = {
  title: 'Digital Learning - SyMetric',
  description: 'Empowering users with role-based training modules, interactive content, and automated certification to ensure platform proficiency and compliance.',
};

export default function DigitalLearningPage() {
    return (
        <div>
            <SyMetricBusinessAI 
              title="Digital Learning"
              subtitle="Empowering users with role-based training modules, interactive content, and automated certification to ensure platform proficiency and compliance."
            />
            
            <AskAISection />
            
            {/* Add more sections here */}
        </div>
    );
}
