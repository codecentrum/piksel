'use client'

import { Docs } from '@contentlayer'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export default function LeftPanelMenu({ item }: { item: Docs }) {
  const pathname = usePathname()

  return (
    <li className="relative py-1 text-sm">
      {pathname === item.url && (
        <motion.div
          className="absolute -left-[17.5px] h-5 w-[2px] bg-emerald-500 dark:bg-emerald-400"
          layoutId="active-state-left-panel"
        />
      )}
      <Link
        href={item.url}
        className={twMerge(
          pathname === item.url && 'text-black dark:text-white'
        )}
      >
        {item.title}
      </Link>
    </li>
  )
}
