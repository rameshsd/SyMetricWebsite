
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { AlertTriangle, Copy } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription as AlertDesc } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  smtpHost: z.string().default('smtp.gmail.com'),
  smtpPort: z.coerce.number().default(587),
  smtpUser: z.string().email({message: "Please enter a valid email."}).min(1, 'SMTP User is required.'),
  smtpPass: z.string().min(1, 'SMTP Password or App Password is required.'),
  emailTo: z.string().email({message: "Please enter a valid email."}).min(1, 'Recipient email is required.'),
});

export default function SettingsPage() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            smtpHost: 'smtp.gmail.com',
            smtpPort: 587,
            smtpUser: '',
            smtpPass: '',
            emailTo: '',
        },
    });

    const envContent = `SMTP_HOST=${form.watch('smtpHost')}
SMTP_PORT=${form.watch('smtpPort')}
SMTP_USER=${form.watch('smtpUser')}
SMTP_PASS=${form.watch('smtpPass')}
EMAIL_TO=${form.watch('emailTo')}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(envContent);
        toast({
            title: "Copied to clipboard!",
            description: "You can now paste this into your .env.local file.",
        });
    };

    return (
        <div className="space-y-8">
            <SectionTitle title="Email Configuration" description="Configure SMTP settings for email notifications." />
            
            <Alert variant="destructive" className="max-w-4xl">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Action Required to Enable Email</AlertTitle>
              <AlertDesc>
                The contact and demo forms will not send emails until you configure your server environment. For security, credentials are not stored in the database. Please follow the steps below.
              </AlertDesc>
            </Alert>
            
            <Card className="max-w-4xl">
                <CardHeader>
                    <CardTitle>Step 1: Fill in your SMTP Credentials</CardTitle>
                    <CardDescription>
                        Enter your SMTP details below. This form is a helper to generate the correct configuration file content. Your credentials are not saved. If using Gmail, you must generate an App Password.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <div className="space-y-4">
                            <FormField name="smtpHost" control={form.control} render={({field}) => (
                                <FormItem>
                                    <FormLabel>SMTP Host</FormLabel>
                                    <FormControl><Input {...field} placeholder="e.g., smtp.gmail.com" /></FormControl>
                                </FormItem>
                            )}/>
                            <FormField name="smtpPort" control={form.control} render={({field}) => (
                                <FormItem>
                                    <FormLabel>SMTP Port</FormLabel>
                                    <FormControl><Input type="number" {...field} placeholder="e.g., 587" /></FormControl>
                                </FormItem>
                            )}/>
                            <FormField name="smtpUser" control={form.control} render={({field}) => (
                                <FormItem>
                                    <FormLabel>SMTP User (Email)</FormLabel>
                                    <FormControl><Input {...field} placeholder="your-email@example.com" /></FormControl>
                                </FormItem>
                            )}/>
                             <FormField name="smtpPass" control={form.control} render={({field}) => (
                                <FormItem>
                                    <FormLabel>SMTP Password / App Password</FormLabel>
                                    <FormControl><Input type="password" {...field} placeholder="Enter your password or app password" /></FormControl>
                                </FormItem>
                            )}/>
                             <FormField name="emailTo" control={form.control} render={({field}) => (
                                <FormItem>
                                    <FormLabel>Recipient Email</FormLabel>
                                    <FormControl><Input {...field} placeholder="recipient@example.com" /></FormControl>
                                </FormItem>
                            )}/>
                        </div>
                    </Form>
                </CardContent>
            </Card>

            <Card className="max-w-4xl">
                 <CardHeader>
                    <CardTitle>Step 2: Create a `.env.local` file</CardTitle>
                    <CardDescription>
                       In the root directory of your project, create a file named `.env.local`. Copy the text below and paste it into that file.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Textarea readOnly value={envContent} rows={6} className="font-mono bg-muted" />
                    <Button onClick={copyToClipboard} disabled={!form.formState.isValid}>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy to Clipboard
                    </Button>
                </CardContent>
            </Card>

             <Card className="max-w-4xl">
                 <CardHeader>
                    <CardTitle>Step 3: Restart Your Server</CardTitle>
                    <CardDescription>
                       For the changes to take effect, you must restart your application server. The contact and demo forms will then be able to send emails.
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}
