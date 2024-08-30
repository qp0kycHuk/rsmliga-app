import { createFetchEntitiesService } from './api'

const KEY = 'tours'

export const [fetchTours, useFetchTours] = createFetchEntitiesService<Tour>(
  '/get_fields.php',
  KEY,
  {
    action: 'tours',
  }
)
