import { createFetchEntitiesService } from './api'

const KEY = 'stages'

export const [fetchStages, useFetchStages] = createFetchEntitiesService<IStage>(
  '/list_filter_blocks.php',
  KEY,
  {
    action: 'stage',
  }
)
