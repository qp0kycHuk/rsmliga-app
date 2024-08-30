import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useFetchGroupSemifinal } from '@admin/service/groups'
import { useMatchEditContext } from '../MatchEdit.Context'

export function SemiFinal() {
  const { item, update } = useMatchEditContext()

  const { data } = useFetchGroupSemifinal()

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Полуфинал</div>
      <Select
        placeholder="Полуфинал:"
        required
        value={item?.group_id || ''}
        onChange={(event) => {
          update({
            group_id: event.target.value,
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
