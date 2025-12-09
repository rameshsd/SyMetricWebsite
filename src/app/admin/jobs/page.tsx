
'use client';

import { useFirestore, useCollection, useMemoFirebase, addDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionTitle } from '@/components/shared/section-title';
import { useToast } from '@/hooks/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import type { JobOpening } from '@/lib/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { rephraseJobDescription } from '@/ai/flows/rephrase-job-description';
import { Wand2, Loader2 } from 'lucide-react';
import { useState } from 'react';

const jobSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  department: z.string().min(2, 'Department is required.'),
  location: z.string().min(2, 'Location is required.'),
  shortDescription: z.string().min(10, 'Short description is required.').max(150, 'Keep it under 150 characters.'),
  fullDescription: z.string().min(20, 'Full description is required.'),
  status: z.enum(['Open', 'Closed']),
});

function CreateJobForm() {
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isRephrasing, setIsRephrasing] = useState(false);

  const form = useForm<z.infer<typeof jobSchema>>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: '',
      department: '',
      location: '',
      shortDescription: '',
      fullDescription: '',
      status: 'Open',
    },
  });

  const handleRephrase = async () => {
    const description = form.getValues('fullDescription');
    if (!description) {
        toast({
            variant: 'destructive',
            title: 'No description to rephrase',
            description: 'Please enter a description first.',
        });
        return;
    }
    setIsRephrasing(true);
    try {
        const result = await rephraseJobDescription({ text: description });
        form.setValue('fullDescription', result.rephrasedText);
        toast({ title: 'Description rephrased successfully!' });
    } catch (error) {
        toast({
            variant: 'destructive',
            title: 'AI Rephrasing Failed',
            description: (error as Error).message || 'Could not rephrase the text.',
        });
    } finally {
        setIsRephrasing(false);
    }
  };

  const onSubmit = async (values: z.infer<typeof jobSchema>) => {
    if (!firestore) return;
    const jobsCollection = collection(firestore, 'jobOpenings');
    try {
      await addDocumentNonBlocking(jobsCollection, {
        ...values,
        createdAt: serverTimestamp(),
      });
      toast({ title: 'Job Posting Created Successfully!' });
      form.reset();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error creating job posting',
        description: (error as Error).message,
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a New Job Posting</CardTitle>
        <CardDescription>Fill out the form to add a new job opening to the careers page.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField control={form.control} name="title" render={({ field }) => (
                <FormItem><FormLabel>Job Title</FormLabel><FormControl><Input placeholder="Senior Frontend Developer" {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="department" render={({ field }) => (
                    <FormItem><FormLabel>Department</FormLabel><FormControl><Input placeholder="Engineering" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="location" render={({ field }) => (
                    <FormItem><FormLabel>Location</FormLabel><FormControl><Input placeholder="Bengaluru, India" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
            </div>
            <FormField control={form.control} name="shortDescription" render={({ field }) => (
                <FormItem><FormLabel>Short Description</FormLabel><FormControl><Textarea placeholder="A brief summary of the role..." rows={2} {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
            <FormField control={form.control} name="fullDescription" render={({ field }) => (
                <FormItem>
                    <div className="flex items-center justify-between">
                        <FormLabel>Full Description</FormLabel>
                        <Button type="button" variant="ghost" size="sm" onClick={handleRephrase} disabled={isRephrasing}>
                            {isRephrasing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                            {isRephrasing ? 'Rephrasing...' : 'Rephrase with AI'}
                        </Button>
                    </div>
                    <FormControl>
                        <Textarea placeholder="Detailed description of responsibilities and qualifications... You can use Markdown for formatting." rows={10} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}/>
            <FormField control={form.control} name="status" render={({ field }) => (
                <FormItem><FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                        <SelectContent>
                            <SelectItem value="Open">Open</SelectItem>
                            <SelectItem value="Closed">Closed</SelectItem>
                        </SelectContent>
                    </Select>
                <FormMessage /></FormItem>
            )}/>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Creating...' : 'Create Job Posting'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

function JobsList() {
    const firestore = useFirestore();
    const jobsQuery = useMemoFirebase(() => firestore ? query(collection(firestore, 'jobOpenings'), orderBy('createdAt', 'desc')) : null, [firestore]);
    const { data: jobs, isLoading } = useCollection<JobOpening>(jobsQuery);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Existing Job Postings</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && <TableRow><TableCell colSpan={4} className="h-24 text-center">Loading...</TableCell></TableRow>}
                        {jobs && jobs.map(job => (
                            <TableRow key={job.id}>
                                <TableCell className="font-medium">{job.title}</TableCell>
                                <TableCell>{job.department}</TableCell>
                                <TableCell>{job.location}</TableCell>
                                <TableCell><Badge variant={job.status === 'Open' ? 'default' : 'secondary'}>{job.status}</Badge></TableCell>
                            </TableRow>
                        ))}
                         {!isLoading && jobs?.length === 0 && (
                            <TableRow><TableCell colSpan={4} className="h-24 text-center">No job postings found.</TableCell></TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default function JobsAdminPage() {
  return (
    <div className="space-y-8">
      <SectionTitle title="Manage Job Postings" description="Create and manage job openings for your careers page." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <CreateJobForm />
        <JobsList />
      </div>
    </div>
  );
}
    