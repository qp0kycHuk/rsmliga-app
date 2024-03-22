import { Search } from './Context.Search'
import { Conference } from './Context.Filter.Conference'
import { Locations } from './Context.Filter.Locations'
import { SchoolType } from './Context.Filter.SchoolType'

export function Filter({ children }: React.PropsWithChildren) {
  return (
    <>
      <Search />
      <div className="flex lg:items-center max-lg:flex-col gap-5 lg:gap-10 mb-10 lg:mb-6 mt-6">
        <Locations />
        <Conference />
        <SchoolType />
        <div className="flex md:items-center gap-4 md:gap-10 lg:ml-auto max-md:flex-col">
          {children}
        </div>
      </div>
    </>
  )
}
