import { Filter } from '../ReportContext/Report.Filter'
import { Pagination } from '../ReportContext/Report.Pagination'
import { ReportContextProvider, useReportContext } from '../ReportContext/Report.Context'
import { ListTable } from './List.Table'

function ListInner() {
  const { loading, items } = useReportContext()

  return (
    <>
      <div className="mb-5 text-3xl font-bold">Список</div>
      <Filter />
      {loading ? 'loading...' : null}
      <ListTable items={items} className={loading ? 'hidden' : ''} />

      <Pagination />
    </>
  )
}

export function List() {
  return (
    <ReportContextProvider>
      <ListInner />
    </ReportContextProvider>
  )
}
