import { usePagesQuery } from '@hooks/usePagesQuery'
import { changeSearchParams } from '@utils/helpers/changeSearchParams'

import { useSearchParams } from 'react-router-dom'
import { createContext, useContext } from 'react'
import { MATCH_PER_PAGE } from '../../const'
import { usefetchMatches } from '../../service/api'

const MatchContext = createContext<IMatchContextValue>({} as IMatchContextValue)
export const useMatchContext = () => useContext(MatchContext)

export function MatchContextProvider({ children }: React.PropsWithChildren) {
  const [searchParams, setSearchParams] = useSearchParams()
  // Filters
  const competitionId = searchParams.get('competition') || ''
  const stageId = searchParams.get('stage') || ''
  const conferenceId = searchParams.get('conference') || ''
  const locationId = searchParams.get('location') || ''
  const divisionId = searchParams.get('division') || ''
  const tourId = searchParams.get('tour') || ''
  const tabId = (searchParams.get('tab') || 'P') as 'A' | 'P' | 'F'
  const order = (searchParams.get('order') || 'asc') as Order
  const orderBy = (searchParams.get('order_by') || 'PROPERTY_DATE') as MatchOrderKey

  // Pagination
  const [currentPage, changePageQuery] = usePagesQuery()

  const { data, isFetching } = usefetchMatches({
    page: currentPage,
    itemsPerPage: MATCH_PER_PAGE,
    competition: competitionId,
    stage: stageId,
    conference: conferenceId,
    location: locationId,
    division: divisionId,
    tour: tourId,
    tab: tabId,
    order,
    order_by: orderBy,
  })

  const pagesCount = data?.NavPageCount || 0
  const pages = new Array(pagesCount).fill(true).map((_, index) => index + 1)

  function changeFilterParam(
    entries: [FilterKey, string][],
    saveAll: boolean = true,
    savedKeys?: FilterKey[]
  ) {
    setSearchParams(changeSearchParams(entries, saveAll, savedKeys))
  }

  function changeOrder(newOrderBy: MatchOrderKey) {
    const newOrder = orderBy === newOrderBy ? (order === 'asc' ? 'desc' : 'asc') : 'asc'
    changeFilterParam([
      ['order_by', newOrderBy],
      ['order', newOrder],
    ])
  }

  return (
    <MatchContext.Provider
      value={{
        items: data?.items || [],
        loading: isFetching,

        competitionId,
        stageId,
        conferenceId,
        locationId,
        divisionId,
        tourId,
        tabId,
        changeFilterParam,

        order,
        orderBy,
        changeOrder,

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
  items: Match[]
  loading: boolean

  competitionId: EntityId
  stageId: EntityId
  conferenceId: EntityId
  locationId: EntityId
  divisionId: EntityId
  tourId: EntityId
  tabId: 'A' | 'P' | 'F'
  changeFilterParam(
    entries: [FilterKey, string][],
    saveAll?: boolean,
    savedKeys?: FilterKey[]
  ): void

  order: Order
  orderBy: MatchOrderKey
  changeOrder(newOrderBy: MatchOrderKey): void

  pages: number[]
  currentPage: number
  changePageQuery(newPage: number): void
}

type FilterKey =
  | 'competition'
  | 'stage'
  | 'tab'
  | 'order'
  | 'order_by'
  | 'conference'
  | 'location'
  | 'division'
  | 'tour'
