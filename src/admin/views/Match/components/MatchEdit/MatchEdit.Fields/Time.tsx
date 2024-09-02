import { Field } from '@features/ui'
import { useMatchEditContext } from '../MatchEdit.Context'

export function Time() {
  const { item, update } = useMatchEditContext()

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Время проведения</div>
      <Field
        inputProps={{
          type: 'time',
          value: item?.time || '',
          required: true,
          onChange: (event) => {
            update({
              time: event.target.value,
            })
          },
        }}
      />
    </div>
  )
}
