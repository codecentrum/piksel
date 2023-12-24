// ** https://yusuf.fyi/posts/contentlayer-table-of-contents
// ** Make Table of content article

import { remarkCodeHike } from '@code-hike/mdx'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import GithubSlugger from 'github-slugger'
import rehypeSlug from 'rehype-slug'

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
    toc: {
      type: 'boolean',
      required: false,
      default: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/docs/${doc._raw.flattenedPath}`,
    },
    headings: {
      type: 'json',
      resolve: async (doc) => {
        const regXHeader = /\n(?<flag>#{2,6})\s+(?<content>.+)/g
        const slugger = new GithubSlugger()
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag
            const content = groups?.content
            return {
              level:
                flag?.length == 1
                  ? 'one'
                  : flag?.length == 2
                    ? 'two'
                    : flag?.length == 3
                      ? 'three'
                      : flag?.length == 4
                        ? 'four'
                        : flag?.length == 5
                          ? 'five'
                          : 'six',
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            }
          }
        )
        return headings
      },
    },
  },
}))

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Docs],
  mdx: {
    rehypePlugins: [rehypeSlug],
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme: 'github-dark-dimmed',
          lineNumbers: true,
          showCopyButton: true,
        },
      ],
    ],
  },
})
