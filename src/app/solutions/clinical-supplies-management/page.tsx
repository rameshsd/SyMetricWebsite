
import { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Package,
    Settings,
    Bell,
    Truck,
    Warehouse,
    ClipboardList,
    Thermometer,
    PackageSearch,
    FileCog,
    FileClock,
    FileCheck2,
    Users,
    FlaskConical,
    ShieldCheck,
    Repeat
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Clinical Supplies Management - SyMetric',
  description: 'End-to-end control of Investigational Products (IP), packaging, inventory, shipments, retention, and temperature management across global clinical trials.',
};

const capabilities = [
    {
        icon: Settings,
        title: "Study-Level IP Configuration",
        description: "Define rules for packaging, distribution, dispensing, retention, and monitoring for each study."
    },
    {
        icon: Bell,
        title: "IP Release & Retained Stocks Notifications",
        description: "Automated email and system notifications for released packaging lists with retained stock details."
    },
    {
        icon: Truck,
        title: "Automated Resupply Triggers",
        description: "Generate resupply requests automatically when inventory falls below minimum thresholds."
    },
    {
        icon: Warehouse,
        title: "Inventory Management",
        description: "Real-time stock visibility across Sponsors, Warehouses, Sites, Labs, and Retention Facilities."
    },
    {
        icon: PackageSearch,
        title: "Stock Allocation & Status Lifecycle",
        description: "Pre-allocate stocks and track each unit's status from Active to Dispensed or Destroyed."
    },
    {
        icon: FileCog,
        title: "Lot & Batch Management",
        description: "Track stock lots across inventory while maintaining blinded integrity and enforcing FEFO."
    },
    {
        icon: FileClock,
        title: "Expiry Management & Blinded Expiry",
        description: "Maintain actual and blinded expiry dates, preventing the use of expired stocks."
    },
    {
        icon: ClipboardList,
        title: "Shipment Requests & Workflows",
        description: "Manual and automated shipment request generation with configurable approval workflows."
    },
    {
        icon: Thermometer,
        title: "Temperature Monitoring",
        description: "Supports manual and automated temperature logging for cold-chain shipments with excursion alerts."
    },
    {
        icon: FileCheck2,
        title: "Dispensing & Shipping Restrictions",
        description: "Restrict shipping and dispensing of kits nearing their expiry dates based on study rules."
    },
    {
        icon: Users,
        title: "Subject-Specific Controls",
        description: "Manage dose titration, run-in medication, and subject-specific kit reservations."
    },
    {
        icon: Repeat,
        title: "API Integration & XML Generation",
        description: "Supports API-based shipment requests and generates structured XML records for downstream systems."
    },
];

export default function ClinicalSuppliesManagementPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'clinical-supplies-hero');

    return (
        <div>
            <PageHeader title="Clinical Supplies Management" breadcrumb={{ href: '/solutions', label: 'Solutions' }} />
            
            <section className="bg-secondary/50 py-20">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">End-to-End Control of Clinical Supplies</h1>
                        <p className="text-lg text-muted-foreground">The Clinical Supplies Management module delivers a powerful, fully compliant system for handling Investigational Products (IP) across sponsors, depots, warehouses, sites, and retention facilities. It consolidates configuration, inventory tracking, shipments, expiry controls, and more into a unified, audit-ready platform.</p>
                    </div>
                    {heroImage && (
                        <div className="relative h-80 rounded-2xl overflow-hidden">
                            <Image src={heroImage.imageUrl} alt={heroImage.description} data-ai-hint={heroImage.imageHint} fill className="object-cover" />
                        </div>
                    )}
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-16">Key Capabilities</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map(cap => (
                           <Card key={cap.title} className="bg-card p-6 rounded-lg border flex flex-col">
                               <CardHeader className="p-0">
                                   <div className="flex items-center gap-4">
                                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                         <cap.icon className="w-6 h-6 text-primary" />
                                      </div>
                                      <CardTitle className="text-lg">{cap.title}</CardTitle>
                                   </div>
                               </CardHeader>
                               <CardContent className="p-0 mt-4 flex-grow">
                                  <p className="text-muted-foreground text-sm">{cap.description}</p>
                               </CardContent>
                           </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="bg-secondary/50">
                <div className="container max-w-3xl mx-auto text-center">
                     <h2 className="text-3xl font-bold mb-4">A Mission-Critical Module</h2>
                     <p className="text-lg text-muted-foreground">The Clinical Supplies Management module ensures zero stockouts, protocol-aligned dispensing, regulatory compliance, and efficient warehouse-to-site operations for safe, compliant, and uninterrupted clinical trial execution.</p>
                </div>
            </section>
        </div>
    );
}
