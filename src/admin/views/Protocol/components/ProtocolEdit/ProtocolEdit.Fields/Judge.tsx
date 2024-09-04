import { Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useFetchJudges } from '@admin/service/judges'
import { useProtocolEditContext } from '../ProtocolEdit.Context'

export function Judge({ name = 'judge_id', label = 'Судья' }: Props) {
  const { item, update } = useProtocolEditContext()

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
  name?: 'judge_id' | 'delegate_id' | 'helper_1_id' | 'helper_2_id'
  label?: string
}
