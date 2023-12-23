'use client'

import { useTheme } from 'next-themes'

export default function TehemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="space-x-4">
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <button onClick={() => setTheme('system')}>System Mode</button>
    </div>
  )
}
