import { Pagination as PaginationComponent } from '@admin/components/Pagination'
import { useMatchContext } from './Match.Context'

export function Pagination() {
  const { pages, currentPage, changePageQuery } = useMatchContext()

  return (
    <PaginationComponent
      className="mt-auto"
      currentPage={currentPage}
      pages={pages}
      onChange={changePageQuery}
    />
  )
}
