'use server';


import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import fetch from 'node-fetch';

const WikipediaSearchToolInputSchema = z.object({
  query: z.string().describe('The search query for Wikipedia.'),
});

const WikipediaSearchResultSchema = z.object({
  title: z.string().describe('The title of the Wikipedia page.'),
  extract: z.string().describe('A summary or extract of the Wikipedia page content.'),
  url: z.string().url().describe('The URL of the Wikipedia page.'),
});

const WikipediaSearchToolOutputSchema = z.array(WikipediaSearchResultSchema).describe('An array of relevant Wikipedia articles.');

const wikipediaSearchTool = ai.defineTool(
  {
    name: 'wikipediaSearch',
    description: 'Searches Wikipedia for articles related to the given query and returns their titles, extracts, and URLs.',
    inputSchema: WikipediaSearchToolInputSchema,
    outputSchema: WikipediaSearchToolOutputSchema,
  },
  async (input) => {
    const { query } = input;
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${encodeURIComponent(query)}&srlimit=3`;

    try {
      const searchResponse = await fetch(searchUrl);
      const searchData: any = await searchResponse.json();

      if (!searchData || !searchData.query || !searchData.query.search || searchData.query.search.length === 0) {
        return [];
      }

      const searchResults = searchData.query.search;
      const results: z.infer<typeof WikipediaSearchToolOutputSchema> = [];

      for (const result of searchResults) {
        const title = result.title;
        const pageUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`;

        const extractUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${encodeURIComponent(title)}&format=json&explaintext&exintro`;
        const extractResponse = await fetch(extractUrl);
        const extractData: any = await extractResponse.json();

        let extract = '';
        if (extractData && extractData.query && extractData.query.pages) {
          const pageId = Object.keys(extractData.query.pages)[0];
          extract = extractData.query.pages[pageId].extract || '';
        }

        results.push({
          title,
          extract,
          url: pageUrl,
        });
      }
      return results;
    } catch (error) {
      console.error('Error fetching from Wikipedia:', error);
      return [];
    }
  }
);

const AnswerQuestionWithWikipediaInputSchema = z.object({
  question: z.string().describe('The question to answer using Wikipedia.'),
});

type AnswerQuestionWithWikipediaInput = z.infer<typeof AnswerQuestionWithWikipediaInputSchema>;

const AnswerQuestionWithWikipediaOutputSchema = z.object({
  text: z.string().describe('The answer text generated from Wikipedia content.'),
  urls: z.array(z.string()).describe('Source URLs from Wikipedia articles used.'),
});

export type AnswerQuestionWithWikipediaOutput = z.infer<typeof AnswerQuestionWithWikipediaOutputSchema>;

const wikipediaAnswerPrompt = ai.definePrompt(
  {
    name: 'wikipediaAnswerPrompt',
    tools: [wikipediaSearchTool],
    input: {
      schema: AnswerQuestionWithWikipediaInputSchema,
    },
    output: {
      schema: AnswerQuestionWithWikipediaOutputSchema,
    },
  },
  `You are a helpful assistant that answers questions using Wikipedia.

Given the user's question, use the wikipediaSearch tool to find relevant Wikipedia articles.
Read the article extracts carefully, then provide a comprehensive answer.

Your response must include:
- "text": A clear, factual answer based on the Wikipedia content. Cite information accurately.
- "urls": An array of the Wikipedia page URLs you used as sources.

User's question: {{question}}`
);

const answerQuestionWithWikipediaFlow = ai.defineFlow(
  {
    name: 'answerQuestionWithWikipediaFlow',
    inputSchema: AnswerQuestionWithWikipediaInputSchema,
    outputSchema: AnswerQuestionWithWikipediaOutputSchema,
  },
  async (input) => {
    const { output } = await wikipediaAnswerPrompt(input);
    return output!;
  }
);

export async function answerQuestionWithWikipedia(input: AnswerQuestionWithWikipediaInput): Promise<AnswerQuestionWithWikipediaOutput> {
  return answerQuestionWithWikipediaFlow(input);
}
