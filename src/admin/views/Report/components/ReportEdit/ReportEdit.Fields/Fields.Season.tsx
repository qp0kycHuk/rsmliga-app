import { Select } from '@features/ui'
import { useReportEditContext } from '../ReportEdit.Context'
import { id } from '@utils/helpers/id'
import { useFetchSeasons } from '@admin/service/seasons'

export function Season() {
  const { report, update } = useReportEditContext()

  const { data } = useFetchSeasons()

  return report.id ? (
    <div className="sm:text-lg/none leading-none p-4 rounded-md bg-gray bg-opacity-40">
      <span className="font-semibold">Сезон: </span>
      {data?.entites[report.season_id || '']?.NAME}
    </div>
  ) : (
    <Select
      placeholder="Сезон:"
      required
      value={report.season_id || ''}
      onChange={(event) => {
        update({
          season_id: event.target.value,
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
