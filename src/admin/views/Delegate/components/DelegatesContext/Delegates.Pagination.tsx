import { useDelegatesContext } from './Delegates.Context'
import { Pagination as PaginationComponent } from '@admin/components/Pagination'

export function Pagination() {
  const { pages, currentPage, changePageQuery } = useDelegatesContext()

  return (
    <>
      <div className="mt-auto"></div>
      <PaginationComponent currentPage={currentPage} pages={pages} onChange={changePageQuery} />
    </>
  )
}
