'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useFirestore, addDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';


const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).max(50, { message: 'Name must be 50 characters or less.'}),
  organization: z.string().min(2, { message: 'Organization must be at least 2 characters.' }),
  phone: z.string().regex(/^[0-9+-]*$/, { message: 'Please enter a valid mobile number.' }).min(10, { message: 'Mobile number must be at least 10 digits.'}),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export function ContactForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const firestore = useFirestore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      organization: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // 1. Save to Firestore
      if (firestore) {
        const submissionsCollection = collection(firestore, 'contactFormSubmissions');
        await addDocumentNonBlocking(submissionsCollection, {
          name: values.name,
          organization: values.organization,
          email: values.email,
          message: values.message,
          timestamp: serverTimestamp(),
          phone: values.phone,
        });
      }
      
      // 2. Send email notification
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, type: 'contact' }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message.');
      }

      toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll be in touch shortly.",
      });
      form.reset();
    } catch(error) {
        toast({
            variant: 'destructive',
            title: "Error",
            description: (error as Error).message || "Could not send your message.",
        });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader className="p-8 pb-4">
            <CardTitle className="text-2xl">Get in touch</CardTitle>
            <CardDescription>Fill in the form and we will get back to you within 2 business days.</CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-4 space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the name of your organization" {...field} className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your mobile number" {...field} className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email id" {...field} className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your message here" {...field} className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className="p-8 pt-0">
          <Button type="submit" className="w-full rounded-xl py-3 bg-blue-600 hover:bg-blue-700 h-auto" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </CardFooter>
      </form>
    </Form>
  );
}