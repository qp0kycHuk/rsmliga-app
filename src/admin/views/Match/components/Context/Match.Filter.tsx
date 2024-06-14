import { Tournaments } from './Match.Filter.Tournaments'
import { Stages } from './Match.Filter.Stages'

export function Filter({ children }: React.PropsWithChildren) {
  return (
    <div className="flex gap-5 mb-10 lg:items-center max-lg:flex-col lg:gap-10 lg:mb-6 print:mb-0">
      <div className="flex gap-4 md:items-center md:gap-10 max-md:flex-col print:grid print:grid-cols-3">
        <Tournaments />
        <Stages />
      </div>
      <div className="flex gap-4 md:items-center md:gap-10 lg:ml-auto max-md:flex-col">
        {children}
      </div>
    </div>
  )
}
