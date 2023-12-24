import { useTextSelection } from '@codecentrum/piksel-hooks'

export default function DemoUseTextSelection() {
  const selection = useTextSelection()

  return (
    <div>
      <p>Select some text on this page</p>
      <h6 className="mt-2">Selected text: {selection?.toString()}</h6>
    </div>
  )
}
