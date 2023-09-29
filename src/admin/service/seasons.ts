import { createFetchEntitiesService } from './api'

const KEY = 'seasons'

export const [fetchSeasons, useFetchSeasons] = createFetchEntitiesService<ISeason>(
  '/list_filter_blocks.php',
  KEY,
  {
    action: 'sezon',
  }
)
