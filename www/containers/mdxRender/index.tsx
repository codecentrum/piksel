'use client'

import { Button, Badge } from '@codecentrum/piksel-ui'

import { Docs } from '@contentlayer/generated'
import Link from 'next/link'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { twMerge } from 'tailwind-merge'

import DemoUseClickOutside from '@/containers/demos/clickOutside'
import DemoUseClipboard from '@/containers/demos/clipboard'
import DemoUseOs from '@/containers/demos/os'
import DemoUsePageLeave from '@/containers/demos/pageLeave'
import DemoUseTextSelection from '@/containers/demos/textSelection'

export default function ContentMDX({ value }: { value: Docs }) {
  const Content = getMDXComponent(value?.body.code)
  return (
    <div className="relative mx-auto my-6 flex h-full w-full">
      <article
        className={twMerge(
          'h-full w-full p-4 lg:px-48',
          value.toc && 'lg:w-[calc(100%-240px)]'
        )}
      >
        <Content
          components={{
            Button,
            Badge,
            DemoUseClipboard,
            DemoUsePageLeave,
            DemoUseTextSelection,
            DemoUseClickOutside,
            DemoUseOs,
          }}
        />
      </article>
      {value.toc && (
        <div className="fixed right-0 top-20 hidden w-60 flex-shrink-0 border-l border-zinc-900/10 px-8 py-4 lg:block dark:border-white/10">
          <h6 className="mb-4 !text-sm">On this page</h6>
          <ul>
            {value.headings.map(
              (heading: { slug: string; text: string; level: string }) => {
                return (
                  <li key={`#${heading.slug}`} className="my-2 block text-sm">
                    <Link
                      data-level={heading.level}
                      className="data-[level=five]:pl-4 data-[level=six]:pl-6"
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
