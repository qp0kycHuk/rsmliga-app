import { Filter } from './List.Filter'
import { ListTable } from './List.Table'
import { DelegateListContextProvider, useDelegateListContext } from './List.Context'
import { Pagination } from './List.Pagination'

function ListInner() {
  const { loading, delegates } = useDelegateListContext()

  return (
    <>
      <div className="mb-5 text-3xl font-bold">Список</div>
      <Filter />
      {loading ? 'loading...' : <ListTable items={delegates} />}

      <Pagination />
    </>
  )
}

export function List() {
  return (
    <DelegateListContextProvider>
      <ListInner />
    </DelegateListContextProvider>
  )
}
