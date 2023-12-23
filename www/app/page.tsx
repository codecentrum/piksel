// !TODO: @urmauur
// !this is still under development
// ** This is a landing page

import { Button } from '@codecentrum/piksel-ui'
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

        <div className="mt-8 flex items-center justify-center space-x-4">
          <Button size="small">Small</Button>
          <Button>Default</Button>
          <Button size="large">Large</Button>
        </div>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <Button themes="secondary" size="small">
            Small
          </Button>
          <Button themes="secondary">Secondary</Button>
          <Button themes="secondary" size="large">
            Large
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <Button themes="danger" size="small">
            Small
          </Button>
          <Button themes="danger">Danger</Button>

          <Button themes="danger" size="large">
            Large
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <Button themes="success" size="small">
            Small
          </Button>
          <Button themes="success">Success</Button>
          <Button themes="success" size="large">
            Large
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <Button themes="warning" size="small">
            Small
          </Button>
          <Button themes="warning">Warning</Button>
          <Button themes="warning" size="large">
            Large
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <Button themes="info" size="small">
            Small
          </Button>
          <Button themes="info">Info</Button>
          <Button themes="info" size="large">
            Large
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <Button themes="info" size="small" disabled>
            Small
          </Button>
          <Button themes="info" disabled>
            Disabled
          </Button>
          <Button themes="info" size="large" disabled>
            Large
          </Button>
        </div>
      </div>
    </main>
  )
}
