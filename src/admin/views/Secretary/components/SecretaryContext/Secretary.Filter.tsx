import { Search } from './Secretary.Search'
import { Tournaments } from './Secretary.Filter.Tournaments'
import { Locations } from './Secretary.Filter.Locations'

export function Filter({ children }: React.PropsWithChildren) {
  return (
    <div className="flex lg:items-center max-lg:flex-col gap-5 lg:gap-10 mb-10 lg:mb-6 ">
      <Tournaments />
      <Locations />
      <div className="flex md:items-center gap-4 md:gap-10 lg:ml-auto max-md:flex-col">
        <Search />
        {children}
      </div>
    </div>
  )
}
