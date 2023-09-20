import { Input, PhoneInput, Textarea } from '@features/ui'
import { Asterisk } from '@components/Asterisk'
import { Documents } from './SecretaryEdit.Documents'
import { useSecretaryEditContext } from './SecretaryEdit.Context'

export function Contacts() {
  const { item, update } = useSecretaryEditContext()

  return (
    <>
      <div className="text-2xl font-bold mb-5">Контактная информация</div>
      <div className="grid grid-cols-12 gap-4 grid-rows-none">
        <label className="block col-span-3">
          <div className="font-semibold mb-1">E-mail</div>
          <Input
            className="w-full"
            defaultValue={item.email}
            onChange={(event) => update({ email: event.target.value })}
          />
        </label>
        <label className="block col-span-3">
          <div className="font-semibold mb-1">Телефон</div>
          <PhoneInput
            className="w-full"
            defaultValue={item.phone}
            onChange={(event) => update({ phone: event.target.value })}
          />
        </label>
        <label className="block col-span-6 row-span-2">
          <div className="font-semibold mb-1">Комментарий</div>
          <Textarea
            className="w-full min-h-[240px] resize-none"
            defaultValue={item.comment}
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
