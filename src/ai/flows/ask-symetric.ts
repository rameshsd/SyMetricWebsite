'use server';
/**
 * @fileOverview An AI agent for answering questions about SyMetric solutions.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { solutions } from '@/lib/data';

const AskSyMetricInputSchema = z.object({
  query: z.string().describe('The user\'s question about SyMetric solutions.'),
});
export type AskSyMetricInput = z.infer<typeof AskSyMetricInputSchema>;

const AskSyMetricOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the user\'s question.'),
});
export type AskSyMetricOutput = z.infer<typeof AskSyMetricOutputSchema>;

export async function askSyMetric(input: AskSyMetricInput): Promise<AskSyMetricOutput> {
  return askSyMetricFlow(input);
}

const solutionContext = solutions.map(s => `- ${s.name}: ${s.description}`).join('\n');

const prompt = ai.definePrompt({
  name: 'askSyMetricPrompt',
  input: { schema: AskSyMetricInputSchema },
  output: { schema: AskSyMetricOutputSchema },
  prompt: `You are an expert on SyMetric and its clinical trial software solutions. You are helpful and knowledgeable. Answer the user's question based on the context of SyMetric's products and services provided below. Keep your answers concise and informative.

Available SyMetric Solutions:
${solutionContext}

User's Question:
"{{{query}}}"

Answer:`,
});

const askSyMetricFlow = ai.defineFlow(
  {
    name: 'askSyMetricFlow',
    inputSchema: AskSyMetricInputSchema,
    outputSchema: AskSyMetricOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
