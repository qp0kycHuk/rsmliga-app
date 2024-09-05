import { Textarea } from '@features/ui'
import { useProtocolEditContext } from '../ProtocolEdit.Context'

export function Comment() {
  const { item, update } = useProtocolEditContext()

  return (
    <label className="block">
      <div className="text-sm font-semibold mb-2">Прочие замечания</div>
      <Textarea
        className="w-full min-h-32 max-h-64"
        value={item.other_remarks || ''}
        onChange={(event) =>
          update({
            other_remarks: event.target.value,
          })
        }
      />
    </label>
  )
}
