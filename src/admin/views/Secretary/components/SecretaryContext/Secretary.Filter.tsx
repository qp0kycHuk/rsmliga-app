import { Search } from './Secretary.Search'
import { Tournaments } from './Secretary.Filter.Tournaments'
import { Locations } from './Secretary.Filter.Locations'

export function Filter({ children }: React.PropsWithChildren) {
  return (
    <div className="flex lg:items-center max-lg:flex-col gap-5 lg:gap-10 mb-10 lg:mb-6 ">
      <div className="flex items-center gap-10">
        <Tournaments />
        <Locations />
      </div>
      <div className="flex items-center gap-10 lg:ml-auto">
        <Search />
        {children}
      </div>
    </div>
  )
}
