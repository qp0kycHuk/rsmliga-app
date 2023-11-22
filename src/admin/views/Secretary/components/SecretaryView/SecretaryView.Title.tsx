interface ITitleProps {
  item: ISecretary
}

export function Title({ item }: ITitleProps) {
  return (
    <div className="flex items-start">
      <div className="text-2xl font-bold mb-6">
        Карточка ответственного секретаря <br /> (ID №{' '}
        <span className="text-primary">{item.id}</span> )
      </div>
      {/* <Status item={item} className="ml-auto" /> */}
    </div>
  )
}
