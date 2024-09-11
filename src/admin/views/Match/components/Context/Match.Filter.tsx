import { Competition } from './Match.Filter.Competition'
import { Stages } from './Match.Filter.Stages'
import { getIsXMLId } from '@utils/helpers/getIsXMLId'
import { STAGE_XML_IDS, useFetchStages } from '@admin/service/stages'
import { useMatchContext } from './Match.Context'
import { City } from './Match.Filter.City'
import { Conference } from './Match.Filter.Conference'
import { Tour } from './Match.Filter.Tour'
import { Division } from './Match.Filter.Division'

export function Filter({ children }: React.PropsWithChildren) {
  const { stageId } = useMatchContext()
  const { data: stagesData } = useFetchStages()

  const currentStage = stageId ? stagesData?.entites[stageId] : null
  const isStage = getIsXMLId(STAGE_XML_IDS, currentStage?.XML_ID || '')

  const showCity = isStage.mun || isStage.school || isStage.qual || isStage.elite // Район / Город
  const showConference = isStage.zon // Конференция
  const showTour = isStage.base // Тур
  const showDivision = isStage.select // Дивизион

  return (
    <div className="flex gap-5 mb-10 lg:items-center max-lg:flex-col lg:gap-10 lg:mb-6 print:hidden">
      <div className="flex gap-4 md:items-center md:gap-10 max-md:flex-col print:grid print:grid-cols-3">
        <Competition />
        <Stages />
        {showCity && <City />}
        {showConference && <Conference />}
        {showTour && <Tour />}
        {showDivision && <Division />}
      </div>
      <div className="flex gap-4 md:items-center md:gap-10 lg:ml-auto max-md:flex-col">
        {children}
      </div>
    </div>
  )
}
