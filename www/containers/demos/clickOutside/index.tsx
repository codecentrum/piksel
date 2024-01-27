import { Fragment, useState } from 'react'

import { useClickOutside } from '@codecentrum/piksel-hooks'
import { Button } from '@codecentrum/piksel-ui'

export default function DemoUseClickOutside() {
  const [opened, setOpened] = useState('')
  const ref = useClickOutside(() => setOpened('Click Outside'))

  return (
    <Fragment>
      <Button
        theme="primary"
        ref={ref}
        onClick={() => setOpened('Click Inside')}
      >
        Button
      </Button>
      <p className="mt-4">{opened}</p>
    </Fragment>
  )
}
