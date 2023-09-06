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
  const seasonId = searchParams.get('sezon') || ''
  const turnierId = searchParams.get('turnier') || ''
  const stageId = searchParams.get('stage') || ''

  const { data, refetch, isLoading } = useFetchDelegates({
    page: currentPage,
    itemsPerPage: DELEGATES_PER_PAGE,
    search: searchQuery,
    sezon: seasonId,
    turnier: turnierId,
    stage: stageId,
  })

  const pagesCount = data?.NavPageCount || 0
  const pages = new Array(pagesCount).fill(true).map((_, index) => index + 1)

  useEffect(() => {
    refetch()
  }, [currentPage, searchQuery, seasonId, turnierId, stageId])

  function changePage(newPage: number) {
    if (isLoading || newPage == currentPage) return
    setSearchParams({
      search: searchQuery,
      sezon: seasonId,
      turnier: turnierId,
      stage: stageId,
      page: newPage.toString(),
    })
  }

  function changeSearchQuery(query: string) {
    setSearchParams({
      search: query,
      sezon: seasonId,
      turnier: turnierId,
      stage: stageId,
    })
  }

  function changeFilterParam(key: FilterKey, value: string) {
    if (key === 'sezon') {
      setSearchParams({
        sezon: value,
        turnier: '',
        stage: '',
      })

      return
    }

    setSearchParams({
      sezon: seasonId,
      turnier: turnierId,
      stage: stageId,
      [key]: value,
    })
  }

  return (
    <DelegateListContext.Provider
      value={{
        delegates: data?.items || [],
        loading: isLoading,

        seasonId,
        turnierId,
        stageId,
        changeFilterParam,

        pages,
        currentPage,
        changePage,

        searchQuery,
        changeSearchQuery,
      }}
    >
      {children}
    </DelegateListContext.Provider>
  )
}

interface IDelegateListContextValue {
  delegates: IDelegate[]
  loading: boolean

  seasonId: EntityId
  turnierId: EntityId
  stageId: EntityId
  changeFilterParam(key: FilterKey, value: string): void

  pages: number[]
  currentPage: number
  changePage(newPage: number): void

  searchQuery: string
  changeSearchQuery(query: string): void
}

type FilterKey = 'sezon' | 'turnier' | 'stage'
