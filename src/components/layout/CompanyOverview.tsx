
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { SectionTitle } from '../shared/section-title';

const FactItem = ({ value, label }: { value: string; label: string }) => (
    <div className="text-center">
        <p className="text-4xl lg:text-5xl font-bold text-primary">{value}</p>
        <p className="text-sm text-muted-foreground uppercase tracking-wider mt-2">{label}</p>
    </div>
);


export function CompanyOverview() {
    const facts = {
      founded: '2012',
      employees: '50+',
      countries: '3+',
      customers: '100+'
    };

    const overviewImage = PlaceHolderImages.find(p => p.id === 'about-hero');

    return (
        <div className="w-full">
            <div className="max-w-6xl mx-auto">
                 <SectionTitle title="SyMetric Company Information" className="mb-12 text-left" />
                <Card className="grid md:grid-cols-2 items-center bg-card shadow-lg rounded-2xl overflow-hidden">
                    <div className="p-8 md:p-12 space-y-8">
                        <p className="text-muted-foreground text-lg">
                            SyMetric is a leader in clinical trial technology, providing an integrated platform to manage trials with accuracy and ease. Since 2012, we have been trusted by Pharma Companies, CROs, and Academic Institutions to accelerate research and improve outcomes.
                        </p>
                        <div>
                             <h3 className="text-2xl font-bold mb-6">Fast facts</h3>
                             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <FactItem value={facts.founded} label="Founded" />
                                <FactItem value={facts.employees} label="Employees" />
                                <FactItem value={facts.countries} label="Countries" />
                                <FactItem value={facts.customers} label="Trials" />
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center p-8">
                         {overviewImage && (
                            <div className="relative w-80 h-80 md:w-96 md:h-96">
                                <Image
                                    src={overviewImage.imageUrl}
                                    alt="SyMetric Team"
                                    data-ai-hint="team collaboration"
                                    fill
                                    className="object-cover rounded-full"
                                />
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    )
}
