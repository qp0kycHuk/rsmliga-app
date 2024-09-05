import { createContext, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSearchQuery } from '@hooks/useSearchQuery'
import { usePagesQuery } from '@hooks/usePagesQuery'
import { changeSearchParams } from '@utils/helpers/changeSearchParams'
import { useFetchSecretaries } from '../../service/api'
import { SECRETARIES_PER_PAGE } from '../../const'

const SecretariesContext = createContext<ISecretariesContextValue>({} as ISecretariesContextValue)

export const useSecretariesContext = () => useContext(SecretariesContext)

export function SecretariesContextProvider({ children }: React.PropsWithChildren) {
  const [searchParams, setSearchParams] = useSearchParams()

  // Filters
  const turnierId = searchParams.get('turnier') || ''
  const locationId = searchParams.get('location') || ''

  // Pagination
  const [currentPage, changePageQuery] = usePagesQuery()

  // Search
  const [searchQuery, changeSearchQuery] = useSearchQuery({
    savedKeys: ['turnier', 'location'],
  })

  // Fetcing
  const { data, isFetching } = useFetchSecretaries({
    page: currentPage,
    itemsPerPage: SECRETARIES_PER_PAGE,
    search: searchQuery,
    turnier: turnierId,
    location: locationId,
  })

  const pagesCount = data?.NavPageCount || 0
  const pages = new Array(pagesCount).fill(true).map((_, index) => index + 1)

  function changeFilterParam(key: FilterKey, value: string) {
    setSearchParams(changeSearchParams([[key, value]], false, ['turnier', 'location']))
  }

  return (
    <SecretariesContext.Provider
      value={{
        items: data?.items || [],
        loading: isFetching,

        turnierId,
        locationId,
        changeFilterParam,

        pages,
        currentPage,
        changePageQuery,

        searchQuery,
        changeSearchQuery,
      }}
    >
      {children}
    </SecretariesContext.Provider>
  )
}

interface ISecretariesContextValue {
  items: ISecretary[]
  loading: boolean

  turnierId: EntityId
  locationId: EntityId
  changeFilterParam(key: FilterKey, value: string): void

  pages: number[]
  currentPage: number
  changePageQuery(newPage: number): void

  searchQuery: string
  changeSearchQuery(query: string): void
}

type FilterKey = 'turnier' | 'location'
