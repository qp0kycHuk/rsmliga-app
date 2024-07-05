import { Area } from './MatchEdit.Fields/Area'
import { Competition } from './MatchEdit.Fields/Competition'
import { Date } from './MatchEdit.Fields/Date'
import { Location } from './MatchEdit.Fields/Location'
import { Number } from './MatchEdit.Fields/Number'
import { Stage } from './MatchEdit.Fields/Stage'
import { Time } from './MatchEdit.Fields/Time'
import { Video } from './MatchEdit.Fields/Video'

export function MatchEditForm() {
  return (
    <div>
      <div className="text-2xl font-semibold mb-6">Добавить матч</div>
      <div className="flex flex-col gap-4">
        <Competition />
        <Stage />
        <Area />
        <Number />
        <div className="grid grid-cols-2 gap-3">
          <Date />
          <Time />
        </div>
        <Location />
        <Video />
      </div>
    </div>
  )
}
