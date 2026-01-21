
import Image from 'next/image';
import Link from 'next/link';
import { resources } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import { SectionTitle } from '@/components/shared/section-title';

export const metadata: Metadata = {
  title: 'Resources',
};

const ResourceCard = ({ resource }: { resource: (typeof resources)[0] }) => {
    const placeholder = PlaceHolderImages.find((p) => p.id === resource.image);
    return (
        <Card key={resource.id} className="h-full flex flex-col group overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
            <div className="relative w-full h-48 overflow-hidden">
            {placeholder && (
                <Image
                    src={placeholder.imageUrl}
                    alt={resource.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={placeholder.imageHint}
                />
            )}
            </div>
            <CardContent className="p-8 flex-grow flex flex-col">
            <div className="flex-grow">
                <Badge variant="secondary" className="mb-2">{resource.category}</Badge>
                <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                <Link href={`/resources/${resource.slug}`}>{resource.title}</Link>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{resource.excerpt}</p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">{resource.date}</p>
            </CardContent>
        </Card>
    );
};


export default function ResourcesPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'resources-hero');

    const newsAndEvents = resources.filter(r => r.category === 'News and Events');
    const blog = resources.filter(r => r.category === 'Blog');
    const whitePapersAndCaseStudies = resources.filter(r => r.category === 'White Papers and Case Studies');

    return (
        <>
            <section className="py-20 bg-secondary/50">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                      <div className="text-left">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Insights & Resources</h1>
                        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                          Explore our collection of articles, whitepapers, and success stories to stay ahead in the world of clinical research.
                        </p>
                      </div>
                      <div className="relative h-80 w-full">
                          {heroImage && (
                              <Image
                                  src={heroImage.imageUrl}
                                  alt={heroImage.description}
                                  data-ai-hint={heroImage.imageHint}
                                  fill
                                  className="object-cover rounded-2xl"
                              />
                          )}
                      </div>
                    </div>
                </div>
            </section>
            
            {newsAndEvents.length > 0 && (
                 <section>
                    <div className="container">
                        <SectionTitle title="News and Events" className="mb-12" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                           {newsAndEvents.map(resource => <ResourceCard key={resource.id} resource={resource} />)}
                        </div>
                    </div>
                </section>
            )}
            
            {blog.length > 0 && (
                <section>
                    <div className="container">
                        <SectionTitle title="Blog" className="mb-12" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                           {blog.map(resource => <ResourceCard key={resource.id} resource={resource} />)}
                        </div>
                    </div>
                </section>
            )}

            {whitePapersAndCaseStudies.length > 0 && (
                 <section>
                    <div className="container">
                        <SectionTitle title="White Papers and Case Studies" className="mb-12" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                           {whitePapersAndCaseStudies.map(resource => <ResourceCard key={resource.id} resource={resource} />)}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
