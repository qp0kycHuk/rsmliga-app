import { useSecretariesContext } from './Secretary.Context'
import { Pagination as PaginationComponent } from '@admin/components/Pagination'

export function Pagination() {
  const { pages, currentPage, changePageQuery } = useSecretariesContext()

  return (
    <PaginationComponent
      className="mt-auto"
      currentPage={currentPage}
      pages={pages}
      onChange={changePageQuery}
    />
  )
}
