
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from '../shared/section-title';
import type { SolutionCapability } from '@/lib/types';

type CapabilitiesSectionProps = {
  capabilities?: SolutionCapability[];
};

const defaultTabs = [
  { id: 'financials', label: 'Study Financials' },
  { id: 'site-management', label: 'Site & Patient Management' },
  { id: 'data-automation', label: 'Data Automation' },
  { id: 'entity-close', label: 'Entity Close' },
  { id: 'corporate-close', label: 'Corporate Close' },
  { id: 'central-finance', label: 'Central Finance' },
];

const defaultContent: { [key: string]: any } = {
  financials: {
    image: PlaceHolderImages.find(p => p.id === 'financial-dashboard'),
    features: [
      {
        title: 'A single source of trial truth',
        description: 'Record all trial accounting data in one source supporting multiple accounting principles and real-time ledger valuations.',
      },
      {
        title: 'Efficient financial transactions recording',
        description: 'Increase finance efficiency and accuracy with automatic postings for site payments, vendor invoices, and flexible workflows.',
      },
      {
        title: 'AI-enhanced user guidance',
        description: 'Understand complex accounting settings with built-in or in-context natural language assistance.',
      },
      {
        title: 'Unified entity and group close',
        description: 'Improve governance and enable compliance of entity and corporate close using real-time insights and automated processes.',
      },
    ],
  },
};

export function CapabilitiesSection({ capabilities }: CapabilitiesSectionProps) {
  const tabs = capabilities && capabilities.length > 0
    ? capabilities.map(c => ({ id: c.id, label: c.title }))
    : defaultTabs;
  
  const content = capabilities && capabilities.length > 0
    ? capabilities.reduce((acc, cap) => {
        acc[cap.id] = {
          image: PlaceHolderImages.find(p => p.id === cap.imageId),
          features: [{ title: cap.title, description: cap.description }],
        };
        return acc;
      }, {} as { [key: string]: any })
    : defaultContent;

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = content[activeTab];
  const mainTitle = capabilities ? "Solution Offerings" : "Explore Clinical Trial Management Capabilities";
  const mainDescription = capabilities ? "" : "Streamline clinical trial processes and improve accuracy with automation.";


  return (
    <section className="bg-background">
      <div className="container">
        <SectionTitle
            title={mainTitle}
            description={mainDescription}
        />

        <div className="border-b mt-16">
          <div className="flex space-x-8 overflow-x-auto -mb-px px-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm',
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12">
          {activeContent && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border shadow-sm">
                {activeContent.image && (
                  <Image
                    src={activeContent.image.imageUrl}
                    alt={activeContent.image.description}
                    data-ai-hint={activeContent.image.imageHint}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="space-y-8">
                {activeContent.features.map((feature: {title: string; description: string}) => (
                  <div key={feature.title}>
                    <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground mt-2">{feature.description}</p>
                  </div>
                ))}
                 { !capabilities && (
                    <Button variant="link" asChild className="p-0 h-auto text-base mt-4">
                      <Link href="#">
                        Explore SyMetric Cloud Public Edition <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
