import { useEffect, useMemo, useState } from 'react'
import { classNameJoin } from '@utils/helpers/classNameJoin'
import { Button } from '@features/ui'
import { ToRightIcon } from '@assets/icons/fill'

export function Pagination({ pages, currentPage, onChange, className }: Props) {
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
        className={classNameJoin(
          'flex items-center gap-2 justify-center sticky bottom-5 print:hidden',
          className
        )}
      >
        <Button
          disabled={currentPage <= 1}
          variant="whitebg"
          size="sm"
          icon
          className="border border-default/20 max-sm:hidden"
          onClick={onChange.bind(null, currentPage - 1)}
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
              className="border border-default/20"
              onClick={onChange.bind(null, page)}
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
          onClick={onChange.bind(null, currentPage + 1)}
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

type Props = PropsWithClassName & {
  pages: number[]
  currentPage: number
  onChange(newPage: number): void
}
