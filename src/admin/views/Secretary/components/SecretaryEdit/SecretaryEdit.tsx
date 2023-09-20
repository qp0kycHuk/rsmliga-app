import { SecretaryEditContextProvider } from './SecretaryEdit.Context'
import { Form } from './SecretaryEdit.Form'

export function SecretaryEdit({ item, onCancel }: ISecretaryEditProps) {
  return (
    <SecretaryEditContextProvider item={item} onCancel={onCancel}>
      <Form />
    </SecretaryEditContextProvider>
  )
}
