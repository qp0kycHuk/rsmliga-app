import { MATCHES_KEY } from '@admin/views/Match/service/api'
import { useEditableEntity } from '@hooks/useEditableEntity'
import { useToggle } from '@hooks/useToggle'
import { toast } from '@lib/Toast'
import { EMPTY_OBJECT } from '@utils/const'
import { createContext, useContext } from 'react'
import { useQueryClient } from 'react-query'
import { upsertProtocol } from '../../service/api'

const ProtocolEditContext = createContext({} as ProtocolContextValue)

export const useProtocolEditContext = () => useContext(ProtocolEditContext)

export function ProtocolEditContextProvider({
  children,
  item,
  onCancel,
  matchId,
}: ProtocolContextProps) {
  const queryClient = useQueryClient()
  const [loading, , loadingStart, loadingEnd] = useToggle(false)
  const [editableProtocol, update] = useEditableEntity<EditableProtocol>(item || EMPTY_OBJECT)

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    console.log('submit')

    loadingStart()
    const response = await upsertProtocol(editableProtocol, matchId)
    console.log(response)

    loadingEnd()

    if (response.data.error) {
      toast.error(response.data.error)
    } else {
      toast.success('Успешно сохранено')
      queryClient.invalidateQueries(MATCHES_KEY)
    }

    onCancel?.()
  }

  return (
    <ProtocolEditContext.Provider
      value={
        {
          item: editableProtocol,
          update,
          loading,
          loadingStart,
          loadingEnd,
          submit,
          onCancel,
        } as ProtocolContextValue
      }
    >
      {children}
    </ProtocolEditContext.Provider>
  )
}
