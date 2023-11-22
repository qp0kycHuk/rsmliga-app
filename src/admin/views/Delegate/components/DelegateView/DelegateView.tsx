import { Separator } from '@admin/components/Separator'
import { Avatar } from './DelegateView.Avatar'
import { Fields } from './DelegateView.Fields'
import { Location } from './DelegateView.Location'
import { useUserAccess } from '@admin/hooks/useUserAccess'
import { canEditGroups } from '../../const'
import { Documents } from './DelegateView.Documents'
import { Title } from './DelegateView.Title'
import { Contacts } from './DelegateView.Contacts'
import { Statistic } from './DelegateView.Statistic/Statistic'

interface IDelegateViewProps {
  item: IDelegate
}

export function DelegateView({ item }: IDelegateViewProps) {
  const { isAccess } = useUserAccess(canEditGroups)

  return (
    <>
      <div className="flex items-center lg:items-start max-md:flex-col gap-9">
        <Avatar item={item} />
        <div className="flex-grow max-md:w-full">
          <Title item={item} />
          <Fields item={item} className="max-lg:hidden" />
        </div>
      </div>
      <Fields item={item} className="lg:hidden mt-6 max-w-full" />

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

      <Separator />
      <Statistic delegate={item} />
    </>
  )
}
