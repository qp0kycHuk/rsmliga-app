import { Status } from './DelegateView.Status'

interface ITitleProps {
  item: IDelegate
}

export function Title({ item }: ITitleProps) {
  return (
    <div className="flex items-start">
      <div className="text-2xl font-bold mb-6">
        Карточка представителя судейского состава <br /> ( ID №{' '}
        <span className="text-primary">{item.id}</span> )
        <Status item={item} className="lg:hidden md:inline-flex md:ml-3 mt-1" />
      </div>
      <Status item={item} className="ml-auto max-lg:hidden" />
    </div>
  )
}
