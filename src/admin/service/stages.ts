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
  zon: 'zon',
  fin: 'fin',
  school: 'school',
  base: 'base',
  qual: 'qual',
  select: 'select',
  elite: 'elite',
}
