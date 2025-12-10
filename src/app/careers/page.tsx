'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { companyValues, employeeBenefits } from '@/lib/data';
import { CheckCircle, MapPin, Briefcase, Search } from 'lucide-react';
import Link from 'next/link';
import { ApplyForm } from '@/components/careers/ApplyForm';
import { SectionTitle } from '@/components/shared/section-title';
import { CareersHeroGraphic } from '@/components/careers/CareersHeroGraphic';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import type { JobOpening } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function JobDetailsDialog({ job, children }: { job: JobOpening; children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl">{job.title}</DialogTitle>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
                        <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                        </div>
                    </div>
                </DialogHeader>
                <div className="prose dark:prose-invert prose-sm max-w-none pt-4">
                    <ReactMarkdown>{job.fullDescription}</ReactMarkdown>
                </div>
                <div className="pt-4 flex justify-end">
                    <ApplyForm job={job} />
                </div>
            </DialogContent>
        </Dialog>
    )
}

function OpenPositions({ searchTerm, department, location }: { searchTerm: string; department: string; location: string }) {
    const firestore = useFirestore();
    const jobsQuery = useMemoFirebase(() => 
        firestore 
            ? query(collection(firestore, 'jobOpenings'), where('status', '==', 'Open')) 
            : null, 
        [firestore]
    );
    const { data: jobOpenings, isLoading } = useCollection<JobOpening>(jobsQuery);

    const filteredJobs = useMemo(() => {
        if (!jobOpenings) return [];
        return jobOpenings.filter(job => {
            const searchTermMatch = searchTerm.toLowerCase() 
                ? job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                  job.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  job.fullDescription.toLowerCase().includes(searchTerm.toLowerCase())
                : true;
            
            const departmentMatch = department && department !== 'all' ? job.department === department : true;
            const locationMatch = location && location !== 'all' ? job.location === location : true;
            
            return searchTermMatch && departmentMatch && locationMatch;
        });
    }, [jobOpenings, searchTerm, department, location]);

    if (isLoading) {
        return (
            <div className="mt-16 max-w-4xl mx-auto space-y-6">
                <Skeleton className="h-48 w-full rounded-2xl" />
                <Skeleton className="h-48 w-full rounded-2xl" />
            </div>
        );
    }

    if (!jobOpenings || filteredJobs.length === 0) {
        return (
             <div className="mt-16 max-w-4xl mx-auto text-center py-16">
                <h3 className="text-2xl font-bold">No Matching Openings</h3>
                <p className="text-muted-foreground mt-2">We couldn't find any jobs matching your criteria. Try adjusting your search or check back later!</p>
            </div>
        )
    }

    return (
        <div id="open-positions">
            <div className="mt-16 max-w-4xl mx-auto space-y-6">
                {filteredJobs.map((job) => (
                    <JobDetailsDialog key={job.id} job={job}>
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardHeader>
                                <CardTitle className="text-xl">{job.title}</CardTitle>
                                <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="h-4 w-4" />
                                        <span>{job.department}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{job.shortDescription}</CardDescription>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="link" className="p-0">View Details &rarr;</Button>
                            </div>
                        </Card>
                    </JobDetailsDialog>
                ))}
            </div>
        </div>
    )
}

export default function CareersPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [department, setDepartment] = useState('all');
    const [location, setLocation] = useState('all');

    const firestore = useFirestore();
    const jobsQuery = useMemoFirebase(() => 
        firestore 
            ? query(collection(firestore, 'jobOpenings'), where('status', '==', 'Open')) 
            : null, 
        [firestore]
    );
    const { data: jobOpenings } = useCollection<JobOpening>(jobsQuery);
    
    const uniqueDepartments = useMemo(() => {
        if (!jobOpenings) return [];
        return [...new Set(jobOpenings.map(job => job.department))];
    }, [jobOpenings]);

    const uniqueLocations = useMemo(() => {
        if (!jobOpenings) return [];
        return [...new Set(jobOpenings.map(job => job.location))];
    }, [jobOpenings]);
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'careers-hero');


    return (
        <div className="bg-background">
            <section className="bg-blue-100/50 dark:bg-blue-900/10 py-20 md:py-32">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                Bring out your best.
                            </h1>
                            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl/relaxed">
                                Your skills matter. Your impact is global. Join SyMetric to shape technology that transforms businesses worldwide.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="#open-positions">Search all jobs</Link>
                            </Button>
                        </div>
                        <div className="relative h-[400px] flex items-center justify-center">
                            {heroImage && (
                                <Image
                                    src={heroImage.imageUrl}
                                    alt={heroImage.description}
                                    data-ai-hint={heroImage.imageHint}
                                    width={600}
                                    height={400}
                                    className="object-cover rounded-lg"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <SectionTitle
                        title="Current Openings"
                        description="Find your next opportunity and grow with us. We are always looking for talented individuals to join our team."
                    />
                    <div className="mt-8 max-w-4xl mx-auto p-6 bg-secondary/50 rounded-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="relative md:col-span-3">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input 
                                    placeholder="Search by keyword, role, or skill" 
                                    className="pl-10" 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Select value={department} onValueChange={setDepartment}>
                                <SelectTrigger><SelectValue placeholder="All Departments" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Departments</SelectItem>
                                    {uniqueDepartments.map(dept => <SelectItem key={dept} value={dept}>{dept}</SelectItem>)}
                                </SelectContent>
                            </Select>
                            <Select value={location} onValueChange={setLocation}>
                                <SelectTrigger><SelectValue placeholder="All Locations" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Locations</SelectItem>
                                    {uniqueLocations.map(loc => <SelectItem key={loc} value={loc}>{loc}</SelectItem>)}
                                </SelectContent>
                            </Select>
                            <Button className="md:col-span-1" onClick={() => { setSearchTerm(''); setDepartment('all'); setLocation('all'); }}>Clear Filters</Button>
                        </div>
                    </div>
                    <OpenPositions searchTerm={searchTerm} department={department} location={location} />
                </div>
            </section>

            <section>
                <div className="container">
                    <SectionTitle
                        title="Why Work at SyMetric?"
                        description="We're more than just a company; we're a community dedicated to making a difference."
                    />
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {companyValues.map((value, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center items-center mb-4">
                                    <div className="p-4 bg-primary/10 rounded-full">
                                        <value.icon className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold">{value.title}</h3>
                                <p className="mt-2 text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="bg-secondary/50">
                <div className="container">
                    <SectionTitle
                        title="Perks & Benefits"
                        description="We invest in our team's well-being and professional growth."
                    />
                    <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {employeeBenefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}