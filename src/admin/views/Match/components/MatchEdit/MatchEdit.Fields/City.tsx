import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useMatchEditContext } from '../MatchEdit.Context'
import { useFetchCities } from '@admin/service/cities'

export function City() {
  const { item, update } = useMatchEditContext()

  const { data } = useFetchCities()

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Город</div>
      <Select
        placeholder="Город:"
        required
        value={item?.city || ''}
        onChange={(event) => {
          update({
            city: event.target.value,
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
