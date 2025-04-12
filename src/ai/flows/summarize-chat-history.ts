'use server';
/**
 * @fileOverview Summarizes a user's chat history.
 *
 * - summarizeChatHistory - A function that summarizes the chat history.
 * - SummarizeChatHistoryInput - The input type for the summarizeChatHistory function.
 * - SummarizeChatHistoryOutput - The return type for the summarizeChatHistory function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SummarizeChatHistoryInputSchema = z.object({
  chatHistory: z.string().describe('The complete chat history to summarize.'),
});
export type SummarizeChatHistoryInput = z.infer<typeof SummarizeChatHistoryInputSchema>;

const SummarizeChatHistoryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the chat history.'),
});
export type SummarizeChatHistoryOutput = z.infer<typeof SummarizeChatHistoryOutputSchema>;

export async function summarizeChatHistory(input: SummarizeChatHistoryInput): Promise<SummarizeChatHistoryOutput> {
  return summarizeChatHistoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeChatHistoryPrompt',
  input: {
    schema: z.object({
      chatHistory: z.string().describe('The complete chat history to summarize.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A concise summary of the chat history.'),
    }),
  },
  prompt: `Summarize the following chat history. Provide a concise and informative summary that captures the key topics and decisions discussed. 

Chat History:
{{{chatHistory}}}`,
});

const summarizeChatHistoryFlow = ai.defineFlow<
  typeof SummarizeChatHistoryInputSchema,
  typeof SummarizeChatHistoryOutputSchema
>(
  {
    name: 'summarizeChatHistoryFlow',
    inputSchema: SummarizeChatHistoryInputSchema,
    outputSchema: SummarizeChatHistoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
