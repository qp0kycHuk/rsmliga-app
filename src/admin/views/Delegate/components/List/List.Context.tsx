import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useToggle } from '@hooks/useToggle'
import { api } from '../../service/api'
import { useSearchParams } from 'react-router-dom'
import { DELEGATES_PER_PAGE } from '../../const'

const DelegateListContext = createContext<IDelegateListContextValue>(
  {} as IDelegateListContextValue
)

export const useDelegateListContext = () => useContext(DelegateListContext)

export function DelegateListContextProvider({ children }: React.PropsWithChildren) {
  const pagesCount = useRef(0)
  const [loading, , loadingStart, loadingEnd] = useToggle(false)
  const [delegates, setDelegates] = useState<IDelegate[]>([])
  const [searchParams, setSearchParams] = useSearchParams()

  const searchQuery = searchParams.get('search') || ''
  const currentPage = +(searchParams.get('page') || 1)

  const pages = new Array(pagesCount.current).fill(true).map((_, index) => index + 1)

  useEffect(() => {
    if (loading) return
    loadingStart()
    api()
      .fetchDelegates({ page: currentPage, itemsPerPage: DELEGATES_PER_PAGE, search: searchQuery })
      .then((response) => {
        setDelegates(response.data.items)
        pagesCount.current = response.data.NavPageCount
        loadingEnd()
      })
  }, [currentPage, searchQuery])

  function changePage(newPage: number) {
    if (loading || newPage == currentPage) return
    setSearchParams({ search: searchQuery, page: newPage.toString() })
  }

  function changeSearchQuery(query: string) {
    setSearchParams({ search: query })
  }

  return (
    <DelegateListContext.Provider
      value={{
        currentPage,
        searchQuery,
        delegates,
        pagesCount: pagesCount.current,
        pages,
        loading,
        loadingStart,
        loadingEnd,
        changePage,
        changeSearchQuery,
      }}
    >
      {children}
    </DelegateListContext.Provider>
  )
}

interface IDelegateListContextValue extends ILoadingContext {
  delegates: IDelegate[]
  pages: number[]
  pagesCount: number
  currentPage: number
  searchQuery: string
  changePage(newPage: number): void
  changeSearchQuery(query: string): void
}
