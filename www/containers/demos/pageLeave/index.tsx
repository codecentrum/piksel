import { useState } from 'react'

import { usePageLeave } from '@codecentrum/piksel-hooks'

export default function DemoUsePageLeave() {
  const [count, setCount] = useState(0)

  usePageLeave(() => setCount((prev) => prev + 1))

  return (
    <div>
      <p>
        Your mouse left the page{' '}
        <span className="!text-emerald-400">{count}</span> times
      </p>
    </div>
  )
}
