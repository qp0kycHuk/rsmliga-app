import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useMatchEditContext } from '../MatchEdit.Context'
import { useFetchDivisions } from '@admin/service/divisions'

export function Division() {
  const { item, update } = useMatchEditContext()

  const { data } = useFetchDivisions()

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Дивизион</div>
      <Select
        placeholder="Дивизион:"
        required
        value={item?.division || ''}
        onChange={(event) => {
          update({
            division: event.target.value,
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
