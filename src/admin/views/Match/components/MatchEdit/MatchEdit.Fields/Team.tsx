import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useFetchTeams } from '@admin/service/teams'
import { useMatchEditContext } from '../MatchEdit.Context'

export function Team() {
  const { item, update } = useMatchEditContext()

  const { data } = useFetchTeams()

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Команда {item?.team_1}</div>
      <Select
        placeholder="Команда:"
        required
        value={item?.team_1 || ''}
        onChange={(event) => {
          update({
            team_1: event.target.value,
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
