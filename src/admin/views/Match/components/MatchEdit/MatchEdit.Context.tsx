import { useEditableEntity } from '@hooks/useEditableEntity'
import { useToggle } from '@hooks/useToggle'
import { EMPTY_OBJECT } from '@utils/const'
import { createContext, useContext } from 'react'

const MatchEditContext = createContext({} as MatchContextValue)

export const useMatchEditContext = () => useContext(MatchEditContext)

export function MatchEditContextProvider({ children, item, onCancel }: MatchContextProps) {
  const [loading, , loadingStart, loadingEnd] = useToggle(false)
  const [editableMatch, update] = useEditableEntity<EditableMatch>(item || EMPTY_OBJECT)

  return (
    <MatchEditContext.Provider
      value={
        {
          item: editableMatch,
          update,
          loading,
          loadingStart,
          loadingEnd,
          // submit: submit,
          onCancel,
        } as MatchContextValue
      }
    >
      {children}
    </MatchEditContext.Provider>
  )
}
