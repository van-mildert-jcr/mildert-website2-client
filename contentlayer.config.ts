import { defineDocumentType, makeSource, ComputedFields } from "contentlayer2/source-files"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

const commonComputedFields: ComputedFields<"DocumentType<string>"> = {
  pathParts: { type: 'list', of: { type: 'string' }, resolve: (page) => page._raw.flattenedPath.split("/") },
  category: {
    type: 'string', resolve: (page) => {
      const parts = page._raw.flattenedPath.split("/");
      if (parts.length == 2) return null
    }
  },
  slug: { type: 'string', resolve: (page) => `${page._raw.flattenedPath}` }
}

export const EventPage = defineDocumentType(() => ({
  name: "EventPage",
  filePathPattern: "resources/events/**/*.mdx",
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields: {
    ...commonComputedFields,
    url: { type: 'string', resolve: (eventPage) => `/resources/events/${eventPage._raw.flattenedPath}` },
  },
}))

export const OutreachProjectPage = defineDocumentType(() => ({
  name: "OutreachProjectPage",
  filePathPattern: "resources/outreach-projects/**/*.mdx",
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields: {
    ...commonComputedFields,
    url: { type: 'string', resolve: (outreachProjectPage) => `/resources/outreach/${outreachProjectPage._raw.flattenedPath}` },
  },
}))

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [
    EventPage,
    OutreachProjectPage,
  ],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
})
