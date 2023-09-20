import { useSecretaryEditContext } from './SecretaryEdit.Context'
import { EditAvatar } from '@admin/components/Edit/Edit.Avatar'

export function Avatar() {
  const { item, update } = useSecretaryEditContext()

  return <EditAvatar item={item} update={update} placeholder={item.surname} />
}
