import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useFetchJudges } from '@admin/service/judges'
import { useMatchEditContext } from '../MatchEdit.Context'

export function Judge({ name = 'judge', label = 'Судья' }: Props) {
  const { item, update } = useMatchEditContext()

  const { data } = useFetchJudges()

  return (
    <div>
      <div className="text-sm font-semibold mb-2">{label}</div>
      <Select
        placeholder={label}
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
  name?: 'judge' | 'delegate' | 'assistant_1' | 'assistant_2'
  label?: string
}
