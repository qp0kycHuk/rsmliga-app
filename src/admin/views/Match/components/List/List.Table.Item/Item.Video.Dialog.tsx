import { Button, Field } from '@features/ui'
import { useState } from 'react'

export function VideoDialog({ item, onSubmit }: Props) {
  const [value, setValue] = useState(item.video)

  function submitHandler() {
    onSubmit?.(value)
  }

  return (
    <div>
      <div className="text-2xl font-semibold mb-6">Видеообзор</div>
      <label className="block">
        <div className="text-sm font-semibold mb-2">Ссылка</div>
        <Field
          inputProps={{
            value: value,
            onChange: (event) => {
              setValue(event.target.value)
            },
          }}
        />
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
  onSubmit: (value: string) => void
}
