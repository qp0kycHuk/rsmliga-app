import { Button, Select } from '@features/ui'
import { useState } from 'react'
import { useProtocolEditContext } from '../ProtocolEdit.Context'
import { id } from '@utils/helpers/id'

export function MemberDialog({ onSubmit }: Props) {
  const [value, setValue] = useState('')
  const { item } = useProtocolEditContext()
  const members = [...(item.team_1_info?.members || []), ...(item.team_2_info?.members || [])]

  function submitHandler() {
    onSubmit?.(value)
  }

  return (
    <div>
      <div className="text-2xl font-semibold mb-6">Выбрать участника</div>
      <label className="block">
        <div className="text-sm font-semibold mb-2">Участник</div>
        <Select
          placeholder="Участник"
          value={value || ''}
          onChange={(event) => {
            setValue(event.target.value)
          }}
        >
          {members.map((item) => (
            <option key={id(item)} value={id(item)}>
              {item.FIO}
            </option>
          ))}
        </Select>
      </label>

      <div className="flex mt-5">
        <Button onClick={submitHandler} className="px-15" disabled={!value}>
          Добавить
        </Button>
      </div>
    </div>
  )
}

interface Props {
  onSubmit: (value: string) => void
}
