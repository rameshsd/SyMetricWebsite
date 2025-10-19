import Image from 'next/image';
import { Section } from '@/components/shared/section';
import { SectionTitle } from '@/components/shared/section-title';
import { leadership, timeline } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};


const WhoWeAre = () => {
    const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-hero');
    return (
        <Section className="pt-0 md:pt-0">
             <div className="relative h-[400px] md:h-[500px] flex items-center justify-center text-white rounded-lg overflow-hidden">
                {aboutHeroImage && (
                <Image
                    src={aboutHeroImage.imageUrl}
                    alt={aboutHeroImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutHeroImage.imageHint}
                />
                )}
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">About SyMetric Systems</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Our mission is to empower clinical researchers with technology that accelerates the delivery of life-changing therapies.</p>
                </div>
            </div>

            <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
                    <p className="mt-4 text-muted-foreground">To create a world where clinical research is seamless, efficient, and entirely data-driven, enabling faster access to innovative treatments for patients everywhere.</p>
                </div>
                 <div>
                    <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
                    <p className="mt-4 text-muted-foreground">Founded by a team of clinical research veterans and technology experts, SyMetric Systems was born from a shared frustration with the outdated, paper-based processes that slowed down vital research. We set out to build the digital infrastructure for the future of clinical trials.</p>
                </div>
            </div>
        </Section>
    )
}

const LeadershipTeam = () => (
    <Section className="bg-secondary/50 dark:bg-card">
        <SectionTitle title="Our Leadership" description="Meet the experienced team guiding our mission." />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {leadership.map(member => {
                const placeholder = PlaceHolderImages.find(p => p.id === member.image);
                return (
                    <Card key={member.name} className="text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <CardHeader>
                            {placeholder && (
                                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                                <Image 
                                    src={placeholder.imageUrl}
                                    alt={`Portrait of ${member.name}`}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={placeholder.imageHint}
                                />
                                </div>
                            )}
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-primary">{member.role}</p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    </Section>
)

const JourneyTimeline = () => (
    <Section>
        <SectionTitle title="Our Journey" description="Key milestones in our mission to transform clinical research." />
        <div className="mt-12 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />
            {timeline.map((item, index) => (
                <div key={item.year} className="relative mb-8">
                    <div className={cn("flex items-center", index % 2 === 0 ? "justify-start" : "justify-end")}>
                        <div className={cn("w-1/2 p-4", index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left")}>
                             <Card className="transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                                 <CardContent className="p-6">
                                    <p className="text-primary font-bold text-xl">{item.year}</p>
                                    <p className="mt-2 text-muted-foreground">{item.event}</p>
                                 </CardContent>
                             </Card>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full -translate-y-1/2 -translate-x-1/2 border-4 border-card" />
                </div>
            ))}
        </div>
    </Section>
)

export default function AboutPage() {
    return (
        <>
            <WhoWeAre />
            <LeadershipTeam />
            <JourneyTimeline />
        </>
    )
}
