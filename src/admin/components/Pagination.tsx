import { useEffect, useMemo, useState } from 'react'
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
  const sliced = useMemo(() => slicePages(currentPage, pages.length), [currentPage, pages])
  const [cleanPages, setPages] = useState<(number | null)[]>([])

  function pagesHandler() {
    setPages(window.screen.width < 769 || pages.length > 11 ? sliced : pages)
  }

  useEffect(() => {
    window.addEventListener('resize', pagesHandler)
    pagesHandler()
    return () => window.removeEventListener('resize', pagesHandler)
  }, [sliced])

  return (
    <>
      <div className="mt-8 print:hidden"></div>

      <div
        className={classNames(
          className,
          'flex items-center gap-2 justify-center sticky bottom-5 print:hidden'
        )}
      >
        <Button
          disabled={currentPage <= 1}
          variant="whitebg"
          size="sm"
          icon
          className="border border-default/20 max-sm:hidden"
          onClick={() => onChange(currentPage - 1)}
        >
          <ToRightIcon className="-scale-x-100" />
        </Button>

        {cleanPages.map((page, index) =>
          page ? (
            <Button
              variant={currentPage == page ? 'fill' : 'whitebg'}
              size="sm"
              icon
              key={index}
              className={classNames('border border-default/20')}
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
          className="border border-default/20 max-sm:hidden"
          onClick={() => onChange(currentPage + 1)}
        >
          <ToRightIcon />
        </Button>
      </div>
    </>
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
