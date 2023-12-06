import { useInstitutionsContext } from './Context'
import { Search as SearchComponent } from '@admin/components/Search'

export function Search() {
  const { changeSearchQuery, searchQuery } = useInstitutionsContext()

  return (
    <SearchComponent
      placeholder="Поиск..."
      className="w-full"
      value={searchQuery}
      onChange={changeSearchQuery}
    />
  )
}
