import { Select } from '@features/ui'
import { useFetchTournaments } from '@admin/service/tournaments'
import { id } from '@utils/helpers/id'
import { useMatchEditContext } from '../MatchEdit.Context'

export function Competition() {
  const { item, update } = useMatchEditContext()

  const { data } = useFetchTournaments()

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Соревнование</div>
      <Select
        placeholder="Соревнование:"
        required
        value={item?.competition || ''}
        onChange={(event) => {
          update({
            competition: event.target.value,
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
