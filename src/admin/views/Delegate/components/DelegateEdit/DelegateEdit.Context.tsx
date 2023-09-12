import { createContext, useContext } from 'react'
import { useEditableEntity } from '@hooks/useEditableEntity'
import { useToggle } from '@hooks/useToggle'
import { EMPTY_OBJECT } from '@utils/const'
import { useFetchCities } from '@admin/service/cities'
import { rootApi } from '@admin/service/api'
import { dateToSQLFormatString } from '@utils/helpers/dates'
import { toast } from '@lib/Toast'
// import { api } from '../../service/api'

const DelegateEditContext = createContext<IDelegateEditContextValue>(
  {} as IDelegateEditContextValue
)

export const useDelegateEditContext = () => useContext(DelegateEditContext)

export function DelegateEditContextProvider({
  children,
  delegate,
}: IDelegateEditContextProviderProps) {
  const [loading, , loadingStart, loadingEnd] = useToggle(false)
  const [editableDelegate, update] = useEditableEntity<IEditableDelegate>(delegate || EMPTY_OBJECT)

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    const data = editableDelegate as IDelegate

    const formData = new FormData()

    if (data.id) {
      formData.append('ID', data.id as string)
      formData.append('action', 'edit')
    } else {
      formData.append('action', 'save')
    }

    if (data.imageFile) {
      formData.append('PERSONAL_PHOTO', data.imageFile)
    }

    formData.append('NAME', data.name || '')
    formData.append('SECOND_NAME', data.surname || '')
    formData.append('LAST_NAME', data.patronymic || '')
    formData.append('EMAIL', data.email || '')
    formData.append('PERSONAL_BIRTHDAY', dateToSQLFormatString(new Date(data.birthdate)))
    formData.append('CATEGORY', data.category || '')
    formData.append('LOCATION', data.location || '')
    formData.append('INFO', data.comment || '')
    formData.append('SEX', data.sex || '')
    formData.append('PHONE', data.phone || '')

    Object.entries(data.documents).forEach(([key, items]) => {
      if (!items) return

      const name = key + (items.length > 1 ? '[]' : '')

      items.forEach(({ file }) => {
        if (file) {
          formData.append(name, file)
        }
      })
    })

    // formData.append('EDUCATION', 'test')

    const response = await rootApi.post('/judge_handler.php', formData)

    if (response.data.error) {
      toast.error(response.data.error)
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
      }}
    >
      {children}
    </DelegateEditContext.Provider>
  )
}
