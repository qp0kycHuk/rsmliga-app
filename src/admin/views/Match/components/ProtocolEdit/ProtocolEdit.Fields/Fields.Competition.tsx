import { Select } from '@features/ui'
import { useFetchTournaments } from '@admin/service/tournaments'
import { id } from '@utils/helpers/id'
import { useProtocolEditContext } from '../ProtocolEdit.Context'

export function Competition() {
  const { item, update } = useProtocolEditContext()

  const { data } = useFetchTournaments()

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Соревнование</div>
      <Select
        placeholder="Соревнование:"
        required
        value={item?.competition_id || ''}
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
    </div>
  )
}
