import { Field } from '@features/ui'
import { useMatchEditContext } from '../MatchEdit.Context'

export function Location() {
  const { item, update } = useMatchEditContext()

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
