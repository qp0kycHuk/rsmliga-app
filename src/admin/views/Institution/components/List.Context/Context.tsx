import { createContext, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSearchQuery } from '@hooks/useSearchQuery'
import { usePagesQuery } from '@hooks/usePagesQuery'
import { changeSearchParams } from '@utils/helpers/changeSearchParams'
import { useFetchInstitutions } from '../../service/api'
import { ITEMS_PER_PAGE } from '../../const'

const InstitutionsContext = createContext<IInstitutionsContextValue>(
  {} as IInstitutionsContextValue
)

export const useInstitutionsContext = () => useContext(InstitutionsContext)

export function InstitutionsContextProvider({ children }: React.PropsWithChildren) {
  const [searchParams, setSearchParams] = useSearchParams()

  // Filters
  const conferenceId = searchParams.get('conference') || ''
  const cityId = searchParams.get('city') || ''
  const schooltypeId = searchParams.get('schooltype') || ''

  // Pagination
  const [currentPage, changePageQuery] = usePagesQuery()

  // Search
  const [searchQuery, changeSearchQuery] = useSearchQuery({
    savedKeys: ['conference', 'city'],
  })

  // Fetcing
  const { data, isLoading, isFetching } = useFetchInstitutions({
    page: currentPage,
    itemsPerPage: ITEMS_PER_PAGE,
    search: searchQuery,
    conference: conferenceId,
    city: cityId,
    schooltype: schooltypeId,
  })

  const pagesCount = data?.NavPageCount || 0
  const pages = new Array(pagesCount).fill(true).map((_, index) => index + 1)

  function changeFilterParam(key: FilterKey, value: string) {
    setSearchParams(changeSearchParams([key, value], false, ['conference', 'city']))
  }

  return (
    <InstitutionsContext.Provider
      value={{
        items: data?.items || [],
        loading: isFetching,

        schooltypeId,
        conferenceId,
        cityId,
        changeFilterParam,

        pages,
        currentPage,
        changePageQuery,

        searchQuery,
        changeSearchQuery,
      }}
    >
      {children}
    </InstitutionsContext.Provider>
  )
}

interface IInstitutionsContextValue {
  items: IInstitution[]
  loading: boolean

  schooltypeId: EntityId
  conferenceId: EntityId
  cityId: EntityId
  changeFilterParam(key: FilterKey, value: string): void

  pages: number[]
  currentPage: number
  changePageQuery(newPage: number): void

  searchQuery: string
  changeSearchQuery(query: string): void
}

type FilterKey = 'conference' | 'city' | 'schooltype'
