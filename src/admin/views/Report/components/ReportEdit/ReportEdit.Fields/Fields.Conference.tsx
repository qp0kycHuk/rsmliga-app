import { Select } from '@features/ui'
import { useReportEditContext } from '../ReportEdit.Context'
import { id } from '@utils/helpers/id'
import { useFetchConference } from '@admin/views/Report/service/conference'

export function Conference() {
  const { report, update } = useReportEditContext()

  const { data } = useFetchConference()

  return (
    <Select
      placeholder="Конференция:"
      required
      value={report.conference_id || ''}
      onChange={(event) => {
        update({
          conference_id: event.target.value,
        })
      }}
    >
      {data?.items.map((item) => (
        <option key={id(item)} value={id(item)}>
          {item.VALUE}
        </option>
      ))}
    </Select>
  )
}
