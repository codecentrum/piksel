'use client'

import { Docs } from '@contentlayer'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export default function LeftPanelMenu({ item }: { item: Docs }) {
  const pathname = usePathname()

  return (
    <li className="relative py-1.5 text-sm">
      {pathname === item.url && (
        <motion.div
          className="absolute -left-[17px] h-4 w-[1.5px] bg-green-200"
          layoutId="active-state-left-panel"
        />
      )}
      <Link
        href={item.url}
        className={twMerge(
          pathname === item.url
            ? 'text-black dark:text-white'
            : 'text-gray-600 dark:text-gray-300'
        )}
      >
        {item.title}
      </Link>
    </li>
  )
}
