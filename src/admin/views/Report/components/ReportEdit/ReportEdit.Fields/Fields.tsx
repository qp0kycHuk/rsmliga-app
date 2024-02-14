import { Competition } from './Fields.Competition'
import { Stage } from './Fields.Stage'
import { Area } from './Fields.Area'
import { Season } from './Fields.Season'
import { Location } from './Fields.Location'
import { Date } from './Fields.Date'
import { useFetchStages } from '@admin/service/stages'
import { useReportEditContext } from '../ReportEdit.Context'
import { Conference } from './Fields.Conference'

export function Fields() {
  const { report } = useReportEditContext()
  const { data } = useFetchStages()

  const isZoneStage = data?.entites[report.stage_id || '']?.XML_ID == 'zon'

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="lg:col-span-2">
        <Competition />
      </div>
      <div className="lg:col-span-2">
        <Stage />
      </div>

      {isZoneStage ? <Conference /> : <Area />}

      <Season />

      <Location />

      <Date />
    </div>
  )
}
