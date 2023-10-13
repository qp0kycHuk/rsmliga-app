import { Button } from '@features/ui'
import { useSecretaryEditContext } from './SecretaryEdit.Context'
import { Avatar } from './SecretaryEdit.Avatar'
import { Separator } from '@admin/components/Separator'
// import { Place } from './SecretaryEdit.Place'
import { Title } from '../SecretaryView/SecretaryView.Title'
import { Fields } from './SecretaryEdit.Fields'
import { Contacts } from './SecretaryEdit.Contacts'
import { Locations } from './SecretaryEdit.Locations'

export function Form() {
  const { loading, item, submit, onCancel } = useSecretaryEditContext()

  return (
    <form onSubmit={submit}>
      <div className="flex items-start gap-9">
        <Avatar />
        <div className="flex-grow">
          <Title item={item as ISecretary} />
          <Fields />
        </div>
      </div>

      <Separator />
      <Locations />

      <Separator />
      <Contacts />

      <div className="flex gap-4 mt-8">
        <Button type="submit" disabled={loading}>
          Сохранить
        </Button>
        {onCancel ? (
          <Button variant="light" disabled={loading} onClick={onCancel}>
            Отмена
          </Button>
        ) : null}
      </div>
    </form>
  )
}
