import { Docs } from '@contentlayer'
import Link from 'next/link'

export default function LeftPanelMenu({ item }: { item: Docs }) {
  return (
    <li className="py-1.5 text-sm">
      <Link href={item.url}>{item.title}</Link>
    </li>
  )
}
