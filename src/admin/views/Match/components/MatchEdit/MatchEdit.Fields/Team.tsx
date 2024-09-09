import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useFetchTeams } from '@admin/service/teams'
import { useMatchEditContext } from '../MatchEdit.Context'

export function Team({ name, city }: Props) {
  const { item, update } = useMatchEditContext()

  const { data } = useFetchTeams({ city })

  return (
    <label className="block">
      <div className="text-sm font-semibold mb-2">Команда</div>
      <Select
        placeholder="Команда:"
        required
        value={item?.[name] || ''}
        onChange={(event) => {
          update({
            [name]: event.target.value,
          })
        }}
      >
        {data?.items.map((item) => (
          <option key={id(item)} value={id(item)}>
            {item.VALUE}
          </option>
        ))}
      </Select>
    </label>
  )
}

type Props = {
  name: 'team_1' | 'team_2'
  city?: EntityId
}
