import { Button } from '@features/ui'
import { MatchContextProvider } from '../Context/Match.Context'
import { Filter } from '../Context/Match.Filter'
import { Pagination } from '../Context/Match.Pagination'
import { CirclePlusIcon } from '@assets/icons/fill'

function ListInner() {
  return (
    <>
      <div className="mb-5 text-xl md:text-3xl font-bold">Матчи </div>
      <Filter>
        <Button variant="text" className="gap-3 font-semibold max-lg:mr-auto">
          <CirclePlusIcon className="text-2xl" />
          Добавить матч
        </Button>
      </Filter>

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
