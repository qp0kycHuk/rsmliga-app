import { Field } from '@features/ui'
import { useMatchEditContext } from '../MatchEdit.Context'

export function Number() {
  const { item, update } = useMatchEditContext()

  return (
    <div>
      <div className="text-sm font-semibold mb-2">Номер матча(Протокола)</div>
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
    </div>
  )
}
