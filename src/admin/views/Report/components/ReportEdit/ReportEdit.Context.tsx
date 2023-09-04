import { createContext, useContext } from 'react'
import { useEditableEntity } from '@hooks/useEditableEntity'
import { useToggle } from '@hooks/useToggle'
// import { api } from '../../service/api'

const ReportEditContext = createContext<IReportEditContextValue>({} as IReportEditContextValue)

export const useReportEditContext = () => useContext(ReportEditContext)

export function ReportEditContextProvider({ children, contest }: IReportEditContextProviderProps) {
  const [loading, , loadingStart, loadingEnd] = useToggle(false)
  const [editableReport, update] = useEditableEntity<IEditableReport>(contest.report || {})

  function submit(event: React.FormEvent) {
    event.preventDefault()
    console.log(editableReport)
  }

  return (
    <ReportEditContext.Provider
      value={{
        contest,
        report: editableReport,
        update,
        loading,
        loadingStart,
        loadingEnd,
        submit,
      }}
    >
      {children}
    </ReportEditContext.Provider>
  )
}
