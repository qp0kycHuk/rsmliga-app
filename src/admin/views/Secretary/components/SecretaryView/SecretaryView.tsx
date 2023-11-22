import { Separator } from '@admin/components/Separator'
import { useUserAccess } from '@admin/hooks/useUserAccess'
import { Avatar } from './SecretaryView.Avatar'
import { Title } from './SecretaryView.Title'
import { Fields } from './SecretaryView.Fields'
import { Documents } from './SecretaryView.Documents'
import { Contacts } from './SecretaryView.Contacts'
import { canEditGroups } from '../../const'
import { Locations } from './SecretaryView.Locations'

interface ISecretaryViewProps {
  item: ISecretary
}

export function SecretaryView({ item }: ISecretaryViewProps) {
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
      <Locations item={item} />

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
