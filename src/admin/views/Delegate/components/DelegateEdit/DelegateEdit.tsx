import { DelegateEditContextProvider } from './DelegateEdit.Context'
import { Form } from './DelegateEdit.Form'

export function DelegateEdit({ delegate }: IDelegateEditProps) {
  return (
    <DelegateEditContextProvider delegate={delegate}>
      <Form />
    </DelegateEditContextProvider>
  )
}
