import { useTextSelection } from '@codecentrum/piksel-hooks'

export default function DemoUseTextSelection() {
  const selection = useTextSelection()

  return (
    <div>
      <p>Select some text on this page</p>
      <p className="mt-2">
        Selected text: <b>{selection?.toString()}</b>
      </p>
    </div>
  )
}
