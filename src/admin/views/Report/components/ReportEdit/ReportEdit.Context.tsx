import { createContext, useContext } from 'react'
import { useEditableEntity } from '@hooks/useEditableEntity'
import { useToggle } from '@hooks/useToggle'
import { toast } from '@lib/Toast'
import { useQueryClient } from 'react-query'
import { REPORTS_KEY, upsertReport } from '../../service/api'
import { EMPTY_OBJECT } from '@utils/const'
import { useFetchReportStatuses } from '../../service/statuses'
// import { api } from '../../service/api'

const ReportEditContext = createContext<IReportEditContextValue>({} as IReportEditContextValue)

export const useReportEditContext = () => useContext(ReportEditContext)

export function ReportEditContextProvider({
  children,
  item,
  onCancel,
}: IReportEditContextProviderProps) {
  const queryClient = useQueryClient()
  const [loading, , loadingStart, loadingEnd] = useToggle(false)
  const [editableReport, update] = useEditableEntity<IEditableReport>(item || EMPTY_OBJECT)

  const { data: statusesData } = useFetchReportStatuses()

  const checkingId = statusesData?.items.find(({ XML_ID }) => XML_ID == 'checking')?.ID
  const editingId = statusesData?.items.find(({ XML_ID }) => XML_ID == 'editing')?.ID

  // Сохранить
  async function save(event?: React.FormEvent) {
    event?.preventDefault()
    const data = editableReport as IReport

    upsert({
      ...data,
      newStatus: editingId as string,
    })
  }

  // Отправить отчет в департамент проведения соревнований
  function send(event?: React.FormEvent) {
    event?.preventDefault()
    const data = editableReport as IReport

    upsert({
      ...data,
      newStatus: checkingId as string,
    })
  }

  async function upsert(data: IEditableReport) {
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
        submit: save,
        send: send,
        onCancel,
      }}
    >
      {children}
    </ReportEditContext.Provider>
  )
}
