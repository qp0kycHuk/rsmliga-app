import { createPortal } from 'react-dom'

export function Debug({ children, data }: Props) {
  return createPortal(
    <div className="fixed left-2 top-2 bottom-2 overflow-auto bg-white z-[10000] p-4 text-sm">
      {children}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>,
    document.body
  )
}

type Props = React.PropsWithChildren & {
  data: unknown
}
