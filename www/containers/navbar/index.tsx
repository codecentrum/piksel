import BrandLogo from '@/containers/brand'
import TehemeSwitcher from '@/containers/themeSwitcher'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 flex h-14 w-full items-center border-b border-zinc-900/10 bg-white/80 p-4 backdrop-blur lg:px-8 lg:py-4 dark:border-white/10 dark:bg-zinc-900/80">
      <div className="block lg:hidden">
        <BrandLogo />
      </div>

      <div className="hidden w-full items-center justify-between lg:flex">
        <div></div>
        <TehemeSwitcher />
      </div>
    </nav>
  )
}
