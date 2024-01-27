import { useClipboard } from '@codecentrum/piksel-hooks'
import { Button } from '@codecentrum/piksel-ui'

export default function DemoUseClipboard() {
  const clipboard = useClipboard({ timeout: 1000 })

  return (
    <Button
      size="small"
      theme="primary"
      onClick={() => clipboard.copy('Hello!')}
    >
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  )
}
