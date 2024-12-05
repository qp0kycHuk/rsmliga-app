import { Search } from './Delegates.Search'
import { Seasons } from './Delegates.Filter.Seasons'
import { Tournaments } from './Delegates.Filter.Tournaments'
import { Stages } from './Delegates.Filter.Stages'

export function Filter({ children }: React.PropsWithChildren) {
  return (
    <div className="flex gap-5 mb-10 lg:items-center max-lg:flex-col lg:gap-10 lg:mb-6">
      <div className="flex gap-4 md:items-center md:gap-10 max-md:flex-col ">
        <Seasons />
        <Tournaments />
        <Stages />
      </div>
      <div className="flex gap-4 md:items-center md:gap-10 lg:ml-auto max-md:flex-col">
        <Search />
        {children}
      </div>
    </div>
  )
}
