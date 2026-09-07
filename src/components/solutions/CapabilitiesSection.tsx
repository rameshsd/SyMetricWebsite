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
  Bell,
  BookOpen,
  HeartPulse,
  Globe,
  ClipboardCheck,
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
  'automated-dm-review': ClipboardCheck,
  // CTM
  'user-access-management': Shield,
  'organization-sites-master': Building,
  'unified-study-builder': Settings,
  'global-data-libraries': Database,
  'real-time-reporting': Activity,
  'security-compliance-manager': Lock,
  // ePro
  'epro-pro-management': HeartPulse,
  'epro-diary-management': BookOpen,
  'epro-engagement-reminders': Bell,
  'epro-compliance-monitoring': Activity,
  'epro-secure-audit-trails': ShieldCheck,
  'epro-multilingual-byod': Globe,
};

export function CapabilitiesSection({ capabilities }: CapabilitiesSectionProps) {
  if (!capabilities || capabilities.length === 0) {
    return null; // Don't render anything if there are no capabilities
  }
  
  const mainTitle = "Solution Offerings";
  
  return (
    <section className="bg-[#00116F] text-primary-foreground">
      <div className="container">
        <SectionTitle
            title={mainTitle}
            className="text-white"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability) => {
              const Icon = iconMap[capability.id] || capability.icon;
              return (
                <div 
                  key={capability.id} 
                  className="p-6 rounded-2xl h-full flex flex-col shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-blue-400/30 hover:border-blue-300/50"
                  style={{ backgroundColor: '#1E40AF' }}
                >
                    <div className="flex items-start gap-4 mb-4">
                        {Icon && <Icon className="h-10 w-10 text-pink-300 flex-shrink-0" strokeWidth={2} />}
                        <h3 className="text-lg font-bold text-white mt-1">{capability.title}</h3>
                    </div>
                    <p className="text-blue-100 flex-grow leading-relaxed text-sm">{capability.description}</p>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  );
}
