import { Field } from '@features/ui'
import { useReportEditContext } from '../ReportEdit.Context'

export function Location() {
  const { report, update } = useReportEditContext()

  return (
    <Field
      placeholder="Место проведения:"
      inputProps={{
        value: report.location || '',
        onChange: (event) => {
          update({
            location: event.target.value,
          })
        },
      }}
    />
  )
}
