"use client";

import { companyInfo } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FactItem = ({ value, label }: { value: string; label: string }) => (
    <div className="text-center">
        <p className="text-4xl lg:text-5xl font-bold text-primary">{value}</p>
        <p className="text-sm text-muted-foreground uppercase tracking-wider mt-2">{label}</p>
    </div>
);

export function CompanyFacts() {
    const facts = companyInfo.facts;
    return (
        <section className="w-full">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">SyMetric Company Information</h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-prose">
                        As a global leader in enterprise applications and business AI, SyMetric stands at the nexus of business and technology. For over 50 years, organisations have trusted SyMetric to bring out their best by uniting business-critical operations spanning finance, procurement, HR, supply chain, and customer experience.
                    </p>
                    <Tabs defaultValue="fast-facts" className="w-full">
                        <TabsList>
                            <TabsTrigger value="fast-facts">Fast facts</TabsTrigger>
                            <TabsTrigger value="locations">Worldwide Locations</TabsTrigger>
                            <TabsTrigger value="faqs">FAQs</TabsTrigger>
                            <TabsTrigger value="report">Integrated Report</TabsTrigger>
                        </TabsList>
                        <TabsContent value="fast-facts" className="pt-10">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                                <FactItem value={facts.founded} label="Founded" />
                                <FactItem value={facts.employees} label="Employees" />
                                <FactItem value={facts.countries} label="Countries" />
                                <FactItem value={facts.customers} label="Customers" />
                            </div>
                        </TabsContent>
                        <TabsContent value="locations">
                            <p className="text-muted-foreground p-8 text-center">Worldwide locations information goes here.</p>
                        </TabsContent>
                        <TabsContent value="faqs">
                             <p className="text-muted-foreground p-8 text-center">FAQs go here.</p>
                        </TabsContent>
                        <TabsContent value="report">
                             <p className="text-muted-foreground p-8 text-center">Integrated report information goes here.</p>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
