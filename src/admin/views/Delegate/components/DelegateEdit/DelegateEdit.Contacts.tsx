import { Input, PhoneInput, Textarea } from '@features/ui'
import { useDelegateEditContext } from './DelegateEdit.Context'
import { Documents } from './DelegateEdit.Documents'
import { Asterisk } from '@components/Asterisk'

export function Contacts() {
  const { delegate, update } = useDelegateEditContext()

  return (
    <>
      <div className="text-2xl font-bold mb-5">Контактная информация</div>
      <div className="grid grid-cols-12 gap-4 grid-rows-none">
        <label className="block col-span-3">
          <div className="font-semibold mb-1">
            E-mail <Asterisk />
          </div>
          <Input
            required
            className="w-full"
            defaultValue={delegate.email}
            onChange={(event) => update({ email: event.target.value })}
          />
        </label>
        <label className="block col-span-3">
          <div className="font-semibold mb-1">Телефон</div>
          <PhoneInput
            className="w-full"
            defaultValue={delegate.phone}
            onChange={(event) => update({ phone: event.target.value })}
          />
        </label>
        <label className="block col-span-6 row-span-2">
          <div className="font-semibold mb-1">Комментарий</div>
          <Textarea
            className="w-full min-h-[240px] resize-none"
            defaultValue={delegate.comment}
            onChange={(event) => update({ comment: event.target.value })}
          />
        </label>
        <div className="col-span-6">
          <Documents />
        </div>
      </div>
    </>
  )
}
