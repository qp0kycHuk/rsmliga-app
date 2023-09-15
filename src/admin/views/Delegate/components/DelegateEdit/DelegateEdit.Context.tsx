import { createContext, useContext } from 'react'
import { useEditableEntity } from '@hooks/useEditableEntity'
import { useToggle } from '@hooks/useToggle'
import { EMPTY_OBJECT } from '@utils/const'
import { useFetchCities } from '@admin/service/cities'
import { rootApi } from '@admin/service/api'
import { dateToSQLFormatString } from '@utils/helpers/dates'
import { toast } from '@lib/Toast'
import { upsertDelegate } from '../../service/api'
import { useQueryClient } from 'react-query'
// import { api } from '../../service/api'

const DelegateEditContext = createContext<IDelegateEditContextValue>(
  {} as IDelegateEditContextValue
)

export const useDelegateEditContext = () => useContext(DelegateEditContext)

export function DelegateEditContextProvider({
  children,
  delegate,
  onCancel,
}: IDelegateEditContextProviderProps) {
  const queryClient = useQueryClient()
  const [loading, , loadingStart, loadingEnd] = useToggle(false)
  const [editableDelegate, update] = useEditableEntity<IEditableDelegate>(delegate || EMPTY_OBJECT)

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    const data = editableDelegate as IDelegate

    loadingStart()
    const response = await upsertDelegate(data)
    loadingEnd()

    if (response.data.error) {
      toast.error(response.data.error)
    } else {
      toast.success('Успешно сохранено')
      queryClient.invalidateQueries('delegates')
    }
  }

  return (
    <DelegateEditContext.Provider
      value={{
        delegate: editableDelegate,
        update,
        loading,
        loadingStart,
        loadingEnd,
        submit,
        onCancel,
      }}
    >
      {children}
    </DelegateEditContext.Provider>
  )
}
