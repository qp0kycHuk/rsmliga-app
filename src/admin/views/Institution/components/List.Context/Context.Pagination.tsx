import { useInstitutionsContext } from './Context'
import { Pagination as PaginationComponent } from '@admin/components/Pagination'

export function Pagination() {
  const { pages, currentPage, changePageQuery } = useInstitutionsContext()

  return (
    <PaginationComponent
      className="mt-auto"
      currentPage={currentPage}
      pages={pages}
      onChange={changePageQuery}
    />
  )
}
