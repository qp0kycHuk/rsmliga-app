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
      <div className="flex items-center lg:items-start max-md:flex-col gap-9">
        <Avatar />
        <div className="flex-grow max-md:w-full">
          <Title item={item as ISecretary} />
          <Fields className="max-lg:hidden" />
        </div>
      </div>
      <Fields className="lg:hidden mt-6 max-w-full" />

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
