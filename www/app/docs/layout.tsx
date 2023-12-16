import { PropsWithChildren } from 'react'

import Footer from '@/containers/footer'
import LeftPanel from '@/containers/leftPanel'
import Navbar from '@/containers/navbar'

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props
  return (
    <div className="h-full lg:ml-72 xl:ml-80">
      <LeftPanel />
      <div className="relative flex h-full flex-col">
        <Navbar />
        <div className="h-full">{children}</div>
        <Footer />
      </div>
    </div>
  )
}
