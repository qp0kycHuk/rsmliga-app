import { createFetchEntitiesService } from './api'

const KEY = 'seasons'

export const [fetchSeasons, useFetchSeasons] = createFetchEntitiesService<ISchool>(
  '/list_filter_blocks.php',
  KEY,
  {
    action: 'sezon',
  }
)
