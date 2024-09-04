import { Field } from '@features/ui'
import { useProtocolEditContext } from '../ProtocolEdit.Context'

export function InfoField({ block, team }: Props) {
  const { item, update } = useProtocolEditContext()

  return (
    <Field
      inputProps={{
        value: item[block]?.[team] || 0,
        className: 'text-center text-sm leading-none',
        type: 'number',
        onChange: (event) => {
          update({
            [block]: { ...item[block], [team]: Math.max(0, Number(event.target.value)) },
          })
        },
      }}
    />
  )
}

type Props = {
  block: 'score_first_half' | 'total_score' | 'score_overtime'
  team: 'team_1' | 'team_2'
}
