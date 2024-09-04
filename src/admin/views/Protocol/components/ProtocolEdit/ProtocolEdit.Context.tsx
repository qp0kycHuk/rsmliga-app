import { useEditableEntity } from '@hooks/useEditableEntity'
import { useToggle } from '@hooks/useToggle'
import { EMPTY_OBJECT } from '@utils/const'
import { createContext, useContext } from 'react'

const ProtocolEditContext = createContext({} as ProtocolContextValue)

export const useProtocolEditContext = () => useContext(ProtocolEditContext)

export function ProtocolEditContextProvider({ children, item, onCancel }: ProtocolContextProps) {
  const [loading, , loadingStart, loadingEnd] = useToggle(false)
  const [editableProtocol, update] = useEditableEntity<EditableProtocol>(item || EMPTY_OBJECT)

  return (
    <ProtocolEditContext.Provider
      value={
        {
          item: editableProtocol,
          update,
          loading,
          loadingStart,
          loadingEnd,
          // submit: submit,
          onCancel,
        } as ProtocolContextValue
      }
    >
      {children}
    </ProtocolEditContext.Provider>
  )
}
