import { ListTable } from './List.Table'
import { Filter } from '../List.Context/Context.Filter'
import { Pagination } from '../List.Context/Context.Pagination'
import { InstitutionsContextProvider, useInstitutionsContext } from '../List.Context/Context'
import { ListLayout } from '@admin/components/ListLayout'

function ListInner() {
  const { items, loading } = useInstitutionsContext()

  return (
    <>
      <div className="mb-5 text-xl sm:text-3xl font-bold">Справочник учебных заведений</div>
      <Filter />

      <ListLayout items={items} isFetching={loading}>
        <ListTable items={items} />
      </ListLayout>

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
