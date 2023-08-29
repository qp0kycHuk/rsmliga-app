import { DispatchEditableEntity, useEditableEntity } from '@hooks/useEditableEntity'
import { createContext, useEffect, useState, useContext } from 'react'
import { api } from '../../service/api'
import { useToggle } from '@hooks/useToggle'

const ReportEditContext = createContext<IReportEditContextValue>({} as IReportEditContextValue)

export const useReportEditContext = () => useContext(ReportEditContext)

export function ReportEditContextProvider({ children, contest }: IReportEditContextProviderProps) {
  const [report, setReport] = useState<IReport>()
  const [loading, , loadingStart, loadingEnd] = useToggle(false)

  useEffect(() => {
    api()
      .getReportByContestId(contest.id)
      .then((item) => {
        setReport(item)
      })
  }, [])

  const [editableReport, update] = useEditableEntity<IEditableReport>(report)

  return (
    <ReportEditContext.Provider
      value={{ contest, report: editableReport, update, loading, loadingStart, loadingEnd }}
    >
      {children}
    </ReportEditContext.Provider>
  )
}

interface IReportEditContextProviderProps extends React.PropsWithChildren {
  contest: IContest
}

interface IReportEditContextValue {
  contest: IContest
  report: Partial<IReport>
  loading: boolean
  update(updated: DispatchEditableEntity<IEditableReport>): void
  loadingStart(): void
  loadingEnd(): void
}

interface IEditableReport extends Partial<IReport> {}
