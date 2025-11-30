
'use client';

import { useFirestore, useDoc, setDocumentNonBlocking, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { useForm, useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionTitle } from '@/components/shared/section-title';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState, useEffect } from 'react';
import { navItems } from '@/lib/data';

const pageOptions = navItems
    .filter(item => item.href && !item.href.startsWith('/admin') && item.name !== 'Community')
    .map(item => ({
        label: item.name,
        value: item.href.substring(1) || 'home'
    }));


function EditableSection({ control, page, section, sectionIndex, sectionData }: any) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: `content.${sectionIndex}.fields`
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {fields.map((field: any, index: number) => (
                     <div key={field.id} className="space-y-2">
                        {Object.entries(field).filter(([key]) => key !== 'id').map(([key, value]) => {
                           if (typeof value === 'string' && value.length > 100) {
                               return (
                                <FormField
                                    key={key}
                                    control={control}
                                    name={`content.${sectionIndex}.fields.${index}.${key}`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{key}</FormLabel>
                                            <FormControl>
                                                <Textarea {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                               )
                           }
                           if (typeof value === 'string') {
                               return (
                                <FormField
                                    key={key}
                                    control={control}
                                    name={`content.${sectionIndex}.fields.${index}.${key}`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{key}</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                               )
                           }
                           return null;
                        })}
                         <Button type="button" variant="destructive" size="sm" onClick={() => remove(index)}>Remove Item</Button>
                    </div>
                ))}
                 <Button type="button" onClick={() => append(sectionData.fields[0])}>Add Item</Button>
            </CardContent>
        </Card>
    )
}

function ContentEditForm() {
  const firestore = useFirestore();
  const { toast } = useToast();
  const [selectedPage, setSelectedPage] = useState(pageOptions[0].value);

  const contentDocRef = useMemoFirebase(() => firestore ? doc(firestore, 'pageContent', selectedPage) : null, [firestore, selectedPage]);
  const { data: contentData, isLoading, error } = useDoc(contentDocRef);
  
  const form = useForm({
    values: contentData ? contentData.content as any : {}
  });

  useEffect(() => {
    if (contentData) {
      form.reset(contentData);
    }
  }, [contentData, form]);

  const onSubmit = async (values: any) => {
    if (!firestore) return;
    try {
        setDocumentNonBlocking(doc(firestore, 'pageContent', selectedPage), values, { merge: true });
        toast({ title: 'Content updated successfully!' });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error updating content',
        description: (error as Error).message,
      });
    }
  };

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {(error as Error).message}</div>
  if (!contentData) return <div>No content found for this page.</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Page Content</CardTitle>
        <CardDescription>Select a page and edit its content below.</CardDescription>
        <Select onValueChange={setSelectedPage} defaultValue={selectedPage}>
            <SelectTrigger>
                <SelectValue placeholder="Select a page" />
            </SelectTrigger>
            <SelectContent>
                {pageOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
            </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {Object.entries(contentData as any).map(([key, value] : [string, any]) => {
                if (key === 'id') return null;

                 if (Array.isArray(value)) {
                   return <EditableSection key={key} control={form.control} page={selectedPage} section={key} sectionData={{fields: value}} />
                 }

                if (typeof value === 'string' && value.length > 100) {
                    return (
                        <FormField
                            key={key}
                            control={form.control}
                            name={key}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{key}</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} rows={5} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )
                }
                
                if (typeof value === 'string') {
                     return (
                        <FormField
                            key={key}
                            control={form.control}
                            name={key}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{key}</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )
                }

                return null;
            })}

            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Saving...' : 'Save Changes'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default function ContentAdminPage() {
  return (
    <div className="space-y-8">
      <SectionTitle title="Manage Page Content" description="Edit the content for various pages on your website." />
      <ContentEditForm />
    </div>
  );
}
