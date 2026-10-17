import { defineCollection, z } from 'astro:content';

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['zh', 'en']),
    projectId: z.enum(['medicine', 'jiguang', 'beeye']),
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date()
  })
});

export const collections = { cases };
