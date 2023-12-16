import { remarkCodeHike } from '@code-hike/mdx'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Docs = defineDocumentType(() => ({
  name: 'Docs',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post or page',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post or page',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/docs/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Docs],
  mdx: {
    remarkPlugins: [[remarkCodeHike, { theme: 'nord', lineNumbers: true }]],
  },
})
