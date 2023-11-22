import { Competition } from './Fields.Competition'
import { Stage } from './Fields.Stage'
import { Area } from './Fields.Area'
import { Season } from './Fields.Season'
import { Location } from './Fields.Location'
import { Date } from './Fields.Date'

export function Fields() {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="lg:col-span-2">
        <Competition />
      </div>
      <div className="lg:col-span-2">
        <Stage />
      </div>

      <Area />

      <Season />

      <Location />

      <Date />
    </div>
  )
}
