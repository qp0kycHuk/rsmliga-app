import { classNameJoin } from '@utils/helpers/classNameJoin'
import { useMatchContext } from '../Context/Match.Context'

export function Tabs() {
  const { tabId, changeFilterParam } = useMatchContext()

  return (
    <div className="lk-tabs bg-l3 print:hidden">
      <button
        onClick={() => changeFilterParam([['tab', 'A']], false)}
        className={classNameJoin('lk-tabs-item', tabId === 'A' ? 'active' : '')}
      >
        Активные
      </button>
      <button
        onClick={() => changeFilterParam([['tab', 'P']], false)}
        className={classNameJoin('lk-tabs-item', tabId === 'P' ? 'active' : '')}
      >
        Прошедшие
      </button>
      <button
        onClick={() => changeFilterParam([['tab', 'F']], false)}
        className={classNameJoin('lk-tabs-item', tabId === 'F' ? 'active' : '')}
      >
        Будущие
      </button>
    </div>
  )
}
