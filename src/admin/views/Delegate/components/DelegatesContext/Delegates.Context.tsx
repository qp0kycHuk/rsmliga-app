import { createContext, useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { DELEGATES_PER_PAGE } from '../../const'
import { useFetchDelegates } from '../../service/queries'
import { useSearchQuery } from '@hooks/useSearchQuery'
import { usePagesQuery } from '@hooks/usePagesQuery'
import { changeSearchParams } from '@utils/helpers/changeSearchParams'

const DelegatesContext = createContext<IDelegatesContextValue>({} as IDelegatesContextValue)

export const useDelegatesContext = () => useContext(DelegatesContext)

export function DelegatesContextProvider({ children }: React.PropsWithChildren) {
  const [searchParams, setSearchParams] = useSearchParams()

  const seasonId = searchParams.get('sezon') || ''
  const turnierId = searchParams.get('turnier') || ''
  const stageId = searchParams.get('stage') || ''
  const [currentPage, changePageQuery] = usePagesQuery()
  const [searchQuery, changeSearchQuery] = useSearchQuery({
    savedKeys: ['sezon', 'turnier', 'stage'],
  })

  const { data, refetch, isLoading, isFetching } = useFetchDelegates({
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
    refetch({
      cancelRefetch: true,
    })
  }, [currentPage, searchQuery, seasonId, turnierId, stageId])

  function changeFilterParam(key: FilterKey, value: string) {
    if (key === 'sezon') {
      setSearchParams(changeSearchParams([key, value]))

      return
    }

    setSearchParams(changeSearchParams([key, value], false, ['sezon', 'turnier', 'stage']))
  }

  return (
    <DelegatesContext.Provider
      value={{
        delegates: data?.items || [],
        loading: isFetching,

        seasonId,
        turnierId,
        stageId,
        changeFilterParam,

        pages,
        currentPage,
        changePageQuery,

        searchQuery,
        changeSearchQuery,
      }}
    >
      {children}
    </DelegatesContext.Provider>
  )
}

interface IDelegatesContextValue {
  delegates: IDelegate[]
  loading: boolean

  seasonId: EntityId
  turnierId: EntityId
  stageId: EntityId
  changeFilterParam(key: FilterKey, value: string): void

  pages: number[]
  currentPage: number
  changePageQuery(newPage: number): void

  searchQuery: string
  changeSearchQuery(query: string): void
}

type FilterKey = 'sezon' | 'turnier' | 'stage'
