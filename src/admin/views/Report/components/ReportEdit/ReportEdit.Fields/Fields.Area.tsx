import { Select } from '@features/ui'
import { useReportEditContext } from '../ReportEdit.Context'
import { id } from '@utils/helpers/id'
import { useFetchCities } from '../../../service/cities'

export function Area() {
  const { report, update } = useReportEditContext()

  const { data } = useFetchCities()

  return (
    <Select
      placeholder="Город/район:"
      required
      value={report.area_id || ''}
      onChange={(event) => {
        update({
          area_id: event.target.value,
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
