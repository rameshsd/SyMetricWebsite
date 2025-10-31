
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Database,
  GanttChartSquare,
  Server,
  GraduationCap,
  LifeBuoy,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type ServiceTab = {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  imageId: string;
};

const services: ServiceTab[] = [
  {
    id: 'data-management',
    icon: Database,
    title: 'Clinical Data Management',
    subtitle: 'Clinical Data Management',
    description:
      'Ensure data quality and compliance with global standards using our high-quality and cost-effective Data Management services to support accurate collection, standardization, cleaning, and analysis of Study Data.',
    link: '/services/clinical-data-management',
    imageId: 'service-tab-dm',
  },
  {
    id: 'project-management',
    icon: GanttChartSquare,
    title: 'Project Management',
    subtitle: 'Project Management',
    description:
      'Manage your Clinical Trial effectively — from consulting, scoping, and monitoring to reporting and complying with regulations. We support you with all aspects of project management right from early phase to late phase Clinical Trials.',
    link: '/services/project-management',
    imageId: 'service-tab-pm',
  },
  {
    id: 'data-migration',
    icon: Server,
    title: 'Data Migration',
    subtitle: 'Data Migration',
    description:
      'Migrate your data onto our Cloud Solutions with ease while ensuring that Study Data remains integrated during the migration process. You can also leverage in-depth validations, extensive data reviews, and testing across our broad spectrum of solutions.',
    link: '/services/data-migration',
    imageId: 'service-tab-migration',
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Training',
    subtitle: 'Training',
    description:
      'Adopt our Platform and tools effortlessly using our comprehensive Online Training Services. Help your entire workforce get on board using tailor-made training modules that are designed for specific roles and responsibilities of a wide range of end users.',
    link: '/services/training',
    imageId: 'service-tab-training',
  },
  {
    id: 'support',
    icon: LifeBuoy,
    title: 'Support',
    subtitle: 'Support',
    description:
      'Enjoy round-the-clock technical assistance and get your Operational queries answered with the fastest turnaround time. Reach us any time and fall back on a support system renowned for performance, speed, and reliability.',
    link: '/services/support',
    imageId: 'service-tab-support',
  },
];

export function ServicesTabs() {
  const [activeTab, setActiveTab] = useState<ServiceTab>(services[0]);

  const activeImage = PlaceHolderImages.find(p => p.id === activeTab.imageId);

  return (
    <section>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Here’s our comprehensive range of services
          </h2>
          <p className="mt-2 text-muted-foreground">
            built on years of industry expertise
          </p>
        </div>

        <div className="border-b">
          <div
            className="flex space-x-8 overflow-x-auto -mb-px px-4"
            role="tablist"
          >
            {services.map(service => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service)}
                className={cn(
                  'whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm',
                  activeTab.id === service.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                )}
                role="tab"
                aria-selected={activeTab.id === service.id}
                aria-controls={`tab-panel-${service.id}`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 relative min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="w-full"
              role="tabpanel"
              id={`tab-panel-${activeTab.id}`}
            >
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3 relative aspect-[16/10] rounded-2xl overflow-hidden border shadow-sm bg-muted">
                  {activeImage && (
                    <Image
                      src={activeImage.imageUrl}
                      alt={activeTab.title}
                      data-ai-hint={activeImage.imageHint}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {activeTab.title}
                  </h3>
                  <p className="text-muted-foreground min-h-[100px]">
                    {activeTab.description}
                  </p>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={activeTab.link}>
                      Know more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
