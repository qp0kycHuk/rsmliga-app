import { createContext, useContext } from 'react'
import { useEditableEntity } from '@hooks/useEditableEntity'
import { useToggle } from '@hooks/useToggle'
import { toast } from '@lib/Toast'
import { useQueryClient } from 'react-query'
import { REPORTS_KEY, upsertReport } from '../../service/api'
// import { api } from '../../service/api'

const ReportEditContext = createContext<IReportEditContextValue>({} as IReportEditContextValue)

export const useReportEditContext = () => useContext(ReportEditContext)

export function ReportEditContextProvider({ children, item }: IReportEditContextProviderProps) {
  const queryClient = useQueryClient()
  const [loading, , loadingStart, loadingEnd] = useToggle(false)
  const [editableReport, update] = useEditableEntity<IEditableReport>(item || {})

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    const data = editableReport as IReport

    loadingStart()
    const response = await upsertReport(data)
    loadingEnd()

    if (response.data.error) {
      toast.error(response.data.error)
    } else {
      update(response.data.item)
      toast.success('Успешно сохранено')
      queryClient.invalidateQueries(REPORTS_KEY)
    }
  }

  return (
    <ReportEditContext.Provider
      value={{
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
