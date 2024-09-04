import { useFetchJudges } from '@admin/service/judges'
import { Button, Select } from '@features/ui'
import { id } from '@utils/helpers/id'
import { useState } from 'react'

export function JudgeDialog({ item, onSubmit }: Props) {
  const [value, setValue] = useState(item.judge_id)
  const { data } = useFetchJudges()

  function submitHandler() {
    onSubmit?.(value)
  }

  return (
    <div>
      <div className="text-2xl font-semibold mb-6">Выбрать представителя</div>
      <label className="block">
        <div className="text-sm font-semibold mb-2">Судья</div>
        <Select
          placeholder="Судья"
          value={value || ''}
          onChange={(event) => {
            setValue(event.target.value)
          }}
        >
          {data?.items.map((item) => (
            <option key={id(item)} value={id(item)}>
              {item.VALUE}
            </option>
          ))}
        </Select>
      </label>

      <div className="flex mt-5">
        <Button onClick={submitHandler} className="px-15">
          Сохранить
        </Button>
      </div>
    </div>
  )
}

interface Props {
  item: Match
  onSubmit: (value: EntityId) => void
}
