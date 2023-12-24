'use client'

import { Button } from '@codecentrum/piksel-ui'
import { Docs } from '@contentlayer'
import Link from 'next/link'
import { getMDXComponent } from 'next-contentlayer/hooks'

export default function ContentMDX({ value }: { value: Docs }) {
  const Content = getMDXComponent(value?.body.code)
  return (
    <div className="mx-auto my-6 flex w-full lg:w-3/4">
      <article className="w-full p-4 lg:px-8">
        <Content components={{ Button }} />
      </article>
      {value.toc && (
        <div className="hidden w-60 flex-shrink-0 border-l border-zinc-900/10 px-8 py-4 lg:block dark:border-white/10">
          <h3 className="mb-2">On this page</h3>
          <ul>
            {value.headings.map(
              (heading: { slug: string; text: string; level: string }) => {
                return (
                  <li key={`#${heading.slug}`} className="my-1 inline-block">
                    <Link
                      data-level={heading.level}
                      className="data-[level=five]:pl-6 data-[level=four]:pl-4 data-[level=six]:pl-8 data-[level=three]:pl-2"
                      href={`#${heading.slug}`}
                    >
                      {heading.text}
                    </Link>
                  </li>
                )
              }
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
