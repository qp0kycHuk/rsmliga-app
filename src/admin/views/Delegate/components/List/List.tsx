import { useEffect, useRef, useState } from 'react'
import { ListFilter } from './ListFilter'
import { ListTable } from './ListTable'
import { api } from '../../service/api'
import { Button } from '@features/ui'
import { ToRightIcon } from '@assets/icons/fill'
import { useToggle } from '@hooks/useToggle'
import { DELEGATES_PER_PAGE } from '../../const'
import { useSearchParams } from 'react-router-dom'

export function List() {
  const pagesCount = useRef(0)
  const [loading, , loadingStart, loadingEnd] = useToggle(false)
  const [delegates, setDelegates] = useState<IDelegate[]>([])
  // const [currentPage, setCurrentPage] = useState<number>(1)
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = +(searchParams.get('page') || 1)

  const pages = new Array(pagesCount.current).fill(true).map((_, index) => index + 1)

  useEffect(() => {
    if (loading) return
    loadingStart()
    api()
      .fetchDelegates({ page: currentPage, itemsPerPage: DELEGATES_PER_PAGE })
      .then((response) => {
        setDelegates(response.data.items)
        pagesCount.current = response.data.NavPageCount
        loadingEnd()
      })
  }, [currentPage])

  function changePage(newPage: number) {
    if (loading || newPage == currentPage) return
    setSearchParams({ page: newPage.toString() })
  }

  return (
    <>
      <div className="mb-5 text-3xl font-bold">Список</div>
      <ListFilter />
      {loading ? 'loading...' : <ListTable items={delegates} />}

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
          disabled={currentPage >= pagesCount.current}
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
