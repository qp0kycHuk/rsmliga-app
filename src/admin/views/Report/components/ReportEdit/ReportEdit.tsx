import { ReportEditContextProvider } from './ReportEdit.Context'
import { Form } from './ReportEdit.Form'

interface IReportEditProps {
  item: IReport
}

export function ReportEdit({ item }: IReportEditProps) {
  return (
    <ReportEditContextProvider item={item}>
      <Form />
    </ReportEditContextProvider>
  )
}
