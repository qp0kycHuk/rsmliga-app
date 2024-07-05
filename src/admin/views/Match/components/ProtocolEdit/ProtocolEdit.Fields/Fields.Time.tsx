import { Field } from '@features/ui'
import { useProtocolEditContext } from '../ProtocolEdit.Context'

export function Time() {
  const { item, update } = useProtocolEditContext()

  return (
    <Field
      placeholder="Время проведения:"
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
  )
}
