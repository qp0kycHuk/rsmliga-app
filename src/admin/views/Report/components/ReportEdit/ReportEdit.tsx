import { ReportEditContextProvider } from './ReportEdit.Context'
import { ReportEditForm } from './ReportEdit.Form'

interface IReportEditProps {
  contest: IContest
}

export function ReportEdit({ contest }: IReportEditProps) {
  return (
    <ReportEditContextProvider contest={contest}>
      <ReportEditForm />
    </ReportEditContextProvider>
  )
}
