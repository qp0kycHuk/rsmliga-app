import { ListTable } from './List.Table'
import {
  DelegatesContextProvider,
  useDelegatesContext,
} from '../DelegatesContext/Delegates.Context'
import { Pagination } from '../DelegatesContext/Delegates.Pagination'
import { Filter } from '../DelegatesContext/Delegates.Filter'

function ListInner() {
  const { loading, delegates } = useDelegatesContext()

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
    <DelegatesContextProvider>
      <ListInner />
    </DelegatesContextProvider>
  )
}
