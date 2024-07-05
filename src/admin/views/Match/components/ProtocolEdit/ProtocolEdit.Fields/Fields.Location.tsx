import { Field } from '@features/ui'
import { useProtocolEditContext } from '../ProtocolEdit.Context'

export function Location() {
  const { item, update } = useProtocolEditContext()

  return (
    <Field
      placeholder="Место проведения:"
      inputProps={{
        value: item?.location || '',
        onChange: (event) => {
          update({
            location: event.target.value,
          })
        },
      }}
    />
  )
}
