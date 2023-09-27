import { createFetchEntitiesService } from './api'

const KEY = 'stages'

export const [fetchStages, useFetchStages] = createFetchEntitiesService<ISchool>(
  '/list_filter_blocks.php',
  KEY,
  {
    action: 'stage',
  }
)
