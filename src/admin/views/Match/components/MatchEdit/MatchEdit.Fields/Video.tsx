import { Field } from '@features/ui'
import { useMatchEditContext } from '../MatchEdit.Context'

export function Video() {
  const { item, update } = useMatchEditContext()

  return (
    <Field
      placeholder="Ссылка на прямой эфир"
      inputProps={{
        value: item?.video || '',
        onChange: (event) => {
          update({
            video: event.target.value,
          })
        },
      }}
    />
  )
}
