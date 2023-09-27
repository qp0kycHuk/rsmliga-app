import { ReportEditContextProvider } from './ReportEdit.Context'
import { Form } from './ReportEdit.Form'

interface IReportEditProps {
  item: IReport
  onCancel?(): void
}

export function ReportEdit({ item, onCancel }: IReportEditProps) {
  return (
    <ReportEditContextProvider item={item} onCancel={onCancel}>
      <Form />
    </ReportEditContextProvider>
  )
}
