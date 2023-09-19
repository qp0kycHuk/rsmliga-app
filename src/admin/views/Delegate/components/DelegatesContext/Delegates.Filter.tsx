import { Search } from './Delegates.Search'
import { Seasons } from './Delegates.Filter.Seasons'
import { Tournaments } from './Delegates.Filter.Tournaments'
import { Stages } from './Delegates.Filter.Stages'

export function Filter({ children }: React.PropsWithChildren) {
  return (
    <div className="flex lg:items-center max-lg:flex-col gap-5 lg:gap-10 mb-10 lg:mb-6 ">
      <div className="flex items-center gap-10">
        <Seasons />
        <Tournaments />
        <Stages />
      </div>
      <div className="flex items-center gap-10 lg:ml-auto">
        <Search />
        {children}
      </div>
    </div>
  )
}
