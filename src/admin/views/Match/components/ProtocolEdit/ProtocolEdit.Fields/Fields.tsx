import { Competition } from './Fields.Competition'
import { Conference } from './Fields.Conference'
import { Date } from './Fields.Date'
import { Location } from './Fields.Location'
import { Stage } from './Fields.Stage'
import { Time } from './Fields.Time'

export function Fields() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <Competition />
      <Stage />
      <div className="grid grid-cols-2 gap-8">
        <Conference />
        <Location />
      </div>
      <div className="grid grid-cols-2 gap-8">
        <Date />
        <Time />
      </div>
    </div>
  )
}
