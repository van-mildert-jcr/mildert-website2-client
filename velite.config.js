import { defineConfig, s } from 'velite';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  root: "src/content",
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
    ],
  },
  collections: {
    "events-pages": {
      name: 'Event Page',
      pattern: 'resources/events/**/*.md',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug('resources/events'),
          content: s.mdx()
        })
        // more additional fields (computed fields)
        .transform(data => ({ ...data, permalink: `/resources/events/${data.slug}` })),
    },
  },
})
