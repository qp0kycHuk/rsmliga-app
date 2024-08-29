import { usefetchMatchById } from '../../service/api'
import { MatchEditContextProvider } from './MatchEdit.Context'
import { MatchEditForm } from './MatchEdit.Form'

export function MatchEdit({ onCancel, item }: Props) {
  const { data } = usefetchMatchById(item?.id)

  return (
    <MatchEditContextProvider item={data?.item} onCancel={onCancel}>
      <MatchEditForm></MatchEditForm>
    </MatchEditContextProvider>
  )
}

type Props = {
  item?: Match
  onCancel?(): void
}
