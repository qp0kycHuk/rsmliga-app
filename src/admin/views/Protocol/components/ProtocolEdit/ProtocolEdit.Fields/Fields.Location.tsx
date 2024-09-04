import { Field } from '@features/ui'
import { useProtocolEditContext } from '../ProtocolEdit.Context'

export function Location() {
  const { item, update } = useProtocolEditContext()

  return (
    <label className="block">
      <div className="text-sm font-semibold mb-2">Место проведения</div>
      <Field
        inputProps={{
          value: item?.location || '',
          onChange: (event) => {
            update({
              location: event.target.value,
            })
          },
        }}
      />
    </label>
  )
}
