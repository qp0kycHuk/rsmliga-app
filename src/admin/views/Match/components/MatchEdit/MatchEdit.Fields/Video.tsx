import { Field } from '@features/ui'
import { useMatchEditContext } from '../MatchEdit.Context'

export function Video() {
  const { item, update } = useMatchEditContext()

  return (
    <label className="block">
      <div className="text-sm font-semibold mb-2">Ссылка на прямой эфир</div>
      <Field
        inputProps={{
          value: item?.video || '',
          onChange: (event) => {
            update({
              video: event.target.value,
            })
          },
        }}
      />
    </label>
  )
}
