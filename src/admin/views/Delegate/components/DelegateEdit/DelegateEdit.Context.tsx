import { createContext, useContext } from 'react'
import { useEditableEntity } from '@hooks/useEditableEntity'
import { useToggle } from '@hooks/useToggle'
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
  const [editableReport, update] = useEditableEntity<IEditableReport>(delegate || {})

  function submit(event: React.FormEvent) {
    event.preventDefault()
    console.log(editableReport)
  }

  return (
    <DelegateEditContext.Provider
      value={{
        delegate: editableReport,
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
