import { PropsWithChildren } from 'react'

import Footer from '@/containers/footer'
import LeftPanel from '@/containers/leftPanel'
import Navbar from '@/containers/navbar'

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props
  return (
    <div className="h-full lg:ml-56">
      <LeftPanel />
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <div className="h-full flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  )
}
