import { companyInfo, teamMembers } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { GrowthStoryTimeline } from '@/components/layout/GrowthStoryTimeline';
import { WhySyMetricAI } from '@/components/layout/WhySyMetricAI';
import { PageHeader } from '@/components/layout/PageHeader';
import { CompanyFacts } from '@/components/layout/CompanyFacts';


export const metadata = {
  title: 'About Us - SyMetric',
  description: 'Learn about the history, mission, and team behind SyMetric.',
};

const sapBuildingImage = PlaceHolderImages.find((img) => img.id === 'sap-building');
const whatIsSapImage = PlaceHolderImages.find((img) => img.id === 'what-is-sap');
const sapLeadershipImage = PlaceHolderImages.find((img) => img.id === 'sap-leadership');
const sapHistoryImage = PlaceHolderImages.find((img) => img.id === 'sap-history');


const secondaryNav = [
    { label: 'Overview', href: '#overview' },
    { label: 'Our story', href: '#our-story' },
    { label: 'Our strategy', href: '#our-strategy' },
    { label: 'Our Growth Story', href: '#growth-story' },
    { label: 'Innovation', href: '#innovation' },
    { label: 'Our Team', href: '#our-team' },
]


export default function AboutPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Company Information"
        breadcrumb={{ href: '/about', label: 'About SyMetric' }}
        secondaryNav={secondaryNav}
        showTitle={true}
      />
      <section id="overview" className="w-full bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[400px] py-12">
                <div className="space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Global Company Information
                    </h1>
                    <p className="max-w-[600px] text-lg md:text-xl/relaxed mx-auto lg:mx-0">
                        With a global network of customers, partners, employees, and thought leaders, SyMetric helps the world run better and improves people's lives.
                    </p>
                    <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                        <Link href="#">
                            About SyMetric India
                        </Link>
                    </Button>
                </div>
                <div className="relative w-full h-[300px] lg:h-[400px]">
                    {sapBuildingImage && (
                        <div 
                            className="absolute inset-0 bg-blue-600"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)' }}
                        >
                            <Image
                                src={sapBuildingImage.imageUrl}
                                alt={sapBuildingImage.description}
                                data-ai-hint={sapBuildingImage.imageHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
      </section>

      <CompanyFacts />

      <section id="our-story" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">For more details, view the SyMetric Corporate Fact Sheet</div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">Our story</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-none">
                    {whatIsSapImage && <Image src={whatIsSapImage.imageUrl} alt={whatIsSapImage.description} data-ai-hint={whatIsSapImage.imageHint} width={600} height={400} className="rounded-lg object-cover aspect-video mb-4" />}
                    <CardContent className="p-0">
                        <h3 className="text-xl font-bold mb-2">What is SyMetric?</h3>
                        <p className="text-muted-foreground mb-4">Find out what "SyMetric" stands for, what we do, and how we help the world run better and improve people's lives.</p>
                        <Button variant="link" asChild className="px-0 text-primary">
                            <Link href="#">Learn more <ArrowRight className="ml-2"/></Link>
                        </Button>
                    </CardContent>
                </Card>
                 <Card className="border-0 shadow-none">
                    {sapLeadershipImage && <Image src={sapLeadershipImage.imageUrl} alt={sapLeadershipImage.description} data-ai-hint={sapLeadershipImage.imageHint} width={600} height={400} className="rounded-lg object-cover aspect-video mb-4" />}
                    <CardContent className="p-0">
                        <h3 className="text-xl font-bold mb-2">SyMetric leadership</h3>
                        <p className="text-muted-foreground mb-4">Learn more about SyMetric SE executives by viewing their photos, bios, and roles.</p>
                        <Button variant="link" asChild className="px-0 text-primary">
                            <Link href="#">View the SyMetric SE Executive Board <ArrowRight className="ml-2"/></Link>
                        </Button>
                    </CardContent>
                </Card>
                 <Card className="border-0 shadow-none">
                    {sapHistoryImage && <Image src={sapHistoryImage.imageUrl} alt={sapHistoryImage.description} data-ai-hint={sapHistoryImage.imageHint} width={600} height={400} className="rounded-lg object-cover aspect-video mb-4" />}
                    <CardContent className="p-0">
                        <h3 className="text-xl font-bold mb-2">SyMetric history</h3>
                        <p className="text-muted-foreground mb-4">Explore our long history of business innovation, starting with five entrepreneurial programmers who foun...</p>
                         <Button variant="link" asChild className="px-0 text-primary">
                            <Link href="#">Learn more about our history <ArrowRight className="ml-2"/></Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section id="our-strategy" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To accelerate the delivery of new therapies to patients by providing innovative, user-friendly, and compliant digital solutions for clinical research.
              </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-start gap-4">
                    <Check className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold">Grounded in Science</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Drive impact with a platform built on a deep understanding of clinical trial methodologies and regulatory requirements.
                      </p>
                    </div>
                  </div>
                </div>
                 <div className="space-y-2">
                  <div className="flex items-start gap-4">
                     <Check className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold">Unified Experience</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Maximise the value of your research with a single, integrated platform that seamlessly connects data, sites, and stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
                 <div className="space-y-2">
                  <div className="flex items-start gap-4">
                    <Check className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold">Unmatched Efficiency</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Solve complex challenges and reduce trial timelines with automated workflows and intelligent data management.
                      </p>
                    </div>
                  </div>
                </div>
            </div>

            <div className="flex justify-center order-first lg:order-last">
              {PlaceHolderImages.find(i => i.id === 'whats-new-data') && (
                <Image
                  src={PlaceHolderImages.find(i => i.id === 'whats-new-data')!.imageUrl}
                  alt={PlaceHolderImages.find(i => i.id === 'whats-new-data')!.description}
                  data-ai-hint={PlaceHolderImages.find(i => i.id === 'whats-new-data')!.imageHint}
                  width={550}
                  height={400}
                  className="rounded-xl shadow-2xl object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

       <WhySyMetricAI />

        <GrowthStoryTimeline />

      <section id="our-team" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {companyInfo.history}
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 py-12">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-center">
                    <Avatar className="h-24 w-24 border-4 border-primary/20">
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${member.id}`} />
                      <AvatarFallback>{member.avatar}</AvatarFallback>
                    </Avatar>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-headline">{member.name}</CardTitle>
                  <p className="text-primary">{member.role}</p>
                   <p className="text-muted-foreground text-sm mt-2">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
