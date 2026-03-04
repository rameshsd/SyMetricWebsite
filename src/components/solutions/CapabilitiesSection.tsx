'use client';

import { useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionTitle } from '../shared/section-title';
import type { SolutionCapability } from '@/lib/types';
import {
  Shuffle,
  Users,
  MapPin,
  Package,
  FilePlus,
  ShieldCheck,
  SearchCheck,
  AlertTriangle,
  Code2,
  FileCode,
  Shield,
  Building,
  Settings,
  Activity,
  Lock,
  Database,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type CapabilitiesSectionProps = {
  capabilities?: SolutionCapability[];
};

const iconMap: { [key: string]: React.FC<any> } = {
  // IRT
  randomization: Shuffle,
  'subject-management': Users,
  'sites-management': MapPin,
  'clinical-supplies-management': Package,
  // EDC
  'ecrf-management': FilePlus,
  'sdv': ShieldCheck,
  'query-management': SearchCheck,
  'ae-sae-reporting': AlertTriangle,
  'medical-coding': FileCode,
  // CTM
  'user-access-management': Shield,
  'organization-sites-master': Building,
  'unified-study-builder': Settings,
  'global-data-libraries': Database,
  'real-time-reporting': Activity,
  'security-compliance-manager': Lock,
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
              const Icon = iconMap[capability.id] || capability.icon;
              return (
                <div key={capability.id} className="bg-blue-900/50 p-6 rounded-2xl h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-4 mb-4">
                        {Icon && <Icon className="h-10 w-10 text-pink-400 flex-shrink-0" strokeWidth={2} />}
                        <h3 className="text-lg font-bold text-white mt-1">{capability.title}</h3>
                    </div>
                    <p className="text-blue-200 flex-grow">{capability.description}</p>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  );
}
