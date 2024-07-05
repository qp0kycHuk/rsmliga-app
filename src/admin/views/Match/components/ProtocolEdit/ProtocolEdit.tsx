import { ProtocolEditContextProvider } from './ProtocolEdit.Context'
import { ProtocolEditForm } from './ProtocolEdit.Form'

export function ProtocolEdit({ onCancel }: Props) {
  return (
    <ProtocolEditContextProvider onCancel={onCancel}>
      <ProtocolEditForm></ProtocolEditForm>
    </ProtocolEditContextProvider>
  )
}

type Props = {
  item?: IReport
  onCancel?(): void
}
