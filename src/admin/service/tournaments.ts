import { createFetchEntitiesService } from './api'

const KEY = 'tournaments'

export const [fetchTournaments, useFetchTournaments] = createFetchEntitiesService<ITournament>(
  '/list_filter_blocks.php',
  KEY,
  {
    action: 'turnier',
  }
)
