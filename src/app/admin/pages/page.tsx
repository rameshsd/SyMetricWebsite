
'use client';

import * as React from 'react';
import { useFirestore, useCollection, useMemoFirebase, addDocumentNonBlocking, updateDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp, query, orderBy, doc } from 'firebase/firestore';
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
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import ReactMarkdown from 'react-markdown';
import { Loader2, Plus, Edit } from 'lucide-react';
import type { Page } from '@/lib/types';

// Schema for page validation
const pageSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  slug: z.string().min(3, 'Slug must be at least 3 characters.').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens.'),
  content: z.string().min(10, 'Content must be at least 10 characters.'),
});

const sampleContent = `
# Our New Product: The SyMetric Accelerator

The SyMetric Accelerator is a revolutionary tool designed to streamline your clinical trial process from start to finish. It leverages cutting-edge AI to provide predictive analytics and automate data management tasks.

## Key Features

- **AI-Powered Analytics:** Gain deep insights into your trial data with our predictive models.
- **Automated Data Validation:** Reduce manual errors and ensure data integrity with our smart validation engine.
- **Seamless Integration:** Connects with your existing EDC, CTMS, and IRT systems effortlessly.
- **Real-time Monitoring:** Track site performance, patient recruitment, and key milestones on a live dashboard.

---

## Technical Overview

Integrating the Accelerator into your existing workflow is simple. Below is an example of how to initialize the SDK in your application.

### Javascript Example

\`\`\`javascript
import { SyMetricAccelerator } from '@symetric/accelerator-sdk';

// Initialize with your project API key
const accelerator = new SyMetricAccelerator({
  apiKey: 'YOUR_API_KEY_HERE',
});

// Start monitoring a study
accelerator.startMonitoring({
  studyId: 'PROJ-001',
  onUpdate: (insights) => {
    console.log('New insights available:', insights);
  },
});
\`\`\`

> **Note:** The Accelerator SDK is available for JavaScript, Python, and Java. Check our official documentation for more details.

## Benefits

*   **Reduce Timelines:** Cut your trial duration by up to 20% by identifying bottlenecks early.
*   **Lower Costs:** Decrease operational overhead by automating repetitive data management tasks.
*   **Improve Outcomes:** Enhance decision-making with data-driven insights.

Ready to accelerate your research? [Contact Sales for a Demo](/contact).
`;

// --- Page Editor Component ---
interface PageEditorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  pageData?: Page | null;
  onSave: () => void;
}

function PageEditor({ isOpen, setIsOpen, pageData, onSave }: PageEditorProps) {
  const firestore = useFirestore();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof pageSchema>>({
    resolver: zodResolver(pageSchema),
    defaultValues: pageData ? {
      title: pageData.title,
      slug: pageData.slug,
      content: pageData.content,
    } : {
      title: '',
      slug: '',
      content: sampleContent,
    },
  });

  React.useEffect(() => {
    if (isOpen) {
      form.reset(pageData ? {
        title: pageData.title,
        slug: pageData.slug,
        content: pageData.content,
      } : {
        title: '',
        slug: '',
        content: sampleContent,
      });
    }
  }, [pageData, isOpen, form]);

  const contentValue = form.watch('content');

  const onSubmit = async (values: z.infer<typeof pageSchema>) => {
    if (!firestore) return;
    try {
      if (pageData?.id) {
        // Update existing page
        const pageRef = doc(firestore, 'pages', pageData.id);
        await updateDocumentNonBlocking(pageRef, { ...values, updatedAt: serverTimestamp() });
        toast({ title: 'Page updated successfully!' });
      } else {
        // Create new page
        const pagesCollection = collection(firestore, 'pages');
        await addDocumentNonBlocking(pagesCollection, {
          ...values,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
        toast({ title: 'Page created successfully!' });
      }
      onSave();
      setIsOpen(false);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error saving page',
        description: (error as Error).message,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{pageData ? 'Edit Page' : 'Create New Page'}</DialogTitle>
          <DialogDescription>
            {pageData ? 'Update the details of your page below.' : 'Fill out the form to create a new page. A live preview is shown on the right.'}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 overflow-y-hidden">
            {/* Form Fields */}
            <div className="space-y-6 overflow-y-auto pr-4">
              <FormField control={form.control} name="title" render={({ field }) => (
                <FormItem><FormLabel>Page Title</FormLabel><FormControl><Input placeholder="About Our New Service" {...field} /></FormControl><FormMessage /></FormItem>
              )}/>
              <FormField control={form.control} name="slug" render={({ field }) => (
                <FormItem><FormLabel>Page Slug</FormLabel><FormControl><Input placeholder="about-our-new-service" {...field} /></FormControl><FormMessage /></FormItem>
              )}/>
              <FormField control={form.control} name="content" render={({ field }) => (
                <FormItem><FormLabel>Page Content (Markdown)</FormLabel><FormControl><Textarea placeholder="Write your page content here..." rows={20} {...field} /></FormControl><FormMessage /></FormItem>
              )}/>
            </div>
            {/* Live Preview */}
            <div className="border rounded-lg p-6 bg-secondary/30 overflow-y-auto">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">Live Preview</h3>
              <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown>{contentValue || "Start typing to see a preview..."}</ReactMarkdown>
              </div>
            </div>
            <DialogFooter className="md:col-span-2">
              <DialogClose asChild><Button type="button" variant="secondary">Cancel</Button></DialogClose>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {pageData ? 'Save Changes' : 'Create Page'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}


// --- Pages List Component ---
function PagesList({ forceRerender, onEditClick }: { forceRerender: number, onEditClick: (page: Page) => void }) {
  const firestore = useFirestore();
  const pagesQuery = useMemoFirebase(() => firestore ? query(collection(firestore, 'pages'), orderBy('createdAt', 'desc')) : null, [firestore, forceRerender]);
  const { data: pages, isLoading } = useCollection<Page>(pagesQuery);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Existing Pages</CardTitle>
        <CardDescription>A list of all dynamically created pages on your website.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>URL Path</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && Array.from({ length: 3 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell><Skeleton className="h-5 w-3/4" /></TableCell>
                <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                <TableCell className="flex gap-2"><Skeleton className="h-8 w-20" /><Skeleton className="h-8 w-20" /></TableCell>
              </TableRow>
            ))}
            {pages && pages.map(page => (
              <TableRow key={page.id}>
                <TableCell className="font-medium">{page.title}</TableCell>
                <TableCell>/pages/{page.slug}</TableCell>
                <TableCell className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/pages/${page.slug}`} target="_blank">Preview</Link>
                  </Button>
                  <Button variant="secondary" size="sm" onClick={() => onEditClick(page)}>
                    <Edit className="mr-2 h-4 w-4"/>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {!isLoading && pages?.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="h-24 text-center">No pages created yet.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

// --- Main Page Component ---
export default function PagesAdminPage() {
  const [rerenderCount, setRerenderCount] = React.useState(0);
  const [isEditorOpen, setIsEditorOpen] = React.useState(false);
  const [selectedPage, setSelectedPage] = React.useState<Page | null>(null);

  const handleCreateClick = () => {
    setSelectedPage(null);
    setIsEditorOpen(true);
  };

  const handleEditClick = (page: Page) => {
    setSelectedPage(page);
    setIsEditorOpen(true);
  };
  
  const handleSave = () => {
    setRerenderCount(c => c + 1);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <SectionTitle title="Manage Dynamic Pages" description="Create and manage dynamic, markdown-based pages for your website." />
        <Button onClick={handleCreateClick}>
            <Plus className="mr-2 h-4 w-4"/>
            Create New Page
        </Button>
      </div>

      <PagesList forceRerender={rerenderCount} onEditClick={handleEditClick} />
      
      <PageEditor 
        isOpen={isEditorOpen}
        setIsOpen={setIsEditorOpen}
        pageData={selectedPage}
        onSave={handleSave}
      />
    </div>
  );
}
