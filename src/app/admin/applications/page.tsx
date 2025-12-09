'use client';

import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, doc, getDoc } from 'firebase/firestore';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import type { JobApplication, JobOpening } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function JobApplicationsTable() {
    const firestore = useFirestore();
    const { toast } = useToast();
    const [applicationsWithJobs, setApplicationsWithJobs] = useState<(JobApplication & { jobTitle?: string })[]>([]);

    const applicationsQuery = useMemoFirebase(
        () => firestore ? query(collection(firestore, 'jobApplications'), orderBy('submittedAt', 'desc')) : null,
        [firestore]
    );

    const { data: applications, isLoading } = useCollection<JobApplication>(applicationsQuery);

    useEffect(() => {
        if (applications && firestore) {
            const fetchJobTitles = async () => {
                const appsWithTitles = await Promise.all(
                    applications.map(async (app) => {
                        try {
                            const jobRef = doc(firestore, 'jobOpenings', app.jobId);
                            const jobSnap = await getDoc(jobRef);
                            const jobTitle = jobSnap.exists() ? (jobSnap.data() as JobOpening).title : 'Unknown Job';
                            return { ...app, jobTitle };
                        } catch (error) {
                            console.error("Error fetching job title:", error);
                            return { ...app, jobTitle: 'Error fetching title' };
                        }
                    })
                );
                setApplicationsWithJobs(appsWithTitles);
            };
            fetchJobTitles();
        }
    }, [applications, firestore]);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Job Applications</CardTitle>
                <CardDescription>Review applications submitted by candidates.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Applicant Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Applying For</TableHead>
                            <TableHead>Resume</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({ length: 5 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell colSpan={5} className="text-center h-24">Loading...</TableCell>
                            </TableRow>
                        ))}
                        {applicationsWithJobs && applicationsWithJobs.map(app => (
                            <TableRow key={app.id}>
                                <TableCell>{app.submittedAt ? format(app.submittedAt.toDate(), 'PP') : 'N/A'}</TableCell>
                                <TableCell>{app.name}</TableCell>
                                <TableCell>
                                    <a href={`mailto:${app.email}`} className="text-primary hover:underline">{app.email}</a>
                                </TableCell>
                                <TableCell>{app.jobTitle || 'Loading...'}</TableCell>
                                <TableCell>
                                    <Button variant="link" asChild>
                                        <a href={app.resumeUrl} target="_blank" rel="noopener noreferrer">View Resume</a>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        {!isLoading && applicationsWithJobs?.length === 0 && (
                             <TableRow>
                                <TableCell colSpan={5} className="text-center h-24">No applications found.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export default function ApplicationsAdminPage() {
  return (
    <div className="space-y-8">
      <SectionTitle title="Application Management" description="Review and manage job applications." />
      <JobApplicationsTable />
    </div>
  );
}
