
import { CapabilitiesSection } from '@/components/solutions/CapabilitiesSection';
import { SectionTitle } from '@/components/shared/section-title';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sandbox",
    description: "A page for testing and storing components."
}

export default function SandboxPage() {
    return (
        <div className="py-10">
            <div className="container text-center">
                <SectionTitle title="Sandbox" description="This is a hidden page for component testing." />
            </div>

            <div className="mt-10 border-t pt-10">
                 <CapabilitiesSection />
            </div>
        </div>
    )
}
