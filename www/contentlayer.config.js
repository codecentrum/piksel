import { remarkCodeHike } from '@code-hike/mdx'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Docs = defineDocumentType(() => ({
  name: 'Docs',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
}))

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Docs],
  mdx: {
    remarkPlugins: [[remarkCodeHike, { theme: 'nord' }]],
  },
})
