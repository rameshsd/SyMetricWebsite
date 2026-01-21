
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
import { Loader2, Plus, Edit } from 'lucide-react';
import type { Page } from '@/lib/types';

// Schema for page validation
const pageSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  slug: z.string().min(3, 'Slug must be at least 3 characters.').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens.'),
  subtitle: z.string().optional(),
  heroImageId: z.string().optional(),
  heroBackgroundColor: z.string().optional(),
  content: z.string().min(10, 'Content must be at least 10 characters.'),
});

const sampleContent = `
<style>
  .custom-page-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    padding: 2rem;
    color: #333;
  }
  .custom-header {
    background-color: #f0f4ff;
    padding: 2.5rem;
    border-radius: 12px;
    text-align: center;
    margin-bottom: 2.5rem;
  }
  .custom-header h1 {
    font-size: 2.75rem;
    font-weight: 700;
    color: #2c3e50;
  }
  .custom-header p {
    font-size: 1.1rem;
    color: #5a6878;
    max-width: 600px;
    margin: 0.5rem auto 0;
  }
  .section-title {
      font-size: 2rem;
      font-weight: 600;
      margin-top: 3rem;
      margin-bottom: 1.5rem;
      border-bottom: 2px solid #e0e0e0;
      padding-bottom: 0.5rem;
  }
  .custom-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  .custom-card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .custom-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  }
  .custom-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #34495e;
    margin-bottom: 0.5rem;
  }
  .code-block {
    background-color: #2d2d2d;
    color: #f8f8f2;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9rem;
  }
</style>

<div class="custom-page-container">
  <div class="custom-header">
    <h1>Your Custom Page Title</h1>
    <p>This is a subtitle describing your amazing product or feature. It's fully customizable!</p>
  </div>

  <h2 class="section-title">Key Features</h2>
  <div class="custom-grid">
    <div class="custom-card">
      <h3>Feature One</h3>
      <p>Description of the first key feature. It's revolutionary and changes everything.</p>
    </div>
    <div class="custom-card">
      <h3>Feature Two</h3>
      <p>Description of the second key feature. It builds upon the first, making it even better.</p>
    </div>
    <div class="custom-card">
      <h3>Feature Three</h3>
      <p>Description of the third key feature. This one is the cherry on top for our users.</p>
    </div>
  </div>

  <h2 class="section-title">Technical Overview</h2>
  <div class="code-block">
<pre><code>&lt;script&gt;
  function setupTrial(protocol) {
    console.log('Setting up trial:', protocol.name);
  }
&lt;/script&gt;</code></pre>
  </div>
</div>
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
      subtitle: pageData.subtitle || '',
      heroImageId: pageData.heroImageId || '',
      heroBackgroundColor: pageData.heroBackgroundColor || '',
      content: pageData.content,
    } : {
      title: '',
      slug: '',
      subtitle: '',
      heroImageId: '',
      heroBackgroundColor: '',
      content: sampleContent,
    },
  });

  React.useEffect(() => {
    if (isOpen) {
      form.reset(pageData ? {
        title: pageData.title,
        slug: pageData.slug,
        subtitle: pageData.subtitle || '',
        heroImageId: pageData.heroImageId || '',
        heroBackgroundColor: pageData.heroBackgroundColor || '',
        content: pageData.content,
      } : {
        title: '',
        slug: '',
        subtitle: '',
        heroImageId: '',
        heroBackgroundColor: '',
        content: sampleContent,
      });
    }
  }, [pageData, isOpen, form]);

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
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{pageData ? 'Edit Page' : 'Create New Page'}</DialogTitle>
          <DialogDescription>
            {pageData ? 'Update the details of your page below.' : 'Fill out the form to create a new page with a customizable hero.'}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 overflow-y-auto pr-4 space-y-6">
            <FormField control={form.control} name="title" render={({ field }) => (
              <FormItem><FormLabel>Page Title (for Hero)</FormLabel><FormControl><Input placeholder="About Our New Service" {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
            <FormField control={form.control} name="slug" render={({ field }) => (
              <FormItem><FormLabel>Page Slug</FormLabel><FormControl><Input placeholder="about-our-new-service" {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
            <FormField control={form.control} name="subtitle" render={({ field }) => (
              <FormItem><FormLabel>Subtitle (Optional)</FormLabel><FormControl><Input placeholder="An engaging subtitle for the hero section" {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
             <FormField control={form.control} name="heroImageId" render={({ field }) => (
              <FormItem><FormLabel>Hero Image ID (Optional)</FormLabel><FormControl><Input placeholder="e.g., 'about-hero' from placeholder-images.json" {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
             <FormField control={form.control} name="heroBackgroundColor" render={({ field }) => (
              <FormItem><FormLabel>Hero Background Color (Optional)</FormLabel><FormControl><Input placeholder="e.g., #f5f3ff or a Tailwind class" {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
            <FormField control={form.control} name="content" render={({ field }) => (
              <FormItem><FormLabel>Page Content (HTML & CSS)</FormLabel><FormControl><Textarea placeholder="Write your page content here..." rows={20} {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
            <DialogFooter className="sticky bottom-0 bg-background py-4">
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
        <SectionTitle title="Manage Dynamic Pages" description="Create and manage dynamic, HTML-based pages for your website." />
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
