import { DelegateEditContextProvider } from './DelegateEdit.Context'
import { Form } from './DelegateEdit.Form'

export function DelegateEdit({ delegate, onCancel }: IDelegateEditProps) {
  return (
    <DelegateEditContextProvider delegate={delegate} onCancel={onCancel}>
      <Form />
    </DelegateEditContextProvider>
  )
}
