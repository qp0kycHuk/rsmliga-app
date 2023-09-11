import { Pagination as PaginationComponent } from '@admin/components/Pagination'
import { useReportContext } from './Report.Context'

export function Pagination() {
  const { pages, currentPage, changePageQuery } = useReportContext()

  return (
    <>
      <div className="mt-auto"></div>
      <PaginationComponent currentPage={currentPage} pages={pages} onChange={changePageQuery} />
    </>
  )
}
