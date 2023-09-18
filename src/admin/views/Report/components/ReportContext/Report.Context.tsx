import { createContext, useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePagesQuery } from '@hooks/usePagesQuery'
import { changeSearchParams } from '@utils/helpers/changeSearchParams'
import { REPORT_PER_PAGE } from '../../const'
import { useFetchReports } from '../../service/api'

const ReportContext = createContext<IReportContextValue>({} as IReportContextValue)

export const useReportContext = () => useContext(ReportContext)

export function ReportContextProvider({ children }: React.PropsWithChildren) {
  const [searchParams, setSearchParams] = useSearchParams()

  // Filters
  const seasonId = searchParams.get('sezon') || ''
  const turnierId = searchParams.get('turnier') || ''
  const stageId = searchParams.get('stage') || ''

  // Pagination
  const [currentPage, changePageQuery] = usePagesQuery()

  // Fetcing
  const { data, isFetching } = useFetchReports({
    page: currentPage,
    itemsPerPage: REPORT_PER_PAGE,
    sezon: seasonId,
    turnier: turnierId,
    stage: stageId,
  })

  const pagesCount = data?.NavPageCount || 0
  const pages = new Array(pagesCount).fill(true).map((_, index) => index + 1)

  function changeFilterParam(key: FilterKey, value: string) {
    if (key === 'sezon') {
      setSearchParams(changeSearchParams([key, value]))

      return
    }

    setSearchParams(changeSearchParams([key, value], false, ['sezon', 'turnier', 'stage']))
  }

  return (
    <ReportContext.Provider
      value={{
        items: data?.items || [],
        loading: isFetching,

        seasonId,
        turnierId,
        stageId,
        changeFilterParam,

        pages,
        currentPage,
        changePageQuery,
      }}
    >
      {children}
    </ReportContext.Provider>
  )
}

interface IReportContextValue {
  items: IReport[]
  loading: boolean

  seasonId: EntityId
  turnierId: EntityId
  stageId: EntityId
  changeFilterParam(key: FilterKey, value: string): void

  pages: number[]
  currentPage: number
  changePageQuery(newPage: number): void
}

type FilterKey = 'sezon' | 'turnier' | 'stage'
