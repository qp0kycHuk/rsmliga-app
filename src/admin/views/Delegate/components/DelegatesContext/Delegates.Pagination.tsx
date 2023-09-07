import { ToRightIcon } from '@assets/icons/fill'
import { Button } from '@features/ui'
import { useDelegatesContext } from './Delegates.Context'

export function Pagination() {
  const { pages, currentPage, changePageQuery } = useDelegatesContext()

  return (
    <>
      <div className="mt-auto"></div>
      <div className="flex items-center mt-8 gap-2 justify-center">
        <Button
          disabled={currentPage <= 1}
          variant="whitebg"
          size="sm"
          icon
          className="border border-gray"
          onClick={() => changePageQuery(currentPage - 1)}
        >
          <ToRightIcon className="-scale-x-100" />
        </Button>

        {pages.map((page) => (
          <Button
            variant={currentPage == page ? 'fill' : 'whitebg'}
            size="sm"
            icon
            key={page}
            className="border border-gray"
            onClick={() => changePageQuery(page)}
          >
            {page}
          </Button>
        ))}

        <Button
          disabled={currentPage >= pages.length}
          variant="whitebg"
          size="sm"
          icon
          className="border border-gray"
          onClick={() => changePageQuery(currentPage + 1)}
        >
          <ToRightIcon />
        </Button>
      </div>
    </>
  )
}
