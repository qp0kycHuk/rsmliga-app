import { Button } from '@features/ui'
import { MatchContextProvider, useMatchContext } from '../Context/Match.Context'
import { Filter } from '../Context/Match.Filter'
import { Pagination } from '../Context/Match.Pagination'
import { CirclePlusIcon } from '@assets/icons/fill'
import { ListTable } from './List.Table'

function ListInner() {
  const { items, loading } = useMatchContext()

  return (
    <>
      <div className="mb-5 text-xl md:text-3xl font-bold">Матчи </div>
      <Filter>
        <Button variant="text" className="gap-3 font-semibold max-lg:mr-auto">
          <CirclePlusIcon className="text-2xl" />
          Добавить матч
        </Button>
      </Filter>

      <ListTable items={items} className={loading ? 'pointer-events-none opacity-40' : ''} />

      <Pagination />
    </>
  )
}

export function List() {
  return (
    <MatchContextProvider>
      <ListInner />
    </MatchContextProvider>
  )
}
