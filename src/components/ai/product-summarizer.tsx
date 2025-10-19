'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { summarizeProductInformation } from '@/ai/flows/summarize-product-information';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  productUrl: z.string().url({ message: 'Please enter a valid URL.' }),
});

export function ProductSummarizer() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productUrl: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSummary('');
    try {
      const result = await summarizeProductInformation(values);
      setSummary(result.summary);
    } catch (error) {
      console.error('Error summarizing product information:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to generate summary. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Generate Summary</CardTitle>
            <CardDescription>Enter the URL of a product page to get an AI-generated summary.</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="productUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/product/awesome-widget" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              {isLoading ? 'Generating...' : 'Generate Summary'}
            </Button>
          </CardFooter>
        </form>
      </Form>

      {(isLoading || summary) && (
        <CardContent>
            <div className="mt-6 border-t pt-6">
                <h3 className="text-lg font-semibold mb-2">Generated Summary</h3>
                {isLoading && (
                    <div className="space-y-2">
                        <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
                        <div className="h-4 bg-muted rounded animate-pulse w-5/6"></div>
                        <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
                    </div>
                )}
                {summary && <p className="text-muted-foreground whitespace-pre-wrap">{summary}</p>}
            </div>
        </CardContent>
      )}
    </Card>
  );
}
