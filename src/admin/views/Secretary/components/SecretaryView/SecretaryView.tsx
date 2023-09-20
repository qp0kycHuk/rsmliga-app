import { Separator } from '@admin/components/Separator'
import { useUserAccess } from '@admin/hooks/useUserAccess'
import { Avatar } from './SecretaryView.Avatar'
import { Title } from './SecretaryView.Title'
import { Fields } from './SecretaryView.Fields'
import { Documents } from './SecretaryView.Documents'
import { Contacts } from './SecretaryView.Contacts'
import { Competitions } from './SecretaryView.Competitions'
import { canEditGroups } from '../../const'

interface ISecretaryViewProps {
  item: ISecretary
}

export function SecretaryView({ item }: ISecretaryViewProps) {
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
      <Competitions item={item} />

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
