'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from '../shared/section-title';

export const allCoreProducts = [
  {
    slug: 'clinical-trial-platform',
    title: 'Clinical Trial Platform',
    description: 'A unified, end-to-end platform for managing trials, sites, subjects, and data with maximum efficiency.',
    link: '/solutions/clinical-trial-platform',
    linkText: 'Explore Clinical Trial Platform'
  },
  {
    slug: 'irt-iwrs',
    title: 'IRT/IWRS',
    description: 'Dynamic randomization, patient enrollment, and clinical supply allocation across global trial sites.',
    link: '/solutions/irt-iwrs',
    linkText: 'Explore IRT/IWRS'
  },
  {
    slug: 'edc',
    title: 'EDC (Electronic Data Capture)',
    description: 'Simplify electronic data capture, automated validation rules, eCRFs, query management, and SDV.',
    link: '/solutions/edc',
    linkText: 'Explore EDC'
  },
  {
    slug: 'ctm',
    title: 'CTM (Clinical Trial Management)',
    description: 'Centralized repository to maintain global objects, investigation sites, laboratories, and data libraries.',
    link: '/solutions/ctm',
    linkText: 'Explore CTM'
  },
  {
    slug: 'trial-analytics',
    title: 'Trial Analytics',
    description: 'Leverage real-time data and advanced analytics to derive actionable insights, KPIs, and progress trends.',
    link: '/solutions/trial-analytics',
    linkText: 'Explore Trial Analytics'
  },
  {
    slug: 'sample-management',
    title: 'Sample Management',
    description: 'End-to-end tracking of clinical bio-samples from collection and labeling to cold storage and analysis.',
    link: '/solutions/sample-management',
    linkText: 'Explore Sample Management'
  },
  {
    slug: 'epro',
    title: 'ePro (Electronic Patient-Reported Outcomes)',
    description: 'Capture symptoms, electronic diaries, and quality of life outcomes directly and securely from patients.',
    link: '/solutions/epro',
    linkText: 'Explore ePro'
  }
];

interface RelatedProductsSectionProps {
  currentSlug?: string;
  relatedContent?: any;
  customImage?: string;
}

export function RelatedProductsSection({ currentSlug, relatedContent }: RelatedProductsSectionProps) {
    const pathname = usePathname();
    const cleanPath = pathname ? pathname.replace(/\/$/, '') : '';
    const activeSlug = currentSlug || (cleanPath ? cleanPath.split('/').pop() : '');

    const productsToDisplay = allCoreProducts.filter(product => {
        if (!activeSlug) return true;
        return product.slug !== activeSlug && !product.link.endsWith(`/${activeSlug}`);
    });

    const title = relatedContent?.title || "Explore More Products";

    return (
        <section className="bg-secondary/50">
            <div className="container">
                <SectionTitle 
                    title={title}
                />

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsToDisplay.map(product => {
                        return (
                            <Card 
                                key={product.slug} 
                                className="bg-background border-2 border-primary shadow-lg md:scale-[1.02] bg-primary/[0.01] transition-all duration-300 rounded-2xl flex flex-col"
                            >
                                <CardContent className="p-8 flex flex-col flex-grow">
                                    <h3 className="font-bold text-lg text-foreground">{product.title}</h3>
                                    <p className="text-muted-foreground mt-2 flex-grow text-sm leading-relaxed">{product.description}</p>
                                    <Link href={product.link} className="text-primary font-semibold text-sm flex items-center gap-1 mt-6 pt-2">
                                        {product.linkText} <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
