import { allDocs } from '@contentlayer'

import LeftPanelMenu from './_menu'

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
    <aside className="hidden h-full border-r border-gray-200 p-4 lg:fixed lg:inset-0 lg:z-40 lg:block lg:w-56">
      <div className="mb-4">
        <h6 className="mb-1 font-bold">Quickstart</h6>
        <ul className="mt-2 pl-4">
          {quickStart.map((item, i) => {
            return <LeftPanelMenu item={item} key={i} />
          })}
        </ul>
      </div>

      <div className="my-4">
        <h6 className="mb-1 font-bold">Foundations</h6>
        <ul className="mt-2 pl-4">
          {foundations.map((item, i) => {
            return <LeftPanelMenu item={item} key={i} />
          })}
        </ul>
      </div>

      <div className="my-4">
        <h6 className="mb-1 font-bold">Components</h6>
        <ul className="mt-2 pl-4">
          {components.map((item, i) => {
            return <LeftPanelMenu item={item} key={i} />
          })}
        </ul>
      </div>

      <div className="my-4">
        <h6 className="mb-1 font-bold">Hooks</h6>
        <ul className="mt-2 pl-4">
          {hooks.map((item, i) => {
            return <LeftPanelMenu item={item} key={i} />
          })}
        </ul>
      </div>

      <div className="my-4">
        <h6 className="mb-1 font-bold">Utilities</h6>
        <ul className="mt-2 pl-4">
          {utilities.map((item, i) => {
            return <LeftPanelMenu item={item} key={i} />
          })}
        </ul>
      </div>
    </aside>
  )
}
