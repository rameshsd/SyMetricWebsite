
import { Metadata } from 'next';
import { SyMetricBusinessAI } from '@/components/layout/SyMetricBusinessAI';
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
import { SectionTitle } from '@/components/shared/section-title';

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

    return (
        <div>
            <SyMetricBusinessAI 
              title="Clinical Supplies Management Module"
              subtitle="End-to-end control of Investigational Products (IP), packaging, inventory, shipments, retention, and temperature management across global clinical trials."
            />
            
            <section>
                <div className="container">
                     <SectionTitle
                        title="Key Capabilities"
                        className="mb-16 text-center"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map(cap => (
                           <Card key={cap.title} className="group flex flex-col items-start text-left p-6 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                               <div className="p-4 rounded-xl bg-blue-100 dark:bg-blue-900/20 mb-4">
                                    <cap.icon className="h-16 w-16 text-blue-600 dark:text-blue-400" strokeWidth={2.5} />
                               </div>
                               <div className="flex-grow">
                                  <h3 className="font-semibold text-lg">{cap.title}</h3>
                                  <p className="text-muted-foreground text-sm mt-1">{cap.description}</p>
                               </div>
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
