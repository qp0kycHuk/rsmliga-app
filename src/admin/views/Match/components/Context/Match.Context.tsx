import { usePagesQuery } from '@hooks/usePagesQuery'
import { changeSearchParams } from '@utils/helpers/changeSearchParams'

import { useSearchParams } from 'react-router-dom'
import { createContext, useContext } from 'react'
import { MATCH_PER_PAGE } from '../../const'
import { useFetchDelegates } from '@admin/views/Delegate/service/api'

const MatchContext = createContext<IMatchContextValue>({} as IMatchContextValue)
export const useMatchContext = () => useContext(MatchContext)

export function MatchContextProvider({ children }: React.PropsWithChildren) {
  const [searchParams, setSearchParams] = useSearchParams()
  // Filters
  const seasonId = searchParams.get('sezon') || ''
  const turnierId = searchParams.get('turnier') || ''
  const stageId = searchParams.get('stage') || ''

  // Pagination
  const [currentPage, changePageQuery] = usePagesQuery()

  // Fetching TODO
  const { data, isLoading, isFetching } = useFetchDelegates({
    page: currentPage,
    itemsPerPage: MATCH_PER_PAGE,
    sezon: seasonId,
    turnier: turnierId,
    stage: stageId,
  })

  const pagesCount = data?.NavPageCount || 0
  const pages = new Array(pagesCount).fill(true).map((_, index) => index + 1)
  console.log(pages)

  function changeFilterParam(key: FilterKey, value: string) {
    setSearchParams(changeSearchParams([key, value], true))
  }

  return (
    <MatchContext.Provider
      value={{
        items: data?.items || [],
        loading: isFetching,

        turnierId,
        stageId,
        changeFilterParam,

        pages,
        currentPage,
        changePageQuery,
      }}
    >
      {children}
    </MatchContext.Provider>
  )
}

interface IMatchContextValue {
  items: any[]
  loading: boolean

  turnierId: EntityId
  stageId: EntityId
  changeFilterParam(key: FilterKey, value: string): void

  pages: number[]
  currentPage: number
  changePageQuery(newPage: number): void
}

type FilterKey = 'turnier' | 'stage'
