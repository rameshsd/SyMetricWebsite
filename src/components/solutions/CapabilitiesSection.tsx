'use client';

import { useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionTitle } from '../shared/section-title';
import type { SolutionCapability } from '@/lib/types';
import { RandomizationIcon, SubjectManagementIcon, SitesManagementIcon, ClinicalSuppliesIcon } from '../icons/solution-offering-icons';
import { LucideIcon } from 'lucide-react';

type CapabilitiesSectionProps = {
  capabilities?: SolutionCapability[];
};

const iconMap: { [key: string]: React.FC<any> } = {
  randomization: RandomizationIcon,
  'subject-management': SubjectManagementIcon,
  'sites-management': SitesManagementIcon,
  'clinical-supplies-management': ClinicalSuppliesIcon,
};

export function CapabilitiesSection({ capabilities }: CapabilitiesSectionProps) {
  if (!capabilities || capabilities.length === 0) {
    return null; // Don't render anything if there are no capabilities
  }
  
  const mainTitle = "Solution Offerings";
  
  return (
    <section className="bg-sap-gradient text-primary-foreground">
      <div className="container">
        <SectionTitle
            title={mainTitle}
            className="text-white"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability) => {
              const Icon = capability.icon || iconMap[capability.id];
              return (
                <div key={capability.id} className="bg-primary/20 p-8 rounded-2xl h-full flex flex-col">
                  {Icon && (
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="h-20 w-20 text-violet-400" strokeWidth={1.5} />
                      <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                    </div>
                  )}
                  <p className="text-primary-foreground/80 flex-grow">{capability.description}</p>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  );
}
