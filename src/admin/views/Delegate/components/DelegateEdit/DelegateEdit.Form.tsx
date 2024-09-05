import { Button } from '@features/ui'
import { useDelegateEditContext } from './DelegateEdit.Context'
import { Avatar } from './DelegateEdit.Avatar'
import { Separator } from '@admin/components/Separator'
// import { Statistic } from './DelegateEdit.Statistic'
import { Contacts } from './DelegateEdit.Contacts'
import { Place } from './DelegateEdit.Place'
import { Fields } from './DelegateEdit.Fields'
import { Title } from '../DelegateView/DelegateView.Title'

export function Form() {
  const { loading, delegate, submit, onCancel } = useDelegateEditContext()

  return (
    <form onSubmit={submit}>
      <div className="flex items-center lg:items-start max-md:flex-col gap-9">
        <Avatar />
        <div className="flex-grow max-md:w-full">
          <Title item={delegate as IDelegate} />
          <Fields className="max-lg:hidden" />
        </div>
      </div>
      <Fields className="lg:hidden mt-6 max-w-full" />

      <Separator />
      <Place />

      <Separator />
      <Contacts />

      {/* <Separator /> */}
      {/* <Statistic /> */}

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
