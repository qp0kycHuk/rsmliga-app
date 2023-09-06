import { ToRightIcon } from '@assets/icons/fill'
import { Button } from '@features/ui'
import { useDelegateListContext } from './List.Context'

export function Pagination() {
  const { pages, currentPage, changePage } = useDelegateListContext()

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
          onClick={() => changePage(currentPage - 1)}
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
            onClick={() => changePage(page)}
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
          onClick={() => changePage(currentPage + 1)}
        >
          <ToRightIcon />
        </Button>
      </div>
    </>
  )
}
