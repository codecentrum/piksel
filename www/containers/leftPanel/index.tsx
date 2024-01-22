'use client'

import { allDocs } from '@contentlayer/generated'

import LeftPanelMenu from './_menu'

import BrandLogo from '@/containers/brand'

export default function LeftPanel() {
  const quickStart = allDocs
    .filter((post) => post?._raw.flattenedPath.includes('quickstart'))
    .sort((a, b) => {
      if (a.title < b.title) {
        return 1
      }
      if (a.title > b.title) {
        return -1
      }
      return 0
    })
  const hooks = allDocs
    .filter((post) => post?._raw.flattenedPath.includes('hooks'))
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })
  const components = allDocs
    .filter((post) => post?._raw.flattenedPath.includes('components'))
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })
  const foundations = allDocs
    .filter((post) => post?._raw.flattenedPath.includes('foundations'))
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })
  const utilities = allDocs
    .filter((post) => post?._raw.flattenedPath.includes('utilities'))
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })

  return (
    <aside className="hidden h-full border-r border-zinc-900/10 p-4 lg:fixed lg:inset-0 lg:z-40 lg:block lg:w-56 lg:p-6 dark:border-white/10">
      <div className="mb-10">
        <BrandLogo />
      </div>

      <div className="mb-4">
        <h6 className="!text-xs font-bold">Quickstart</h6>
        <ul className="relative mt-2 border-l border-zinc-900/10 pl-4 dark:border-white/10">
          {quickStart.map((item, i) => {
            return <LeftPanelMenu item={item} key={i} />
          })}
        </ul>
      </div>

      <div className="my-4">
        <h6 className="mb-2 !text-xs font-bold">Foundations</h6>
        <ul className="border-l border-zinc-900/10 pl-4 dark:border-white/10">
          {foundations.map((item, i) => {
            return <LeftPanelMenu item={item} key={i} />
          })}
        </ul>
      </div>

      <div className="my-4">
        <h6 className="mb-2 !text-xs font-bold">Components</h6>
        <ul className="border-l border-zinc-900/10 pl-4 dark:border-white/10">
          {components.map((item, i) => {
            return <LeftPanelMenu item={item} key={i} />
          })}
        </ul>
      </div>

      <div className="my-4">
        <h6 className="mb-2 !text-xs font-bold">Hooks</h6>
        <ul className="border-l border-zinc-900/10 pl-4 dark:border-white/10">
          {hooks.map((item, i) => {
            return <LeftPanelMenu item={item} key={i} />
          })}
        </ul>
      </div>

      <div className="my-4">
        <h6 className="mb-2 !text-xs font-bold">Utilities</h6>
        <ul className="border-l border-zinc-900/10 pl-4 dark:border-white/10">
          {utilities.map((item, i) => {
            return <LeftPanelMenu item={item} key={i} />
          })}
        </ul>
      </div>
    </aside>
  )
}
