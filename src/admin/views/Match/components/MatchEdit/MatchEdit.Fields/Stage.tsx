import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useFetchStages } from '@admin/service/stages'
import { useMatchEditContext } from '../MatchEdit.Context'

export function Stage() {
  const { item, update } = useMatchEditContext()

  const { data } = useFetchStages()

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Соревнование</div>
      <Select
        placeholder="Этап:"
        required
        value={item?.stage_id || ''}
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
    </div>
  )
}
