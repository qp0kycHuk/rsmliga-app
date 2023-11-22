// import { Search } from './Delegates.Search'
import { Seasons } from './Report.Filter.Seasons'
import { Tournaments } from './Report.Filter.Tournaments'
import { Location } from './Report.Filter.Location'

export function Filter({ children }: React.PropsWithChildren) {
  return (
    <div className="flex lg:items-center max-lg:flex-col gap-5 lg:gap-10 mb-10 lg:mb-6">
      <Seasons />
      <Tournaments />
      <Location />
      <div className="flex md:items-center gap-4 md:gap-10 lg:ml-auto max-md:flex-col">
        {/* <Search /> */}
        {children}
      </div>
    </div>
  )
}
