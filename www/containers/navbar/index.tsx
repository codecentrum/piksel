import { Button } from '@codecentrum/piksel-ui'

import BrandLogo from '@/containers/brand'
import TehemeSwitcher from '@/containers/themeSwitcher'

export default function Navbar() {
  return (
    <nav className="flex h-14 items-center border-b border-zinc-900/10 p-4 lg:px-8 lg:py-4 dark:border-white/10">
      <div className="block lg:hidden">
        <BrandLogo />
      </div>

      <div className="flex w-full items-center justify-between">
        <div></div>
        <TehemeSwitcher />
      </div>
    </nav>
  )
}
