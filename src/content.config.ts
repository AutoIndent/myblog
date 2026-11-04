import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      /** Optional cover photo, shown at the top of the post, in lists and in link previews. */
      cover: z
        .object({
          image: image(),
          alt: z.string(),
          caption: z.string().optional(),
          credit: z.string().optional(),
          source: z.url().optional(),
          license: z.string().optional(),
          licenseUrl: z.url().optional(),
        })
        .optional(),
    }),
});

export const collections = { blog };
