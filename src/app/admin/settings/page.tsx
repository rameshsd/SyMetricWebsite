
'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { doc } from 'firebase/firestore';
import { useFirestore, useDoc, setDocumentNonBlocking, useMemoFirebase } from '@/firebase';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, AlertTriangle } from 'lucide-react';
import { Alert, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  smtpHost: z.string().min(1, 'SMTP Host is required.'),
  smtpPort: z.coerce.number().min(1, 'SMTP Port is required.'),
  smtpUser: z.string().email('Please enter a valid email.'),
  smtpPass: z.string().min(1, 'SMTP Password or App Password is required.'),
  emailTo: z.string().email('Please enter a valid recipient email.'),
});

export default function SettingsPage() {
    const { toast } = useToast();
    const firestore = useFirestore();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const settingsDocRef = useMemoFirebase(
      () => (firestore ? doc(firestore, 'smtpSettings', 'default') : null),
      [firestore]
    );

    const { data: settingsData, isLoading } = useDoc(settingsDocRef);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            smtpHost: '',
            smtpPort: 587,
            smtpUser: '',
            smtpPass: '',
            emailTo: '',
        },
    });

    useEffect(() => {
        if (settingsData) {
            form.reset(settingsData);
        }
    }, [settingsData, form]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
      if (!firestore) return;
      setIsSubmitting(true);
      try {
        await setDocumentNonBlocking(doc(firestore, 'smtpSettings', 'default'), values, { merge: true });
        toast({
            title: "Settings Saved",
            description: "Your SMTP settings have been saved to the database.",
        });
      } catch(error) {
         toast({
            variant: 'destructive',
            title: "Error Saving Settings",
            description: (error as Error).message,
        });
      } finally {
        setIsSubmitting(false);
      }
    }

    return (
        <div className="space-y-8">
            <SectionTitle title="Email Settings" description="Configure SMTP settings for email notifications." />
            
            <Alert variant="destructive" className="max-w-4xl">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Important Security Notice</AlertTitle>
              <CardDescription>
                Storing credentials in the database is not recommended. For production environments, it is strongly advised to use environment variables for security. The settings saved here are NOT used by the email sending function, which relies on environment variables.
              </CardDescription>
            </Alert>
            
            <Card className="max-w-2xl">
                 <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <CardHeader>
                            <CardTitle>SMTP Configuration</CardTitle>
                            <CardDescription>
                                Enter your SMTP details below. These settings will be stored in Firestore.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {isLoading ? (
                              <p>Loading settings...</p>
                            ) : (
                              <>
                                <FormField name="smtpHost" control={form.control} render={({field}) => (
                                    <FormItem>
                                        <FormLabel>SMTP Host</FormLabel>
                                        <FormControl><Input {...field} placeholder="e.g., smtp.gmail.com" /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                <FormField name="smtpPort" control={form.control} render={({field}) => (
                                    <FormItem>
                                        <FormLabel>SMTP Port</FormLabel>
                                        <FormControl><Input type="number" {...field} placeholder="e.g., 587" /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                <FormField name="smtpUser" control={form.control} render={({field}) => (
                                    <FormItem>
                                        <FormLabel>SMTP User (Email)</FormLabel>
                                        <FormControl><Input {...field} placeholder="your-email@example.com" /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                 <FormField name="smtpPass" control={form.control} render={({field}) => (
                                    <FormItem>
                                        <FormLabel>SMTP Password / App Password</FormLabel>
                                        <FormControl><Input type="password" {...field} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                 <FormField name="emailTo" control={form.control} render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Recipient Email</FormLabel>
                                        <FormControl><Input {...field} placeholder="recipient@example.com" /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                              </>
                            )}
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" disabled={isSubmitting || isLoading}>
                                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {isSubmitting ? 'Saving...' : 'Save Configuration'}
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    );
}

    