import { defineConfig, s } from 'velite';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  root: "src/content",
  mdx: {
    gfm: true,
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
    ],
  },
  collections: {
    "events-pages": {
      name: 'Event Page',
      pattern: 'resources/events/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(99),
          content: s.mdx()
          slug: s.path(),
        })
        // more additional fields (computed fields)
        .transform(data => ({ ...data, permalink: `/resources/events/${data.slug}` })),
    },
  },
})
