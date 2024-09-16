import { Error } from '@admin/components/Error'
import { useFetchProtocol } from '../../service/api'
import { ProtocolEditContextProvider } from './ProtocolEdit.Context'
import { ProtocolEditForm } from './ProtocolEdit.Form'
import { TRY_AGAIN_ERROR } from '@utils/const/message'

export function ProtocolEdit({ onCancel, matchId }: Props) {
  const { data, isLoading } = useFetchProtocol({ id: matchId })

  if (isLoading) {
    return 'loading...'
  }

  if (!data?.item) {
    return <Error>{data?.error || TRY_AGAIN_ERROR}</Error>
  }

  return (
    <ProtocolEditContextProvider item={data?.item} onCancel={onCancel} matchId={matchId}>
      <ProtocolEditForm></ProtocolEditForm>
    </ProtocolEditContextProvider>
  )
}

type Props = {
  matchId: EntityId
  onCancel?(): void
}
