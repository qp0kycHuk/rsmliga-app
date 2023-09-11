import { Search } from './Delegates.Search'
import { Seasons } from './Delegates.Filter.Seasons'
import { Tournaments } from './Delegates.Filter.Tournaments'
import { Stages } from './Delegates.Filter.Stages'

export function Filter({ children }: React.PropsWithChildren) {
  return (
    <div className="flex items-center gap-10 mb-6 ">
      <Seasons />
      <Tournaments />
      <Stages />
      <Search />
      {children}
    </div>
  )
}
