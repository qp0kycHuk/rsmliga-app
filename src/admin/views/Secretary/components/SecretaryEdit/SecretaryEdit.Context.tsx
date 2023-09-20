import { createContext, useContext } from 'react'
import { useEditableEntity } from '@hooks/useEditableEntity'
import { useToggle } from '@hooks/useToggle'
import { EMPTY_OBJECT } from '@utils/const'
import { toast } from '@lib/Toast'
// import { upsertDelegate } from '../../service/api'
import { useQueryClient } from 'react-query'
import { SECRETARY_KEY, upsertSecretary } from '../../service/api'
// import { api } from '../../service/api'

const SecretaryEditContext = createContext<ISecretaryEditContextValue>(
  {} as ISecretaryEditContextValue
)

export const useSecretaryEditContext = () => useContext(SecretaryEditContext)

export function SecretaryEditContextProvider({
  children,
  item,
  onCancel,
}: ISecretaryEditContextProviderProps) {
  const queryClient = useQueryClient()
  const [loading, , loadingStart, loadingEnd] = useToggle(false)
  const [editableSecretary, update] = useEditableEntity<IEditableSecretary>(item || EMPTY_OBJECT)

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    const data = editableSecretary as ISecretary

    loadingStart()
    const response = await upsertSecretary(data)
    loadingEnd()

    if (response.data.error) {
      toast.error(response.data.error)
    } else {
      toast.success('Успешно сохранено')
      queryClient.invalidateQueries(SECRETARY_KEY)
    }
  }

  return (
    <SecretaryEditContext.Provider
      value={{
        item: editableSecretary,
        update,
        loading,
        loadingStart,
        loadingEnd,
        submit,
        onCancel,
      }}
    >
      {children}
    </SecretaryEditContext.Provider>
  )
}
