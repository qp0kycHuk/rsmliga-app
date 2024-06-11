import { ListTable } from './List.Table'
import { Filter } from '../List.Context/Context.Filter'
import { Pagination } from '../List.Context/Context.Pagination'
import { InstitutionsContextProvider, useInstitutionsContext } from '../List.Context/Context'

function ListInner() {
  const { items, loading } = useInstitutionsContext()

  return (
    <>
      <div className="mb-5 text-xl sm:text-3xl font-bold">Справочник учебных заведений</div>
      <Filter></Filter>

      <ListTable items={items} className={loading ? 'pointer-events-none' : ''} />

      <div className="mt-8"></div>
      <Pagination />
    </>
  )
}

export function List() {
  return (
    <InstitutionsContextProvider>
      <ListInner />
    </InstitutionsContextProvider>
  )
}
