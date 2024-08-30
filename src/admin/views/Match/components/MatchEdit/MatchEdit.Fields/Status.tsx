import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useMatchEditContext } from '../MatchEdit.Context'
import { useFetchStatus } from '@admin/views/Match/service/status'

export function Status() {
  const { item, update } = useMatchEditContext()

  const { data } = useFetchStatus()

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Статус</div>
      <Select
        placeholder="Статус"
        required
        value={item?.status || ''}
        onChange={(event) => {
          update({
            status: event.target.value,
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
