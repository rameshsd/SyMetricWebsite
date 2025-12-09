'use server';
/**
 * @fileOverview An AI agent for rephrasing job descriptions.
 *
 * - rephraseJobDescription - A function that handles the rephrasing process.
 * - RephraseJobDescriptionInput - The input type for the function.
 * - RephraseJobDescriptionOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RephraseJobDescriptionInputSchema = z.object({
  text: z.string().describe('The job description text to rephrase.'),
});
export type RephraseJobDescriptionInput = z.infer<typeof RephraseJobDescriptionInputSchema>;

const RephraseJobDescriptionOutputSchema = z.object({
  rephrasedText: z.string().describe('The rephrased, more engaging job description.'),
});
export type RephraseJobDescriptionOutput = z.infer<typeof RephraseJobDescriptionOutputSchema>;

export async function rephraseJobDescription(
  input: RephraseJobDescriptionInput
): Promise<RephraseJobDescriptionOutput> {
  return rephraseJobDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rephraseJobDescriptionPrompt',
  input: { schema: RephraseJobDescriptionInputSchema },
  output: { schema: RephraseJobDescriptionOutputSchema },
  prompt: `You are an expert recruitment copywriter. Your task is to rephrase the given job description text to be more engaging, professional, and appealing to top candidates. Use clear and active language.

Job Description Text:
'''
{{{text}}}
'''

Rephrased Text (in Markdown format):`,
});

const rephraseJobDescriptionFlow = ai.defineFlow(
  {
    name: 'rephraseJobDescriptionFlow',
    inputSchema: RephraseJobDescriptionInputSchema,
    outputSchema: RephraseJobDescriptionOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);

    