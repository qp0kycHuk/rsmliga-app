import { Field } from '@features/ui'
import { useMatchEditContext } from '../MatchEdit.Context'

export function Location() {
  const { item, update } = useMatchEditContext()

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
