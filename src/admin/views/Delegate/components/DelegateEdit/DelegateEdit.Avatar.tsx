import { useDelegateEditContext } from './DelegateEdit.Context'
import { EditAvatar } from '@admin/components/Edit/Edit.Avatar'

export function Avatar() {
  const { delegate, update } = useDelegateEditContext()

  return <EditAvatar item={delegate} update={update} placeholder={delegate.surname} />
}
