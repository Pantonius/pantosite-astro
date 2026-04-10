import { glob, file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const bachelor = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/bachelor', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    part: z.number(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
  }),
});

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
  }),
}
);

const photography = defineCollection({
  // Load Markdown and MDX files in the `src/content/projects/` directory.
  loader: file(
    './src/content/photography/index.json'
  ),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    src: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
  }),
});

const projects = defineCollection({
  // Load Markdown and MDX files in the `src/content/projects/` directory.
  loader: glob({
    base: './src/content/projects', pattern: '**/*.{md,mdx}'
  }),
  // Type-check frontmatter using a schema
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
  }),
});

export const collections = { bachelor, blog, photography, projects };
