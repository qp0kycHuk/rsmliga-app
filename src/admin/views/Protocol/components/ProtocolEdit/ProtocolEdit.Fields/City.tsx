import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useFetchCities } from '@admin/service/cities'
import { useProtocolEditContext } from '../ProtocolEdit.Context'

export function City({ conference, clearKeys = [] }: Props) {
  const { item, update } = useProtocolEditContext()
  const { data } = useFetchCities({ conference })
  const clear: Record<string, undefined> = {}

  for (const key of clearKeys) {
    clear[key] = undefined
  }

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Район / Город</div>
      <Select
        placeholder="Район / Город:"
        required
        value={item?.area_id || ''}
        onChange={(event) => {
          update({
            area_id: event.target.value,
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
  conference?: EntityId
  clearKeys?: string[]
}
