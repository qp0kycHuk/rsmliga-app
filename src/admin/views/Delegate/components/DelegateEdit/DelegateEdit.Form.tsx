import { Button } from '@features/ui'
import { useDelegateEditContext } from './DelegateEdit.Context'
import { Avatar } from './DelegateEdit.Avatar'
import { Separator } from '@admin/components/Separator'
import { Statistic } from './DelegateEdit.Statistic'
import { Contacts } from './DelegateEdit.Contacts'
import { Place } from './DelegateEdit.Place'
import { Fields } from './DelegateEdit.Fields'
import { Title } from '../DelegateView/DelegateView.Title'

export function Form() {
  const { loading, delegate, submit, onCancel } = useDelegateEditContext()

  return (
    <form onSubmit={submit}>
      <div className="flex items-start gap-9">
        <Avatar />
        <div className="flex-grow">
          <Title item={delegate as IDelegate} />
          <Fields />
        </div>
      </div>

      <Separator />
      <Place />

      <Separator />
      <Contacts />

      <Separator />
      <Statistic />

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
