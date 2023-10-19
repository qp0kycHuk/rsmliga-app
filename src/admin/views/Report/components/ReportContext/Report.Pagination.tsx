import { Pagination as PaginationComponent } from '@admin/components/Pagination'
import { useReportContext } from './Report.Context'

export function Pagination() {
  const { pages, currentPage, changePageQuery } = useReportContext()

  return (
    <>
      <div className="mt-8"></div>
      <PaginationComponent
        className="mt-auto"
        currentPage={currentPage}
        pages={pages}
        onChange={changePageQuery}
      />
    </>
  )
}
