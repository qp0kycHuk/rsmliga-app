import { getIsXMLId, useFetchStages } from '@admin/service/stages'
import { useMatchEditContext } from './MatchEdit.Context'
import { Competition } from './MatchEdit.Fields/Competition'
import { Date } from './MatchEdit.Fields/Date'
import { Location } from './MatchEdit.Fields/Location'
import { Number } from './MatchEdit.Fields/Number'
import { Stage } from './MatchEdit.Fields/Stage'
import { Time } from './MatchEdit.Fields/Time'
import { Video } from './MatchEdit.Fields/Video'
import { City } from './MatchEdit.Fields/City'
import { Conference } from './MatchEdit.Fields/Conference'
import { Phase } from './MatchEdit.Fields/Phase'
import { Team } from './MatchEdit.Fields/Team'

export function MatchEditForm() {
  const { item } = useMatchEditContext()

  const { data: stagesData } = useFetchStages()
  const currentStage = item.stage_id ? stagesData?.entites[item.stage_id] : null

  const isXmlId = getIsXMLId(currentStage?.XML_ID || '')

  const showSingleCity = isXmlId.mun || isXmlId.school || isXmlId.qual || isXmlId.elite
  const showSingleConference = isXmlId.zon
  const showSeparateCity = isXmlId.zon || isXmlId.fin || isXmlId.base
  const showSeparateConference = isXmlId.fin || isXmlId.base

  return (
    <div>
      <div className="text-2xl font-semibold mb-6">Добавить матч </div>

      <div className="flex flex-col gap-4">
        <Competition />
        <Stage />
        {showSingleCity && <City />}
        {showSingleConference && <Conference />}

        <Number />
        <Phase />

        {showSeparateConference && (
          <div className="grid grid-cols-2 gap-3">
            <Conference name="conf1" />
            <Conference name="conf2" />
          </div>
        )}

        {showSeparateCity && (
          <div className="grid grid-cols-2 gap-3">
            <City />
            <City />
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <Team />
          <Team />
        </div>
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
