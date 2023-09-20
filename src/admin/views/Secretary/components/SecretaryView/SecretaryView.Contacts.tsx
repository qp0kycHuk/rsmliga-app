interface IContactsProps {
  item: ISecretary
}

export function Contacts({ item }: IContactsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="text-lg leading-none">
          <span className="font-semibold">E-mail: </span>
          {item.email}
        </div>
      </div>
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="text-lg leading-none">
          <span className="font-semibold">Телефон: </span>
          {item.phone}
        </div>
      </div>
      <div className="p-4 rounded-md bg-gray bg-opacity-40 col-span-2">
        <div className="text-lg leading-none">
          <span className="font-semibold">Комментарий: </span>
          {item.comment}
        </div>
      </div>
    </div>
  )
}
