import { ReportEditContextProvider } from './ReportEdit.Context'
import { Form } from './ReportEdit.Form'

interface IReportEditProps {
  contest: IContest
}

export function ReportEdit({ contest }: IReportEditProps) {
  return (
    <ReportEditContextProvider contest={contest}>
      <Form />
    </ReportEditContextProvider>
  )
}
