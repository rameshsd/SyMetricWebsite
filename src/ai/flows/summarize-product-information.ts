'use server';

/**
 * @fileOverview A product information summarization AI agent.
 *
 * - summarizeProductInformation - A function that handles the product information summarization process.
 * - SummarizeProductInformationInput - The input type for the summarizeProductInformation function.
 * - SummarizeProductInformationOutput - The return type for the summarizeProductInformation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProductInformationInputSchema = z.object({
  productUrl: z
    .string()
    .url()
    .describe('The URL of the product webpage to summarize.'),
});
export type SummarizeProductInformationInput = z.infer<typeof SummarizeProductInformationInputSchema>;

const SummarizeProductInformationOutputSchema = z.object({
  summary: z
    .string()
    .describe('A short, engaging summary of the product information.'),
});
export type SummarizeProductInformationOutput = z.infer<typeof SummarizeProductInformationOutputSchema>;

export async function summarizeProductInformation(
  input: SummarizeProductInformationInput
): Promise<SummarizeProductInformationOutput> {
  return summarizeProductInformationFlow(input);
}

const summarizeProductInformationPrompt = ai.definePrompt({
  name: 'summarizeProductInformationPrompt',
  input: {schema: SummarizeProductInformationInputSchema},
  output: {schema: SummarizeProductInformationOutputSchema},
  prompt: `You are an expert marketing copywriter. Your task is to create a short, engaging summary of a product based on the information available on its webpage.

  Product URL: {{{productUrl}}}

  Summary:`, // keep this very short
});

const summarizeProductInformationFlow = ai.defineFlow(
  {
    name: 'summarizeProductInformationFlow',
    inputSchema: SummarizeProductInformationInputSchema,
    outputSchema: SummarizeProductInformationOutputSchema,
  },
  async input => {
    const {output} = await summarizeProductInformationPrompt(input);
    return output!;
  }
);
