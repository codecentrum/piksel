import { useOs } from '@codecentrum/piksel-hooks'

export default function DemoUseOs() {
  const os = useOs()
  return (
    <p>
      Your os is <b>{os}</b>
    </p>
  )
}
