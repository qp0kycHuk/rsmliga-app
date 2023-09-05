import { createContext, useContext } from 'react'
import { useEditableEntity } from '@hooks/useEditableEntity'
import { useToggle } from '@hooks/useToggle'
import { EMPTY_OBJECT } from '@utils/const'
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

  function submit(event: React.FormEvent) {
    event.preventDefault()
    console.log(editableDelegate)
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
