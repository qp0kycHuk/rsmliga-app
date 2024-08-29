import { createFetchEntitiesService } from './api'

const KEY = 'stages'

export const [fetchStages, useFetchStages] = createFetchEntitiesService<IStage>(
  '/list_filter_blocks.php',
  KEY,
  {
    action: 'stage',
  }
)

export const STAGE_XML_IDS = {
  mun: 'mun',
  school: 'school',
  qual: 'qual',
  elite: 'elite',
  zon: 'zon',
  fin: 'fin',
  base: 'base',
  select: 'select',
}

export function getIsXMLId(id: string) {
  return Object.keys(STAGE_XML_IDS).reduce<Record<keyof typeof STAGE_XML_IDS, boolean>>(
    (acc, current) => {
      const key = current as keyof typeof STAGE_XML_IDS
      acc[key] = id === STAGE_XML_IDS[key]
      return acc
    },
    {} as Record<keyof typeof STAGE_XML_IDS, boolean>
  )
}
