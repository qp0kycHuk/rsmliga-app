import { CircleCheckIcon, CircleCrossIcon, EyeIcon } from '@assets/icons/fill'
import classNames from 'classnames'

interface IStatusProps {
  item: IDelegate
  className?: string
}

export function Status({ item, className }: IStatusProps) {
  if (!item?.status) return null

  return (
    <div
      className={classNames(
        className,
        ' bg-gray-light dark:bg-dark-300 rounded-full py-1 px-2 flex items-center gap-1 cursor-default'
      )}
    >
      {item.status === 'no' && (
        <>
          <CircleCrossIcon className="text-red" />
          <span className="text-sm opacity-80">Не заявлен</span>
        </>
      )}
      {item.status === 'check' && (
        <>
          <EyeIcon className="text-yellow" />
          <span className="text-sm opacity-80">На рассмотрении</span>
        </>
      )}
      {item.status === 'zayav' && (
        <>
          <CircleCheckIcon className="text-green" />
          <span className="text-sm opacity-80">Заявлен </span>
        </>
      )}
    </div>
  )
}
