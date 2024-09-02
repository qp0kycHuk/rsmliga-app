import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useMatchEditContext } from '../MatchEdit.Context'
import { useFetchConference } from '@admin/views/Match/service/conference'

export function Conference({ name = 'conference', clearKeys = [] }: Props) {
  const { item, update } = useMatchEditContext()

  const { data } = useFetchConference()

  const clear: Record<string, undefined> = {}

  for (const key of clearKeys) {
    clear[key] = undefined
  }

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Конференция</div>
      <Select
        placeholder="Конференция:"
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
  name?: 'conf1' | 'conf2' | 'conference'
  clearKeys?: string[]
}
