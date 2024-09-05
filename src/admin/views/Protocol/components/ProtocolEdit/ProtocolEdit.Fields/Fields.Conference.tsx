import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useProtocolEditContext } from '../ProtocolEdit.Context'
import { useFetchConference } from '@admin/views/Match/service/conference'

export function Conference() {
  const { item, update } = useProtocolEditContext()

  const { data } = useFetchConference()

  return (
    <label className="block">
      <div className="text-sm font-semibold mb-2">Конференция</div>
      <Select
        placeholder="Конференция:"
        required
        value={item?.conference_id || ''}
        onChange={(event) => {
          update({
            conference_id: event.target.value,
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
