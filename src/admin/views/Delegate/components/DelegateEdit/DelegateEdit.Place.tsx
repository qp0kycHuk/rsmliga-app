import { Select } from '@features/ui'
import { useDelegateEditContext } from './DelegateEdit.Context'
import { useFetchCities } from '@admin/service/cities'

export function Place() {
  const { delegate, update } = useDelegateEditContext()
  const { data } = useFetchCities()

  return (
    <div>
      <div className="font-semibold mb-1">Населенный пункт</div>
      <Select
        inputProps={{
          value: delegate.location,
          onChange: (event) => update({ location: event.target.value }),
        }}
      >
        {data?.items.map((city) => (
          <option key={city.ID} value={city.ID}>
            {city.NAME}
          </option>
        ))}
      </Select>
    </div>
  )
}
