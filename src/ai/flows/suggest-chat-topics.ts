'use server';
/**
 * @fileOverview This file defines a Genkit flow for suggesting relevant chat topics
 *  based on the user's past interactions.
 *
 * - suggestChatTopics - A function that suggests chat topics.
 * - SuggestChatTopicsInput - The input type for the suggestChatTopics function.
 * - SuggestChatTopicsOutput - The return type for the suggestChatTopics function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SuggestChatTopicsInputSchema = z.object({
  chatHistory: z.string().describe('The chat history of the user.'),
});
export type SuggestChatTopicsInput = z.infer<typeof SuggestChatTopicsInputSchema>;

const SuggestChatTopicsOutputSchema = z.object({
  suggestedTopics: z.array(
    z.string().describe('A suggested topic or question based on the chat history.')
  ).describe('An array of suggested topics or questions.')
});
export type SuggestChatTopicsOutput = z.infer<typeof SuggestChatTopicsOutputSchema>;

export async function suggestChatTopics(input: SuggestChatTopicsInput): Promise<SuggestChatTopicsOutput> {
  return suggestChatTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestChatTopicsPrompt',
  input: {
    schema: z.object({
      chatHistory: z.string().describe('The chat history of the user.'),
    }),
  },
  output: {
    schema: z.object({
      suggestedTopics: z.array(
        z.string().describe('A suggested topic or question based on the chat history.')
      ).describe('An array of suggested topics or questions.')
    }),
  },
  prompt: `Based on the following chat history, suggest 3 relevant topics or questions that the user might be interested in exploring next.\n\nChat History:\n{{chatHistory}}\n\nSuggestions:`, 
});

const suggestChatTopicsFlow = ai.defineFlow<
  typeof SuggestChatTopicsInputSchema,
  typeof SuggestChatTopicsOutputSchema
>(
  {
    name: 'suggestChatTopicsFlow',
    inputSchema: SuggestChatTopicsInputSchema,
    outputSchema: SuggestChatTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
