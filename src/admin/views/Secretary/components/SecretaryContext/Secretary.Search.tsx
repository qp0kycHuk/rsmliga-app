import { useSecretariesContext } from './Secretary.Context'
import { Search as SearchComponent } from '@admin/components/Search'

export function Search() {
  const { changeSearchQuery, searchQuery } = useSecretariesContext()

  return (
    <SearchComponent
      placeholder="Поиск по фамилии"
      className="w-64"
      value={searchQuery}
      onChange={changeSearchQuery}
    />
  )
}
