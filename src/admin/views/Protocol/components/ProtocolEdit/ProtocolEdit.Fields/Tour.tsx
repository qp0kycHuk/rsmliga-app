import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useFetchTours } from '@admin/service/tours'
import { useProtocolEditContext } from '../ProtocolEdit.Context'

export function Tour() {
  const { item, update } = useProtocolEditContext()

  const { data } = useFetchTours()

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Тур</div>
      <Select
        placeholder="Тур:"
        required
        value={item?.tour || ''}
        onChange={(event) => {
          update({
            tour: event.target.value,
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
