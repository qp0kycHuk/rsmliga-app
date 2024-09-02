import { twMerge } from 'tailwind-merge'
import { useMatchContext } from '../Context/Match.Context'

export function Tabs() {
  const { tabId, changeFilterParam } = useMatchContext()

  return (
    <div className="lk-tabs ">
      <button
        onClick={() => changeFilterParam('tab', 'A')}
        className={twMerge('lk-tabs-item', tabId === 'A' ? 'active' : '')}
      >
        Активные
      </button>
      <button
        onClick={() => changeFilterParam('tab', 'P')}
        className={twMerge('lk-tabs-item', tabId === 'P' ? 'active' : '')}
      >
        Прошедшие
      </button>
      <button
        onClick={() => changeFilterParam('tab', 'F')}
        className={twMerge('lk-tabs-item', tabId === 'F' ? 'active' : '')}
      >
        Будущие
      </button>
    </div>
  )
}
