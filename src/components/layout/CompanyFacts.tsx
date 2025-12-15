
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FactItem = ({ value, label }: { value: string; label: string }) => (
    <div className="text-center">
        <p className="text-4xl lg:text-5xl font-bold text-primary">{value}</p>
        <p className="text-sm text-muted-foreground uppercase tracking-wider mt-2">{label}</p>
    </div>
);

export function CompanyFacts() {
    const facts = {
      founded: '2012',
      employees: '50+',
      countries: '3+',
      customers: '100+'
    };

    return (
        <section className="w-full">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">SyMetric Company Information</h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-prose">
                        SyMetric is a leader in clinical trial technology, providing an integrated platform to manage trials with accuracy and ease. Since 2012, we have been trusted by Pharma Companies, CROs, and Academic Institutions to accelerate research and improve outcomes.
                    </p>
                    <Tabs defaultValue="fast-facts" className="w-full">
                        <div className="overflow-x-auto scrollbar-hide">
                            <TabsList className="inline-flex">
                                <TabsTrigger value="fast-facts">Fast facts</TabsTrigger>
                                <TabsTrigger value="locations">Worldwide Locations</TabsTrigger>
                                <TabsTrigger value="faqs">FAQs</TabsTrigger>
                                <TabsTrigger value="report">Integrated Report</TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="fast-facts" className="pt-10">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                                <FactItem value={facts.founded} label="Founded" />
                                <FactItem value={facts.employees} label="Employees" />
                                <FactItem value={facts.countries} label="Countries Served" />
                                <FactItem value={facts.customers} label="Successful Trials" />
                            </div>
                        </TabsContent>
                        <TabsContent value="locations">
                            <p className="text-muted-foreground p-8 text-center">We have a global presence, serving clients in the US, Europe, Latin America, and India.</p>
                        </TabsContent>
                        <TabsContent value="faqs">
                             <p className="text-muted-foreground p-8 text-center">Please visit our support page for frequently asked questions.</p>
                        </TabsContent>
                        <TabsContent value="report">
                             <p className="text-muted-foreground p-8 text-center">Our latest integrated report is available upon request.</p>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
