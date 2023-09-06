import { createContext, useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { DELEGATES_PER_PAGE } from '../../const'
import { useFetchDelegates } from '../../service/queries'

const DelegateListContext = createContext<IDelegateListContextValue>(
  {} as IDelegateListContextValue
)

export const useDelegateListContext = () => useContext(DelegateListContext)

export function DelegateListContextProvider({ children }: React.PropsWithChildren) {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchQuery = searchParams.get('search') || ''
  const currentPage = +(searchParams.get('page') || 1)

  const { data, refetch, isLoading } = useFetchDelegates({
    page: currentPage,
    itemsPerPage: DELEGATES_PER_PAGE,
    search: searchQuery,
  })

  const pagesCount = data?.NavPageCount || 0
  const pages = new Array(pagesCount).fill(true).map((_, index) => index + 1)

  useEffect(() => {
    if (isLoading) return
    refetch()
  }, [currentPage, searchQuery])

  function changePage(newPage: number) {
    if (isLoading || newPage == currentPage) return
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
        delegates: data?.items || [],
        pages,
        loading: isLoading,
        changePage,
        changeSearchQuery,
      }}
    >
      {children}
    </DelegateListContext.Provider>
  )
}

interface IDelegateListContextValue {
  loading: boolean
  delegates: IDelegate[]
  pages: number[]
  currentPage: number
  searchQuery: string
  changePage(newPage: number): void
  changeSearchQuery(query: string): void
}
