'use client'

import { PropsWithChildren } from 'react'

import { ThemeProvider as ThemeProviderNextThemes } from 'next-themes'

export default function ThemeProvider(props: PropsWithChildren) {
  const { children } = props
  return <ThemeProviderNextThemes>{children}</ThemeProviderNextThemes>
}
