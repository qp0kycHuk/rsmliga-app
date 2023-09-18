import { useDelegatesContext } from './Delegates.Context'
import { Pagination as PaginationComponent } from '@admin/components/Pagination'

export function Pagination() {
  const { pages, currentPage, changePageQuery } = useDelegatesContext()

  return (
    <PaginationComponent
      className="mt-auto"
      currentPage={currentPage}
      pages={pages}
      onChange={changePageQuery}
    />
  )
}
