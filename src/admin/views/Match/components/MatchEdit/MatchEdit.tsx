import { MatchEditContextProvider } from './MatchEdit.Context'
import { MatchEditForm } from './MatchEdit.Form'

export function MatchEdit({ onCancel }: Props) {
  return (
    <MatchEditContextProvider onCancel={onCancel}>
      <MatchEditForm></MatchEditForm>
    </MatchEditContextProvider>
  )
}

type Props = {
  item?: Match
  onCancel?(): void
}
