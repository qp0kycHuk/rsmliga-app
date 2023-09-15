import { Status } from './DelegateView.Status'

interface ITitleProps {
  item: IDelegate
}

export function Title({ item }: ITitleProps) {
  return (
    <div className="flex items-start">
      <div className="text-2xl font-bold mb-6">
        Карточка представителя судейского состава <br /> (ID №{' '}
        <span className="text-primary">{item.id}</span> )
      </div>
      <Status item={item} className="ml-auto" />
    </div>
  )
}
