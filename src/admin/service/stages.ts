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
