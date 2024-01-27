import { PropsWithChildren } from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { twMerge } from 'tailwind-merge'

import '@/styles/main.scss'

const InterFont = Inter({ subsets: ['latin'] })

import ThemeProvider from '@/containers/providers/theme'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body
        className={twMerge(
          InterFont.className,
          'flex h-full w-full flex-col bg-white text-sm text-black antialiased dark:bg-zinc-900 dark:text-white'
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
