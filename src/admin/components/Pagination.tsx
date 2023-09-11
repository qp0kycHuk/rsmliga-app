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
  return (
    <div className={classNames(className, 'flex items-center gap-2 justify-center')}>
      <Button
        disabled={currentPage <= 1}
        variant="whitebg"
        size="sm"
        icon
        className="border border-gray"
        onClick={() => onChange(currentPage - 1)}
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
          onClick={() => onChange(page)}
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
        onClick={() => onChange(currentPage + 1)}
      >
        <ToRightIcon />
      </Button>
    </div>
  )
}
