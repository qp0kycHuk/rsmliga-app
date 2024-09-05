import { STAGE_XML_IDS, useFetchStages } from '@admin/service/stages'
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
import { Judge } from './MatchEdit.Fields/Judge'
import { Status } from './MatchEdit.Fields/Status'
import { getIsXMLId } from '@utils/helpers/getIsXMLId'
import { PHASE_XML_IDS, useFetchPhases } from '@admin/service/phase'
import { Division } from './MatchEdit.Fields/Division'
import { Tour } from './MatchEdit.Fields/Tour'
import { Group } from './MatchEdit.Fields/Group'
import { SemiFinal } from './MatchEdit.Fields/Group.SemiFinal'
import { Final } from './MatchEdit.Fields/Group.Final'
import { Button } from '@features/ui'

export function MatchEditForm() {
  const { item, submit, loading, onCancel } = useMatchEditContext()

  const { data: stagesData } = useFetchStages()
  const { data: phasesData } = useFetchPhases()

  const currentStage = item.stage_id ? stagesData?.entites[item.stage_id] : null
  const currentPhase = item.playoff ? phasesData?.entites[item.playoff] : null

  const isStage = getIsXMLId(STAGE_XML_IDS, currentStage?.XML_ID || '')
  const isPhase = getIsXMLId(PHASE_XML_IDS, currentPhase?.XML_ID || '')

  const showSingleCity = isStage.mun || isStage.school || isStage.qual || isStage.elite
  const showSingleConference = isStage.zon
  const showSeparateCity = isStage.zon || isStage.fin || isStage.base
  const showSeparateConference = isStage.fin || isStage.base
  const showDivisions = isStage.select
  const showTours = isStage.elite

  const isPhaseNull = !isPhase.group && !isPhase.final && !isPhase.semifinal
  const showGroup = isPhase.group || isPhaseNull

  const conf1 =
    (showSeparateConference && item.conf1) || (showSingleConference && item.conference) || undefined
  const conf2 =
    (showSeparateConference && item.conf2) || (showSingleConference && item.conference) || undefined

  const city1 = (showSeparateCity && item.city1) || (showSingleCity && item.city) || undefined
  const city2 = (showSeparateCity && item.city2) || (showSingleCity && item.city) || undefined

  if (!item) return 'loading...'

  return (
    <div>
      <div className="text-2xl font-semibold mb-6">
        {item.id ? 'Редактировать' : 'Добавить'} матч
      </div>

      <form onSubmit={submit} className="flex flex-col gap-4">
        <Competition />
        <Stage />
        {showDivisions && <Division />}
        {showTours && <Tour />}
        {showSingleConference && (
          <Conference clearKeys={['city1', 'city2', 'city', 'team_1', 'team_2']} />
        )}
        {showSingleCity && <City clearKeys={['team_1', 'team_2']} />}

        <Number />
        <Phase />
        <div className={isPhaseNull ? 'pointer-events-none opacity-60' : ''}>
          {showGroup && <Group />}
          {isPhase.semifinal && <SemiFinal />}
          {isPhase.final && <Final />}
        </div>

        {showSeparateConference && (
          <div className="grid grid-cols-2 gap-3">
            <Conference name="conf1" clearKeys={['city1', 'team_1']} />
            <Conference name="conf2" clearKeys={['city2', 'team_2']} />
          </div>
        )}

        {showSeparateCity && (
          <div className="grid grid-cols-2 gap-3">
            <City name="city1" conference={conf1} clearKeys={['team_1']} />
            <City name="city2" conference={conf2} clearKeys={['team_2']} />
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <Team name="team_1" city={city1} />
          <Team name="team_2" city={city2} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Date />
          <Time />
        </div>
        <Judge />
        <Judge name="delegate" label="Делегат" />
        <Judge name="assistant_1" label="Помощник 1" />
        <Judge name="assistant_2" label="Помощник 2" />
        <Location />
        <Status />
        <Video />
        <div className="grid grid-cols-2 gap-3">
          <Button type="submit" disabled={loading}>
            Сохранить
          </Button>
          <Button variant="light" disabled={loading} onClick={onCancel}>
            Отмена
          </Button>
        </div>
      </form>
    </div>
  )
}
