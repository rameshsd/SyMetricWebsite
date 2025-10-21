"use client";

import { companyInfo } from '@/lib/data';

const FactItem = ({ value, label }: { value: string; label: string }) => (
    <div className="text-center">
        <p className="text-4xl lg:text-5xl font-bold text-primary">{value}</p>
        <p className="text-sm text-muted-foreground uppercase tracking-wider">{label}</p>
    </div>
);

export function CompanyFacts() {
    const facts = companyInfo.facts;
    return (
        <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <FactItem value={facts.founded} label="Founded" />
                    <FactItem value={facts.employees} label="Employees" />
                    <FactItem value={facts.countries} label="Countries" />
                    <FactItem value={facts.customers} label="Customers" />
                </div>
            </div>
        </section>
    )
}
