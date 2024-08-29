import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useMatchEditContext } from '../MatchEdit.Context'
import { useFetchConference } from '@admin/service/conference'

export function Conference({ name = 'conference' }: Props) {
  const { item, update } = useMatchEditContext()

  const { data } = useFetchConference()

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
}
