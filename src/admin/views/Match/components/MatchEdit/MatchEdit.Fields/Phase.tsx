import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useFetchPhases } from '@admin/service/phase'
import { useMatchEditContext } from '../MatchEdit.Context'

export function Phase() {
  const { item, update } = useMatchEditContext()

  const { data } = useFetchPhases()

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Стадия</div>
      <Select
        placeholder="Стадия:"
        required
        value={item?.phase_id || ''}
        onChange={(event) => {
          update({
            phase_id: event.target.value,
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
