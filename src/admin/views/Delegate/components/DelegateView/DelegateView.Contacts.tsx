import { FieldView } from '@admin/components/FieldView'

interface IContactsProps {
  item: IDelegate
}

export function Contacts({ item }: IContactsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FieldView>
        <div className="text-lg leading-none">
          <span className="font-semibold">E-mail: </span>
          {item.email}
        </div>
      </FieldView>
      <FieldView>
        <div className="text-lg leading-none">
          <span className="font-semibold">Телефон: </span>
          {item.phone}
        </div>
      </FieldView>
      <FieldView className="col-span-2">
        <div className="text-lg leading-none">
          <span className="font-semibold">Комментарий: </span>
          {item.comment}
        </div>
      </FieldView>
    </div>
  )
}
