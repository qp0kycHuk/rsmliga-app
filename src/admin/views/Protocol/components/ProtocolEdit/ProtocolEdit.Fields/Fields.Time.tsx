import { Field } from '@features/ui'
import { useProtocolEditContext } from '../ProtocolEdit.Context'

export function Time() {
  const { item, update } = useProtocolEditContext()

  return (
    <label className="block">
      <div className="text-sm font-semibold mb-2">Время проведения</div>
      <Field
        inputProps={{
          type: 'time',
          value: item?.time || '',
          onChange: (event) => {
            update({
              time: event.target.value,
            })
          },
        }}
      />
    </label>
  )
}
