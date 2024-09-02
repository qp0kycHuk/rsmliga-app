import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useMatchEditContext } from '../MatchEdit.Context'
import { useFetchCities } from '@admin/service/cities'

export function City({ name = 'city', conference, clearKeys = [] }: Props) {
  const { item, update } = useMatchEditContext()
  const { data } = useFetchCities({ conference })
  const clear: Record<string, undefined> = {}

  for (const key of clearKeys) {
    clear[key] = undefined
  }

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Город</div>
      <Select
        placeholder="Город:"
        required
        value={item?.[name] || ''}
        onChange={(event) => {
          update({
            [name]: event.target.value,
            ...clear,
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

type Props = {
  name?: 'city1' | 'city2' | 'city'
  conference?: EntityId
  clearKeys?: string[]
}
