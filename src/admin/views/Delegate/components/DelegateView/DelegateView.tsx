import { Separator } from '@admin/components/Separator'
import { Avatar } from './DelegateView.Avatar'
import { Fields } from './DelegateView.Fields'
import { Location } from './DelegateView.Location'
import { useUserAccess } from '@admin/hooks/useUserAccess'
import { canEditGroups } from '../../const'
import { Documents } from './DelegateView.Documents'
import { Title } from './DelegateView.Title'
import { Contacts } from './DelegateView.Contacts'

interface IDelegateViewProps {
  item: IDelegate
}

export function DelegateView({ item }: IDelegateViewProps) {
  const { isAccess } = useUserAccess(canEditGroups)

  return (
    <>
      <div className="flex items-start gap-9">
        <Avatar item={item} />
        <div className="flex-grow">
          <Title item={item} />
          <Fields item={item} />
        </div>
      </div>

      <Separator />
      <Location item={item} />

      {isAccess && (
        <>
          <Separator />
          <Documents item={item} />
        </>
      )}

      {isAccess && (
        <>
          <Separator />
          <Contacts item={item} />
        </>
      )}
    </>
  )
}
