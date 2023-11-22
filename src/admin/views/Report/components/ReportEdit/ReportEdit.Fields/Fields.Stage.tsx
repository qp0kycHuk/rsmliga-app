import { Select } from '@features/ui'
import { useReportEditContext } from '../ReportEdit.Context'
import { id } from '@utils/helpers/id'
import { useFetchStages } from '@admin/service/stages'

export function Stage() {
  const { report, update } = useReportEditContext()

  const { data } = useFetchStages()

  return report.id ? (
    <div className="sm:text-lg leading-none p-4 rounded-md bg-gray bg-opacity-40">
      <span className="font-semibold">Этап: </span>
      {data?.entites[report.stage_id || '']?.VALUE}
    </div>
  ) : (
    <Select
      placeholder="Этап:"
      required
      value={report.stage_id || ''}
      onChange={(event) => {
        update({
          stage_id: event.target.value,
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
