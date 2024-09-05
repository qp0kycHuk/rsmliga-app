import { useEditableEntity } from '@hooks/useEditableEntity'
import { useToggle } from '@hooks/useToggle'
import { createContext, FormEvent, useContext } from 'react'
import { MATCHES_KEY, upsertMatch } from '../../service/api'
import { toast } from '@lib/Toast'
import { useQueryClient } from 'react-query'

const MatchEditContext = createContext({} as MatchContextValue)

export const useMatchEditContext = () => useContext(MatchEditContext)

export function MatchEditContextProvider({ children, item, onCancel }: MatchContextProps) {
  const queryClient = useQueryClient()
  const [loading, , loadingStart, loadingEnd] = useToggle(false)
  const [editableMatch, update] = useEditableEntity<EditableMatch>(item)

  async function submit(event: FormEvent) {
    event.preventDefault()
    loadingStart()
    const response = await upsertMatch(editableMatch)
    loadingEnd()

    if (response.data.error) {
      toast.error(response.data.error)
    } else {
      update({ id: response.data.id })
      toast.success('Успешно сохранено')
      queryClient.invalidateQueries(MATCHES_KEY)
    }

    onCancel?.()
  }

  return (
    <MatchEditContext.Provider
      value={
        {
          item: editableMatch,
          update,
          loading,
          loadingStart,
          loadingEnd,
          submit,
          onCancel,
        } as MatchContextValue
      }
    >
      {children}
    </MatchEditContext.Provider>
  )
}
