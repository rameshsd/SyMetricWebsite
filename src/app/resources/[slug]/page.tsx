'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { resources } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Skeleton } from '@/components/ui/skeleton';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

function ArticleSkeleton() {
    return (
        <div className="container py-12">
            <div className="max-w-4xl mx-auto">
                <Skeleton className="h-5 w-1/2 mb-8" />
                <Skeleton className="h-10 w-3/4 mb-6" />
                <div className="space-y-4">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-5/6" />
                </div>
                <Skeleton className="h-48 w-full mt-8" />
            </div>
        </div>
    );
}

export default function ResourcePage() {
  const params = useParams();
  const slug = params.slug as string;
  const resource = resources.find(r => r.slug === slug);

  if (!resource) {
    notFound();
  }
  
  const breadcrumbItems = [
    { label: 'Resources', href: '/resources' },
    { label: resource.category, href: '#' },
    { label: resource.title },
  ];
  
  const image = PlaceHolderImages.find(p => p.id === resource.image);

  return (
    <section className="py-12 bg-background">
      <div className="container max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mt-4">{resource.title}</h1>
        
        <p className="text-sm text-muted-foreground mt-4 mb-8">
            Published on {resource.date}
        </p>

        {image && (
             <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-12 shadow-md">
                <Image src={image.imageUrl} alt={resource.title} fill className="object-cover" />
             </div>
        )}

        <div className="prose dark:prose-invert max-w-none">
            <p>{resource.excerpt}</p>
            {/* Full content would go here if available */}
            <p>More content coming soon for this resource...</p>
        </div>
      </div>
    </section>
  );
}
