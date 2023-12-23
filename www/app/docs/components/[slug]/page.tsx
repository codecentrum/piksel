import { Docs, allDocs } from '@contentlayer'

import ContentMDX from '@/containers/mdxRender'

export const generateStaticParams = async () =>
  allDocs.map((post) => ({ slug: post?._raw.flattenedPath.split('/')[1] }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allDocs.find(
    (post) => post?._raw.flattenedPath.split('/')[1] === params.slug
  )
  return { title: `Piksel - ${post?.title}`, description: post?.description }
}

const MDXLayout = ({ params }: { params: { slug: string } }) => {
  const doc = allDocs.find((post) => {
    return post?._raw.flattenedPath.split('/')[1] === params.slug
  }) as Docs

  return (
    <article className="mx-auto h-full w-full p-4 lg:w-3/4 lg:p-8">
      <ContentMDX value={doc} />
    </article>
  )
}

export default MDXLayout
