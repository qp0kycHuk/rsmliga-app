// import { Search } from './Delegates.Search'
import { Seasons } from './Report.Filter.Seasons'
import { Tournaments } from './Report.Filter.Tournaments'
import { Location } from './Report.Filter.Location'

export function Filter({ children }: React.PropsWithChildren) {
  return (
    <div className="flex items-center gap-10 mb-6 ">
      <Seasons />
      <Tournaments />
      <Location />
      {/* <Search /> */}
      {children}
    </div>
  )
}
