// !TODO: @urmauur
// !this is still under development
// ** This is a landing page

import Link from 'next/link'

import TehemeSwitcher from '@/containers/themeSwitcher'

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold">Piksel</h1>
        <p className="mt-3 leading-relaxed">
          Beautifully designed components that you can use for any projects.
        </p>
        <Link
          href="/docs/quickstart/introduction"
          className="mt-4 inline-block underline"
        >
          See documentation
        </Link>
        <div className="mt-8">
          <TehemeSwitcher />
        </div>
      </div>
    </main>
  )
}
