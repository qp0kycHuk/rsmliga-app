import { Select } from '@features/ui'
import { useReportEditContext } from '../ReportEdit.Context'
import { useFetchTournaments } from '@admin/service/tournaments'
import { id } from '@utils/helpers/id'

export function Competition() {
  const { report, update } = useReportEditContext()

  const { data } = useFetchTournaments()

  return report.id ? (
    <div className="sm:text-lg leading-none p-4 rounded-md bg-gray bg-opacity-40">
      <span className="font-semibold">Соревнование: </span>
      {data?.entites[report.competition_id || '']?.NAME}
    </div>
  ) : (
    <Select
      placeholder="Соревнование:"
      required
      value={report.competition_id || ''}
      onChange={(event) => {
        update({
          competition_id: event.target.value,
        })
      }}
    >
      {data?.items.map((item) => (
        <option key={id(item)} value={id(item)}>
          {item.NAME}
        </option>
      ))}
    </Select>
  )
}
