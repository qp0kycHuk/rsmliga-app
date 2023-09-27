import { ToRightIcon } from '@assets/icons/fill'
import { Button } from '@features/ui'
import classNames from 'classnames'

interface IPaginationProps {
  pages: number[]
  currentPage: number
  onChange(newPage: number): void
  className?: string
}

export function Pagination({ pages, currentPage, onChange, className }: IPaginationProps) {
  // const sliced = slicePages(currentPage, pages.length)
  const sliced = pages

  return (
    <div className={classNames(className, 'flex items-center gap-2 justify-center')}>
      <Button
        disabled={currentPage <= 1}
        variant="whitebg"
        size="sm"
        icon
        className="border border-gray dark:border-white dark:border-opacity-20"
        onClick={() => onChange(currentPage - 1)}
      >
        <ToRightIcon className="-scale-x-100" />
      </Button>

      {sliced.map((page, index) =>
        page ? (
          <Button
            variant={currentPage == page ? 'fill' : 'whitebg'}
            size="sm"
            icon
            key={index}
            className="border border-gray dark:border-white dark:border-opacity-20"
            onClick={() => onChange(page)}
          >
            {page}
          </Button>
        ) : (
          '...'
        )
      )}

      <Button
        disabled={currentPage >= pages.length}
        variant="whitebg"
        size="sm"
        icon
        className="border border-gray dark:border-white dark:border-opacity-20"
        onClick={() => onChange(currentPage + 1)}
      >
        <ToRightIcon />
      </Button>
    </div>
  )
}

const slicePages = (page: number, total: number) => {
  const sliced = []
  let i = 1

  while (i <= total) {
    if (
      i <= 1 || //the first three pages
      i >= total || //the last three pages
      (i >= page - 1 && i <= page + 1)
    ) {
      //the currentPage, the page before and after
      sliced.push(i)
      i++
    } else {
      //any other page should be represented by ...
      sliced.push(null)
      //jump to the next page to be linked in the navigation
      i = i < page ? page - 1 : total
    }
  }

  return sliced
}
