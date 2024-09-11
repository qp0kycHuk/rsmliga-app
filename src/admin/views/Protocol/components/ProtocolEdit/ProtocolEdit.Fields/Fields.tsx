import { Competition } from './Fields.Competition'
import { Conference } from './Fields.Conference'
import { Date } from './Fields.Date'
import { Location } from './Fields.Location'
import { Stage } from './Fields.Stage'
import { Time } from './Fields.Time'
import { STAGE_XML_IDS, useFetchStages } from '@admin/service/stages'
import { getIsXMLId } from '@utils/helpers/getIsXMLId'
import { City } from './City'
import { Tour } from './Tour'
import { Division } from './Division'
import { useProtocolEditContext } from '../ProtocolEdit.Context'

export function Fields() {
  const { item } = useProtocolEditContext()
  const { data: stagesData } = useFetchStages()

  const currentStage = item?.stage_id ? stagesData?.entites[item.stage_id] : null
  const isStage = getIsXMLId(STAGE_XML_IDS, currentStage?.XML_ID || '')

  const showArea = isStage.mun || isStage.school || isStage.qual || isStage.elite // Район / Город
  const showConference = isStage.zon // Конференция
  const showTour = isStage.base // Тур
  const showDivision = isStage.select // Дивизион
  const showNone = !showArea && !showConference && !showTour && !showDivision

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Competition />
      <Stage />
      <div className={showNone ? '' : 'grid sm:grid-cols-2 gap-8'}>
        {showArea && <City />}
        {showConference && <Conference />}
        {showTour && <Tour />}
        {showDivision && <Division />}
        <Location />
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        <Date />
        <Time />
      </div>
    </div>
  )
}
